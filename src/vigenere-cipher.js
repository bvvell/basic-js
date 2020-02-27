class VigenereCipheringMachine {
    constructor(reverse) {
        this.alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        this.tabulaRecta = this.generateTable();
        this.reverse = reverse;
    }

    generateTable() {
        let alphabet = this.alphabet;
        let tabulaRecta = [];
        for (let a = 0; a <= alphabet.length - 1; a++) {
            tabulaRecta.push([]);
            for (let i = 0; i <= alphabet.length - 1; i++) {
                tabulaRecta[a].push(alphabet[i]);
            }
            let removed = alphabet.shift();
            alphabet.push(removed);
        }
        return tabulaRecta;
    }

    keyWordLength(keyword, limit) {
        let treatedKeyword = keyword;

        while (treatedKeyword.length < limit) {
            treatedKeyword += treatedKeyword;
        }

        if (treatedKeyword.length > limit) {
            treatedKeyword = treatedKeyword.substring(0, limit);
        }

        return treatedKeyword;
    }

    getLetterIndexEncrypt(letter) {
        return this.alphabet.indexOf(letter.toUpperCase());
    }

    getLetterIndexDecrypt(keyLetter, letter) {
        let tabulaRow = this.tabulaRecta[this.alphabet.indexOf(keyLetter.toUpperCase())]
        let currL = this.alphabet[tabulaRow.indexOf(letter.toUpperCase())]
        return currL;
    }

    encrypt(message, key) {
        if (!message || !key) throw new Error();
        message = message.toLowerCase();
        key = key.toLowerCase();
        let messageLetters = message.replace(/[^a-zA-Z]+/g, '');
        let keyLetters = key.replace(/[^a-zA-Z]+/g, '');
        let messageArray = message.split('');
        let fullKeyPhrase = '';
        let result = '';
        if (key.length < message.length) {
            fullKeyPhrase = this.keyWordLength(keyLetters, messageLetters.length).split('');

            messageArray.forEach((letter, index) => {
                if (/[a-z]/i.test(messageArray[index])) {} else {
                    fullKeyPhrase.splice(index, 0, letter)
                }
            })
        } else {
            fullKeyPhrase = key.split('');
        }
        for (let a = 0; a <= messageArray.length - 1; a++) {
            if (/[a-z]/i.test(messageArray[a])) {
                result += this.tabulaRecta[this.getLetterIndexEncrypt(messageArray[a])][this.getLetterIndexEncrypt(fullKeyPhrase[a])];
            } else {
                result += messageArray[a];
            }
        }
        if (this.reverse) {
            console.log()
        }

        return (this.reverse === false) ? result.split('').reverse().join('') : result;
    }

    decrypt(message, key) {
        if (!message || !key) throw new Error();
        message = message.toLowerCase();
        key = key.toLowerCase();
        let messageLetters = message.replace(/[^a-zA-Z]+/g, '');
        let keyLetters = key.replace(/[^a-zA-Z]+/g, '');
        let messageArray = message.split('');
        let fullKeyPhrase = '';
        let result = '';
        if (key.length < message.length) {
            fullKeyPhrase = this.keyWordLength(keyLetters, messageLetters.length).split('');
            messageArray.forEach((letter, index) => {
                if (/[a-z]/i.test(messageArray[index])) {} else {
                    fullKeyPhrase.splice(index, 0, letter)
                }
            })
        } else {
            fullKeyPhrase = key.split('');
        }
        for (let a = 0; a <= messageArray.length - 1; a++) {
            if (/[a-z]/i.test(messageArray[a])) {
                result += this.getLetterIndexDecrypt(fullKeyPhrase[a].toString(), messageArray[a].toString());
            } else {
                result += messageArray[a];
            }
        }
        // return this.reverse === true ? result.split('').reverse().join('') : result
        return (this.reverse === false) ? result.split('').reverse().join('') : result;
    }

}

module.exports = VigenereCipheringMachine;