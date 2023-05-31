import { borgName } from "../src/index"

describe("borgName", () => {
    it("should give me a Borg name", () => {
        const pattern = /^Your Borg name is (\d+) of (\d+)$/
        const myBorgName = borgName()
        expect(myBorgName).toMatch(pattern)
        const actualMatchResult = myBorgName.match(pattern)
        if (actualMatchResult) {
            const [_, memberNumber, membersCount ] = actualMatchResult
            expect(parseInt(memberNumber) <= parseInt(membersCount)).toBeTruthy()
        }
    })
})
