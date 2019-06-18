//Nav
const nav = document.querySelector('.main-nav');
const nav_height = nav.getBoundingClientRect().height
window.addEventListener('scroll', e => {
    let current_scroll = window.pageYOffset
   
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
const options = {
  offset: function (anchor, toggle) {
    console.log('Aquí')
    return 50
	},
}
var scroll = new SmoothScroll('a[href*="#"]', options);

//Eventos input
function eventInput(){
  let inputs = document.querySelectorAll('.input-field');
  let nav = document.querySelector('.main-nav')
  inputs.forEach(input => {
      input.addEventListener('focus', () => {
          nav.classList.add('.hide');
      })
      input.addEventListener('blur'), () => {
        nav.classList.remove('.hide')
      }
  }) 
}