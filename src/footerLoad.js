import createElement from "./createElement";

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
        const iconLocation = createElement({htmlElement: 'img', parent: aLocation, attr: [['src', '../src/img/icons/location.svg'], ['class', 'filter-white'], ['width', '23px'], ['height', '23px']]});
        const pLocation = createElement({htmlElement: 'p', parent: location});
        const phone = createElement({htmlElement: 'div', parent: item1});
        const aPhone = createElement({htmlElement: 'a', parent: phone, attr: [['href', '#']]});
        const iconPhone = createElement({htmlElement: 'img', parent: aPhone, attr: [['src', '../src/img/icons/call.svg'], ['class', 'filter-white'], ['width', '23px'], ['height', '23px']]});
        const pPhone = createElement({htmlElement: 'p', parent: phone});
        const email = createElement({htmlElement: 'div', parent: item1});
        const aEmail = createElement({htmlElement: 'a', parent: email, attr: [['href', '#']]});
        const iconEmail = createElement({htmlElement: 'img', parent: aEmail, attr: [['src', '../src/img/icons/mail.svg'], ['class', 'filter-white'], ['width', '23px'], ['height', '23px']]});
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
        const fb = createElement({htmlElement: 'img', parent: aFb, attr: [['src', '../src/img/icons/facebook.svg'], ['class', 'filter-white'], ['width', '23px'], ['height', '23px']]});
        const tw = createElement({htmlElement: 'img', parent: aTw, attr: [['src', '../src/img/icons/twitter.svg'], ['class', 'filter-white'], ['width', '23px'], ['height', '23px']]});
        const inn = createElement({htmlElement: 'img', parent: aInn, attr: [['src', '../src/img/icons/linkedin.svg'], ['class', 'filter-white'], ['width', '23px'], ['height', '23px']]});
        const insta = createElement({htmlElement: 'img', parent: aInsta, attr: [['src', '../src/img/icons/instagram.svg'], ['class', 'filter-white'], ['width', '23px'], ['height', '23px']]});

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