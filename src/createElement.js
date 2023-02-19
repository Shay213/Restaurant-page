const createElement = function({htmlElement, parent, attr=[['','']], referenceNode=null, howMany = 1}){
    const elements = [];
    for(let i=1; i<=howMany; i++){
        const element = document.createElement(htmlElement);
        elements.push(element);
        
        if(attr[0][0] && attr[0][1]){
            attr.forEach(el => {
                element.setAttribute(el[0], el[1]);
            });
        }
        
        referenceNode ? parent.insertBefore(element, referenceNode) : parent.appendChild(element);

        if(i===howMany && howMany === 1)  return element;
        else if(i===howMany && howMany > 1) return elements;
    }
};

export default createElement