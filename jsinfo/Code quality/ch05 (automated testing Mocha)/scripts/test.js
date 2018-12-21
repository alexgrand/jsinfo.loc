/* eslint-disable func-names */
/* eslint-disable no-undef */
describe('pow', () => {
  // it('raises to n-th power', () => {
  //   assert.equal(pow(2, 3), 8);
  // });

  // it('3 raised to power 3 is 27', () => {
  //   assert.equal(pow(3, 3), 27);
  // });

  describe('raises x to power 3', () => {
    const makeTestPow = function (x) {
      const expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, () => {
        assert.equal(pow(x, 3), expected);
      });
    };

    for (let x = 1; x <= 5; x += 1) {
      makeTestPow(x);
    }
  });

  describe('negative and non-integer n is NaN', () => {
    it('for negative n the result is NaN', () => {
      assert.isNaN(pow(2, -1));
    });

    it('for non-integer n the result is NaN', () => {
      assert.isNaN(pow(2, 1.5));
    });
  });
});
