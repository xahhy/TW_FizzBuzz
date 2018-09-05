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
    let fizzString = fizz(number);
    let buzzString = buzz(number);
    let whizzString = whizz(number);
    return [fizzString, buzzString, whizzString].join('');
}
function fizzBuzz(number) {
    return concat(number);
}

module.exports = fizzBuzz;