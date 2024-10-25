import { after, curry, debounce } from 'es-toolkit/function';

const mockFn = () => {
  console.log('called');
};
const afterFn = after(3, mockFn);

// Will not log anything.
afterFn();
// Will not log anything.
afterFn();
// Will log 'called'.
afterFn();

// curry

function sum(a: number, b: number, c: number) {
  return a + b + c;
}

const curriedSum = curry(sum);

// The parameter `a` should be given the value `10`.
const sum10 = curriedSum(10);

// The parameter `b` should be given the value `15`.
const sum25 = sum10(15);

// The parameter `c` should be given the value `5`. The function 'sum' has received all its arguments and will now return a value.
const result = sum25(5);

//debounce

const debouncedFunction = debounce(() => {
  console.log('Function executed');
}, 1000);

// Will log 'Function executed' after 1 second if not called again in that time
debouncedFunction();

// Will not log anything as the previous call is canceled
debouncedFunction.cancel();
