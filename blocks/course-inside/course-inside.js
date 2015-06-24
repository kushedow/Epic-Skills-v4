jQuery(document).ready(function(){
  // КУРС ИНСАЙД
  // аккордеон
  jQuery(".js-accordeon").click(function() {
    console.log(jQuery(this).siblings());
    jQuery(this).siblings(".course-inside__benefits__answer").slideToggle("slow");
  });
});
