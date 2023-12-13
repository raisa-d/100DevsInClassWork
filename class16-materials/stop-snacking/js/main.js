//Create a function that grabs the number of snacks from the input and tells you to stop that many times

// add click event listener
document.querySelector('#help').addEventListener('click', snacky)

function snacky() {
    // store user's input of how many snacks they have as a number
    const numSnacks = Number(document.querySelector('input').value)

    // resets as an empty string every time function is called
    document.querySelector('#stops').innerText = ''

    // for loop that tells user to stop snacking the same amount of times as snacks they have
    for(let i = 1; i <= numSnacks; i++) {
        // insert result into DOM
        document.querySelector('#stops').innerText += 'It\'s ok to eat snacks!\n'
    }
}