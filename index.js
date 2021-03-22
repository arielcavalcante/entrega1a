const openMenu = document.querySelector('.menu-button');
const closeMenu = document.querySelector('.close-button');
const menu = document.querySelector('header nav');

const card = document.querySelectorAll('.card');

const bonito = document.getElementById('bonito');
const ubajara = document.getElementById('ubajara');

function activateMenu() {
	if (menu.style.display === 'none') menu.style.display = 'flex';
	else menu.style.display = 'none';
}

function handleCardClick() {
	const mainLink = this.querySelector('.main-link');
	const isTextSelected = window.getSelection().toString();
	if (!isTextSelected) mainLink.click();
}
card.forEach(addClick);

function addClick(element) {
	element.addEventListener('click', handleCardClick);
}

openMenu.addEventListener('click', activateMenu);
closeMenu.addEventListener('click', activateMenu);
