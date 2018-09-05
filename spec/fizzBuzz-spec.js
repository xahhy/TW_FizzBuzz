const fizzBuzz = require('../src/fizzBuzz');

describe('Fizz Buzz Whizz', function () {
    it('should Fizz when number is divided by 3', function () {
      expect(fizzBuzz(3)).toBe('Fizz');
    });
});