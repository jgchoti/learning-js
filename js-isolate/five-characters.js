'use strict';
let input = 'input';

checkCharacter();

function checkCharacter() {
    input = prompt('enter something with 5 characters:');
    // input = 'input'
    let message = '';
    if (input === null) {
        message = '🙁';
    } else if (input === '') {
        message = 'enter something with 5 characters:';
    }
    else if (input.length < 5) {
        message = 'too short';
    } else if (input.length === 5) {
        message = 'thank you!';
    } else {
        message = 'too long';
    }

    if (input !== null) {
        alert(message);
    }
}


/*  ===== Challenges =====
  - Give "input" a default value before asking for the user input.
  - Change input's value after asking for the user input so that we always show "thank you!".
  - Add one more conditional so that we never show ":(" and don't always show "thank you!".
*/
