import { RecursionLimit } from "./CommonTypes";

/**
 * What does this do?
 * It recursively goes through an object and replaces any matching value.
 *
 * input type:
 * {
 *     a: "foo",
 *     b: "bar",
 *     sub: {
 *         c: "baz"
 *     }
 * }
 *
 * target type:
 * "baz"
 *
 * replace type:
 * "bee"
 *
 * The output type:
 * {
 *     a: "foo",
 *     b: "bar",
 *     sub: {
 *         c: "bee"
 *     }
 * }
 */
export type FindTypeAndReplace<
	TTarget extends object,
	TTargetType,
	TReplace
> = __Level0<TTarget, TTargetType, TReplace>;

type __Level9<TTarget, TTargetType, TReplace> = {
	[P in keyof TTarget]: TTarget[P] extends TTargetType
		? TReplace
		: RecursionLimit;
};

type __Level8<TTarget, TTargetType, TReplace> = {
	[P in keyof TTarget]: TTarget[P] extends TTargetType
		? TReplace
		: __Level9<TTarget[P], TTargetType, TReplace>;
};

type __Level7<TTarget, TTargetType, TReplace> = {
	[P in keyof TTarget]: TTarget[P] extends TTargetType
		? TReplace
		: __Level8<TTarget[P], TTargetType, TReplace>;
};

type __Level6<TTarget, TTargetType, TReplace> = {
	[P in keyof TTarget]: TTarget[P] extends TTargetType
		? TReplace
		: __Level7<TTarget[P], TTargetType, TReplace>;
};

type __Level5<TTarget, TTargetType, TReplace> = {
	[P in keyof TTarget]: TTarget[P] extends TTargetType
		? TReplace
		: __Level6<TTarget[P], TTargetType, TReplace>;
};

type __Level4<TTarget, TTargetType, TReplace> = {
	[P in keyof TTarget]: TTarget[P] extends TTargetType
		? TReplace
		: __Level5<TTarget[P], TTargetType, TReplace>;
};

type __Level3<TTarget, TTargetType, TReplace> = {
	[P in keyof TTarget]: TTarget[P] extends TTargetType
		? TReplace
		: __Level4<TTarget[P], TTargetType, TReplace>;
};

type __Level2<TTarget, TTargetType, TReplace> = {
	[P in keyof TTarget]: TTarget[P] extends TTargetType
		? TReplace
		: __Level3<TTarget[P], TTargetType, TReplace>;
};

type __Level1<TTarget, TTargetType, TReplace> = {
	[P in keyof TTarget]: TTarget[P] extends TTargetType
		? TReplace
		: __Level2<TTarget[P], TTargetType, TReplace>;
};

type __Level0<TTarget, TTargetType, TReplace> = {
	[P in keyof TTarget]: TTarget[P] extends TTargetType
		? TReplace
		: __Level1<TTarget[P], TTargetType, TReplace>;
};
