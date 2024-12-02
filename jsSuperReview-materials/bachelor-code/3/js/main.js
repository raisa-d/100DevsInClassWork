const contestants = document.querySelectorAll('.contestant')

Array.from(contestants).forEach(c => c.addEventListener('click', checkForRose))

function checkForRose(click){
	// whatever we click on will be the click target
	if(click.target.classList.contains('rose')){
		document.querySelector('#nikki').classList.toggle('hidden')
	}else{
		alert("Wrong!");
	}
}
