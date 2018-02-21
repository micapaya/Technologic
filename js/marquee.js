//  var scrollfunction = $(window).scroll(function(){

// var scrollTop = $(window).scrollTop()

//       if (scrollTop > 300)
//       {
//           $('.top-section').animate({height: '50vh'}, 50)
//       }
//       else {
//           $('.top-section').animate({height: '20vh'}, 50)
//       }
      
//        $(window).scroll(function() {
//       scrollfunction();
//       });
      
// }); 



// var scrollfunction = $(window).scroll(function(){

// var scrollTop = $(window).scrollTop()

//       if (scrollTop > 100)
//       {
//           $('.top-section').css( "height", "50vh" ).fadeOut( "slow" );
//       }
//       else {
//           $('.top-section').css( "height", "20vh" ).fadeOut( "slow" );
//       }
      
//        $(window).scroll(function() {
//       scrollfunction();
//       });
      
// }); 


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

// var scrollfunction = $(window).scroll(function(){

// var scrollTop = $(window).scrollTop()

//       if (scrollTop > 150 )
//       {
//           $('#double_ligne').css( "marginTop", "52vh",10 );
//       }
//       else {
//           $('#double_ligne').css( "marginTop", "56vh",50 );
//       }
      
//        $(window).scroll(function() {
//       scrollfunction();
//       });
      
// }); 