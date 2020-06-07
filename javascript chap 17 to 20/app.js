// Chapter No  17 to 20  Start

// Declare and initialize an empty multidimensional array.
// (Array of arrays)
var multi = [];

// Declare and initialize a multidimensional array
// representing the following matrix:

var multi1 = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
        document.write(multi1[i][j] + " ");
    }
    document.write("<br>");
}

// . Write a program to print numeric counting from 1 to 10

for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>")
}


// Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

var table = parseInt(prompt("Enter a number to show its multiplication Table"), "Enter Here");
var length = parseInt(prompt("Enter length of multiplication Table"), "Enter Here");

for (var i = 1; i <= length; i++) {
    var temp = table * i;
    document.write(table + " x " + i + " = " + temp + "<br>");
}


//Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for(var i =0 ;i<fruits.length;i++){
//     document.write("Element at index " + i + " is " + fruits[i]+"<br>");
// }

// Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


document.write("<h2>Counting : </h2>" + "<br>");
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ")
}

document.write("<h2>Reverse counting : </h2>" + "<br>");
for (var i = 10; i > 0; i--) {
    document.write(i + ", ")
}


document.write("<h2>Even : </h2>" + "<br>");
for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i + ", ")
    }
}


document.write("<h2>Odd : </h2>" + "<br>");
for (var i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
        document.write(i + ", ")
    }
}


// document.write("<h2>Series : </h2>" + "<br>");
for (var i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i + "k, ")
    }
}


//You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
var temp = 0;
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var user1 = prompt("Welcome to ABC Bakery, What do you want to order Sir/ma'am");
for (var i = 0; i < A.length; i++) {
    if (user1 === A[i]) {
        alert(A[i] + " is avaliable at index " + i + " in our bakery");
    }
    else {
        temp++
    }
}
if (temp === 5) {
    alert("We are sorry. " + user1 + " is not avaliable in our bakery.");
}



//Write a program to identify the largest number in the given array.
// B = [24, 53, 78, 91, 12].
var store;
var B = [24, 53, 78, 91, 12];
for (var i = 0; i < B.length - 1; i++) {
    if (B[i] > B[i + 1]) {
        store = B[i];
    }
}
document.write("The Largest number is " + store);


// Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

var store;
var B = [24, 53, 78, 91, 12];
for (var i = 0; i < B.length; i++) {
    if (B[i] < B[i + 1]) {
        store = B[i];
    }
    else if (B[i] < store) {
        store = B[i];
    }
}
document.write("The Smallest number is " + store);



//Write a program to print multiples of 5 ranging 1 to 100.
var multiple;
for (var i = 1; i <= 20; i++) {
    multiple = 5 * i;
    document.write(multiple, ", ");
}

// Chapter No  17 to 20  end
