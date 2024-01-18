//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
fetch('https://api.nasa.gov/planetary/apod?api_key=P2RU8xk0cfoUnP4BAxiAzVfjjIJOX7PcnNsIrt0O')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        
        // insert title into dom
        document.querySelector('h2').innerText = data.title

        // insert image into dom
        document.querySelector('img').src = data.url

        // insert description into dom
        document.querySelector('h3').innerText = data.explanation

        // variable to store user's input
        const userInput = document.querySelector('input')
    })
    .catch(err => console.log(`error ${err}`))