$(document).ready(function(){
  $( "#hidden-panda" ).click(function() {
    $(this).parent().toggleClass("footer__menu--opened");
    $( ".footer__nav" ).slideToggle( "slow" );
  });
});
