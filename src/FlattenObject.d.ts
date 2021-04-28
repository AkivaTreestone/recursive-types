import { RecursionLimit, AnyFunc } from "./CommonTypes";

/**
 * What does this do?
 * It recursively goes through an object and creates a union of all the values.
 *
 * Your input type:
 * {
 *     a: "foo",
 *     b: "bar",
 *     sub: {
 *         c: "baz"
 *     }
 * }
 *
 * The output type:
 * "foo" | "bar" | "baz"
 */
export type FlattenObject<TSource> = __Level0<TSource, AnyFunc>;

type __Level9<TSource, TObjectFilter> = TSource extends object
	? TSource extends TObjectFilter
		? TSource
		: RecursionLimit
	: TSource;
type __Level8<TSource, TObjectFilter> = TSource extends object
	? TSource extends TObjectFilter
		? TSource
		: __Level9<TSource[keyof TSource], TObjectFilter>
	: TSource;
type __Level7<TSource, TObjectFilter> = TSource extends object
	? TSource extends TObjectFilter
		? TSource
		: __Level8<TSource[keyof TSource], TObjectFilter>
	: TSource;
type __Level6<TSource, TObjectFilter> = TSource extends object
	? TSource extends TObjectFilter
		? TSource
		: __Level7<TSource[keyof TSource], TObjectFilter>
	: TSource;
type __Level5<TSource, TObjectFilter> = TSource extends object
	? TSource extends TObjectFilter
		? TSource
		: __Level6<TSource[keyof TSource], TObjectFilter>
	: TSource;
type __Level4<TSource, TObjectFilter> = TSource extends object
	? TSource extends TObjectFilter
		? TSource
		: __Level5<TSource[keyof TSource], TObjectFilter>
	: TSource;
type __Level3<TSource, TObjectFilter> = TSource extends object
	? TSource extends TObjectFilter
		? TSource
		: __Level4<TSource[keyof TSource], TObjectFilter>
	: TSource;
type __Level2<TSource, TObjectFilter> = TSource extends object
	? TSource extends TObjectFilter
		? TSource
		: __Level3<TSource[keyof TSource], TObjectFilter>
	: TSource;
type __Level1<TSource, TObjectFilter> = TSource extends object
	? TSource extends TObjectFilter
		? TSource
		: __Level2<TSource[keyof TSource], TObjectFilter>
	: TSource;
type __Level0<TSource, TObjectFilter> = TSource extends object
	? TSource extends TObjectFilter
		? TSource
		: __Level1<TSource[keyof TSource], TObjectFilter>
	: TSource;
