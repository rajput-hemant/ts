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
