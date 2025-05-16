
const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('restContent');

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome To Rèst de Gastronomica!';
    pageContent.appendChild(heading);

    const image = document.createElement('img');
    image.src = '../images/Rectangle-39.png'
    image.height = '300';
    pageContent.appendChild(image);

    const subtext = document.createElement('p');
    subtext.textContent = `We aim to serve the best experience. Don't miss out,
     Join us- We will leave you wanting more!`
     pageContent.appendChild(subtext);
     content.appendChild(pageContent);

}

export default createRestaurantHomePage;