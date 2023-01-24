const burgerBtn = document.querySelector('.burger-btn')
const nav = document.querySelector('.nav')
const navItem = document.querySelectorAll('.nav-item')

const comingNav = function () {
	nav.classList.toggle('nav--active')
	navItem.forEach(i => i.classList.toggle('nav-items-animation'))
	let delay = 0
	navItem.forEach(i => {
		;(i.style.animationDelay = delay + 's'), (delay = delay + 0.1)
	})
}

const removeNav = function () {
	nav.classList.remove('nav--active')
	navItem.forEach(i => i.classList.remove('nav-items-animation'))
	navItem.forEach(i => (i.style.animationDelay = ''))
}

burgerBtn.addEventListener('click', comingNav)
navItem.forEach(i => i.addEventListener('click', removeNav))
