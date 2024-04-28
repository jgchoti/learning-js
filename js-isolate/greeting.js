'use strict';

function greeting() {
    let firstName = prompt('enter your  first name:');
    let lastName = prompt('enter your  last name:');

    let greeting = '';
    if (firstName === null || lastName === null) {
        greeting = 'hello anonymous.';
    } else if (firstName === '') {
        greeting = 'enter your  first name:';
        firstName = prompt('enter your  first name:');
    } else if (lastName === '') {
        greeting = 'enter your  last name:';
        lastName = prompt('enter your  last name:');
    } else {
        greeting = `hello ${firstName} ${lastName}!`;
        alert(greeting);
    }
}
greeting();