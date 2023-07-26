const aboutText = document.createElement('h3')
aboutText.textContent = 'About'
const menuText = document.createElement('h3')
menuText.textContent = 'Menu'
const contactText = document.createElement('h3')
contactText.textContent = 'Contact'

const pageLoad = () => {
    const body = document.querySelector('body')

    const header = document.createElement('header')
    const restaurantName = document.createElement('h1')
    restaurantName.textContent = 'Just OK Food'



    const mainContent = document.querySelector('.content')

    const navContent = document.createElement('div')
    navContent.classList.add('nav-content')



    body.prepend(restaurantName)
    mainContent.appendChild(navContent)
    navContent.appendChild(aboutText)
    navContent.appendChild(menuText)
    navContent.appendChild(contactText)

}


export { pageLoad, aboutText, menuText, contactText }
