function customRender(obj, container){
    // 
    const domElement = document.createElement(obj.type);
    for (const prop in obj.props) {
        domElement.setAttribute(prop, obj.props[prop]);
    }
    domElement.innerHTML = obj.childrens;
    container.appendChild(domElement);
}
const obj = {
    type:'a',
    props:{
        href: 'https://www.google.com',
        target:'_blank'
    },
    childrens : 'Google'
}


const mainContainer = document.querySelector('#root');

customRender(obj, mainContainer);
