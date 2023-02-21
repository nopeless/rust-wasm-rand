import { parse } from "rust-wasm-rand"

describe('Main', function () {
    it('should parse 1', function () {
        const res = parse(`1`);
        expect(res).to.equal(1);
    });
    it('should throw error for non numeric', function () {
        expect(() => parse(`a`)).to.throw();
    });
});
