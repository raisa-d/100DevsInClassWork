//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

// hitting enter is treated the same as a button click
document.querySelector('input').addEventListener('keypress', function(event) {
    if (event.key == 'Enter') {
        document.querySelector('button').click();
    }
})

// variables to store DOM elements
let spellName = document.querySelector('.spell-name');
let className = document.querySelector('.class-name');

function getFetch(){
    let choice = document.querySelector('input').value.trim().toLowerCase()
    
    // fix formatting of search query so any spaces are dashes
    choice = choice.split('').map(char => char == ' ' ? char = '-' : char).join('');

    const url = `https://www.dnd5eapi.co/api/spells/${choice}/`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            
            // insert spell name into DOM
            spellName.textContent = data.name;
            
            // insert class name into DOM
            className.textContent = data.classes[0].name;
            
            displaySubclasses(data.subclasses)
            
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

// insert subclasses into DOM
function displaySubclasses(subclasses) {
    let subclassUL = document.querySelector('.subclasses');

    // reset 
    subclassUL.textContent = '';
    
    // loop through subclasses
    subclasses.forEach(subclass => {
        // create lis
        const li = document.createElement('li');
        
        // add element name to li
        li.textContent = subclass.name;
        
        // append each li to ul
        subclassUL.appendChild(li);
    })

}