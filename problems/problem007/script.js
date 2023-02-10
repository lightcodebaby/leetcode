/*
    7. Reverse Integer
    Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

    Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

    

    Example 1:

    Input: x = 123
    Output: 321
    Example 2:

    Input: x = -123
    Output: -321
    Example 3:

    Input: x = 120
    Output: 21
    

    Constraints:

    -231 <= x <= 231 - 1
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let result = 0;
  let reversed = reverseNumber("" + x);
  if (2 ** 31 - 1 > reversed && (-2) ** 31 < reversed) {
    result = Number(reversed);
  }
  return result;
};

function reverseNumber(strX) {
  let negative = strX < 0;
  strX = negative ? strX.substring(1, strX.length) : strX;
  let reversed = strX.split("").reverse().join("");
  reversed = negative ? "-" + reversed : reversed;
  return reversed;
}
