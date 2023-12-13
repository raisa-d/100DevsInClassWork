// *Variables*
// Declare a variable, assign it a value, and alert the value
const whatsup = 'Heya ai lukot?'
// alert(whatsup)

// Create a variable, divide it by 10, and console log the value
const number = 50
console.log(number/10)

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function product(n1, n2, n3) {
    alert(n1 * n2 * n3)
}

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function four_nums(n1, n2, n3, n4) {
    const answer = (n1+n2) + (n3-n4)
    console.log(answer)
}

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log 'WE HAVE A WINNNA'
function winner(n1, n2, n3) {
    const mermaid = 100 + n1 - n2 / n3
    if (mermaid>25) {
        console.log('WE HAVE A WINNNA')
    }
}

// Create a function that takes in a day of the week. If it is a weekend alert, 'weekend' and if not alert 'week day'. Handle capitilization and if the user does not enter a day of the week alert 'Try again!'
function days(day) {
    // change day input to lowercase and string
    day = String(day).toLowerCase()

    if (day === 'saturday' || day === 'sunday') {
        alert('weekend')
    } else if (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday') {
        alert('week day')
    } else {
        alert('try again!')
    }
}

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function numBurrs(n1) {
    for(let i = 1; i <= n1; i+=3){
        console.log(i)
    }
}