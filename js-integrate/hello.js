document.getElementById('user-info').addEventListener('submit', function (event) {
    event.preventDefault();
    whenFormDataChanges();
});

function whenFormDataChanges() {
    // --- read user input ---

    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;

    // --- create messages ---

    let greeting = 'Hello ' + firstName + ' ' + lastName + '!';
    let farewell = 'Goodbye ' + firstName + ' ' + lastName + '!';

    messages = greeting + '\n' + farewell;
    displayString(messages);

}

function displayString(content) {
    let element = document.getElementById('greeting-output');
    if (element) {
        element.textContent = content;
    } else {
        console.error('Element with ID "greeting-output" not found.');
    }
}
