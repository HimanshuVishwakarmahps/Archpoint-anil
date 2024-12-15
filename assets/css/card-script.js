// this script use for change background color for card 


document.addEventListener('scroll',()=>{
    const w=document.querySelector('.container');
    console.log(window.screenY);
    if (window.scrollY>=5000) {
        w.classList.add('w-background');

    }
    else{
        w.classList.remove('w-background');
    }
})