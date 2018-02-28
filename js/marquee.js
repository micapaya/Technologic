$(document).ready(function(){
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop()

        topSectionResize(scrollTop);
        logoAnimation(scrollTop)
        imageAnimation(scrollTop);
    });


    rotulo_title();
});

function rotulo_title() {
    var txt = "// Mica Payage // développeur Web mobile ";
    var delay = 50;
    var refresh = null;

    document.title=txt;
    var txt=txt.substring(1,txt.length)+txt.charAt(0);
    refresco=setTimeout(rotulo_title,delay);
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
