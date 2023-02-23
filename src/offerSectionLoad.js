import createElement from "./createElement"
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import shopping from './img/icons/shopping-cart.svg';

const offerSectionLoad = (function(){
    const content = document.getElementById('content');

    const _createOfferSection = function(){
        const offer = createElement({htmlElement: 'div', parent: content, attr: [['class', 'offer']]});
        const container = createElement({htmlElement: 'div', parent: offer, attr: [['class', 'container']]});
        const gridContainer = createElement({htmlElement: 'div', parent: container, attr: [['class', 'grid-container']]});
        const gridItems = createElement({htmlElement: 'div', parent: gridContainer, attr: [['class', 'grid-items']], howMany: 2});
        const myImg1 = new Image();
        const myImg2 = new Image();
        const iconShopping = new Image();
        const iconShopping2 = new Image();
        myImg1.src = img1;
        myImg2.src = img2;
        iconShopping.src = shopping;
        iconShopping.setAttribute('class', 'filter-white icons-small');
        iconShopping2.src = shopping;
        iconShopping2.setAttribute('class', 'filter-white icons-small');

        const gridItemsContent = {
            imgSrc: [myImg1, myImg2],
            title: ['Tasty Thursdays', 'Pizza Days'],
            discount: ['20', '15'],
            icons: [iconShopping, iconShopping2]
        };

        gridItems.forEach((el, i) => {
            const imgBox = createElement({htmlElement: 'div', parent: el, attr: [['class', 'img-box']]});
            imgBox.appendChild(gridItemsContent.imgSrc[i]);
            const detailBox = createElement({htmlElement: 'div', parent: el, attr: [['class', 'detail-box']]});
            const h5 = createElement({htmlElement: 'h5', parent: detailBox});
            const h6 = createElement({htmlElement: 'h6', parent: detailBox});
            const btn = createElement({htmlElement: 'button', parent: detailBox, attr: [['type', 'button'], ['class', 'btn']]});

            h5.textContent = `${gridItemsContent.title[i]}`;
            h6.innerHTML = `<span>${gridItemsContent.discount[i]}%</span> Off`;
            btn.innerHTML = 'Order Now';
            btn.appendChild(gridItemsContent.icons[i]);
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