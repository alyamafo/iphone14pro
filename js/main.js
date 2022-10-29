const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const btnNew= document.querySelector('.new-btn-link');
const newBlock = document.querySelector('.new');
const btnColor = document.querySelector('.btn-color');
const colorBlock = document.querySelector('.color');
const btnBuy = document.querySelector('.btn-buy');
const contactsBlock = document.querySelector('.contacts');

function handleButtonClick(e) {
    const arrBlock =[newBlock, colorBlock, contactsBlock]
   const id =e.target.id
    arrBlock[id].scrollIntoView({block: "center", behavior: "smooth"});
 }

 btnNew.addEventListener('click', handleButtonClick);
 btnColor.addEventListener('click', handleButtonClick);
 btnBuy.addEventListener('click', handleButtonClick);


 
btn.addEventListener('click', ()=>{
   nav.classList.toggle('menu-open');
})



