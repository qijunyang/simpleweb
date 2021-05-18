import calculate from "../src/calculate";

describe("calculate", () => {
    it("should test add", () => {
        expect(calculate.add(1, 2)).toEqual(3);
    })
});