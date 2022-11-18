const menu_toggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menu_toggle.addEventListener('click', () => {
	menu_toggle.classList.toggle('active');
	sidebar.classList.toggle('active');
});
