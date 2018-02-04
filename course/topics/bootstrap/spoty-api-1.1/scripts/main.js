$(document).ready(function (e) {
    var query;
    var artistId;
    var albumId;
    $('.modal').modal();
    //When submiting form, call api and lisiting artist function
    $('form').submit(function (e) {
        e.preventDefault();

        query = $('input').val();

        spotifyApi.searchArtists(query, printSearch)
    })

    //function for printing artists
    function printSearch(artist) {
        $('#album-list').hide();
        $('#artist-list').empty();
        $('#artist-list').show();

        artist.forEach(function (artist) {            
            if (artist.images.length < 1) {                
                $('#artist-list').append(`<a href="#" id="artist-card" data-id="${artist.id}"><div class="card" id="artist-card-padding"><div class="card-image image-hover img-zoom-in"><img src="https://s.discogs.com/images/default-artist.png"><span class="card-title" id="artist-name">${artist.name}</span></div></div></a>`)
            } else {                
                $('#artist-list').append(`<a href="#" id="artist-card" data-id="${artist.id}"><div class="card" id="artist-card-padding"><div class="card-image image-hover img-zoom-in"><img src="${artist.images[0].url}" "><span class="card-title" id="artist-name">${artist.name}</span></div></div></a>`)
            }                                  
        })
    }

    //when clicking on artist, call api and listing albums function
    $(document).on('click', '#artist-card', function (e) {
        e.preventDefault();
        
        artistId = $(this).attr("data-id");
        spotifyApi.retrieveAlbums(artistId,listAlbums)
        console.log(artistId)
    })

    //function for printing albums
    function listAlbums(albums) {
        $('#artist-list').hide();
        $('#album-list').empty();
        $('#album-list').show();

        albums.forEach(function (album) {
            $('#album-list').append(`<div class="card col s12 l4" id="album-card" data-id="${album.id}"><div class="card-image image-hover img-zoom-in"><img src="${album.images[0].url}"><span class="card-title" id="album-name">${album.name}<a href="#track-list" class="btn btn-floating pulse right red modal-trigger"><i class="material-icons">music_note</i></a></span></div></div>`)            
        })        
    }

    //when clicking album, call api and listing tracks function
    $(document).on('click', '#album-card', function (e) {
        e.preventDefault();
        albumId = $(this).attr("data-id");        
        spotifyApi.retrieveTracks(albumId,listTracks)
        console.log(albumId)
    })

    //function for printing tracks
    function listTracks(tracks) {        
        $('#track-list').empty();
        console.log(tracks);        
        $('#track-list').append(`<a href=""><i class="material-icons" id="back">arrow_back</i></a>`)    
        $('#track-list').append(`<li class="collection-header"><h4>Track List</h4></li>`)      
        tracks.forEach(function(track){
            $('#track-list').append(`<li class="collection-item"><div>${track.name}<a href="#!" class="secondary-content" id="info-track" data-id="${track.id}"><i class="material-icons">play_circle_outline</i></a></div></li>`)            
        })
        $('#album-list').hide();
        $('#track-list').show();
        $(document).on('click','#back', function (e){
            e.preventDefault();
            $('#album-list').show();
            $('#track-list').hide();
        })               
    }

    //when clicking track, call api and show player function
    $(document).on('click', '#info-track', function (e) {
        e.preventDefault();
        trackId = $(this).attr("data-id");
        $(".modal-content>h4").empty();
        $(".modal-content>audio").remove();
        spotifyApi.getTrack(trackId,showPlayer);
        console.log(trackId);
    })

    //function for showing player
    function showPlayer (track) {
        $(".modal-content>h4").append(track.name);
        $(".modal-content").append('<audio controls><source src="'+ track.preview_url +'"></audio>');
        $("#player").modal('open');
    }
})