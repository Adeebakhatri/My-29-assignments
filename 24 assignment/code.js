//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//Tests for equality and inequality with strings:
console.log('Equality test with string:', 'Apple' == 'Apple');
console.log('InEquality test with string:', 'Apple' != 'Orange');
//Tests using the lower case function:
console.log('Lower Case Test:', 'Hello!'.toLowerCase() == 'hello!');
console.log('Lower Case Test:', 'Hello!'.toLowerCase() == 'HELLO!');
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:
console.log('Equality Numerical Test:', '15' == '15');
console.log('InEquality Numerical Test:', '15' != '5');
console.log('Greater than Test', 10 > 5);
console.log('Greater than Test', 10 > 15);
console.log('Less than Test:', 10 < 15);
console.log('Less than Test:', 10 < 5);
console.log('Greater than or Equal to Test:', 15 >= 10);
console.log('Less than or Equal to Test:', 15 <= 15);
//Tests using "and" and "or" operators:
console.log('and operator Test:', 15 == 15 && 15 > 5);
console.log('or operator Test:', 15 == 15 || 15 < 25);
// Test whether an item is in a array:
var fruits = ['banana', 'apple', 'grapes'];
console.log('Test of "banana" in an Array:', fruits.includes('banana'));
console.log('Test of "apple": in an Array', fruits.includes('apple'));
console.log('Test of "grapes": in an Array', fruits.includes('grapes'));
//Test whether an item is not in a array:
console.log('Test of "strawberry": is not in an Array', !fruits.includes('strawberry'));
console.log('Test of "strawberry": in an Array', fruits.includes('strawberry'));
