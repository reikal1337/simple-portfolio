const menuBtn = document.getElementById('menu-button')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
    
}

menuBtn.addEventListener('click', toggleButton)