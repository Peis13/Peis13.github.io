$(document).ready(function() {

    var touchmoved = false;
    $('.swipe').on('touchend', function(e){
        if(touchmoved === true){
            $('.page-home').toggleClass('show');
            $('.hero').toggleClass('height-0');
        }
        $(this).removeClass('touched');
    }).on('touchmove', function(e){
        touchmoved = true;
    }).on('touchstart', function(){
        touchmoved = false;
        $(this).addClass('touched');
    });

});