var detectCapitalUse = function(word) {
    return word === word.toUpperCase() || word === word[0].toUpperCase() + word.substr(1).toLowerCase() || word === word.toLowerCase() 
};

console.log(detectCapitalUse("Hoo"))
var word = "hello"
word = word[0].toUpperCase();
console.log(word)