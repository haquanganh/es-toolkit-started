import { clamp, inRange, sumBy } from 'es-toolkit/math';

// const result1 = clamp(10, 5); // result1 will be 5, as 10 is clamped to the bound 5
// const result2 = clamp(10, 5, 15); // result2 will be 10, as it is within the bounds 5 and 15
// const result3 = clamp(2, 5, 15); // result3 will be 5, as 2 is clamped to the lower bound 5
// const result4 = clamp(20, 5, 15); // result4 will be 15, as 20 is clamped to the upper bound 15

// in range
// const result1 = inRange(3, 5); // result1 will be true.
// const result2 = inRange(1, 2, 5); // result2 will be false.
// const result3 = inRange(1, 5, 2); // If the minimum is greater or equal than the maximum, an error is thrown.

//sum by
sumBy([{ a: 1 }, { a: 2 }, { a: 3 }], (x) => x.a); // Returns: 6
// sumBy([], (x) => x.a); // Returns: 0
