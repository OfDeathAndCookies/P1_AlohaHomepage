// Proyect 1: ALOHA HOMEPAGE | Jonathan de la Mora

$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });

  $(".subscribeBtn").click(function(){
    const inputValue = $(".subscribeText")[0].value;
    if (inputValue.length > 0) {
      alert("Thanks for subscribing!");
    } else {
      alert("Please enter an email.");
    }
});

