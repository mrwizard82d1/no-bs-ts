import { introduceMyself } from '../src/index'

describe("introduceMyself", () => {
    it("should introduce me", () => {
        expect(introduceMyself("L", "J")).toEqual("Hello, L J")
    })
})