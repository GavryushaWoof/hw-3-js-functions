//1) Write a function splitAndMerge
function splitAndMerge(str, sp) {
    return str
        .split(" ")
        .map(function (word) {
            return word
                .split("")
                .join(sp)
        })
        .join(" ");
}
console.log(splitAndMerge("My name is John", " "));
console.log(splitAndMerge("Hello World!", ","));

console.log("---------");

//2) Write a function convert
function convert(obj) {
    return Object.keys(obj).map(function (key) {
        return [
            key, obj[key]
        ];
    });
}
var hash = { name: 'Jeremy', age: 24, role: 'Software Engineer' };
console.log(convert(hash));

console.log("---------");

//3) Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.
function toCamelCase(str) {
    return str.replace(/[-_]+(.)/g, function (_, chr) {
        return chr.toUpperCase();
    });
}
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));

console.log("---------");

//4) Write a function that takes a sentence (string) and reverses each word in the sentence.
function mirrorStr(str) {
    return str
        .split(" ")
        .map(function (word) {
            var letters = word.split("");
            var lastIndex = letters.length - 1;
            for (var i = 0; i <= (letters.length / 2 - 1); i++) {
                var subLetter = letters[lastIndex - i];
                letters[lastIndex - i] = letters[i];
                letters[i] = subLetter;
            }
            word = letters.join("");
            return word;
        })
        .join(" ");
}
console.log(mirrorStr(" A fun little challenge! "));

console.log("---------");

//5) Write a function stringExpansion
