function fizz(number) {
    return (number ? number % 3 === 0 : null) ? 'Fizz' : null;
}

function buzz(number) {
    return (number ? number % 5 === 0 : null) ? 'Buzz' : null;
}

function whizz(number) {
    return (number ? number % 7 === 0 : null) ? 'Whizz' : null;
}

function concat(number) {
    return [fizz(number), buzz(number), whizz(number)].join('');
}

function fizzBuzz(number) {
    return concat(number) ? concat(number) : number;
}

module.exports = fizzBuzz;