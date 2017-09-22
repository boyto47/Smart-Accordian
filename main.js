$(document).ready(function(){
    $(".mainText > a").on("click", function(){
        if($(this).hasClass('active')){
            $(this).removeClass("active");
            $(this).siblings('.subText').slideUp(200);
            $(".mainText > a i").removeClass("fa-minus").addClass("fa-plus");
        }else{
            $(".mainText > a i").removeClass("fa-minus").addClass("fa-plus");
            $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
            $(".mainText > a").removeClass("active");
            $(this).addClass("active");
            $('.subText').slideUp(200);
            $(this).siblings('.subText').slideDown(200);
        }

    });
});