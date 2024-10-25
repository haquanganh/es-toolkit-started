"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var es_toolkit_1 = require("es-toolkit");
// Test the isNotNil function
var values = [null, undefined, 'Hello', 42];
values.forEach(function (value) {
    console.log("Is ".concat(value, " not nil?"), (0, es_toolkit_1.isNotNil)(value));
});
// Test the debounce function
var sayHello = function () { return console.log('Hello World!'); };
var debouncedSayHello = (0, es_toolkit_1.debounce)(sayHello, 1000);
// Call the debounced function multiple times
debouncedSayHello();
debouncedSayHello();
debouncedSayHello(); // Only this call will actually execute after 1 second
