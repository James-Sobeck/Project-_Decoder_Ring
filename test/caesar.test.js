// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it('Should return false if invalid shift', () => {
    const actual = caesar("Thinkful");
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it('if symbol then return the same symbol', () => {
    const actual = caesar("✦✦✦✦!!!✦✦✦✦", -7);
    const expected = "✦✦✦✦!!!✦✦✦✦";
    expect(actual).to.equal(expected);
  });
  it('Should wrap around so z+3=c', () => {
    const actual = caesar("ZzZ", 3);
    const expected = "ccc";
    expect(actual).to.equal(expected);
  });
  it('If decoding, symbols should stay the same', () => {
    const actual = caesar("✦✦✦✦!!!✦✦✦✦", -7, false);
    const expected = "✦✦✦✦!!!✦✦✦✦";
    expect(actual).to.equal(expected);
  });
  it('ignores capital letters',()=>{
      const actual = caesar("Welcome World", 8);
      const expected = "emtkwum ewztl";
      expect(actual).to.equal(expected);
  })
});
