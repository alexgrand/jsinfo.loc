const assert = require('assert');

// eslint-disable-next-line no-undef
describe('Array', () => {
  // eslint-disable-next-line no-undef
  describe('#indexOf()', () => {
    // eslint-disable-next-line no-undef
    it('should return -1 when the value is not present', () => {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});
describe('Math', () => {
  it('should test if 3 * 3 = 9', () => {
    assert.equal(9, 3 * 3);
  });
  it ('shoud test of (3 - 4) * 8 = -8', () => {
    assert.equal(-8, (3 - 4) * 8);
  });
});
