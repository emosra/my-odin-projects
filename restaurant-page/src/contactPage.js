const contactPage = () => {
    const mainContent = document.querySelector('.content')

    const contactInfoContainer = document.createElement('div')
    const contactInfo = document.createElement('p')
    contactInfoContainer.classList.add('contact-container')

    contactInfo.textContent = 'here is so contact info'


    mainContent.appendChild(contactInfoContainer)
    contactInfoContainer.appendChild(contactInfo)
}

export { contactPage }