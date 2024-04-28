'use strict';


function tenChar() {
    let input = null;
    while (input === null || input.length !== 10) {
        input = prompt('First, enter something with 10 characters:');
    }
    everything(input)
}

function everything(input) {
    let secondInput = null;
    while (secondInput === null || secondInput.toLowerCase() !== 'everything') {
        secondInput = prompt('Second, enter the word "everything":')
    }
    let message = 'thank you for "' + input + '"!';
    alert(message);
}


tenChar()
/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/
