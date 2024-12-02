//Get a dog photo from the dog.ceo api and place the photo in the DOM
const btn = document.querySelector('#dog');
btn.addEventListener('click', getPic)

const url = `https://dog.ceo/api/breeds/image/random`

function getPic() {
    fetch(url)
    // parse as JSON
    .then(res => res.json())
    .then(data => {
        console.log(data);
        // place photo into DOM
        document.querySelector('#pic').src = data.message
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    });
}

// EXAMPLE 2: using the cocktaildb api
let drink = 'margarita'
const url2 = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`
fetch(url2)
    // parse as JSON
    .then(res => res.json())
    .then(data => {
        console.log(data.drinks[0].strDrinkThumb);
        document.querySelector('#drink').src = data.drinks[0].strDrinkThumb;
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    });