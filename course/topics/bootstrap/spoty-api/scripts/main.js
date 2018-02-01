$(document).ready(function (e) {
    var query;
    var artistId;
    var albumId;

    $(function () {
        $('[data-toggle="popover"]').popover()
      })

    //When submiting form, call api and lisiting artist function
    $('form').submit(function (e) {
        e.preventDefault();
        query = $('input').val();

        spotifyApi.searchArtists(query, printSearch)
    })

    //function for printing artists
    function printSearch(artist) {
        $('#artist-list').empty();
        artist.forEach(function (artist) {
            $('#artist-list').append('<li class="list-group-item"><a href="#" id="info" data-id="' + artist.id + '">' + artist.name + '</a></li>')
        })
    }

    //when clicking on artist, call api and listing albums function
    $(document).on('click', '#info', function (e) {
        e.preventDefault();
        artistId = $(this).attr("data-id");

        spotifyApi.retrieveAlbums(artistId,listAlbums)
        console.log(artistId)
    })

    //function for printing albums
    function listAlbums(albums) {
        $('#album-list').empty();
        albums.forEach(function (album) {
            $('#album-list').append('<li class="list-group-item"><a href="#" id="info-album" data-id="' + album.id + '">' + album.name + '</a></li>')
        })
    }

    //when clicking album, call api and listing tracks function
    $(document).on('click', '#info-album', function (e) {
        e.preventDefault();
        albumId = $(this).attr("data-id");        
        spotifyApi.retrieveTracks(albumId,listTracks)
        console.log(albumId)
    })

    //function for printing tracks
    function listTracks(tracks) {
        $('#track-list').empty();
        tracks.forEach(function(track){
            $('#track-list').append('<li class="list-group-item"><a href="#" id="info-track" data-id="' + track.id + '">' + track.name + '</a></li>')
        })
    }

    //when clicking track, call api and show player function
    $(document).on('click', '#info-track', function (e) {
        e.preventDefault();
        trackId = $(this).attr("data-id");        
        spotifyApi.getTrack(trackId,showPlayer);
        console.log(trackId);
    })

    //function for showing player
    function showPlayer (track) {
        $(".modal-body").append('<audio controls><source src="'+ track.preview_url +'"></audio>');
        $('#player').modal('show');
    }



})

