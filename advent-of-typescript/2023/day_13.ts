import { Equal, Expect } from "type-testing";

import { Increment } from "@/utils/type-helpers";

/* -----------------------------------------------------------------------------------------------
 * Code Here
 * -----------------------------------------------------------------------------------------------*/

type DayCounter<
  S extends number,
  E extends number,
  I extends any[] = [any],
> = S extends E
  ? E // if start is equal to end, return end
  : S | DayCounter<Increment<I>["length"], E, Increment<I>>;
// otherwise, union start with the result of incrementing start by 1, and recurse

/* -----------------------------------------------------------------------------------------------
 * Do Not Edit Below This Line
 * -----------------------------------------------------------------------------------------------*/

type TwelveDaysOfChristmas = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type test_0_actual = DayCounter<1, 12>;
//   ^?
type test_0_expected = TwelveDaysOfChristmas;
type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;

type DaysUntilChristmas =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25;
type test_1_actual = DayCounter<1, 25>;
//   ^?
type test_1_expected = DaysUntilChristmas;
type test_1 = Expect<Equal<test_1_expected, test_1_actual>>;
