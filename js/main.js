//Nav
const nav = document.querySelector('.main-nav');
const nav_height = nav.getBoundingClientRect().height
window.addEventListener('scroll', e => {
    let current_scroll = window.pageYOffset
    console.log(current_scroll, nav_height)
    if(current_scroll > nav_height) nav.classList.add('float')
    else if(current_scroll < nav_height) nav.classList.remove('float')
})

//Parallax
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
    M.Sidenav.init(document.querySelectorAll('.sidenav'), {edge: 'right'});
  });
//Ancla
var scroll = new SmoothScroll('a[href*="#"]');
