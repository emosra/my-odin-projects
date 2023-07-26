const menuItems = [
    {
        food: 'nuggets',
        desc: 'lorem itsum'
    },
    {
        food: 'nuggets',
        desc: 'lorem itsum'
    },
    {
        food: 'nuggets',
        desc: 'lorem itsum'
    },
    {
        food: 'nuggets',
        desc: 'lorem itsum'
    }
]

const menuPage = () => {

    const mainContent = document.querySelector('.content')

    for (let i = 0; i < menuItems.length; i++) {
        const itemContainer = document.createElement('div')
        const itemName = document.createElement('h4')
        const itemImg = document.createElement('img')
        const itemDesc = document.createElement('p')

        itemContainer.classList.add('item-container')
        itemImg.src = `../src/images/${menuItems[i].food}.png`
        itemName.textContent = menuItems[i].food;
        itemDesc.textContent = menuItems[i].desc;

        mainContent.appendChild(itemContainer)
        itemContainer.appendChild(itemImg)
        itemContainer.appendChild(itemName)
        itemContainer.appendChild(itemDesc)
    }
}

export { menuPage }