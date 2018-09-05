const fizzBuzz = require('../src/fizzBuzz');

describe('Fizz Buzz Whizz', function () {
    describe('When saying is simple', function () {
        it('should Fizz when number is divided by 3', function () {
            expect(fizzBuzz(3)).toBe('Fizz');
        });

        it('should Buzz when number is divided by 5', function () {
            expect(fizzBuzz(5)).toBe('Buzz');
        });

        it('should Whizz when number is divided by 7', function () {
            expect(fizzBuzz(7)).toBe('Whizz');
        });

    });
    describe('When saying is multiple', function () {
        it('should FizzBuzz when number is divided by 3 and 5 and not 7', function () {
            expect(fizzBuzz(15)).toBe('FizzBuzz');
        });
        it('should FizzWhizz when number is divided by 3 and 7 and not 5', function () {
            expect(fizzBuzz(21)).toBe('FizzWhizz');
        });
        it('should BuzzFizz when number si divided by 5 and 7 and not 3', function () {
            expect(fizzBuzz(35)).toBe('BuzzWhizz');
        });
        it('should FizzBuzzWhizz when number', function () {

        });
    });

    describe('When do not need say', function () {
        it('should return number when number is not match', function () {
            expect(fizzBuzz(11)).toBe(11);
        });
    });
});