// Declare an empty array using JS literal notation to store
// student names in future.

var studentName = [];
// 2. Declare an empty array using JS object notation to store
// student names in future.
// 3. Declare and initialize a strings array.
var stringArray = ['hamza','yousuf','Bmj','saylani welfare']
// 4. Declare and initialize a numbers array.
var numberArray = [0,1,2,3,4,5,6,7,8,9]
// 5. Declare and initialize a boolean array.
var booleanArray = [true, false, false, true]
// 6. Declare and initialize a mixed array.
var mixedArray = ['myname ', 'hamza', 'class', 14, 5, 6, 8, 9, true, false]
// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
//  BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

var educationArray = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD']
document.write("<h1>Qualification</h1>")

for(var i = 0; i < educationArray.length; i++){
    document.write(i + "  " + educationArray[i] + "<br>")
}


// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:


var studentName = ['hamza', 'salman','arsalan']
var studentScore = [320,230,480];

var percentagestudent1 = studentScore[0] * 100 / 500;
var percentagestudent2 = studentScore[1] * 100 / 500;
var percentagestudent3 = studentScore[2] * 100 / 500;
var percentagestudents = [percentagestudent1, percentagestudent2, percentagestudent3]

for (let index = 0; index < studentName.length; index++) {
    document.write(`Score of ${studentName[index]} is ${studentScore[index]}.
    Percentage : ${percentagestudents[index]} %<br>`)
}



// 9. Initialize an array with color names. Display the array
// elements in your browser.

var colorName  = ['red', 'green','blue', 'white','orange'];
for (let index = 0; index < colorName.length; index++) {
    document.write(colorName[index] + "<br>")
}
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
var userColor = prompt("Enter your Favorite Color");

if(userColor != '' && userColor != undefined){
    // colorName.splice(0, 0, userColor)
    colorName.unshift(userColor)
    document.write(colorName + "</br>");

}
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

var userColor2 = prompt("Enter your Second Favorite Color");

if(userColor2 != '' && userColor2 != undefined){
    // colorName.splice(0, 0, userColor)
    colorName.push(userColor2)
    document.write(colorName + "</br>");

}
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
colorName.unshift("pink")
colorName.unshift("skyblue")
document.write("<h3>New Updated Array: " + colorName + "</h3><br />")
// d. Delete the first color in the array. Display the updated
// array in your browser.
colorName.shift()
document.write("<h3> First item removed and now New Updated Array: " + colorName + "</h3><br />")

// e. Delete the last color in the array. Display the updated
// array in your browser.

colorName.pop()
document.write("<h3> Last item removed and now New Updated Array: " + colorName + "</h3><br />")
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
var userColorName = prompt("Enter your color name")
var userColorposition = parseInt(prompt("Enter which index you want to add color name"))
colorName.splice(userColorposition, 0 , userColorName)
document.write("<h3>"+ colorName + "</h3>")
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

var userdeleteColor = prompt("Enter which index you want to delete color ")
var userColorposition = parseInt(prompt("Enter how many colors you want to delete"))
colorName.splice(userdeleteColor, userColorposition)
document.write("<h3>"+ colorName + "</h3><br>")


// Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
var sortArray = [120,350,220,450,100,650,300];
document.write("Score of Students " + sortArray + "<br />")
document.write(" Ordered Score of Students  "  + sortArray.sort())


// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

var cities = ['karachi', 'lahore', 'quetta', 'islamabad', 'Multan', 'peshawar']
var selectedcities = cities.slice(2, 5);
document.write("<br>Cities List  " + cities + "<br />")
document.write("Cities List " + selectedcities + "<br />")


// Write a program to create a single string from the
// below mentioned array:
// (Use array’s join method)

 var arr = ['This', 'is', 'my', 'cat'];
 var stringArray  = arr.join(" ")
 console.log(arr)
 console.log(stringArray)


//  Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

var fifoarray  = [];
fifoarray.push('keyboard')
fifoarray.push('mouse')
fifoarray.push('printer')
fifoarray.push('monitor')
document.write("<h3>DEVICES: <br /> "+ fifoarray +" </h3>")

var out1 = fifoarray.shift()
var out2 = fifoarray.shift()
var out3 = fifoarray.shift()
var out4 = fifoarray.shift()
document.write("<h3>Out: <br /> "+ out1 +" </h3>")
document.write("<h3>Out: <br /> "+ out2 +" </h3>")
document.write("<h3>Out: <br /> "+ out3 +" </h3>")
document.write("<h3>Out: <br /> "+ out4 +" </h3>")

// Create a new array. Store values one by one in such a way

// that you can access the values in reverse order. (Last In-
// First Out)


var lifoArray  = [];
lifoArray.unshift('monitor')
lifoArray.unshift('printer')
lifoArray.unshift('mouse')
lifoArray.unshift('keyboard')

document.write("<h3>DEVICES: <br /> "+ lifoArray +" </h3>")

var out1 = lifoArray.pop()
var out2 = lifoArray.pop()
var out3 = lifoArray.pop()
var out4 = lifoArray.pop()
document.write("<h3>Out: <br /> "+ out1 +" </h3>")
document.write("<h3>Out: <br /> "+ out2 +" </h3>")
document.write("<h3>Out: <br /> "+ out3 +" </h3>")
document.write("<h3>Out: <br /> "+ out4 +" </h3>")


// Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

var mobilesCompanies = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier']
document.write(`<select>
<option>${mobilesCompanies[0]}</option>
<option>${mobilesCompanies[1]}</option>
<option>${mobilesCompanies[2]}</option>
<option>${mobilesCompanies[3]}</option>
<option>${mobilesCompanies[4]}</option>
<option>${mobilesCompanies[5]}</option></select>`)