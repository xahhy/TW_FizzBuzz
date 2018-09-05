function fizz(number) {
    return (number ? number % 3 === 0 : null) ? 'Fizz' : null;
}
function buzz(number) {
    return (number ? number % 5 === 0 : null) ? 'Buzz' : null;
}
function concat(number) {
    let fizzString = fizz(number);
    let buzzString = buzz(number);
    return [fizzString, buzzString].join('');
}
function fizzBuzz(number) {
    return concat(number);
}

module.exports = fizzBuzz;