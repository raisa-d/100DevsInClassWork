//Create a function that has a loop that prints '21' 21 times to the console and then call that function
function twenty1() {
    for(let i = 1; i <= 21; i++) {
        console.log('21');

        //Bonus: can you make it print '21' 21 times to the dom?
        document.querySelector('#savageSays').textContent += '21 '
    }
}

twenty1()