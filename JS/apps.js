//--1---: Get by Tag name 
// const tags = document.getElementsByTagName('h1');
// for(const tag of tags){
//     tag.style.color ='orange'
// }


//--2---: Get by Class name
const classList = document.getElementsByClassName('text');
for(const element of classList){
    element.style.color = 'white'
}

//--2---: Get by ID
const headingText = document.getElementById('heading');
headingText.style.textAlign = 'center'
headingText.style.color = 'white';
headingText.style.padding = '15px';

document.getElementById('heading').style.backgroundColor = 'tomato';


const textContainer = document.getElementById('text-container');
// add class way -1 
// textContainer.className = 'text-container';
// add class way -2 
textContainer.classList.add('text-container')
// remove class 
// textContainer.classList.remove('text-container')


// add Element
const ulContainer = document.getElementById('li-content');

const myLi = document.createElement('li');
myLi.innerText = 'lorem 5';

ulContainer.appendChild(myLi)



