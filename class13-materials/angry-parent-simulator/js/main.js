// add event listener
document.querySelector('#yell').addEventListener('click', yell)

function yell() {
  // store inputs as variables
  const fName = document.querySelector('#firstName').value
  const fMName = document.querySelector('#firstMiddle').value
  const lMName = document.querySelector('#lastMiddle').value
  const lName = document.querySelector('#lastName').value

  // create fullName variable
  const fullName = `${fName} ${fMName} ${lMName} ${lName}`.toUpperCase()

  // insert into DOM
  document.querySelector('#placeToYell').innerText = fullName
}