import createElement from "./createElement"

const menuSectionLoad = (function(){
    const content = document.getElementById('content');

    const _createMenuSection = function(){
        const menu = createElement({htmlElement: 'div', parent: content, attr: [['class', 'menu']]});
        const container = createElement({htmlElement: 'div', parent: menu, attr: [['class', 'container']]});
        const h2 = createElement({htmlElement: 'h2', parent: container});
        const ul = createElement({htmlElement: 'ul', parent: container});
        const [li1, li2, li3, li4, li5] = createElement({htmlElement: 'li', parent: ul, howMany: 5});
        const gridContainer = createElement({htmlElement: 'div', parent: container, attr: [['class', 'grid-container']]});
        const gridItemsContent = {
            title: ['Delicious Pizza', 'Delicious Burger', 'Delicious Pizza',
                    'Delicious Pasta', 'French Fries', 'Delicious Pizza',
                    'Tasty Burger', 'Tasty Burger', 'Delicious Pasta'
                    ],
            text: ['Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', 
                    'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
                    'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
                    'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
                    'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
                    'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
                    'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
                    'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
                    'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
                ],
            price: ['20', '15', '17', '18', '10', '15', '12', '14', '18'],
            type: ['pizza', 'burger', 'pizza', 'pasta', 'fries', 'pizza', 'burger', 'burger', 'pasta']
        };
    
        h2.textContent = 'Our Menu';
        li1.textContent = 'All';
        li1.classList.add('active');
        li2.textContent = 'Burger';
        li3.textContent = 'Pizza';
        li4.textContent = 'Pasta';
        li5.textContent = 'Fries';
    
        const gridItems = createElement({htmlElement: 'div', parent: gridContainer, attr: [['class', 'grid-items']], howMany: 9});
        gridItems.forEach((el, i) => {
            el.setAttribute('data-mealType', `${gridItemsContent.type[i]}`);
    
            const imgBox = createElement({htmlElement: 'div', parent: el, attr: [['class', 'img-box']]});
            const img = createElement({htmlElement: 'img', parent: imgBox, attr: [['src', `../src/img/f${i+1}.png`]]});
            const detailBox = createElement({htmlElement: 'div', parent: el, attr: [['class', 'detail-box']]});
            const h5 = createElement({htmlElement: 'h5', parent: detailBox});
            const p = createElement({htmlElement: 'p', parent: detailBox});
            const options = createElement({htmlElement: 'div', parent: detailBox, attr: [['class', 'options']]});
            const price = createElement({htmlElement: 'h6', parent: options});
            const a = createElement({htmlElement: 'a', parent: options, attr: [['href', '#']]});
    
            h5.textContent = `${gridItemsContent.title[i]}`;
            p.textContent = `${gridItemsContent.text[i]}`;
            price.textContent = `$${gridItemsContent.price[i]}`;
            a.innerHTML = '<img class="filter-white" src="../src/img/icons/shopping-cart.svg" width="23px" height="23px"/>';
        });
    
        let activeMenuEl = li1;
    
        [li1, li2, li3, li4, li5].forEach(el => {
            el.addEventListener('click', e => {
                let target = e.currentTarget;
                activeMenuEl.classList.remove('active');
                target.classList.add('active');
                activeMenuEl = target;
                let targetText = e.currentTarget.textContent.toLowerCase(); 
                
    
                gridItems.forEach(el => {
                    el.style.transition = 'transform 500ms';
                    if(targetText === 'all'){
                        el.style.transform = 'scale(1)';
                        el.style.order = '0';
                    }
                    else if(el.dataset.mealtype != targetText){
                        el.style.transform = 'scale(0)';
                        el.style.order = '2';
                    }else{
                        el.style.transform = 'scale(1)';
                        el.style.order = '1';
                    }
                });
            });
        });
    
        const btn = createElement({htmlElement: 'button', parent: container, attr: [['type', 'button'], ['class', 'btn']]});
        btn.textContent = 'View More';
    };

    const init = function(){
        _createMenuSection();
    };

    return {
        init,
    };

})();

export default menuSectionLoad