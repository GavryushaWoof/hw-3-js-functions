Array.prototype.myMap = function (callback) {
    var newArray = [];
    for (var i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]));
    }
    return newArray;
}
//1) Write a function splitAndMerge
function splitAndMerge(str, sp) {
    return str
        .split(" ")
        .myMap(function (word) {
            return word
                .split("")
                .join(sp);
        })
        .join(" ");
}
console.log(splitAndMerge("My name is John", " "));
console.log(splitAndMerge("Hello World!", ","));

console.log("---------");

//2) Write a function convert
function convert(obj) {
    return Object.keys(obj).myMap(function (key) {
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
        .myMap(function (word) {
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
function stringExpansion(str) {
    if (str.match(/^[0-9]+$/g)) {
        str = "";
        return str;
    }
    return str.replace(/([0-9])*?([a-zA-Z])/g, function (_, num, chr) {
        var subChr = chr;
        for (var index = num - 1; index > 0; index--) {
            chr += subChr;
        }
        return chr;
    });
}
console.log(stringExpansion('3D2a5d2f'));
console.log(stringExpansion('3d332f2a'));
console.log(stringExpansion('abcde'));
console.log(stringExpansion('232132'));
console.log(stringExpansion(''));

console.log("---------");

//6) Write `largest` and `smallest` functions that returns the largest and smallest number passed like a argument.
function largest() {
    return Math.max.apply(Math, arguments);
}
function smallest() {
    return Math.min.apply(Math, arguments);
}
console.log(largest(2, 0.1, -5, 100, 3));
console.log(smallest(2, 0.1, -5, 100, 3));

console.log("---------");

//7) Write function `transform` that will transform array of numbers to array of functions that will return value from a base array.
function transform(array) {
    var arrayNew = [];
    for (var index = 0; index < array.length; index++) {
        arrayNew[index] = forNew.bind(array, index)
        function forNew(index) {
            return array[index];
        }
    }
    return arrayNew;
}
var baseArray = [10, 20, 30, 40, 50];
var newArray = transform(baseArray);
console.log(newArray[3]());
console.log(newArray[4]());

console.log("---------");

//8) Write function `sum`. Function expects arbitrary number of digit arguments and returns compound value of them.
function sum() {
    return (arguments.length === 0) ? 0 : arguments[0] + sum.apply(null, [].slice.call(arguments, 1));
}
console.log(sum(1, 3, 5, 7));

console.log("---------");


//10) Write a polyfill for a .bind() function and save it in `Function.prototype.myBind()`. `myBind()` should work in an exact same way as the usual bind() - take context as a first parameter and the list of arguments separated by comma.
Function.prototype.myBind = function (oThis) {
    var func = this;
    var args = [].slice.call(arguments, 1);
    return function () {
        return func.apply(oThis, args.concat([].slice.call(arguments)));
    }
};

function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.myBind({ prop: 9 });
console.log(bound(1));

console.log("---------");

//9) Write function `countDown`. Function expects number and logs values one by one till zero with one second delay.
function countDown(num) {
    for (var count = 1000; num >= 0; num--, count += 1000) {
        setTimeout(function (num) {
            console.log(num);
        }.bind(null, num), (count));
    }
}
countDown(3);



