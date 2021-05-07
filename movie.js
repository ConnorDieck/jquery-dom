$('#movie-form').on('submit', function(evt){
    evt.preventDefault();

    const title = $('#title').val();
    const rating = $('#rating').val();

    $('#reviews').append(`<li>Title: ${title} <br> Rating: ${rating} <br> <button>Remove</button></li>`);

    $('#movie-form')[0].reset();
})

$('#reviews').on('click', 'button', function(evt){
    // console.log(evt.target);
    // console.log($(this));
    evt.target.closest('li').remove();
})

