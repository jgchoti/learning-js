document.getElementById('search-input').addEventListener('submit', function (event) {
    event.preventDefault();
    whenFormDataChanges();
})

function whenFormDataChanges() {

    let searchThis = document.getElementById('text').value;
    let findThis = document.getElementById('query').value;

    let caseSensitive = document.getElementById('sensitive').checked;

    // --- do the search ---

    let doesExist = false;

    if (!caseSensitive) {
        let smallSearchThis = searchThis.toLowerCase();
        let smallFindThis = findThis.toLowerCase();
        doesExist = smallSearchThis.includes(smallFindThis);
    } else {
        doesExist = searchThis.includes(findThis);
    }

    // --- create the message ---

    let message = '';

    if (doesExist) {
        message = `✅ Found "${findThis}" in "${searchThis}"`;
    } else {
        message = `❎ "${findThis}" not found in "${searchThis}"`;
    }

    // --- display the search results ---

    displayString(message);
}
function displayString(content) {
    let element = document.getElementById('search-result');
    if (element) {
        element.textContent = content;
    } else {
        console.error('Element with ID "search - input" not found.');
    }
}


/*  ===== Challenges =====

  - display a more helpful message than "yes" or "no"
  - change the conditional so the `if` is NOT case sensitive and the `else` is

*/
