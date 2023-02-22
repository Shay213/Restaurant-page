import createElement from "./createElement";

const clientSectionLoad = (function(){
    const content = document.getElementById('content');

    const _createClientSection = function(){
        const clientSection = createElement({htmlElement: 'div', parent: content, attr: [['class', 'client-section']]});
        const container = createElement({htmlElement: 'div', parent: clientSection, attr: [['class', 'container']]});
        const h1 = createElement({htmlElement: 'h1', parent: container});
        const wrapper = createElement({htmlElement: 'div', parent: container, attr: [['class', 'wrapper']]});
        const flexContainer = createElement({htmlElement: 'div', parent: wrapper, attr: [['class', 'flex-container']]});
        const [...flexItems] = createElement({htmlElement: 'div', parent: flexContainer, attr: [['class', 'flex-items']], howMany: 6});
        
        const gridItemsContent = {
            text: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis auctor diam malesuada fermentum. Fusce rutrum molestie risus, in laoreet enim pellentesque.'],
            client: ['Mike Hamell', 'Moana Michell', 'Mike Hamell', 'Moana Michell', 'Mike Hamell', 'Moana Michell'],
            belowClient: ['magna aliqua']
        };

        flexItems.forEach((el, i) => {
            const textBox = createElement({htmlElement: 'div', parent: el, attr: [['class', 'text-box']]});
            const p1 = createElement({htmlElement: 'p', parent: textBox});
            const h6 = createElement({htmlElement: 'h6', parent: textBox});
            const p2 = createElement({htmlElement: 'p', parent: textBox});

            p1.textContent = `${gridItemsContent.text[0]}`;
            h6.textContent = `${gridItemsContent.client[i]}`;
            p2.textContent = `${gridItemsContent.belowClient[0]}`;

            const div = createElement({htmlElement: 'div', parent: el, attr: [['class', 'img-box']]});
            if((i+1) % 2){
                const img = createElement({htmlElement: 'img', parent: div, attr: [['src', '../src/img/client2.jpg']]});
            }
            else{
                const img = createElement({htmlElement: 'img', parent: div, attr: [['src', '../src/img/client1.jpg']]});
            }
        });

        const controlsDiv = createElement({htmlElement: 'div', parent: container, attr: [['class', 'controls-box']]});
        const leftArrow = createElement({htmlElement: 'div', parent: controlsDiv, attr: [['class', 'left-arrow']]});
        const img1 = createElement({htmlElement: 'img', parent: leftArrow, attr: [['src', '../src/img/icons/left.svg'], ['class', 'filter-white'], ['width', '33px'], ['height', '33px']]});
        const rightArrow = createElement({htmlElement: 'div', parent: controlsDiv, attr: [['class', 'right-arrow']]});  
        const img2 = createElement({htmlElement: 'img', parent: rightArrow, attr: [['src', '../src/img/icons/right.svg'], ['class', 'filter-white'], ['width', '33px'], ['height', '33px']]}); 

        h1.textContent = 'What Says Our Customers';
    };

    const _animateClientComments = function(){
        const wrapper = document.querySelector('.client-section .wrapper');
        const flexContainer = document.querySelector('.client-section .flex-container');
        const [...flexItems] = flexContainer.querySelectorAll('.flex-container > div');
        const leftArrow = document.querySelector('.client-section .controls-box .left-arrow');
        const rightArrow = document.querySelector('.client-section .controls-box .right-arrow');
        let gap = 20;
        let startPos = () => -flexContainer.offsetWidth - 20;
        let lastItemIndex = flexItems.length-1;
        let firstItemIndex = 0;
        let screenWidthAbove1310;
        let screenWidthBelow980;
        let screenWidthMiddle;
        let screenBelow610;
        let once = true;

        //initial slider items position
        flexItems.forEach(el => el.style.transform = `translate(${startPos()}px)`);

        screenSize();
        leftArrow.addEventListener('click', moveItemsArrows.bind({direction: 1}));
        rightArrow.addEventListener('click', moveItemsArrows.bind({direction: -1}));
        moveItemsMouse();
        
        var rTime;
        var timeOut = false;
        var delta = 200;
        window.addEventListener('resize', resize);

        function resize(e){
            intervalManager(false, moveItemsLeft, 5000);
            if(screenWidthAbove1310){
                if (window.matchMedia("(max-width: 1310px)").matches) {
                    screenWidthAbove1310 = false;
                    screenWidthMiddle = true;
                    screenWidthBelow980 = false;
                    screenBelow610 = false;
                    lastItemIndex = flexItems.length-1;
                    firstItemIndex = 0;
                    once = true;
                    flexContainer.style.width = '800px';
                    flexItems.forEach(el => el.style.cssText = `transform: translate(${startPos()}px); transition: transform 0ms; flex: 0 0 calc((100% - 20px)/2);`);
                }
            }
            else if(screenWidthMiddle){
                if (window.matchMedia("(min-width: 1310px)").matches) {
                    screenWidthAbove1310 = true;
                    screenWidthMiddle = false;
                    screenWidthBelow980 = false;
                    screenBelow610 = false;
                    lastItemIndex = flexItems.length-1;
                    firstItemIndex = 0;
                    once = true;
                    flexContainer.style.width = '1100px';
                    flexItems.forEach(el => el.style.cssText = `transform: translate(${startPos()}px); transition: transform 0ms; flex: 0 0 calc((100% - 20px)/2);`);
                }
                else if(window.matchMedia("(max-width: 980px)").matches){
                    screenWidthAbove1310 = false;
                    screenWidthMiddle = false;
                    screenWidthBelow980 = true;
                    screenBelow610 = false;
                    lastItemIndex = flexItems.length-1;
                    firstItemIndex = 0;
                    once = true;
                    flexContainer.style.width = '500px';
                    flexItems.forEach(el => el.style.cssText = `transform: translate(${startPos()}px); transition: transform 0ms; flex: 0 0 100%;`);
                }
            }
            else if(screenWidthBelow980){
                if (window.matchMedia("(min-width: 981px)").matches) {
                    screenWidthAbove1310 = false;
                    screenWidthMiddle = true;
                    screenWidthBelow980 = false;
                    screenBelow610 = false;
                    lastItemIndex = flexItems.length-1;
                    firstItemIndex = 0;
                    once = true;
                    flexContainer.style.width = '800px';
                    flexItems.forEach(el => el.style.cssText = `transform: translate(${startPos()}px); transition: transform 0ms; flex: 0 0 calc((100% - 20px)/2);`);
                }
                else if(window.matchMedia("(max-width: 610px)").matches){
                    screenWidthAbove1310 = false;
                    screenWidthMiddle = false;
                    screenWidthBelow980 = false;
                    screenBelow610 = true;
                    lastItemIndex = flexItems.length-1;
                    firstItemIndex = 0;
                    once = true;
                    flexContainer.style.width = '300px';
                    flexItems.forEach(el => el.style.cssText = `transform: translate(${startPos()}px); transition: transform 0ms; flex: 0 0 100%;`);
                }
            }
            else if(screenBelow610){
                if(window.matchMedia("(min-width: 611px)").matches){
                    screenWidthAbove1310 = false;
                    screenWidthMiddle = false;
                    screenWidthBelow980 = true;
                    screenBelow610 = false;
                    lastItemIndex = flexItems.length-1;
                    firstItemIndex = 0;
                    once = true;
                    flexContainer.style.width = '500px';
                    flexItems.forEach(el => el.style.cssText = `transform: translate(${startPos()}px); transition: transform 0ms; flex: 0 0 100%;`);
                }
            }

            rTime = new Date();
            if (timeOut === false) {
                timeOut = true;
                setTimeout(resizeEnd, delta);
            }
        };

        function resizeEnd() {
            if (new Date() - rTime < delta) {
                setTimeout(resizeEnd, delta);
            } else {
                timeOut = false;
                intervalManager(true, moveItemsLeft, 5000);
            }               
        }

        let intervalID = null;
        intervalManager(true, moveItemsLeft, 5000);

        function intervalManager(flag, animate, time){
            if(flag){
                intervalID = setInterval(animate, time);
            }else{
                clearInterval(intervalID);
            }
        }

        function screenSize(){
            if (window.matchMedia("(max-width: 1310px)").matches) {
                screenWidthAbove1310 = false;
                if(window.matchMedia("(max-width: 610px)").matches){
                    screenWidthBelow980 = false;
                    screenWidthMiddle = false;
                    screenBelow610 = true;
                }
                else if (window.matchMedia("(max-width: 980px)").matches){
                    screenWidthBelow980 = true;
                    screenWidthMiddle = false;
                    screenBelow610 = false;
                }
                else{
                    screenWidthBelow980 = false;
                    screenWidthMiddle = true;
                    screenBelow610 = false;
                }
            } else {
                screenWidthAbove1310 = true;
            }
        }
        
        function moveItemsArrows(e){
            intervalManager(false, moveItemsLeft, 5000);
            once = true;
            flexItems.forEach((el, i) => {
                const transformStyle = el.style.transform;
                const translateX = +transformStyle.replace(/[^\d.-]/g, '');
                const width = el.clientWidth + gap;
                
                if(lastItemIndex === i && this.direction > 0 && once){
                    once = false;
                    el.style.cssText = `transform: translate(${translateX - width*(flexItems.length-1)}px); transition: transform 0ms;`;
                    firstItemIndex = lastItemIndex;
                    lastItemIndex--;
                    if(lastItemIndex === -1) lastItemIndex = flexItems.length-1; 
                    return;
                }
                else if(firstItemIndex === i && this.direction < 0 && once){
                    once = false;
                    el.style.cssText = `transform: translate(${translateX + width*(flexItems.length-1)}px); transition: transform 0ms;`;
                    lastItemIndex = firstItemIndex;
                    firstItemIndex++;
                    if(firstItemIndex === flexItems.length) firstItemIndex = 0; 
                    return;
                }
                
                el.style.cssText = `transform: translate(${translateX + (this.direction * width)}px); transition: transform 500ms;`;
            });
            intervalManager(true, moveItemsLeft, 5000);
        }

        function moveItemsLeft(){
            once = true;
            flexItems.forEach((el, i) => {
                const transformStyle = el.style.transform;
                const translateX = +transformStyle.replace(/[^\d.-]/g, '');
                const width = el.clientWidth + gap;

                if(firstItemIndex === i && once){
                    once = false;
                    el.style.cssText = `transform: translate(${translateX + width*5}px); transition: transform 0ms;`;
                    lastItemIndex = firstItemIndex;
                    firstItemIndex++;
                    if(firstItemIndex === flexItems.length) firstItemIndex = 0; 
                    return;
                }

                el.style.cssText = `transform: translate(${translateX - width}px); transition: transform 500ms;`;
            });
        }

        function moveItemsMouse(){
            let isPressed = false;
            let startX;
            let allItemsTranslateX = [];
            let previous = 0;
            
            flexContainer.addEventListener('mousedown', e => {
                if(e.button != 0) return;
                isPressed = true;
                intervalManager(false, moveItemsLeft, 5000);
                startX = e.pageX - flexContainer.offsetLeft;
                flexContainer.style.transform = 'scale(1.03)';
                flexContainer.style.cursor = 'grabbing';
                flexItems.forEach((el, i) => {
                    const transformStyle = flexItems[i].style.transform;
                    allItemsTranslateX.push(+transformStyle.replace(/[^\d.-]/g, ''));
                });
            });

            flexContainer.addEventListener('mousemove', e => {
                if(!isPressed) return;
                e.preventDefault();
                const x = e.pageX - flexContainer.offsetLeft;
                const walk = x - startX;

                if(previous != Math.floor((walk / (flexItems[0].clientWidth+gap)))){
                    once = true;
                    previous = Math.floor((walk / (flexItems[0].clientWidth+gap)));
                }

                flexItems.forEach((el, i) => {
                    const width = el.clientWidth + gap;
                    if(lastItemIndex === i && walk >= 80  && once){
                        once = false;
                        el.style.cssText = `transform: translate(${allItemsTranslateX[i] - width*6}px); transition: transform 0ms;`;
                        allItemsTranslateX[i] = allItemsTranslateX[i] - width*6;
                        firstItemIndex = lastItemIndex;
                        lastItemIndex--;
                        if(lastItemIndex === -1) lastItemIndex = flexItems.length-1; 
                        return;
                    }
                    else if(firstItemIndex === i && walk <= -80 && once){
                        once = false;
                        el.style.cssText = `transform: translate(${allItemsTranslateX[i] + width*6}px); transition: transform 0ms;`;
                        allItemsTranslateX[i] = allItemsTranslateX[i] + width*6;
                        lastItemIndex = firstItemIndex;
                        firstItemIndex++;
                        if(firstItemIndex === flexItems.length) firstItemIndex = 0; 
                        return;
                    }

                    el.style.cssText = `transform: translate(${allItemsTranslateX[i] + walk}px); transition: transform 0ms;`;
                });
            });

            flexContainer.addEventListener('mouseup', e => {
                if(!isPressed) return;
                intervalManager(true, moveItemsLeft, 5000);
                isPressed = false;
                flexContainer.style.transition = 'transform 400ms';
                flexContainer.style.transform = 'scale(1)';
                once = true;
                let previous = 0;

                findRightPositionForItems(e);
                allItemsTranslateX = [];
            });

            flexContainer.addEventListener('mouseleave', e => {
                if(!isPressed) return;
                intervalManager(true, moveItemsLeft, 5000);
                isPressed = false;
                flexContainer.style.transition = 'transform 400ms';
                flexContainer.style.transform = 'scale(1)';
                once = true;
                let previous = 0;
        
                findRightPositionForItems(e);
                allItemsTranslateX = [];
            });

            function findRightPositionForItems(e){
                // how many px from startX
                let endX = (e.pageX - flexContainer.offsetLeft) - startX;
                flexItems.forEach((el, i) => {
                    const width = el.clientWidth + gap;
                    allItemsTranslateX[i] += endX;
                    let rightTranslatePosition;
                    if(endX < -80) rightTranslatePosition = Math.floor(allItemsTranslateX[i] / width)*width; 
                    else if(endX > 80) rightTranslatePosition = Math.ceil(allItemsTranslateX[i] / width)*width;
                    else rightTranslatePosition = Math.round(allItemsTranslateX[i] / width)*width;
                    el.style.cssText = `transform: translate(${rightTranslatePosition}px); transition: transform 400ms;`;
                });
            }
        }

    };

    const init = function(){
        _createClientSection();
        _animateClientComments();
    };

    return {
        init,
    };
})();

export default clientSectionLoad