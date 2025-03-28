import { File } from "./_shims/index.mjs";

export { File } from "./_shims/index.mjs";
// ^^ commenting out this line makes the error go away
//    this export is never used

export default () => {
    new File([], '');
}
