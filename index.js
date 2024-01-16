const headerBtn = document.getElementById('header-btn');
const closeBtn = document.getElementById('close-btn');

const headerMenu = document.getElementById('header-menu')

headerBtn.addEventListener('click', toggleMenu)

closeBtn.addEventListener('click', closeMenu)

function toggleMenu() {

  headerMenu.classList.remove('hidden')


}

function closeMenu() {
  headerMenu.classList.add('hidden')
}