//Nav
const nav = document.querySelector('.main-nav');
const nav_height = nav.getBoundingClientRect().height;
const URL_SHOP =  document.querySelector('[name="url-shop"]').content;
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
    eventInput()
    let a_shops = document.querySelectorAll('a[shop]')
    a_shops.forEach(a => a.href = URL_SHOP);
    messageEvent()
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
  console.log("Add events inputs")
  let inputs = document.querySelectorAll('input');
  let nav = document.querySelector('.main-nav')
  inputs.forEach(input => {
      input.addEventListener('focus', () => {
          nav.classList.add('hide');
      })
      input.addEventListener('blur', () => {
        nav.classList.remove('hide')
      })
  }) 
}
function messageEvent(){
  let div = document.querySelector(".message")
    div.addEventListener('click', evento)
  function evento(e) {
    if(e.target.classList.contains('close')){
      div.style.display = 'none'
      
    }else {
      window.open(URL_SHOP)
    }
  }
}
