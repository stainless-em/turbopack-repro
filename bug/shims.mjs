import * as shims from './registry.mjs';
if (!shims.getDefaultAgent) shims.setShims({
    getDefaultAgent: (url) => undefined
});
export * from './registry.mjs';
