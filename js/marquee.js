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
