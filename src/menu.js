
const createMenuPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('menuContent');

    const heading = document.createElement('h1');
    heading.textContent = 'OuR MeNuS';
    heading.classList.add('menuHeader');

    const menuList = document.createElement('ul');

    const menuItem1 = document.createElement('li');
    menuItem1.textContent = `Chilean Seabass Ransom Miso & Truffle`;

    const imageItem1 = document.createElement('img');
    imageItem1.src = '../images/OIP.jpg';
    imageItem1.height = '125';
    imageItem1.width = '200';
    imageItem1.classList.add('menuImg');
    menuItem1.appendChild(imageItem1);


     const menuItem2 = document.createElement('li');
    menuItem2.textContent = `Crispy Duck Watermelon Salad, Pomegranate`;

    const imageItem2 = document.createElement('img');
    imageItem2.src = '../images/LSJOSZZA45A67KKCET35P6OWJA.webp'
    imageItem2.height = '125';
    imageItem2.width = '200';
    imageItem2.classList.add('menuImg');
    menuItem2.appendChild(imageItem2);


     const menuItem3 = document.createElement('li');
    menuItem3.textContent = ` Salt & Pepper Squid Yellowtail Sashimi Mandarin Ponzu`;

    const imageItem3 = document.createElement('img');
    imageItem3.src = '../images/a-plate-with-yellowtail-sashimi-1.webp'
    imageItem3.height = '125';
    imageItem3.width = '200';
    imageItem3.classList.add('menuImg');
    menuItem3.appendChild(imageItem3);

    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);

    pageContent.appendChild(heading);
    pageContent.appendChild(menuList);
    content.appendChild(pageContent);
};

export default createMenuPage;