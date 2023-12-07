//###### MY CODE #######

// create variable for contestants
const contestants = document.querySelectorAll('.contestant')

// add event listeners to each contestant
contestants.forEach(contestant => {
	contestant.addEventListener('click', check)	
});


function check(click) {
	if (click.target.classList.contains('rose')) {
		document.querySelector('#nikki').classList.toggle('hidden')
	} else {
		alert('Wrong!')
	}
}

// original in class code:

/* 
const contestants = document.querySelectorAll('.contestant')

Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

function checkForRose(click){
	if(click.target.classList.contains('rose')){
		document.querySelector('#nikki').classList.toggle('hidden')
	}else{
		alert("Wrong!");
	}
}
*/