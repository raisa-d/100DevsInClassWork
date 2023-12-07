// add event listeners
document.querySelector('#purple').addEventListener('click', purple)
document.querySelector('#green').addEventListener('click', green)
document.querySelector('#blue').addEventListener('click', blue)
document.querySelector('#yellow').addEventListener('click', yellow)

// functions to change colors
function purple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'
}
function green() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}

function blue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}

function yellow() {
  document.querySelector('body').style.backgroundColor = 'rgba(247,	230,	114, 1)'
  document.querySelector('body').style.color = 'white'
}
