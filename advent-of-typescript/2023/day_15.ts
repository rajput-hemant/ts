import { Equal, Expect } from "type-testing";

/* -----------------------------------------------------------------------------------------------
 * Code Here
 * -----------------------------------------------------------------------------------------------*/

type BoxToys<S, N, Arr extends S[] = []> =
  // Arr["length"] extends N // this doesn't work w/ union types
  N extends Arr["length"] // works
    ? Arr
    : BoxToys<S, N, [...Arr, S]>;

/* -----------------------------------------------------------------------------------------------
 * Do Not Edit Below This Line
 * -----------------------------------------------------------------------------------------------*/

type test_doll_actual = BoxToys<"doll", 1>;
//   ^?
type test_doll_expected = ["doll"];
type test_doll = Expect<Equal<test_doll_expected, test_doll_actual>>;

type test_nutcracker_actual = BoxToys<"nutcracker", 3 | 4>;
//   ^?
type test_nutcracker_expected =
  | ["nutcracker", "nutcracker", "nutcracker"]
  | ["nutcracker", "nutcracker", "nutcracker", "nutcracker"];
type test_nutcracker = Expect<
  Equal<test_nutcracker_expected, test_nutcracker_actual>
>;
