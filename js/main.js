const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const newBtn = document.querySelector('.new-btn-link');
const newBlock = document.querySelector('.new')
function handleButtonClick() {
    newBlock.scrollIntoView({block: "center", behavior: "smooth"});
 }
 
 newBtn.addEventListener('click', handleButtonClick);

 
btn.addEventListener('click', ()=>{
   nav.classList.toggle('menu-open');
})



