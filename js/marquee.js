var scrollfunction = $(window).scroll(function(){

var scrollTop = $(window).scrollTop()

      if (scrollTop > 50 )
      {
          $('.top-section').css( "height", "30vh" );
          $('#double_ligne').css( "marginTop", "30.5vh");
          $('.logo').css( "height", "25vh");
      }
      else {
          $('.top-section').css( "height", "50vh" );
          $('#double_ligne').css( "marginTop", "50.5vh");
          $('.logo').css( "height", "32vh");
      }
      
       $(window).scroll(function() {
      scrollfunction();
      });
      
}); 
 
var scrollfunction = $(window).scroll(function(){

var scrollTop = $(window).scrollTop()

      if (scrollTop > 40 )
      {
          $("object.logoS").addClass("logoSA");
          $("hr").addClass("animateHR");
          $(".content_logo").addClass("anim");
          $(".titlesection").addClass("scaleright");
      }
     
      
       $(window).scroll(function() {
      scrollfunction();
      });
      
}); 
 

     
      
