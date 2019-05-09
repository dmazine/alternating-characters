'use strict'

function alternatingCharacters(s) {
    let numberOfDeletions = 0;
    let lastChar = s[0];

    for (let index = 1; index < s.length; index++) {
        let currentChar = s.charAt(index);
        if (currentChar == lastChar) {
            numberOfDeletions++;
        }

        lastChar = currentChar;;
    }

    return numberOfDeletions;
}

module.exports = alternatingCharacters;
