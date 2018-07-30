const db = require('../index.js');

describe('test database', () => {
  it('should have items stored', () => {
    db.getRestInfo('in-n-out', (err, data) => {
      expect(data.length).toEqual(1);
    });
  });
});
