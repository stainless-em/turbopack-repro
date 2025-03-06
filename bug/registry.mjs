export let getDefaultAgent = undefined;
export function setShims(shims) {
    getDefaultAgent = shims.getDefaultAgent;
}
