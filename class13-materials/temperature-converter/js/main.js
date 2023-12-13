//Write your pseduo code first! 

// add event listener
document.querySelector('#submit').addEventListener('click', convert)

function convert() {
    // get temperature in C
    const celsius = document.querySelector('#celsius').value

    // convert temp to F
    const f = (celsius * (9/5)) + 32

    // show new converted temp
    document.querySelector('#result').innerText = `${celsius} degrees C is ${f.toFixed()} degrees fahrenheit`
}
