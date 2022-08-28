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
