export let kind = undefined;
export let File = undefined;
export function setShims(shims, options = { auto: false }) {
    kind = shims.kind;
    File = shims.File;
}
