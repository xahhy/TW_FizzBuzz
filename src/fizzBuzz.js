function fizz(number) {
    return (number ? number % 3 === 0 : null) ? 'Fizz' : null;
}

function concat(number) {
    let fizzString = fizz(number);
    if(fizzString)return fizzString;
}
function fizzBuzz(number) {
    return concat(number);
}

module.exports = fizzBuzz;