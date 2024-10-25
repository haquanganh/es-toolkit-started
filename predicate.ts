import { isJSONValue, isNotNil, isPrimitive } from 'es-toolkit/predicate';

// Here the type of `arr` is (number | undefined)[]
const arr = [1, undefined, 3];
// Here the type of `result` is number[]
const result = arr.filter(isNotNil);
// result will be [1, 3]

// console.log(isJSONValue(null)); // true
// console.log(isJSONValue({ key: 'value' })); // true
// console.log(isJSONValue([1, 2, 3])); // true
// console.log(isJSONValue('Hello')); // true
// console.log(isJSONValue(42)); // true
// console.log(isJSONValue(true)); // true
// console.log(isJSONValue(undefined)); // false
// console.log(isJSONValue(() => {})); // false

// isPrimitive(null); // true
// isPrimitive(undefined); // true
// isPrimitive('123'); // true
// isPrimitive(false); // true
// isPrimitive(true); // true
// isPrimitive(Symbol('a')); // true
// isPrimitive(123n); // true
// isPrimitive({}); // false
// isPrimitive(new Date()); // false
// isPrimitive(new Map()); // false
// isPrimitive(new Set()); // false
// isPrimitive([1, 2, 3]); // false

// // Here the type of `arr` is (number | undefined)[]
// const arr = [1, undefined, 3];
// // Here the type of `result` is number[]
// const result = arr.filter(isNotNil);
// // result will be [1, 3]
