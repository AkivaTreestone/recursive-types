/**
 * Create a type alias if recursion depth limit is reached.
 * Use this if you want to check if your type is too recursive.
 */
export type RecursionLimit = unknown;

/**
 * Target any function
 */
export type AnyFunc = (...args: any) => any;
