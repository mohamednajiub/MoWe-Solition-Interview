$(document).ready(function(){
    $('a img').mouseenter(function(){
        var preview_width = $(".preview_panel").width(),// know preview width
            preview_height = preview_width, // make image square
            alt = $(this).attr('alt'), // getting alt value
            src = $(this).attr('src'); // getting src value
        var img = $('.preview_panel img').attr({ 
            src: src,
            alt: alt});
        $('.preview_panel').append(img);
        $('.preview_panel img').css({
            width: preview_width - 20
        })
    })
    $('a').mouseleave(function(){
        var img = $('.preview_panel img').attr({ src: '',alt:''});
        $('.preview_panel').append(img)
    })
})
