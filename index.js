function submitForm(jsFile, outputElementId) {
    activateJs(jsFile, outputElementId);
    return false; // Prevent default form submission
}

function activateJs(jsFile, outputElementId) {
    let previousScript = document.querySelector("[data-script]");
    if (previousScript) {
        previousScript.remove();
    }
    let jsscript = document.createElement("script");
    jsscript.src = jsFile;
    jsscript.setAttribute("data-script", ""); // Clear data-script attribute after use
    document.body.appendChild(jsscript);

    // Clear the output element content
    let outputElement = document.getElementById(outputElementId);
    if (outputElement) {
        outputElement.textContent = "";
    }
}
function submitForm(jsFile, outputElementId) {
    activateJs(jsFile, outputElementId);
    return false; // Prevent default form submission
}

function activateJs(jsFile, outputElementId) {
    let previousScript = document.querySelector("[data-script]");
    if (previousScript) {
        previousScript.remove();
    }
    let jsscript = document.createElement("script");
    jsscript.src = jsFile;
    jsscript.setAttribute("data-script", ""); // Clear data-script attribute after use
    document.body.appendChild(jsscript);

    // Clear the output element content
    let outputElement = document.getElementById(outputElementId);
    if (outputElement) {
        outputElement.textContent = "";
    }
}