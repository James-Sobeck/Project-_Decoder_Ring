// Write your tests here!
const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("polybius", () => {
  it(`Keeps spaces when decoding`, () => {
    let actual = polybius("13113311 415113 245145", false);
    let expected = "lana del rey";
    expect(actual).to.equal(expected);
  });
  it(`Capital letters are converted to lower case`, () => {
    let actual = polybius("CAPITAL LeTteRs");
    let expected = "31115342441113 13514444512434";
    expect(actual).to.equal(expected);
  });
  it(`I/J shares the number 42`, () => {
    let actual = polybius("James Lewis Sobeck");
    let expected = "4211235134 1351254234 344321513152";
    expect(actual).to.equal(expected);
  });
  it(`I/J shares the number 42`, () => {
    let actual = polybius("4211235134 1351254234 344321513152", false);
    let expected = "(i/j)ames lew(i/j)s sobeck";
    expect(actual).to.equal(expected);
  });
  it(`Even number of characters when decoding`, () => {
    let actual = polybius("13113311 415113 245145", false);
    let expected = "lana del rey";
    expect(actual).to.equal(expected);
  });
});
