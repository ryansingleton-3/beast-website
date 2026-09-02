#!/usr/bin/env python3
"""
Build the B.E.A.S.T. Home page on Webflow from the NN-*.html/.css pairs in this folder, via the
remote Webflow MCP server (OAuth token from ~/.beast/webflow/mcp_oauth.py).

  python3 build.py                 # insert every section, in order, appended to the page body
  python3 build.py 12 13           # only the sections with these number prefixes
  python3 build.py --root          # just print the page root/body element id

Results (element ids per section) are appended to build-log.json so a failed run can resume.
"""
import glob
import json
import pathlib
import sys

sys.path.insert(0, str(pathlib.Path.home() / ".beast" / "webflow"))
from mcp_client import MCP  # noqa: E402

HERE = pathlib.Path(__file__).resolve().parent
SITE = "6a988ff4622d7065ea2aa7fd"
PAGE = "6a988ff7622d7065ea2aa86c"
LOG = HERE / "build-log.json"
CTX = "Inserts one pre-authored section of the B.E.A.S.T. one-page site into the Home page body as part of the Shopify-to-Webflow rebuild."


def body_id(m):
    r = m.call("data_element_tool", {"siteId": SITE, "pageId": PAGE,
                                     "actions": [{"label": "root", "get_all_elements": {"depth": 1}}],
                                     "context": "Finds the Home page body element id to use as the parent for the section inserts."})
    d = json.loads(r)
    # walk to find the Body element
    def walk(o):
        if isinstance(o, dict):
            if str(o.get("type", "")).lower() == "body" and "id" in o:
                return o["id"]
            for v in o.values():
                f = walk(v)
                if f:
                    return f
        if isinstance(o, list):
            for v in o:
                f = walk(v)
                if f:
                    return f
    bid = walk(d)
    if not bid:
        print(r[:3000])
        sys.exit("could not find Body element id in get_all_elements output")
    return bid


def main():
    m = MCP()
    if "--root" in sys.argv:
        print(json.dumps(body_id(m)))
        return
    want = [a for a in sys.argv[1:] if not a.startswith("--")]
    files = sorted(glob.glob(str(HERE / "[0-9][0-9]-*.html")))
    if want:
        files = [f for f in files if pathlib.Path(f).name[:2] in want]
    base_css = (HERE / "00-base.css").read_text()
    log = json.loads(LOG.read_text()) if LOG.exists() else {}
    root = body_id(m)
    print("body:", root)
    for i, f in enumerate(files):
        name = pathlib.Path(f).stem
        html = pathlib.Path(f).read_text()
        css = pathlib.Path(f).with_suffix(".css").read_text()
        if name.startswith("01-") and not want:
            css = base_css + "\n" + css
        elif name.startswith("01-"):
            css = base_css + "\n" + css
        action = {"build_label": name, "parent_element_id": root, "creation_position": "append",
                  "html": html, "css": css, "return_element_info": False}
        try:
            r = m.call("data_whtml_builder", {"siteId": SITE, "pageId": PAGE, "actions": [action], "context": CTX}, timeout=600)
        except Exception as e:
            print(f"✗ {name}: {e}")
            LOG.write_text(json.dumps(log, indent=1))
            sys.exit(1)
        log[name] = r[:4000]
        LOG.write_text(json.dumps(log, indent=1))
        print(f"✓ {name}: {r[:300].replace(chr(10),' ')}")
    print("done")


if __name__ == "__main__":
    main()
