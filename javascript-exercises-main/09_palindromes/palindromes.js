const palindromes = function (word) {
    word = word.toLowerCase().replace(/[.,\/#!$%\^&\*; :{}=\-_`~()]/g,"");
    let mirrorWord = word.split('').reverse().join('');
    return word === mirrorWord;
};

// Do not edit below this line
module.exports = palindromes;
