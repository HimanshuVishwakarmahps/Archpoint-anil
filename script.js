
// =================navscroll====================
document.addEventListener('scroll',()=>{
    const navbar=document.querySelector('nav');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');

    }
    else{
        navbar.classList.remove('scrolled');
    }
})


document.addEventListener('scroll',()=>{
    const bcc=document.querySelector('.section--11');
    // console.log(window.screenY);
    if (window.scrollY>=1800) {
        bcc.classList.add('background');

    }
    else{
        bcc.classList.remove('background');
    }
})

// ========lenis scrllo smooth==================




