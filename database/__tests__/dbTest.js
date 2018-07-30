// const jest = require('jest');
const db = require('../index.js');

describe('test database', () => {
  test('should return all data from database', (done) => {
    const callback = (err, data) => {
      console.log(data.length);
      expect(data.length).toBe(100);
      done();
    };
    db.getRestInfo('get all data', callback);
  });
  test('should return a specific data point', (done) => {
    const callback = (err, data) => {
      expect(data.id).toBe(8);
      done();
    };
    db.getRestInfo('in-n-out', callback);
  });
});
