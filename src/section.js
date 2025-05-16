import createContactPage from "./contact";
import createMenuPage from "./menu";
import createRestaurantHomePage from "./Rest";

const createSections = () => {
    const content = document.querySelector('#content');


    const divOne = document.createElement('div');
    const divTwo = document.createElement('div');
    const divThree = document.createElement('div');

    divOne.setAttribute('id', 'homeBtn');
    divTwo.setAttribute('id', 'menuBtn');
    divThree.setAttribute('id', 'contactBtn');

    divOne.classList.add('click');
    divTwo.classList.add('click');
    divThree.classList.add('click');

    divOne.textContent = 'Home';
    divTwo.textContent = 'Menu';
    divThree.textContent = 'Contact';

    content.appendChild(divOne);
    content.appendChild(divTwo);
    content.appendChild(divThree);

    divOne.addEventListener('click', () => {
        clearSection();
        createRestaurantHomePage();
    });

    divTwo.addEventListener('click', () => {
        clearSection();
        createMenuPage();
    });

    divThree.addEventListener('click', () => {
        clearSection();
        createContactPage();
    });
};

function clearSection() {
    const content = document.querySelector("#content");
    const pageContent = document.querySelector(".page-content");
    if (pageContent) {
        content.removeChild(pageContent);
    }
};


export default createSections;