                    "use strict"

let English = parseInt(prompt("Enter Your English Marks"))
let Urdu = parseInt(prompt("Enter Your Urdu Marks"))
let Science = parseInt(prompt("Enter Your Science Marks"))
let Computer = parseInt(prompt("Enter Your Computer Marks"))
let Mathematics = parseInt(prompt("Enter Your Mathematics Marks"))
let Chemistry = parseInt(prompt("Enter Your Chemistry Marks"))
let Zoology = parseInt(prompt("Enter Your Zoology Marks"))


if (English <= 100 && Urdu <= 100 && Science <= 100 && Computer <= 100 && Mathematics <= 100 && Chemistry <= 100 && Zoology <= 100) {
    var obtainedMarks = English + Urdu + Science + Computer + Mathematics + Chemistry + Zoology;
    var totalMarks = 700;

    let percentage = obtainedMarks / totalMarks * 100;

    percentage = percentage.toFixed(2);


    if (percentage >= 85) {
        document.write(`<h2>Congratulation You Got A+ Grade And ${percentage} %  percentage`);
    }

    else if (percentage >= 75 && percentage <= 84) {
        document.write(`<h2>Congratulation You Got A Grade And ${percentage} %  percentage`)
    }

    else if (percentage >= 65 && percentage <= 74) {
        document.write(`<h2>Congratulation You Got A- Grade And ${percentage} %  percentage </h2>`)
    }

    else if (percentage >= 60 && percentage <= 64) {
        document.write(`<h2>Congratulation You Got B+ Grade And ${percentage} %  percentage</h2>`)
    }

    else if (percentage >= 55 && percentage < 60) {
        document.write(`<h2>Congratulation You Got B Grade  And ${percentage} %  percentage</h2>`)
    }


    else if (percentage >= 50 && percentage < 54) {
        document.write(`<h2>Congratulation You Got B- Grade And ${percentage} %  percentage</h2>`)
    }


    else if (percentage >= 40 && percentage < 50) {
        document.write(`<h2>Congratulation You Got C Grade And ${percentage} %  percentage</h2>`)
    }

    else if (percentage < 40) {
        document.write(`<h2>Soryy You are Fail   !!!!!! And ${percentage} %  percentage</h2>`)
    }
    else {
        document.write("Sorry we are unable to find your result")
    }
}
else {
    document.write("<h3>You typed Wrong Subject Number please Try Again</h3>")
}