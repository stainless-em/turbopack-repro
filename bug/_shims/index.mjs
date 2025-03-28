import * as shims from "./registry.mjs";
if (!shims.kind)
  shims.setShims({
    kind: "web",
    File,
  });
export * from "./registry.mjs";
