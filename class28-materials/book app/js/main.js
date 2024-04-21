//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch);

// let bookID = 1;

function getFetch(){
  const isbn = document.querySelector('input').value.trim();
  
  const url = `https://openlibrary.org/isbn/${isbn}.json`;

  fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);

        const bookTitle = data.title.trim();

        if(!localStorage.getItem('books')) {
          localStorage.setItem('books', bookTitle)
        } else {
          // variable called books will get items out of local storage and add the book that was searched for with a comma and space
          let books = localStorage.getItem('books') + `, ${bookTitle}`;
                  
          // set local storage to new list of books into local storage
          localStorage.setItem('books', books);
        }
        
        // get title from local storage, insert title into DOM
        document.querySelector('h2').textContent = localStorage.getItem('books');

        // bookID += 1;

        // insert subtitle into DOM
        // document.querySelector('h3').textContent = data.subtitle;

        // insert page numbers
        // document.querySelector('p').textContent = `${data.number_of_pages} pages`

      })
      .catch(err => {
          console.log(`error ${err}`);
      });
};

// Testing using: 9780765368546