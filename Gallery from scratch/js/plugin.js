$(document).ready(function(){
    $('.gallery img').mouseenter(function(){
        var preview_width = $(".preview_panel").width(),// know preview width

            preview_height = preview_width, // make image square
            alt = $(this).attr('alt'), // getting alt value
            src = $(this).attr('src'); // getting src value

        // set values to preview panel
        var prev_img = $('.preview_panel img').attr({ 
            src: src,
            alt: alt
        });
        $('.preview_panel').append(prev_img);

        $('.preview_panel img').css({
            width: preview_width
        })
    })
    $('.gallery img').mouseleave(function(){
        var prev_img = $('.preview_panel img').attr({ src: '',alt:''});
        $('.preview_panel').append(prev_img)
    })
    // starting modal
    $('.gallery img').on('click',function() {
        var alt = $(this).attr('alt'), // getting alt value
            src = $(this).attr('src'), // getting src value
            imgWidth = $(this).width(),
            imgHeight = $(this).height();
        $('.modal').fadeToggle(200,function(){
            $('.modal img').attr({ 
                src: src,
                alt: alt
            });
        });
        $('.modal .background').css({
            Width: imgWidth,
            minHeight: imgHeight,
        });
    });
    //exit from modal
    $('input').on('click',function exit() {
        $('.modal').fadeToggle(200);
    });
});
