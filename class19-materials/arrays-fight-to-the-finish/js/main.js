//Create an array of movie titles. Loop through the array and print each element to the h2.
let movies = ['The Little Mermaid', 'Barbie', 'Wonka']

// using for each loop and console logging
movies.forEach((x) => console.log(x))

// using for each loop
movies.forEach((x) => {
    document.querySelector('h2').innerText += `${x}\n`
})

// using for loop
for(let i = 0; i < movies.length; i++) {
    document.querySelector('h2').innerText += `${movies[i]}\n`
}

//Create an array of numbers. Loop through the array and add three to each number and replace the old number.

// reassign it by using the index
let nums = [23, 72, 26]

// for each loops ALWAYs grab the elemnt, the index, and the array in that order. you can name the parameters whatever you want but it will be in that order. if you are't using on of them like in this case, some people use an underscore for that parameter
nums.forEach((_, index) => nums[index] += 3)

// in this version, we are adding to the num variable which is really the same as the value of nums[index]
nums.forEach((num, index) => nums[index] = num + 3)

console.log(nums)

//Find the average of all the numbers from question two
let sum = 0

// for each number in the nums list, add that number to our variable sum
nums.forEach((num) => sum+=num)

// for(let i=0; i < nums.length; i++) {
//     sum += nums[i]
// }

let average = sum/nums.length
console.log(average)