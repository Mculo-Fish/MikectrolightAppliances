//Global Variables

const hamburger = document.querySelector('.hamburger');
const list = document.querySelector('nav ul');
let burgerSlice = document.querySelectorAll('.line');
let slice = Array.from(burgerSlice);
let body = document.querySelector('body');

//Event Listeners

hamburger.addEventListener('click',()=>{
    
    //NAVBAR & HAMBURGER ANIMATION
    
    list.classList.toggle('menu-open');
    hamburger.classList.toggle('rotate-menu');

    //if menu is open scroll is disabled
    if(list.classList.contains('menu-open')){
       
        body.style.overflowY = 'hidden';
     
    }else{
        body.style.overflowY = 'scroll';
       
        
    }

    //MENU REMOVAL AFTER CLICK
    let lines = Array.from(list.children);

    lines.forEach(
        (a)=>{
            a.addEventListener('click',()=>{
                a.parentElement.classList.remove('menu-open');
            })
        }
    )

})

//Clears The Form after Submit
document.querySelector('form').addEventListener('submit',function(){
    
})








