$(document).ready(function (e) {
    var query;
    var artistId;
    var albumId;

    //When submiting form, call api and lisiting artist function
    $('form').submit(function (e) {
        e.preventDefault();

        query = $('input').val();

        spotifyApi.searchArtists(query, printSearch)
    })

    //function for printing artists
    function printSearch(artist) {
        $('#album-list').hide();
        $('#track-list').hide();
        $('#artist-list').empty();
        $('#artist-list').show();

        artist.forEach(function (artist) {            
            if (artist.images.length < 1) {
                // $('#artist-list').append('<a href="#" id="info" data-id="' + artist.id + '"><div class="card"><img class="card-img-top" src="https://s.discogs.com/images/default-artist.png"><span class="card-text text-center">'+ artist.name +'</span></div></a>')
                $('#artist-list').append('<a href="#" id="info" data-id="' + artist.id + '"><div="view hm-zoom"><img class="img-fluid" src="https://s.discogs.com/images/default-artist.png"><div class="mask flex-center"><p class="white-text">'+ artist.name +'</p></div></div></a>')
            } else {
                // $('#artist-list').append('<a href="#" id="info" data-id="' + artist.id + '"><div class="card"><img class="card-img-top" src="' + artist.images[0].url + '"><span class="card-text text-center">'+ artist.name +'</span></div></a>')
                $('#artist-list').append('<a href="#" id="info" data-id="' + artist.id + '"><div class="card"><img class="card-img-top" src="' + artist.images[0].url + '"><span class="card-text text-center">'+ artist.name +'</span></div></a>')
            }                      
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
        $('#page-artist-list').hide();
        $('#album-list').empty();
        $('#album-list').show();

        albums.forEach(function (album) {           
            $('#album-list').append('<div class="card col-4 photobox photobox_type19"><div class="photobox__previewbox"><a href="#" id="info-album" data-id="' + album.id + '"><img src="' + album.images[0].url + '" class="card-img-top photobox_preview" alt="Preview"><span class="card-text text-center photobox__label">'+ album.name +'</span></a></div></div>')            
        })
        

    //     <div class="photobox photobox_type19">
    //     <div class="photobox__previewbox">
    //         <img src="https://stas-melnikov.ru/cliparts/girl3_640x426.jpg" class="photobox__preview" alt="Preview">
    //         <span class="photobox__label">Effect #19</span>
    //     </div>
    // </div>
    
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
        $('#album-list').hide();
        $('#track-list').empty(); 
        $('#track-list').show();       
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





// $(document).ready(function (e) {
//     var query;
//     var artistId;
//     var albumId;

//     //When submiting form, call api and lisiting artist function
//     $('form').submit(function (e) {
//         e.preventDefault();

//         query = $('input').val();

//         spotifyApi.searchArtists(query, printSearch)
//     })

//     //function for printing artists
//     function printSearch(artist) {
//         $('#album-list').hide();
//         $('#track-list').hide();
//         $('#artist-list').empty();
//         $('#artist-list').show();

//         artist.forEach(function (artist) {            
//             if (artist.images.length < 1) {
//                 $('#artist-list').append('<div class="card col"><a href="#" id="info" data-id="' + artist.id + '"><img class="card-img-top mt-1" src="https://s.discogs.com/images/default-artist.png"><div class="card-body"><h5 class="card-text text-center mt-1">'+ artist.name +'</h5></div></a></div>')
//             } else {
//                 $('#artist-list').append('<div class="card col"><a href="#" id="info" data-id="' + artist.id + '"><img class="card-img-top mt-1" src="' + artist.images[0].url + '"><div class="card-body"><h5 class="card-text text-center mt-1">'+ artist.name +'</h5></div></a></div>')
//             }                      
//         })
//     }

//     //when clicking on artist, call api and listing albums function
//     $(document).on('click', '#info', function (e) {
//         e.preventDefault();
        
//         artistId = $(this).attr("data-id");
//         spotifyApi.retrieveAlbums(artistId,listAlbums)
//         console.log(artistId)
//     })

//     //function for printing albums
//     function listAlbums(albums) {
//         $('#artist-list').hide();
//         $('#album-list').empty();
//         $('#album-list').show();

//         albums.forEach(function (album) {           
//             $('#album-list').append('<div class="card col"><a href="#" id="info-album" data-id="' + album.id + '"><img class="card-img-top mt-1" src="' + album.images[0].url + '"><div class="card-body"><h5 class="card-text text-center mt-1">'+ album.name +'</h5></div></a></div>')
//         })
//     }

//     //when clicking album, call api and listing tracks function
//     $(document).on('click', '#info-album', function (e) {
//         e.preventDefault();
//         albumId = $(this).attr("data-id");        
//         spotifyApi.retrieveTracks(albumId,listTracks)
//         console.log(albumId)
//     })

//     //function for printing tracks
//     function listTracks(tracks) {
//         $('#album-list').hide();
//         $('#track-list').empty(); 
//         $('#track-list').show();       
//         tracks.forEach(function(track){
//             $('#track-list').append('<li class="list-group-item"><a href="#" id="info-track" data-id="' + track.id + '">' + track.name + '</a></li>')
//         })
//     }

//     //when clicking track, call api and show player function
//     $(document).on('click', '#info-track', function (e) {
//         e.preventDefault();
//         trackId = $(this).attr("data-id");        
//         spotifyApi.getTrack(trackId,showPlayer);
//         console.log(trackId);
//     })

//     //function for showing player
//     function showPlayer (track) {
//         $(".modal-body").append('<audio controls><source src="'+ track.preview_url +'"></audio>');
//         $('#player').modal('show');
//     }
// })



