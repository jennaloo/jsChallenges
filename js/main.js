////1. Write a function that returns the first duplicate it finds in an array.
//

var myDupArray = [5, 0, 6, 6, 4, 3, 1];
//finds first duplicates next to eachother
//should find duplicates any distance apart
//nested for loops?
function findFirstDup(someArray) {
    for (i = 0; i < someArray.length; i++) {
        if (someArray[i] == someArray[i + 1]) {
            return someArray[i];
        }
    }
}

//2. Reverse a String without Array Methods
myString = "Jenna";
var newArray = [];

for (var i = myString.length; i > 0; i--) {
    newArray[myString.length - i] = myString[i - 1];
}

function vanillaJoin(someArray) {
    var newString = "";
    for (i = 0; i < someArray.length; i++) {
        var arrayItem = someArray[i];
        newString += arrayItem;
    }
    console.log(newString);
}

vanillaJoin(newArray);

//3. Given n people, find total number of pairs can be formed.  

function factorialize(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
}

function combinations(n) {
    var num = factorialize(n);
    var denom = factorialize(2) * factorialize(n - 2);
    return num / denom;
}

//4. Write a function that takes in a radius and returns the area of a circle.  

function area(radius) {
    area = Math.PI * radius * radius;
    return area;
}


//6. Reverse an array in place without using the reverse functionality and without creating a new array.

myArray = [1, 2, 3, 4];

function reverse(someArray) {
    for (var i = myArray.length; i > 0; i--) {
        myArray[i - 1] = someArray[myArray.length - i];
    }
    return myArray;
};
