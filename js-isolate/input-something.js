'use strict';

function inputPrompt() {
    let input = prompt('input something:');
    while (input === null || input === '') {
        input = prompt('input something:');
    }
    if (input !== null) {
        alert('thank you!');
    }
    input === null
}
inputPrompt()
/*  ===== Challenges =====
  - Try to create an infinite loop so the user gets stuck inside your prompt.
*/