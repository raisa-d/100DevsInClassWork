// event listeners
document.querySelector('#check').addEventListener('click', checkDay)

function checkDay() {
  
  // store value of input in a variable (lowercase)
  const day = document.querySelector('#day').value.toLowerCase()

  // if first letter of day starts with t, it's a class day
  if (day[0] === 't') {
    document.querySelector('#placeToSee').innerText = 'Woo class!'
  } else if (day[0] == 's') {
    document.querySelector('#placeToSee').innerText = 'It\'s the weekend baybeee'
  } else {
    document.querySelector('#placeToSee').innerText = 'Boooring'
  }
}