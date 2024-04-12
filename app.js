//Question:1
// Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
var first = 'Talha';
var Last = 'Ansari';

const fullName = `${first} ${Last}`;
console.log(fullName)


//Question:2
// Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
// const userfavNumber = prompt("Enter a fav mobile phone model");
// const phonelength = userfavNumber.length
// console.log(`Length of ${phonelength}`);



//Question:3
// Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser.
let word = 'Pakistani';
let result = word.indexOf('n')
console.log(result)



//Question:4
// Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
const lastFind = 'Hello World';
const result1 = lastFind.lastIndexOf('l')
console.log(result1);



//Question:5
// Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
let wordd = 'Pakistani';
let result2 = wordd.charAt(3)
console.log(`Character at index 3:${result2}`)


//Question:6
// Repeat Q1 using string concat() method.
const FullNamee = first + " " + Last;
console.log(FullNamee)


//Question:7
// Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
const wordddd = 'Hyderabad';
const foundNew = wordddd.replace("Hyder", "Islam")
console.log(foundNew)


//Question:8
// Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
var message = 'Ali and Sami are best friends. They play cricket and football together.';
var replaceall = message.replaceAll('and', '&')
console.log(replaceall)



//Question:9
// Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
const NumberStr = "472"
console.log(`value: ${NumberStr}`)
console.log("Type:", typeof NumberStr)
const convertStrIntoNumber = parseInt(NumberStr)
console.log(convertStrIntoNumber)
console.log("Type:", typeof convertStrIntoNumber)



//Question:10
// Write a program that takes user input. Convert and
// show the input in capital letters.
// let user1 = prompt("Enter the sentence")
// let result3 = user1.toUpperCase()
// console.log(result3)



//Question:11
// Write a program that takes user input. Convert and
// show the input in title case.
// const user2 = prompt("Enter string")
// const str = user2.charAt(0).toUpperCase() + user2.slice(1)
// console.log(str)



//Question:12
// Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
var num = 35.36
var result4 = num.toString().replace(".", "")
console.log(result4);



//Question:13
// Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
// var username = prompt("Enter the valid username")
// for (let i = 0; i < username.length; i++) {
//     const result6 = username.charCodeAt(i)
//     if(result6 === 33 || result6 === 44 || result6 === 46 || result6 === 64){
//        alert("Please enter a valid username")
//     }    
// }



//Question:14
// You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:
// const bakery = prompt("Welcome to ABC bakery, What do you want to order sir/ma'am?")
// A = ["cake", "apple pie", "cookie", "chips", "patties"]
// let found = false
// for (let i = 0; i < A.length; i++) {
//     if (bakery === A[i]) {
//         console.log(`${bakery} is available at index ${i} in our bakery`)
//         found = true;
//         break;
//     }
// }
// if (!found){
//     console.log(`we are sorry,${bakery} is not available in our bakery`)
// }



//Question:15
// Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.
// console.log("9".charCodeAt());


const passwordFunction = (password) => {
    if (password.length < 6) return false;
    if (!isNaN(parseInt(password[0]))) return false;

    hasAlphabets = false
    hasNumber = false;

    for (let i = 0; i < password.length; i++) {
        let charCode = password.charCodeAt(i)

        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            hasAlphabets = true
        }
        if (charCode >= 49 && charCode <= 57) {
            hasNumber = true
        }
    }
    return hasAlphabets && hasNumber
}
let password = prompt("Enter a password to login")

if (passwordFunction(password)) {
    console.log("Enter Password:", password);
}else{
    while (!passwordFunction(password)) {
        password = prompt("Password cannot begin with a number \nPlease enter a valid password");
    }
   console.log("Enter Password:", password);
}

//Question:16
// Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
// var university = "University of Karach";
// var result5 = university.split("")
// console.log(result5);

// for (const currentelem of result5) {
//     console.log(currentelem)
// }



//Question:17
// Write a program to display the last character of a user
// input.
// const userInput = prompt("plz input the favourite country")
// console.log("userInput:", userInput)
// const LastChar = userInput.slice(-1)
// console.log("Last character of input:", LastChar)



//Question:18
// You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.
// const content = "The quick brown fox jumps over the lazy dog"

// const finalContent = content.toLowerCase().split(" ")


// let uniqueCOntent = [...new Set(finalContent)];
// let ConvertString = uniqueCOntent.join(' ')
// ConvertString.replace(',','')
// console.log(ConvertString);

// let count = 0;
// finalContent.forEach((CurrentElem) => {
//     if (CurrentElem === 'the') {
//         count++;

//     }
// })
// console.log(`There are ${count} occuerence(s) of word 'the`)