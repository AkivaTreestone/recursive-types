# Recursive Types
A simple type only library to help solve types that are recursive (objects).

# Types
## FlattenObject
```ts
import { FlattenObject } from "@treestone/recursive-types";

const treeLabels = {
    a: "tree",
    nestedObject: {
        b: "wood",
        c: "leaves"
    }
};

/**
 * Resolves to a union of all the values, recursively.
 *
 * Output Type: "tree" | "wood" | "leaves"
 */
type Options = FlattenObject<typeof treeLabels>;

// valid
const favoritePartOfTree: Options = "wood";

// invalid
const favoritePartOfTree: Options = "hamster";

```
## FindTypeAndReplace
```ts
import { FindTypeAndReplace } from "@treestone/recursive-types";

const treeLabels = {
    a: "tree",
    nestedObject: {
        b: "wood",
        c: "leaves"
    }
};

/**
 * Finds and replaces a type in an object, recursively.
 *
 * Output Type:
 * {
 *     a: "tree",
 *     sub: {
 *         b: "wood",
 *         c: "branches"
 *     }
 * }
 */
type TreeInWinter = FindTypeAndReplace<typeof treeLabels, "leaves", "branches">;

// valid
const treeInWinter: TreeInWinter = {
    a: "tree",
    sub: {
        b: "wood",
        c: "branches"
    }
};

// invalid
const treeInWinter: TreeInWinter = {
    a: "tree",
    sub: {
        b: "wood",
        c: "leaves"
    }
};

```
## AnyFunc
```ts
/**
 * Type matches to any function.
 */
import { AnyFunc } from "@treestone/recursive-types";

// valid
const beanLevel: AnyFunc = () => "crazy beans";

// invalid
const beanLevel: AnyFunc = "no bean";
```
## RecursionLimit
```ts
/**
 * A type alias for types that reach the recursion limit.
 * Its mainly useful if there is a need to handle a type that is too recursive.
 */
import { RecursionLimit } from "@treestone/recursive-types";
```
# Limits
- Recursion is limited to a depth of 10. Deeper recursive types are set to `RecursionLimit`.
