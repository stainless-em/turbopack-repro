# weird turbopack module init issue

when you run `yarn dev` (or `yarn next --turbo`) and visit the site you will get a `TypeError: {imported module [project]/bug/shims/registry.mjs [ssr] (ecmascript)}.File is not a constructor` error.

if you open uploads.mjs and comment out the unused `File` reexport, the initializers are correctly run and there is no error. either way if you run `yarn next` with no `--turbo` there is also no error.
