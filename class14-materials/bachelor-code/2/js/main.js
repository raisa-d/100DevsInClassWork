// store images in variables
const andi = document.querySelector('#andi')
const sharleen = document.querySelector('#sharleen')
const claire = document.querySelector('#claire')

// create event listeners on each name
document.querySelector('#andiNext').addEventListener('click', andiNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)
document.querySelector('#claireNext').addEventListener('click', claireNext)

// functions to toggle images

function andiNext() {
	andi.classList.toggle('hidden')
	sharleen.classList.add('hidden')
	claire.classList.add('hidden')
}

function sharleenNext() {
	andi.classList.add('hidden')
	sharleen.classList.toggle('hidden')
	claire.classList.add('hidden')
}

function claireNext() {
	andi.classList.add('hidden')
	sharleen.classList.add('hidden')
	claire.classList.toggle('hidden')
}
