
const createContactPage = () => {
    const content = document.querySelector('#content');
    const contactContent = document.createElement('div');
    contactContent.classList.add('contactContent');

    const contactInfo  = document.createElement('form');
    contactInfo.classList.add('contactForm');

    const headInput = document.createElement('input');
    headInput.type = 'text';
    headInput.placeholder = 'Enter';
    contactInfo.appendChild(headInput);

    const userAddress = document.createElement('input');
    userAddress.type = 'text';
    userAddress.placeholder = 'Find Address';
    contactInfo.appendChild(userAddress);

    const userPhoneNumber = document.createElement('input');
    userPhoneNumber.type = 'text';
    userPhoneNumber.placeholder = 'Enter Phone';
    contactInfo.appendChild(userPhoneNumber);

    const submitBtn = document.createElement('input');
    submitBtn.type = 'submit';
    submitBtn.value = 'submit';
    contactInfo.appendChild(submitBtn);

   contactContent.appendChild(contactInfo);
   content.appendChild(contactContent);
};

export default createContactPage;