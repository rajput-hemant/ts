import { Equal, Expect } from "type-testing";

import { FillArray, Increment } from "@/utils/type-helpers";

/* -----------------------------------------------------------------------------------------------
 * Code here
 * -----------------------------------------------------------------------------------------------*/

type Present = ["🛹", "🚲", "🛴", "🏄"];

type Rebuild<T, C extends any[] = [], R extends Present[] = []> = T extends [
  infer First,
  ...infer Rest,
]
  ? First extends number
    ? [
        ...FillArray<Present[C["length"]], First>,
        ...Rebuild<Rest, C["length"] extends 3 ? [] : Increment<C>>,
      ]
    : never
  : R;

/* Solution 2 (More Generic) */

// type Present = ["🛹", "🚲", "🛴", "🏄", "🛹", "🚲", "🛴", "🏄"];

// type Rebuild<T, C extends any[] = [], R extends Present[] = []> = T extends [
//   infer First,
//   ...infer Rest,
// ]
//   ? First extends number
//     ? [
//         ...FillArray<Present[C["length"]], First>,
//         ...Rebuild<Rest, Increment<C>>,
//       ]
//     : never
//   : R;

/* -----------------------------------------------------------------------------------------------
 * Do not edit below this line
 * -----------------------------------------------------------------------------------------------*/

type test_0_actual = Rebuild<[2, 1, 3, 3, 1, 1, 2]>;
//   ^?
type test_0_expected =  [
  '🛹', '🛹',
	'🚲',
	'🛴', '🛴', '🛴',
	'🏄', '🏄', '🏄',
	'🛹',
	'🚲',
	'🛴', '🛴',
]; // prettier-ignore

type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;

type test_1_actual = Rebuild<[3, 3, 2, 1, 2, 1, 2]>;
//   ^?
type test_1_expected = [
	'🛹', '🛹', '🛹',
	'🚲', '🚲', '🚲',
	'🛴', '🛴',
	'🏄',
	'🛹', '🛹',
	'🚲',
	'🛴', '🛴'
]; // prettier-ignore

type test_1 = Expect<Equal<test_1_expected, test_1_actual>>;

type test_2_actual = Rebuild<[2, 3, 3, 5, 1, 1, 2]>;
//   ^?
type test_2_expected = [
	'🛹', '🛹',
	'🚲', '🚲', '🚲',
	'🛴', '🛴', '🛴',
	'🏄', '🏄', '🏄', '🏄', '🏄',
	'🛹',
	'🚲',
	'🛴', '🛴',
]; // prettier-ignore

type test_2 = Expect<Equal<test_2_expected, test_2_actual>>;
