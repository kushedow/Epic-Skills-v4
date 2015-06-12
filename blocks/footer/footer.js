jQuery(document).ready(function(){
  // футер: выпадашка для мобильных
  jQuery( "#js-hidden-panda" ).click(function() {
    jQuery( ".footer__nav" ).slideToggle( "slow" );
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
      jQuery( ".footer__nav" ).css( "display", "block" );
    } else {
      jQuery( ".footer__nav" ).css( "display", "none" );
    }
  }
});
