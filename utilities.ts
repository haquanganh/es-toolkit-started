import { invariant } from 'es-toolkit';

// This call will succeed without any errors
invariant(true, 'This should not throw');

// This call will fail and throw an error with the message 'This should throw'
// invariant(false, 'This should throw');

// Example of using invariant with a condition
// invariant(condition, 'Expected condition is false');

// // Ensure that the value is neither null nor undefined
// invariant(
//   value !== null && value !== undefined,
//   'Value should not be null or undefined'
// );

// // Example of using invariant to check if a number is positive
// invariant(number > 0, 'Number must be positive');
