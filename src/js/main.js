const body = document.body
const toggleMenu = document.querySelector('.burger')
const toggleMenuLines = document.querySelector('.burger__lines')
const nav = document.querySelector('.nav')

toggleMenu.addEventListener('click', () => {
    body.classList.toggle('no-scroll')
    toggleMenuLines.classList.toggle('burger__lines--active')
    nav.classList.toggle('nav--show')

})


