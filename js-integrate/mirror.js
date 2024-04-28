document.getElementById('mirror-input').addEventListener('submit', function (event) {
    event.preventDefault();
    whenFormDataChanges();
})

function whenFormDataChanges() {
    // --- read the user's input ---
    let userText = document.getElementById('to-mirror').value;
    let middleChar = document.getElementById('middle-char').value;
    let upperCase = document.getElementById('uppercase').checked;

    // --- mirror the text ---
    if (upperCase) {
        userText = userText.toUpperCase();
    } else {
        userText = userText.toLowerCase();
    }

    let mirrored;
    if (middleChar === null || middleChar === '') {
        mirrored = ' | ';
        for (let char of userText) {
            mirrored = char + mirrored + char;
        }
    } else if (middleChar.length > 1) {
        mirrored = ` ${middleChar[0]} `;
        for (let char of userText) {
            mirrored = char + mirrored + char;
        }
    } else {
        mirrored = ` ${middleChar} `;
        for (let char of userText) {
            mirrored = char + mirrored + char;
        }
    }

    displayString(mirrored);
}

function displayString(content) {
    let element = document.getElementById('mirror-output');
    if (element) {
        element.textContent = content;
    } else {
        console.error('Element with ID "mirror-input" not found.');
    }
}
