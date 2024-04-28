'use strict';

function reverseChar() {
    let input = null;
    while (input === null || input === '') {
        input = prompt('enter something to reverse:');
    }

    let backwards = '';
    for (let char of input) {
        backwards = char + backwards;
    }
    let reverse = '';
    for (let char of backwards) {
        reverse = char + reverse;
    }
    let message = input + ' -> ' + backwards + ' -> ' + reverse;

    alert(message);
}
reverseChar()

/*  ===== Challenges =====
  - Put the characters back in the right order after the string was reversed.
*/

