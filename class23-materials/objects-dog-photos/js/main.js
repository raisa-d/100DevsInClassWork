//Get a dog photo from the dog.ceo api and place the photo in the DOM

// use fetch method to request data from the API/url
fetch('https://dog.ceo/api/breeds/image/random')
    // whatever we get back from server, parse it and make sure its json    
    .then(res => res.json())
    
    // console logged the data that came back
    .then(data => {
        // object had a property message which has a string with a url to an image in it
        console.log (data.message)

        //insert that link/message into the DOM
        document.querySelector('img').src = data.message
    }) 
    
    // if there was an error, we would console log it
    .catch(err => console.log(`error ${err}`))