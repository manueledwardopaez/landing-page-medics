const openMenu = document.querySelector('#openMenu')
const navMobile = document.querySelector('#navMobile')
const closeMenu = document.querySelector('#closeMenu')
const body = document.querySelector('#body')

openMenu.addEventListener('click', () => {
    navMobile.classList.add('show')
    body.classList.add('noScroll')
})

closeMenu.addEventListener('click', () => {
    navMobile.classList.remove('show')
    body.classList.remove('noScroll')
})