$(document).mousemove(function(e){
    var $width = ($(document).width())/255;
    var $height = ($(document).height())/255;
    var $pageX = parseInt(e.pageX / $width,10);
    var $pageY = parseInt(e.pageY / $height,10);
    $(".gradient").css("background-image", "radial-gradient(at 90% 90%, hsla("+($pageX - 60)+", 100%, 50%,1) 0, transparent 50%), radial-gradient(at 90% 10%, hsla("+($pageY + 120)+", 100%, 50%,1) 0, transparent 50%), radial-gradient(at 10% 90%, hsla("+($pageY - 100)+",100%, 50%,1) 0, transparent 50%), radial-gradient(at 10% 10%, hsla("+($pageX + 100)+",100%, 50%,1) 0, transparent 100%)");
    });