// Responsividade

let menuitems = document.getElementById('MenuItems')

menuitems.style.maxHeight = '0px';

function menutoggle () {
    if (menuitems.style.maxHeight == '0px') {
        menuitems.style.maxHeight = '200px';
    } else {
        menuitems.style.maxHeight = '0px';
    }
}

// Galeria de fotos 

if (document.title === 'Camisa Vermelha | RedStore') 
{
    let productimg = document.getElementById('product-img');
    let smallimg = document.getElementsByClassName('small-img');
    
    smallimg[0].onclick = function () {
        productimg.src = smallimg[0].src;
    }
    smallimg[1].onclick = function () {
        productimg.src = smallimg[1].src;
    }
    smallimg[2].onclick = function () {
        productimg.src = smallimg[2].src;
    }
    smallimg[3].onclick = function () {
        productimg.src = smallimg[3].src;
    }
}

// Troca entre Registro e Login

if (document.title === 'Login | RedStore') 
{
    let loginform = document.getElementById('loginform');
    let regform = document.getElementById('regform');
    let indicator = document.getElementById('indicator');
    
    function register() {
        regform.style.transform = 'translateX(0px)';
        loginform.style.transform = 'translateX(0px)';
        indicator.style.transform = 'translateX(100px)';
    }
    function login() {
        loginform.style.transform = 'translateX(300px)';
        regform.style.transform = 'translateX(300px)';
        indicator.style.transform = 'translateX(0px)';
    }
}