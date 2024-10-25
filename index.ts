import { isNotNil, debounce } from 'es-toolkit';

// Test the isNotNil function
const values = [null, undefined, 'Hello', 42];
values.forEach((value) => {
  console.log(`Is ${value} not nil?`, isNotNil(value));
});

// Test the debounce function
const sayHello = () => console.log('Hello World!');
const debouncedSayHello = debounce(sayHello, 1000);

// Call the debounced function multiple times
debouncedSayHello();
debouncedSayHello();
debouncedSayHello(); // Only this call will actually execute after 1 second
