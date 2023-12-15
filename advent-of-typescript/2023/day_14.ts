import { Equal, Expect } from "type-testing";

/* -----------------------------------------------------------------------------------------------
 * Code here
 * -----------------------------------------------------------------------------------------------*/

type DecipherNaughtyList<T> = T extends `${infer S}/${infer R}` // split on the first slash
  ? S | DecipherNaughtyList<R> // if there is a slash, union the first part with recursively calling the rest
  : T; // otherwise, return the string

/* -----------------------------------------------------------------------------------------------
 * Do Not Edit Below This Line
 * -----------------------------------------------------------------------------------------------*/

type test_0_actual = DecipherNaughtyList<"timmy/jimmy">;
//   ^?
type test_0_expected = "jimmy" | "timmy";
type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;

type test_1_actual = DecipherNaughtyList<"elliot">;
//   ^?
type test_1_expected = "elliot";
type test_1 = Expect<Equal<test_1_expected, test_1_actual>>;

type test_2_actual = DecipherNaughtyList<"melkey/prime/theo/trash">;
//   ^?
type test_2_expected = "melkey" | "prime" | "theo" | "trash";
type test_2 = Expect<Equal<test_2_expected, test_2_actual>>;
