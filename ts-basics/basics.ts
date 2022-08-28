let userName: string = 'Larry';
let hasLoggedIn: boolean = true;

userName += ' Jones';

console.log(userName);

let myNumber: number = 10;

let myRegex: RegExp = /foo/;

const names: string[] = userName.split(' ');

const myValues: Array<number> = [1, 2, 3]

type MyPersonType = {
    first: string,
    last: string,
};

const myPerson: MyPersonType  = {
    first: 'Larry',
    last: 'Jones',
};

// Record is a utility type allowing one to specify types for keys and for values.
const ids: Record<number, string> = {
    10: 'a',
    20: 'b',
};
ids[30] = 'c';

// conditionals not really affected, only variable declarations
if (ids[30] === 'D') {
    console.log('Eureka')
}

for(let i = 0; i < 10; i++) {
    console.log(i);
}

// Inference determines that `i` is of type `number`.
// I do not understand the optional indicator on `i`.
// Perhaps it applies to an empty array.
[1, 2, 3].forEach(i => console.log(i));

// Inference works for objects, too!
[{ first: 'Larry', last: 'Jones' },
    { first: 'Jack', last: 'Herrington' }].forEach(p => console.log(p));

// Similar comments apply to `map`.
// Note that inference correctly determines the result of the call to `map`
const out: number[] = [1, 2, 3].map(i => i + 3);
console.log(out);

// If we change the function supplied to map...
// TypeScript correctly determines the result type.
const outAgain: string[] = [1, 2, 3].map(n => `${n * 10}`)
console.log(outAgain);

// Determines mismatch between expected result type and actual
// Uncomment to see error.
// const stillOut: number[] = [1, 2, 3].map(i => `${i + 7}`);