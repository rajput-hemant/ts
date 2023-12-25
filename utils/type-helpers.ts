/**
 * Increments the tuple type by adding an additional element of type `any`.
 *
 * @template T - The tuple type to increment.
 * @returns The incremented tuple type.
 *
 * @example
 * type test_0 = Increment<[]>; // [any]
 * type test_1 = Increment<[1, 2, 3]>; // [1, 2, 3, any]
 */
export type Increment<T extends any[]> = [...T, any];

/**
 * Fills an array with a given type `T` for a given count `C`.
 *
 * @template T - The type to fill the array with.
 * @template C - The count of elements to fill the array with.
 * @returns The filled array of type `T` with length `C`.
 *
 * @example
 * type test_0 = FillArray<"🎄", 3>; // ["🎄", "🎄", "🎄"]
 * type test_1 = FillArray<1, 3>; // [1, 1, 1]
 */
export type FillArray<
  T extends string | number,
  C extends number,
  I extends T[] = [],
> = I["length"] extends C ? I : FillArray<T, C, [...I, T]>;
