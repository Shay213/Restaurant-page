import createElement from "./createElement";
import locationI from './img/icons/location.svg';
import phoneI from './img/icons/call.svg';
import emailI from './img/icons/mail.svg';
import fbI from './img/icons/facebook.svg';
import twI from './img/icons/twitter.svg';
import innI from './img/icons/linkedin.svg';
import instI from './img/icons/instagram.svg';

const footerLoad = (function(){
    const content = document.getElementById('content');

    const _createFooter = function(){
        const footer = createElement({htmlElement: 'div', parent: content, attr: [['class', 'footer']]});
        const container = createElement({htmlElement: 'div', parent: footer, attr: [['class', 'container']]});
        const flexContainer = createElement({htmlElement: 'div', parent: container, attr: [['class', 'flex-container']]});
        const [item1, item2, item3] = createElement({htmlElement: 'div', parent: flexContainer, attr: [['class', 'flex-items']], howMany: 3});
        // CONTACT
        const h4Contact = createElement({htmlElement: 'h4', parent: item1});
        const location = createElement({htmlElement: 'div', parent: item1});
        const aLocation = createElement({htmlElement: 'a', parent: location, attr: [['href', '#']]});
        const icon1 = new Image();
        icon1.src = locationI;
        icon1.setAttribute('class', 'filter-white icons-small');
        aLocation.appendChild(icon1);
        const pLocation = createElement({htmlElement: 'p', parent: location});
        const phone = createElement({htmlElement: 'div', parent: item1});
        const aPhone = createElement({htmlElement: 'a', parent: phone, attr: [['href', '#']]});
        const icon2 = new Image();
        icon2.src = phoneI;
        icon2.setAttribute('class', 'filter-white icons-small');
        aPhone.appendChild(icon2);
        const pPhone = createElement({htmlElement: 'p', parent: phone});
        const email = createElement({htmlElement: 'div', parent: item1});
        const aEmail = createElement({htmlElement: 'a', parent: email, attr: [['href', '#']]});
        const icon3 = new Image();
        icon3.src = emailI;
        icon3.setAttribute('class', 'filter-white icons-small');
        aEmail.appendChild(icon3);
        const pEmail = createElement({htmlElement: 'p', parent: email});

        h4Contact.textContent = 'Contact Us';
        pLocation.textContent = 'Location';
        pPhone.textContent = 'Call +01 1234567890';
        pEmail.textContent = 'demo@gmail.com';

        //Feane
        const aFeane = createElement({htmlElement: 'a', parent: item2, attr: [['href', '#'], ['class', 'a-feane']]});
        const pFeane = createElement({htmlElement: 'p', parent: item2});
        const iconsBox = createElement({htmlElement: 'div', parent: item2, attr: [['class', 'icons-box']]});
        const aFb = createElement({htmlElement: 'a', parent: iconsBox, attr: [['href', '#']]});
        const aTw = createElement({htmlElement: 'a', parent: iconsBox, attr: [['href', '#']]});
        const aInn = createElement({htmlElement: 'a', parent: iconsBox, attr: [['href', '#']]});
        const aInsta = createElement({htmlElement: 'a', parent: iconsBox, attr: [['href', '#']]});
        const icon4 = new Image();
        icon4.src = fbI;
        icon4.setAttribute('class', 'filter-white icons-small');
        aFb.appendChild(icon4);
        const icon5 = new Image();
        icon5.src = twI;
        icon5.setAttribute('class', 'filter-white icons-small');
        aTw.appendChild(icon5);
        const icon6 = new Image();
        icon6.src = innI;
        icon6.setAttribute('class', 'filter-white icons-small');
        aInn.appendChild(icon6);
        const icon7 = new Image();
        icon7.src = instI;
        icon7.setAttribute('class', 'filter-white icons-small');
        aInsta.appendChild(icon7);

        aFeane.textContent = 'Feane';
        pFeane.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum efficitur odio quis placerat. Proin augue libero, congue vel tincidunt.';


        //Opening Hours
        const h4Opening = createElement({htmlElement: 'h4', parent: item3});
        const p1Opening = createElement({htmlElement: 'p', parent: item3});
        const p2Opening = createElement({htmlElement: 'p', parent: item3});

        h4Opening.textContent = 'Opening Hours';
        p1Opening.textContent = 'Everyday';
        p2Opening.textContent = '10.00 Am - 10.00 Pm';

        const copyright= createElement({htmlElement: 'p', parent: container, attr: [['class', 'copyright']]});

        copyright.innerHTML = '&copy; This project is a clone based on <a href="https://themewagon.com/">ThemeWagon</a> templates, used for educational purposes only';
    };

    const init = function(){
        _createFooter();
    };

    return {
        init,
    };

})();

export default footerLoad