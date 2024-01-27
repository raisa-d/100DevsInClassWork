//Create a button that adds 1 to a botScore stored in localStorage 

// if botScore isn't there, set botScore to 0
if (!localStorage.getItem('botScore')) {
    localStorage.setItem('botScore', 0)
}

// event listener for button click
document.querySelector('button').addEventListener('click', addAnothaOne)

function addAnothaOne(){
    // get item, add 1 to it, reset item to new value
    let botScoreVal = Number(localStorage.getItem('botScore'))
    botScoreVal += 1
    localStorage.setItem('botScore', botScoreVal)

    // insert score into DOM
    document.querySelector('h2').innerText = `Score: ${botScoreVal}`
}