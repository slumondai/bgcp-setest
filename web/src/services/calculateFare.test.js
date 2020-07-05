import calculateFare from './calculateFare';

describe('calculateFare', () => {
  describe('without additional hour cost', () => {
    test('without distance, only base cost', ()=> {
      const distance = 0;
      const startTime = '2020-01-01T13:00:00.000Z';
      const duration = 1800;

      const fare = calculateFare(distance, startTime, duration);

      expect(fare).toBe(1);
    });
    test('with integer distance', ()=> {
      const distance = 2;
      const startTime = '2020-01-01T13:00:00.000Z';
      const duration = 1800;

      const fare = calculateFare(distance, startTime, duration);

      expect(fare).toBe(6);
    });
    test('with decimal distance', ()=> {
      const distance = 2.3;
      const startTime = '2020-01-01T13:00:00.000Z';
      const duration = 1800;

      const fare = calculateFare(distance, startTime, duration);

      expect(fare).toBe(7);
    });
  });
  describe('with additional hour cost', () => {
    // not enough data
  });
});
