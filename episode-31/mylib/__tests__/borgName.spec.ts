import { borgName } from "../src/index"

describe("borgName", () => {
    it("should give me a Borg name", () => {
        const pattern = /^Your Borg name is (\d+) of (\d+)$/g
        const myBorgName = borgName()
        expect(myBorgName).toMatch(pattern)
        const [ [_, memberNumber, membersCount ] ] = [...myBorgName.matchAll(pattern)]
        expect(parseInt(memberNumber) <= parseInt(membersCount))
    })
})
