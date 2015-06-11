$(document).ready(function(){
  // футер: выпадашка для мобильных
  $( "#js-hidden-panda" ).click(function() {
    $( ".footer__nav" ).slideToggle( "slow" );
  });

  // мой сложноватый, но рабочий фикс выпадашки
  if (matchMedia) {
    var mq = window.matchMedia("(min-width: 530px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
  }

  // если тоже самое прописывать в css, то ломается .slideToggle
  function WidthChange(mq) {
    if (mq.matches) {
      $( ".footer__nav" ).css( "display", "block" );
    } else {
      $( ".footer__nav" ).css( "display", "none" );
    }
  }
});
