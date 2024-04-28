document.getElementById('twice-data').addEventListener('submit', function (event) {
    event.preventDefault();
    whenFormDataChanges();
})
function whenFormDataChanges() {
    // read a string from the <input> with id "to-double"
    let text = document.getElementById('to-double').value;
    console.log(text);
    let repeated = '';
    for (i = 1; i <= 4; i++) {
        repeated = repeated + i + '.' + text + '\n';
    }

    // display a string to the <pre> with id "doubled-input"
    displayString(repeated);
}

function displayString(content) {
    let element = document.getElementById('doubled-input');
    if (element) {
        element.textContent = content;
    } else {
        console.error('Element with ID "twice-data" not found.');
    }
}

/*  ===== Challenges =====

  - Copy the user's text 4 times
  - Number the copies like this:
    1. asdf
    2. asdf
    3. asdf
    4. asdf

*/
