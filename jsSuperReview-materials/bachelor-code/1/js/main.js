// when click on final rose, hide claire and sharleen so nikki is remaining

document.querySelector('#finalRose').addEventListener('click', hide);

function hide(){
	document.querySelector('#claire').style.display = 'none';
	document.querySelector('#sharleen').style.display = 'none';
};