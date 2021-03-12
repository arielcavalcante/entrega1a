// const nome = document.querySelector('#element_0');
// const email = document.querySelector('#element_1');
// const mensagem = document.querySelector('#element_2');
// const enviar = document.querySelector('form button.primary-button');
// const form = document.querySelector('form');

const openMenu = document.querySelector('.menu-button');
const closeMenu = document.querySelector('.close-button');
const menu = document.querySelector('header nav');

function activateMenu() {
	if (menu.style.display === 'none') menu.style.display = 'flex';
	else menu.style.display = 'none';
}

openMenu.addEventListener('click', activateMenu);
closeMenu.addEventListener('click', activateMenu);
