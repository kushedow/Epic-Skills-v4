jQuery(document).ready(function(){
  // КУРС ИНСАЙД
  // аккордеон
  jQuery(".js-accordeon").click(function() {
    console.log(jQuery(this).siblings());
    jQuery(this).siblings(".course-inside__benefits__answer").slideToggle("slow");
  });

  // ШАПОЧКА
  // отображение и скрытие навигашки
  jQuery("#js-header-panda").click(function() {
    jQuery(".header__nav").slideToggle("slow");
  });

  // мой сложноватый, но рабочий фикс
  // до фикса: если пощелкать выпадашку, а потом увеличить окно, то у навигации оставался disply:none
  if (matchMedia) {
    var headerMQ = window.matchMedia("(min-width: 768px)");
    headerMQ.addListener(headerWidthChange);
    headerWidthChange(headerMQ);
  }

  // если тоже самое прописывать в css, то ломается .slideToggle
  function headerWidthChange(headerMQ) {
    if (headerMQ.matches) {
      jQuery(".header__nav").show();
    } else {
      jQuery(".header__nav").hide();
    }
  }

  // ПОДВАЛЬЧИК
  // отображение и скрытие навигашки
  jQuery("#js-footer-panda").click(function() {
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
