const fizzBuzz = require('../src/fizzBuzz');

describe('Fizz Buzz Whizz', function () {
    it('should Fizz when number is divided by 3', function () {
      expect(fizzBuzz(3)).toBe('Fizz');
    });

    it('should Buzz when number is divided by 5', function () {
        expect(fizzBuzz(5)).toBe('Buzz');
    });
});