import { contactText, menuText, pageLoad } from "./pageload";
import { menuPage } from "./menuPage";
import { contactPage } from "./contactPage";

pageLoad();

let currentPage;


menuText.addEventListener('click', (e) => {

    if (currentPage === 'menu') return;
    currentPage = 'menu'

    
    const boxes = document.querySelectorAll('.contact-container');

    boxes.forEach(box => {
        box.remove();
    });

    menuPage();
})

contactText.addEventListener('click', (e) => {

    if (currentPage === 'contact') return;
    currentPage = 'contact'

    
    const boxes = document.querySelectorAll('.item-container');

    boxes.forEach(box => {
        box.remove();
    });

    contactPage()
})

