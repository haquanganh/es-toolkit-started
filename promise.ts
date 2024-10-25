import { delay, timeout, withTimeout } from 'es-toolkit/promise';

async function foo() {
  console.log('Start');
  await delay(1000); // Delays execution for 1 second
  console.log('End');
}

foo();

// try {
//   await timeout(1000); // Timeout exception after 1 second
// } catch (error) {
//   console.error(error); // Will log 'The operation was timed out'
// }

// async function fetchData() {
//     const response = await fetch('https://example.com/data');
//     return response.json();
//   }

//   try {
//     const data = await withTimeout(fetchData, 1000);
//     console.log(data); // Logs the fetched data if `fetchData` is resolved within 1 second.
//   } catch (error) {
//     console.error(error); // Will log 'TimeoutError' if `fetchData` is not resolved within 1 second.
//   }
