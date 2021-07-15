const btn_menu = document.querySelector('.btn-menu');
const menu_items = document.querySelector('.menu-items');

addEventListener('DOMContentLoaded', () =>{
    if (btn_menu){
        btn_menu.addEventListener('click', () =>{
            const i = document.querySelector('.fa-bars');
            i.classList.toggle('active');
            menu_items.classList.toggle('show');
        })
    }
});

const links = document.querySelectorAll('.nav-link');

// Cuando se hace click en el logo
const logo = document.querySelector('.logo');
logo.addEventListener('click', () =>{
    links.forEach( link => {
        /* links.forEach( li => li.classList.remove('active')); */
        link.classList.remove('active');
        links[0].classList.add('active');
    })
})

links.forEach( link =>{
    link.addEventListener('click', () =>{
        links.forEach( li => li.classList.remove('active'));
        link.classList.add('active');
        if(btn_menu){
            menu_items.classList.toggle('show');
        }
    })
})

/* SWITCH */

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () =>{
    document.body.classList.toggle('light');
    btnSwitch.classList.toggle('active');
})