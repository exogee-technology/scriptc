// Exports whose names start with two underscores link like any other: the
// checker keys them as `___x` in a module's export table, and Node's ESM
// linker finds them by their own spelling. Covers direct named imports,
// aliased `export { } from` re-exports, `export *`, three underscores,
// classes, functions, and live `let` bindings.
import { __x as plain, ___triple, __Box, __count, __bump } from "./dep.ts";
import { __x, __g, __s } from "./mid.ts";

console.log(__x, plain, ___triple, __g(), __s);
console.log(new __Box(5).value);
console.log(__count);
__bump();
__bump();
console.log(__count);
