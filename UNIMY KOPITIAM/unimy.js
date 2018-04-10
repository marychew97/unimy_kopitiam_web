
$(document).ready(function(){
    $("#link").on("mouseover",function(){
        $(this).css({"font-style":"italic"});
        $("i").css({"font-style":"italic"});
        $(this).on("mouseout",function(){
            $(this).css({"font-style":"normal"});
            $("i").css({"font-style":"normal"});
        });
    });
});
