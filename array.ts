import { flatMap, flatMapDeep, flatten, keyBy } from 'es-toolkit';

// const array = [1, 2, 3];

// const result1 = flatMap(array, (item) => [item, item], 1);
// // Return [1, 1, 2, 2, 3, 3]

// const result2 = flatMap(array, (item) => [[item, item]], 2);
// // Return [1, 1, 2, 2, 3, 3]

// const result3 = flatMap(array, (item) => [[[item, item]]], 3);

// //Flat deep

// const array = [1, 2, 3];

// const result1 = flatMapDeep(array, (item) => [item, item]);
// // Return [1, 1, 2, 2, 3, 3]

// const result2 = flatMapDeep(array, (item) => [[item, item]]);
// // Return [1, 1, 2, 2, 3, 3]

// const result3 = flatMapDeep(array, (item) => [[[item, item]]]);
// // Return [1, 1, 2, 2, 3, 3]

// // flatten
// const array = [1, [2, 3], [4, [5, 6]]];

// const result1 = flatten(array);
// // Return [1, 2, 3, 4, [5, 6]]

// const result2 = flatten(array, 1);
// // Return [1, 2, 3, 4, [5, 6]]

// const result3 = flatten(array, 2);
// // Return [1, 2, 3, 4, 5, 6]

const array = [
  { category: 'fruit', name: 'apple' },
  { category: 'fruit', name: 'banana' },
  { category: 'vegetable', name: 'carrot' },
];
const result = keyBy(array, (item) => item.category);
// result will be:
// {
//   fruit: { category: 'fruit', name: 'banana' },
//   vegetable: { category: 'vegetable', name: 'carrot' }
// }
