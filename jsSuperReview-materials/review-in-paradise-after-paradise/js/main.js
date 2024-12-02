// Create a function that takes in an array. If the first number, is less than the last number, alert 'Hi'. If the first number is greater than the last number, alert 'Bye'. If they are equal, alert 'We close in an hour'.

// method 1
function example(arr) {
    const firstNum = arr[0]
    const lastNum = arr[arr.length-1]
    if(firstNum < lastNum) {
        return 'Hi'
    } else if(firstNum > lastNum) {
        return 'Bye'
    } else {
        return 'We close in an hour'
    }
}

// method 1 examples
console.log(example([9, 67, 5, 2]))// 'Bye'
console.log(example([-3, 67, 5, 2])) // 'Hi'
console.log(example([5, 67, 5])) // 'We close in an hour'

// method 2: arrow function using ternary operator, more concise less readable
const ex2 = a => (a[0] < a[a.length-1]) ? 'Hi' : (a[0] > a[a.length-1]) ? 'Bye' : 'We close in an hour'

// method 2 examples
console.log(ex2([0, 14, 5, 2])) // 'Hi'
console.log(ex2([5, 67, 5])) // 'We close in an hour'
console.log(ex2([67, 5, 2]))// 'Bye'