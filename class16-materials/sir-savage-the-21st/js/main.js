//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?

function twenty1() {
    for (let i = 1; i < 22; i++) {
        console.log('21')

        // bonus
        document.querySelector('#savageSays').innerText += ' 21'
    }
}

twenty1()