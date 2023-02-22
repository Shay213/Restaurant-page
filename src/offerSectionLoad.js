import createElement from "./createElement"

const offerSectionLoad = (function(){
    const content = document.getElementById('content');

    const _createOfferSection = function(){
        const offer = createElement({htmlElement: 'div', parent: content, attr: [['class', 'offer']]});
        const container = createElement({htmlElement: 'div', parent: offer, attr: [['class', 'container']]});
        const gridContainer = createElement({htmlElement: 'div', parent: container, attr: [['class', 'grid-container']]});
        const gridItems = createElement({htmlElement: 'div', parent: gridContainer, attr: [['class', 'grid-items']], howMany: 2});

        const gridItemsContent = {
            imgSrc: ['../src/img/img1.jpg', '../src/img/img2.jpg'],
            title: ['Tasty Thursdays', 'Pizza Days'],
            discount: ['20', '15']
        };

        gridItems.forEach((el, i) => {
            const imgBox = createElement({htmlElement: 'div', parent: el, attr: [['class', 'img-box']]});
            const img = createElement({htmlElement: 'img', parent: imgBox, attr: [['src', `${gridItemsContent.imgSrc[i]}`]]});
            const detailBox = createElement({htmlElement: 'div', parent: el, attr: [['class', 'detail-box']]});
            const h5 = createElement({htmlElement: 'h5', parent: detailBox});
            const h6 = createElement({htmlElement: 'h6', parent: detailBox});
            const btn = createElement({htmlElement: 'button', parent: detailBox, attr: [['type', 'button'], ['class', 'btn']]});

            h5.textContent = `${gridItemsContent.title[i]}`;
            h6.innerHTML = `<span>${gridItemsContent.discount[i]}%</span> Off`;
            btn.innerHTML = 'Order Now <img class="filter-white" src="../src/img/icons/shopping-cart.svg" width="23px" height="23px"/>';
        });
    };
    
    const init = function(){
        _createOfferSection();
    };
    
    return {
        init,
    };
    
})();

export default offerSectionLoad