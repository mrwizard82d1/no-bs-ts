export const introduceMyself = (first: string, last: string) =>
    `Hello, ${first} $last`

export const borgName = (): string => {
    // Not certain that all these `+ 1` expressions are needed,
    // but I'm not going to investigate. :)
    const members = Math.round(5 + (Math.random() * 5)) + 1
    const member = Math.floor(Math.random() * members) + 1

    return `You Borg name is ${member} of ${members}`
}