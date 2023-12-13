// create array of each element that has class of contestant
const contestants = document.querySelectorAll('.contestant')

// for each item in array, add an event listener. upon a click, run checkForRose function
Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

function checkForRose(click){
	// if the item clicked on has the class of rose
	if(click.target.classList.contains('rose')){
		// unhide nikki's image
		document.querySelector('#nikki').classList.toggle('hidden')
	
	// otherwise
	} else {
		// alert user they are wrong
		alert('Wrong!');
	}
}
