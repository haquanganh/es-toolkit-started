import { cloneDeep } from 'es-toolkit/object';

const original = { a: { b: { c: 'deep' } }, d: [1, 2, { e: 'nested' }] };
const cloned = cloneDeep(original);

console.log(cloned);
console.log(original !== cloned);

// const nestedObject = {
//   a: {
//     b: {
//       c: 1,
//     },
//   },
//   d: [2, 3],
// };

// const flattened = flattenObject(nestedObject);
// console.log(flattened);

// const obj = { a: 1, b: 2 };
// const result = mapValues(obj, value => value * 2);
// console.log(result); // { a: 2, b: 4 }

// const obj = { a: 1, b: 'omit', c: 3 };
// const shouldOmit = (value, key) => typeof value === 'string';
// const result = omitBy(obj, shouldOmit);
// // result will be { a: 1, c: 3 }
