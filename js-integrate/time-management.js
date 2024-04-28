document.getElementById('sleep-info').addEventListener('submit', function (event) {
    event.preventDefault();
    whenFormDataChanges();
})

function whenFormDataChanges() {
    // read a boolean from the <input> with id "tired"
    let isTired = document.getElementById("tired").checked;
    // read a boolean from the <input> with id "free-time"
    let hasTime = document.getElementById("free-time").checked;
    // --- generate advice ---
    let advice = '';
    if (isTired && hasTime) {
        advice = 'Take a nap!';
    } else if (!isTired && hasTime) {
        advice = 'Study some flashcards.';
    } else if (isTired && !hasTime) {
        advice = 'Make some coffee.';
    } else if (!isTired && !hasTime) {
        advice = 'Have a great day!';
    }
    displayString(advice)
}
function displayString(content) {
    let element = document.getElementById('advice-area');
    if (element) {
        element.textContent = content;
    } else {
        console.error('Element with ID "sleep-info" not found.');
    }
}





/*  ===== Challenges =====

  - change the conditional so it uses `else` instead of `else if`

*/
