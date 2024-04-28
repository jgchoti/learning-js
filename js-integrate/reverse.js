document.getElementById('reversify').addEventListener('submit', function (event) {
    event.preventDefault();
    whenFormDataChanges();
})

function whenFormDataChanges() {
    // --- read user input ---

    let text = document.getElementById('to-reverse').value;
    let upperCase = document.getElementById('loud').checked;


    // --- reverse the string input ---
    let reversed = '';
    for (let character of text) {
        reversed = character + reversed;
    }
    console.log(reversed);
    // --- set to upper or lower case ---

    let finalText = '';
    if (upperCase) {
        finalText = reversed.toUpperCase();
    } else if (reversed.length >= 10) {
        finalText = reversed.toUpperCase();
    }
    else if (reversed.length <= 4)
        finalText = reversed.toLowerCase();
    else {
        let firstLetter = reversed.charAt(0);
        let firstLetterCap = firstLetter.toUpperCase()
        let remainingLetters = reversed.slice(1).toLowerCase();
        finalText = firstLetterCap + remainingLetters
    }

    displayString(finalText);
}

function displayString(content) {
    let element = document.getElementById('reverse-output');
    if (element) {
        element.textContent = content;
    } else {
        console.error('Element with ID "reversify" not found.');
    }
}


/*  ===== Challenges =====

  - change the condition so upper/lower case depends on the length of the input
      longer inputs are upper case
      medium inputs are not changed
      shorter inputs are lower case
  - make sure each character appears only once in the reversed text

*/
