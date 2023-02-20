import createElement from "./createElement";

const aboutSectionLoad = (function(){
    const content = document.getElementById('content');
    
    const _createAboutSection = function(){
        const about = createElement({htmlElement: 'div', parent: content, attr: [['class', 'about']]});
        const container = createElement({htmlElement: 'div', parent: about, attr: [['class', 'container']]});
        const img = createElement({htmlElement: 'img', parent: container, attr: [['src', '../src/img/about-img.png']]});
        const textContainer = createElement({htmlElement: 'div', parent: container});
        const h2 = createElement({htmlElement: 'h2', parent: textContainer});
        const p = createElement({htmlElement: 'p', parent: textContainer});
        const button = createElement({htmlElement: 'button', parent: textContainer, attr: [['type', 'button'], ['class', 'btn']]});

        h2.textContent = 'We Are Feane';
        p.textContent = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All";
        button.textContent = 'Read More';
    };

    _createAboutSection();

    return {};
})();

export default aboutSectionLoad