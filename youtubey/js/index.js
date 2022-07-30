$(document).ready(function() {
    $(".first-list-elemint").addClass("active")
    $(".nav-item").click(function () {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });
    $("#toggler").click(function(event) {
        $("#warp").toggleClass("toggled");
    
        var right = $('.sidebar').css("right");
        if (right == "0px")
        {
            $(".sidebar").css({'right' :'-17rem'});
            $(".layer").fadeOut();
        }
        else {
        $(".sidebar").css({'right' :'0'})
        $(".layer").fadeIn();
        }
    });
    $('.layer').click(function(){
        $('.sidebar').css({'right':'-17rem'});
        $('.layer').fadeOut();
    });
    $(".search-icon").click(function (){
        $(".search-input").slideToggle("slow")
    })
});