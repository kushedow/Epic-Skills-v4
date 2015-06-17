jQuery(document).ready(function(){
  // ПОДВАЛЬЧИК
  // отображение и скрытие навигашки
  jQuery("#js-hidden-panda").click(function() {
    jQuery(".footer__nav").slideToggle("slow");
  });

  // мой сложноватый, но рабочий фикс
  // до фикса: если пощелкать выпадашку, а потом увеличить окно, то у навигации оставался disply:none
  if (matchMedia) {
    var footerMQ = window.matchMedia("(min-width: 768px)");
    footerMQ.addListener(footerWidthChange);
    footerWidthChange(footerMQ);
  }

  // если тоже самое прописывать в css, то ломается .slideToggle
  function footerWidthChange(footerMQ) {
    if (footerMQ.matches) {
      jQuery(".footer__nav").show();
    } else {
      jQuery(".footer__nav").hide();
    }
  }
});
