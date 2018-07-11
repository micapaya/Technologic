$(document).ready(function(){
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop()

        topSectionResize(scrollTop);
        logoAnimation(scrollTop)
        imageAnimation(scrollTop);
    });


    var siteTitle = "// Mica Payage // développeur Web mobile ";
    titleScroll(siteTitle)
});

function titleScroll(str) {
    var delay = 150;
    document.title=str;
    var str=str.substring(1,str.length)+str.charAt(0);
    setTimeout(()=>titleScroll(str),delay);
}

function logoAnimation(scrollTop){
    if (scrollTop > 40 ){
        $("object.logoS").addClass("logoSA");
        $("hr").addClass("animateHR");
        $(".content_logo").addClass("anim");
        $(".titlesection").addClass("scaleright");
    }
};

function topSectionResize(scrollTop){
    if (scrollTop > 50 ){
        $('.top-section').css( "height", "30vh" );
        $('#double_ligne').css( "marginTop", "30.5vh");
        $('.logo').css( "height", "25vh");
    }
    else{
        $('.top-section').css( "height", "50vh" );
        $('#double_ligne').css( "marginTop", "50.5vh");
        $('.logo').css( "height", "32vh");
    }
};

function imageAnimation(scrollTop){
    if (scrollTop > 700 ){
        $(".animI").addClass("imgAnim");
    }
};
 
