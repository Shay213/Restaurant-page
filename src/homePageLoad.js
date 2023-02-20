import createElement from "./createElement";

const homePageLoad = (function (){
    const content = document.getElementById('content');

    const createHomePage = function(){
        // create header and slider
        _createHeaderAndSlider();
        _animateSlider();
        //create offer section 
        _createOfferSection();
        //create menu section
        //create about section
        //create book section
        //create client section
        //create footer
    };

    const _createMenuSection = function(){

    };

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
    
    const _createHeaderAndSlider = function(){
        const helloArea = createElement({htmlElement: 'div',parent: content, attr: [['class', 'hello-area']]});
        const bgContainer = createElement({htmlElement: 'div', parent: helloArea, attr: [['class', 'bg-container']]});
        
        createHeaderElements();
        createSliderElements();

        function createHeaderElements(){
            const header = createElement({htmlElement: 'div', parent: helloArea, attr: [['class', 'header']]});
            const container = createElement({htmlElement: 'div', parent: header, attr: [['class', 'container']]});
            const logo = createElement({htmlElement: 'div', parent: container, attr: [['class', 'logo']]});
            const h3 = createElement({htmlElement: 'h3', parent: logo});
            const input = createElement({htmlElement: 'input', parent: container, attr: [['id', 'menu-toggle'], ['type', 'checkbox']]});
            const label = createElement({htmlElement: 'label', parent: container, attr: [['class', 'menu-button-container'], ['for', 'menu-toggle']]});
            const menuBtn = createElement({htmlElement: 'div', parent: label, attr: [['class', 'menu-button']]});
            const nav = createElement({htmlElement: 'div', parent: container, attr: [['class', 'nav']]});
            const ul = createElement({htmlElement: 'ul', parent: nav});
            const [li1, li2, li3, li4] = createElement({htmlElement: 'li', parent: ul, howMany: 4});
            const aHome = createElement({htmlElement: 'a', parent: li1, attr: [['href', 'index.html']]});
            const aMenu = createElement({htmlElement: 'a', parent: li2, attr: [['href', 'menu.html']]});
            const aAbout = createElement({htmlElement: 'a', parent: li3, attr: [['href', 'about.html']]});
            const aBookTable = createElement({htmlElement: 'a', parent: li4, attr: [['href', 'book.html']]});
            const userOption = createElement({htmlElement: 'div', parent: container, attr: [['class', 'user-option']]});
            const [a1, a2, a3] = createElement({htmlElement: 'a', parent: userOption, attr: [['href', '#'], ['class', 'icon']], howMany: 3});
            const button = createElement({htmlElement: 'button', parent: userOption, attr: [['type', 'button'], ['class', 'btn']]});


            // add content to elements
            h3.textContent = 'Feane';
            aHome.textContent = 'HOME';
            aMenu.textContent = 'MENU';
            aAbout.textContent = 'ABOUT';
            aBookTable.textContent = 'BOOK TABLE';
            button.textContent = 'Order Online';

            li1.classList.add('active');
            a1.innerHTML = '<img class="filter-white" src="../src/img/icons/person.svg" width="23px" height="23px"/>';
            a2.innerHTML = '<img class="filter-white" src="../src/img/icons/shopping-cart.svg" width="23px" height="23px"/>';
            a3.innerHTML = '<img class="filter-white" src="../src/img/icons/search.svg" width="23px" height="23px"/>';
        }

        function createSliderElements(){
            const slider = createElement({htmlElement: 'div', parent: helloArea, attr: [['class', 'slider']]});
            const container = createElement({htmlElement: 'div', parent: slider, attr: [['class', 'container']]});
            const container1 = createElement({htmlElement: 'div', parent: container, attr: [['class', 'carousel']]});
            const [...sliderItems] = createElement({htmlElement: 'div', parent: container1, howMany: 3});
            sliderItems.forEach(el => {
                const h1 = createElement({htmlElement: 'h1', parent: el});
                const p = createElement({htmlElement: 'p', parent: el});
                const button = createElement({htmlElement: 'button', parent: el, attr: [['type', 'button'], ['class', 'btn']]});

                h1.textContent = 'Fast Food Restaurant';
                p.textContent = 'Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.';
                button.textContent = 'Order Now';
            });
            sliderItems[0].classList.add('active');
            const container2 = createElement({htmlElement: 'div', parent: slider, attr: [['class', 'container']]});
            const sliderIndicators = createElement({htmlElement: 'ol', parent: container2, attr: [['class', 'slider-indicators']]});
            const [li1, li2, li3] = createElement({htmlElement: 'li', parent: sliderIndicators, howMany: 3});
            li1.setAttribute('data-index', '0');
            li1.setAttribute('class', 'active');
            li2.setAttribute('data-index', '1');
            li3.setAttribute('data-index', '2');
        }

    };

    const _animateSlider = function(){
        const sliderContainer = document.querySelector('.slider .carousel');
        const [...sliderElements] = document.querySelectorAll('.slider .carousel div');
        const sliderIndicators = document.querySelectorAll('.slider li');
        let activeSliderEl = sliderElements[0];
        let activeSliderIndicator = sliderIndicators[0];
        sliderContainer.style.transition = '1000ms';
        
        let intervalID;
        sliderInterval();
        
        sliderIndicators.forEach(el => {
            el.addEventListener('click', e => {
                clearInterval(intervalID);
                let index = e.target.dataset.index;

                activeSliderEl.classList.remove('active');
                sliderElements[index].classList.add('active');
                activeSliderEl = sliderElements[index];

                activeSliderIndicator.classList.remove('active');
                sliderIndicators[index].classList.add('active');
                activeSliderIndicator = sliderIndicators[index];

                sliderContainer.style.transform = `translate(-${index*100}%)`;
                sliderInterval.call(_animateSlider, +index+1);
            });
        });

        function sliderInterval(index = 1){
            console.log(index);
            let interval = setInterval(() => {
                let activeElIndex = sliderElements.findIndex(el => el === activeSliderEl);
                if(activeElIndex >= sliderElements.length-1){
                    activeSliderEl.classList.remove('active');
                    sliderElements[0].classList.add('active');
                    activeSliderEl = sliderElements[0];

                    activeSliderIndicator.classList.remove('active');
                    sliderIndicators[0].classList.add('active');
                    activeSliderIndicator = sliderIndicators[0];

                    sliderContainer.style.transform = `translate(0%)`;
                    index = 1;
                }else{
                    activeSliderEl.classList.remove('active');
                    sliderElements[index].classList.add('active');
                    activeSliderEl = sliderElements[index];

                    activeSliderIndicator.classList.remove('active');
                    sliderIndicators[index].classList.add('active');
                    activeSliderIndicator = sliderIndicators[index];

                    sliderContainer.style.transform = `translate(-${index*100}%)`;
                    index++;
                }
            }, 5000);
            intervalID = interval;
        }
    };

    return {
        createHomePage,
    };

})();

export default homePageLoad 