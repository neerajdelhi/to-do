$('ul').on('click', "li", function (){
    $(this).toggleClass('completed');
});

$('ul').on("click","span",function(e){
    $(this).parent().fadeOut(100,function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        var thisText = $(this).val();
        $(this).val("");
        $('ul').append("<li><span class='bg-danger'>&nbsp;<i class='fa fa-trash text-white'></i></span> &nbsp; "+thisText+"</li>");
        console.log('Enter key press');
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});