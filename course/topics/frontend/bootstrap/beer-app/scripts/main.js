
$('form').submit(function (e) {
    e.preventDefault();
    $('h2').remove();
    $('ul').remove();
    $('.alert').remove();
    var query = $('input').val();
    $('form').trigger('reset');

    
    $.ajax({
        url: "https://quiet-inlet-67115.herokuapp.com/api/search/all?q=" + query,
        timeout:2000,
        success: function (result) {

            $('.results').append('<h2>RESULTS <small>for search: ' + query + '</small></h2>');
            $('.results').append('<ul class="list-group"></ul>');
            result.forEach(function (v) {
                $('ul').append('<a href="" id="info" data-toggle="modal" data-target="#exampleModalCenter" data-id=' + v.id + '>' + '<li class="list-group-item">' + v.name + '</li>' + '</a>');

            });
        },
        error: function(req, text, error) {
            showError();
        }
    })
});

$(document).on("click", "#info", function (e) {
    e.preventDefault();
    var id = $(this).attr('data-id');

    $.ajax({
        url:"https://quiet-inlet-67115.herokuapp.com/api/beer/" + id,
        success: function (result) {
            if (!result.labels) {
                $('.modal-title').text('');
                $('.modal-body').text('');
                $('.modal-title').append(result.name);
                $('.modal-body').append('<img class="mx-auto d-block" src="' + 'https://www.kegworks.com/wp/wp-content/uploads/2013/05/HomerSimpson22.gif' + '" height="auto" width="50%">');
                if (!result.style.description) {
                    $('.modal-body').append('<figcaption>No description found</figcaption>');
                } else {
                    $('.modal-body').append('<figcaption>' + result.style.description + '</figcaption>');
                }
            } else {
                $('.modal-title').text('');
                $('.modal-body').text('');
                $('.modal-title').append(result.name);
                $('.modal-body').append('<img class="mx-auto d-block" src="' + result.labels.medium + '">' + '<figcaption>' + result.style.description + '</figcaption>');
            }
        }
    })
})

function showError () {
    $('.results').append('<div class="alert alert-danger" role="alert">BÚSQUEDA NO ENCONTRADA</div>');
    
}