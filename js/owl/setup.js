$('.owl-carousel').owlCarousel({
  loop: true, //faz o carrosel rodar infinitamente//
  margin: 10, //margin entre os itens//
  nav: false, //setinhas abaixo do carrosel//
  //adaptação da tela//
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})
