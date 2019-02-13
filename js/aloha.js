// Proyect 1: ALOHA HOMEPAGE | Jonathan de la Mora


// CLOTHES CAROUSEL
$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });


//SUSCRIBE NEWSFEED

const subscribe = $(".subscribe--submit");
const emailFormat = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

subscribe.click((e) => {
  let inputEmail = $(".subscribe--email").val();
  e.preventDefault();
  // if (inputEmail.length === (0 && '/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i') ){
  if (inputEmail.match(emailFormat)) {
    alert("Thanks for subscribing!");
  } else {
    alert("The e-mail seems to be wrong... :/");
  }
});


