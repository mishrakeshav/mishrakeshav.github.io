(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space




let cards = document.getElementsByClassName('card');

for(const element of cards){
    element.addEventListener('mouseover', ()=>{
    element.setAttribute('class', 'card horizontal z-depth-5');
  })
}

for(const element of cards){
  element.addEventListener('mouseout', ()=>{
    element.setAttribute('class', 'card horizontal');
  })
}




// let home = document.getElementById('home');
// home.addEventListener('mouseover', ()=>{
//   home.setAttribute('class', 'container z-depth-5');
// })
// home.addEventListener('mouseout', ()=>{
//   home.setAttribute('class', 'container');
// })




// let images = document.getElementsByClassName('responsive-img');

// for(const element of images){
//   element.addEventListener('mouseover', ()=>{
//   element.setAttribute('class', 'responsive-img z-depth-5');
// })
// }

// for(const element of images){
// element.addEventListener('mouseout', ()=>{
//   element.setAttribute('class', 'responsive-img');
// })
// }


