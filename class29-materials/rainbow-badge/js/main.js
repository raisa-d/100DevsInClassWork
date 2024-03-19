//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const pokemon = document.querySelector('#pokemon').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+pokemon

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        // insert front and back of card pic into DOM
        document.querySelector('#pokeImg1').src = data.sprites.front_shiny;
        document.querySelector('#pokeImg2').src = data.sprites.back_shiny;

        // insert abilities into DOM
        let pokeForms = data.forms.map(x => x.name);
        document.querySelector('#forms').textContent = pokeForms;

      })
      .catch(err => {
          console.log(`error ${err}`)
      });



      
}