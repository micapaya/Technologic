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

var scrollfunction = $(window).scroll(function(){

var scrollTop = $(window).scrollTop()

      if (scrollTop > 700 )
      {
          $(".animI").addClass("imgAnim");
          
      }
     
      
       $(window).scroll(function() {
      scrollfunction();
      });
      
}); 


var txt="// Mica Payage // développeur Web mobile ";
var espera=50;
var refresco=null;
function rotulo_title() {
        document.title=txt;
        txt=txt.substring(1,txt.length)+txt.charAt(0);
        refresco=setTimeout("rotulo_title()",espera);}
rotulo_title();


     
      
