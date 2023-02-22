import createElement from "./createElement";

const bookSectionLoad = (function(){
    const content = document.getElementById('content');
    
    const _createBookSection = function(){
        const book = createElement({htmlElement: 'div', parent: content, attr: [['class', 'book-section']]});
        const container = createElement({htmlElement: 'div', parent: book, attr: [['class', 'container']]});
        const h1 = createElement({htmlElement: 'h1', parent: container});
        const flexContainer = createElement({htmlElement: 'div', parent: container, attr: [['class', 'flex-container']]});
        const formContainer = createElement({htmlElement: 'div', parent: flexContainer});
        const mapContainer = createElement({htmlElement: 'div', parent: flexContainer});
        const form = createElement({htmlElement: 'form', parent: formContainer, attr: [['action', '#'], ['id', 'form1']]});

        const div1 = createElement({htmlElement: 'div', parent: form});
        const name = createElement({htmlElement: 'input', parent: div1, attr: [['type', 'text'], ['name', 'firstName'], ['placeholder', 'Your Name'], ['required', '']]});
        const nameText = createElement({htmlElement: 'p', parent: div1});

        const div2 = createElement({htmlElement: 'div', parent: form});
        const phone = createElement({htmlElement: 'input', parent: div2, attr: [['type', 'tel'], ['name', 'phone'], ['placeholder', 'Phone Number'], ['required', '']]});
        const phoneText = createElement({htmlElement: 'p', parent: div2});

        const div3 = createElement({htmlElement: 'div', parent: form});
        const email = createElement({htmlElement: 'input', parent: div3, attr: [['type', 'email'], ['name', 'email'], ['placeholder', 'Your Email'], ['required', '']]});
        const emailText = createElement({htmlElement: 'p', parent: div3});

        const div4 = createElement({htmlElement: 'div', parent: form});
        const persons = createElement({htmlElement: 'input', parent: div4, attr: [['type', 'text'], ['name', 'persons'], ['placeholder', 'How many persons?'], ['required', '']]});
        const personsText = createElement({htmlElement: 'p', parent: div4});

        const div5 = createElement({htmlElement: 'div', parent: form});
        const date = createElement({htmlElement: 'input', parent: div5, attr: [['type', 'date'], ['name', 'date'], ['placeholder', 'mm/dd/yyyy'], ['required', '']]});
        const dateText = createElement({htmlElement: 'p', parent: div5});

        const button = createElement({htmlElement: 'button', parent: container, attr: [['type', 'submit'], ['class', 'btn'], ['form', 'form1']]});
        const map = createElement({htmlElement: 'iframe', parent: mapContainer, attr: [['src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48380.02180818207!2d-73.43351236763353!3d40.72348967201144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNowy%20Jork%2C%20Stany%20Zjednoczone!5e0!3m2!1spl!2spl!4v1676910449678!5m2!1spl!2spl'], 
                                                                                        ['style', 'border: 0;'], ['allowfullscreen', ''], ['loading', 'lazy'],
                                                                                     ['referrerpolicy', 'no-referrer-when-downgrade'] ]
                                                                                    });
        h1.textContent = 'Book A Table';
        button.textContent = 'BOOK NOW';
        nameText.textContent = 'Name must contain only letters';
        phoneText.textContent = 'Enter US based Phone Number in the format of: 123-456-7890';
        emailText.textContent = 'Email must be a valid address: me@mydomain.com';
        personsText.textContent = 'Enter only numbers';
        dateText.textContent = 'Enter date in the format of: mm/dd/yyyy';
    };

    const init = function(){
        _createBookSection();
    };

    return {
        init,
    };
})();

export default bookSectionLoad