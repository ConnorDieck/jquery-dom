// waits for the DOM to load
$(function() {
    console.log("Let's get ready to party with jQuery!")
})

// applies img-center class to all images in article
$('article img').attr('class', 'image-center');

// removes fifth p in article
$('article p').eq(5).remove();

// sets font size of title to be rand pixel size from 0-100
$('#title').css('font-size', Math.random()*100);

// adds an item to the list
$('ol').append('<li>I AM NEW!!!</li>')

// empty the list and add a paragraph in it
$('ol').empty().append("<p>I apologize for this list's existence</p>")

// changing the inputs will change the background color of the body
$('.form-control').on('blur', function() {
    const r = $('.form-control').eq(0).val();
    const b = $('.form-control').eq(1).val();
    const g = $('.form-control').eq(2).val();

    $('body').css('background-color', 
    `rgb(${r}, ${g}, ${b})`);
})

// add event listener when the image is clicked on, it is removed from the DOM
$('img').on('click', function(evt){
    evt.target.remove();
});