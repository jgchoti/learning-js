'use strict';

function doubleChar() {
    let text = null;
    while (text === null || text === '') {
        text = prompt('Enter some text; each character will be doubled:');
    }

    let doubled = '';
    for (let i = 0; i < text.length; i++) {
        doubled = doubled + text[i] + '-' + text[i];
        if (i < text.length - 1) {
            doubled = doubled + '-'
        }
    }

    alert(doubled);
}

doubleChar();




/*  ===== Challenges =====
  - Add an hyphen after each character.
  - Add an hyphen only between the characters.
*/
