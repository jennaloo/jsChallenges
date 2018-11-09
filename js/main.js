//1. Write a function that returns the first duplicate it finds in an array.

var myArray = [1, 0, 10, 0, 3, 2];

function findDuplicate(someArray) {
    for (i = 0; i < someArray.length; i++) {
        //if they are 1 apart (starts it)
        if (someArray[i] == someArray[i + 1]) {
            console.log(someArray[i + 1]);
            break;
            // if they are 2 apart
        } else if (someArray[i] == someArray[i + 2]) {
            console.log(someArray[i + 2]);
            break;
            // if they are 3 apart
        } else if (someArray[i] == someArray[i + 3]) {
            console.log(someArray[i + 3]);
            break;
            //if they are 4 away
        } else if (someArray[i] == someArray[i + 4]) {
            console.log(someArray[i + 4]);
            break;
            //if they are 5 away
        } else if (someArray[i] == someArray[i + 5]) {
            console.log(someArray[i + 5]);
            break;
            //if they are 6 apart (current string length)
        } else if (someArray[i] == someArray[i + 6]) {
            console.log(someArray[i + 6]);
            break;
        }

    }
};

findDuplicate(myArray);

//2. Write a function that works like the javascript .join () method.

//var fruits = ["banana", "orange", "apple", "mango", "pineapple"];
//var newString;
//
//function vanillaJoin(someArray) {
//
//    for (i = 0; i < someArray.length; i++) {
//        var arrayItem = someArray[i];
//        newString += arrayItem + ",";
//    }
//
//    console.log(newString);
//}
//
//vanillaJoin(fruits);

//3. Given n people, find total number of pairs can be formed.  



//4. Write a function that takes in a radius and returns the area of a circle.  

//5. Reverse an array without using the built in reverse functionality.  

//6. Reverse an array in place without using the reverse functionality and without creating a new array.
