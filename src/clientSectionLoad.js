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
        const flexContainerWidth = flexContainer.offsetWidth;
        const leftArrow = document.querySelector('.client-section .controls-box .left-arrow');
        const rightArrow = document.querySelector('.client-section .controls-box .right-arrow');
        let startPos = -(flexContainerWidth + 20);
        let lastItemIndex = flexItems.length-1;
        let firstItemIndex = 0;

        //turn left or right by one flex item
        const turnLeft = -(flexContainerWidth/2) - 10;
        const turnRight = (flexContainerWidth/2) + 10;

        //initial slider items position
        flexItems.forEach(el => el.style.transform = `translate(${startPos}px)`);

        let once = true;
        leftArrow.addEventListener('click', moveItemsArrows.bind({direction: turnRight}));
        rightArrow.addEventListener('click', moveItemsArrows.bind({direction: turnLeft}));
        moveItemsMouse();
        let intervalID = null;

        intervalManager(true, moveItemsLeft, 5000);

        function intervalManager(flag, animate, time){
            if(flag){
                intervalID = setInterval(animate, time);
            }else{
                clearInterval(intervalID);
            }
        }
        
        function moveItemsArrows(e){
            intervalManager(false, moveItemsLeft, 5000);
            once = true;
            flexItems.forEach((el, i) => {
                const transformStyle = el.style.transform;
                const translateX = +transformStyle.replace(/[^\d.-]/g, '');
                
                if(lastItemIndex === i && this.direction > 0 && once){
                    once = false;
                    el.style.cssText = `transform: translate(${translateX + turnLeft*5}px); transition: transform 0ms;`;
                    firstItemIndex = lastItemIndex;
                    lastItemIndex--;
                    if(lastItemIndex === -1) lastItemIndex = flexItems.length-1; 
                    return;
                }
                else if(firstItemIndex === i && this.direction < 0 && once){
                    once = false;
                    el.style.cssText = `transform: translate(${translateX + turnRight*5}px); transition: transform 0ms;`;
                    lastItemIndex = firstItemIndex;
                    firstItemIndex++;
                    if(firstItemIndex === flexItems.length) firstItemIndex = 0; 
                    return;
                }
                
                el.style.cssText = `transform: translate(${translateX + this.direction}px); transition: transform 500ms;`;
            });
            intervalManager(true, moveItemsLeft, 5000);
        }

        function moveItemsLeft(){
            once = true;
            flexItems.forEach((el, i) => {
                const transformStyle = el.style.transform;
                const translateX = +transformStyle.replace(/[^\d.-]/g, '');

                if(firstItemIndex === i && once){
                    once = false;
                    el.style.cssText = `transform: translate(${translateX + turnRight*5}px); transition: transform 0ms;`;
                    lastItemIndex = firstItemIndex;
                    firstItemIndex++;
                    if(firstItemIndex === flexItems.length) firstItemIndex = 0; 
                    return;
                }

                el.style.cssText = `transform: translate(${translateX + turnLeft}px); transition: transform 500ms;`;
            });
        }

        function moveItemsMouse(){
            let isPressed = false;
            let startX;
            let translateX;
            let allItemsTranslateX = [];
            let previous = 0;
            
            wrapper.addEventListener('mousedown', e => {
                isPressed = true;
                intervalManager(false, moveItemsLeft, 5000);
                startX = e.pageX - wrapper.offsetLeft;
                wrapper.style.transform = 'scale(1.03)';
                wrapper.style.cursor = 'grabbing';
                const transformStyle = flexItems[0].style.transform;
                translateX = +transformStyle.replace(/[^\d.-]/g, '');
                flexItems.forEach((el, i) => {
                    const transformStyle = flexItems[i].style.transform;
                    allItemsTranslateX.push(+transformStyle.replace(/[^\d.-]/g, ''));
                });
            });

            wrapper.addEventListener('mousemove', e => {
                if(!isPressed) return;
                e.preventDefault();
                const x = e.pageX - wrapper.offsetLeft;
                const walk = x - startX;

                if(previous != Math.floor((walk / turnRight))){
                    once = true;
                    previous = Math.floor((walk / turnRight));
                }

                flexItems.forEach((el, i) => {
                    if(lastItemIndex === i && walk >= 80  && once){
                        once = false;
                        el.style.cssText = `transform: translate(${allItemsTranslateX[i] + turnLeft*6}px); transition: transform 0ms;`;
                        allItemsTranslateX[i] = allItemsTranslateX[i] + turnLeft*6;
                        firstItemIndex = lastItemIndex;
                        lastItemIndex--;
                        if(lastItemIndex === -1) lastItemIndex = flexItems.length-1; 
                        return;
                    }
                    else if(firstItemIndex === i && walk <= -80 && once){
                        once = false;
                        el.style.cssText = `transform: translate(${allItemsTranslateX[i] + turnRight*6}px); transition: transform 0ms;`;
                        allItemsTranslateX[i] = allItemsTranslateX[i] + turnRight*6;
                        lastItemIndex = firstItemIndex;
                        firstItemIndex++;
                        if(firstItemIndex === flexItems.length) firstItemIndex = 0; 
                        return;
                    }

                    el.style.cssText = `transform: translate(${allItemsTranslateX[i] + walk}px); transition: transform 0ms;`;
                });
            });

            wrapper.addEventListener('mouseup', e => {
                if(!isPressed) return;
                intervalManager(true, moveItemsLeft, 5000);
                isPressed = false;
                wrapper.style.transition = 'transform 400ms';
                wrapper.style.transform = 'scale(1)';
                once = true;
                let previous = 0;

                findRightPositionForItems(e);
                allItemsTranslateX = [];
            });

            wrapper.addEventListener('mouseleave', e => {
                if(!isPressed) return;
                intervalManager(true, moveItemsLeft, 5000);
                isPressed = false;
                wrapper.style.transition = 'transform 400ms';
                wrapper.style.transform = 'scale(1)';
                once = true;
                let previous = 0;
        
                findRightPositionForItems(e);
                allItemsTranslateX = [];
            });

            function findRightPositionForItems(e){
                // how many px from startX
                let endX = (e.pageX - wrapper.offsetLeft) - startX;
                flexItems.forEach((el, i) => {
                    allItemsTranslateX[i] += endX;
                    let rightTranslatePosition;
                    if(endX < -80) rightTranslatePosition = Math.floor(allItemsTranslateX[i] / turnRight)*560; 
                    else if(endX > 80) rightTranslatePosition = Math.ceil(allItemsTranslateX[i] / turnRight)*560;
                    else rightTranslatePosition = Math.round(allItemsTranslateX[i] / turnRight)*560;
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