// Question 1:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numbersDividedByFive = numbers.filter(function(number){
    return number % 5 === 0;
})

console.log(numbersDividedByFive);

// Question 2:

let numbersMultipliedByTwo = numbers.map(function(number){
    return number * 2;
})

console.log(numbersMultipliedByTwo);

// Question 3:

let words = ["hello", "world", "mister", "robot", "airplane"];

// words = words.map(function(word){
//     let halfWord = "";

//     for (let i = 0; i < (word.length / 2); i++) {
//         halfWord += word[i];
//     }

//     return halfWord;
// })

// Easier solution:

words = words.map(function(word){
    return word.substr(0, word.length / 2);
})

console.log(words);

// Question 4:

let evenSum = numbers.reduce(function(sum, number){
    if (number % 2 === 0) return sum + number;
    else return sum;
}, 0)

console.log(evenSum);

// Question 5:

let dividedByFiveSum = numbers.reduce(function(sum, number){
    if (number % 5 === 0) return sum + number;
    else return sum;
}, 0)

console.log(dividedByFiveSum);

// Question 6:

const emails = ["vusal11010@gmail.com", "vusal11010@code.edu.az"];

let email = emails.find(function(email){
    return email.includes("@code.edu.az");
})

console.log(email);