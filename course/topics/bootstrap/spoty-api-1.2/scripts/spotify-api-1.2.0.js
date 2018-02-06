/**
 * Spotify API client.
 *
 * @version 1.1.0
 */
let spotifyApi;

(function () {
    "use strict";

    const baseUrl = 'https://api.spotify.com/v1/'
    const token = 'BQDuaZAjY0NodzbglEzdfM_m8tvmyrl_8gtu04dqo4HYqrv1DJfHJiN5Dm9vCGGRCdonkgXzheIA6GGthMtBwyH12PZ76iq1_YixQ2cA8YFoHyp71jcXN3JcLlSmzH2fkwcAjXV9sLPgDYA' // SEE https://developer.spotify.com/web-api/console/get-search-item/
    const headers = { Authorization: 'Bearer ' + token }
    
        function call(url, token,) {
            return new Promise (resolve,reject)
            
            fetch(url, { headers })                
        };

        spotifyApi = {
            baseUrl,

            timeout: 2000,

            /**
             * Searches artists by matching a text.
             *
             * @param {String} query - The text to search.
             * @param {Function} handleResults - Handles the results.
             * @param {Function} handleError - Handles an error.
             */
            searchArtists: function (query, handleResults, handleError) {
                call(
                    this.baseUrl + "search?type=artist&q=" + query,
                    this.token,
                    function (results) {
                        handleResults(results.artists.items);
                    },
                    handleError,
                    this.timeout
                );
            },

            /**
             * Retrieve albums from an artist (by artist id).
             *
             * @param {String} artistId - The id of the artist to retrieve the albums from.
             * @param {Function} handleResults - Handles the results.
             * @param {Function} handleError - Handles an error.
             */
            retrieveAlbums: function (artistId, handleResults, handleError) {
                call(
                    this.baseUrl + "artists/" + artistId + "/albums",
                    this.token,
                    function (results) {
                        handleResults(results.items);
                    },
                    handleError,
                    this.timeout
                );
            },

            /**
             * Retrieve tracks from an album (by album id).
             *
             * @param {String} albumId - The id of the album to retrieve the tracks from.
             * @param {Function} handleResults - Handles the results.
             * @param {Function} handleError - Handles an error.
             */
            retrieveTracks: function (albumId, handleResults, handleError) {
                call(
                    this.baseUrl + "albums/" + albumId + "/tracks",
                    this.token,
                    function (results) {
                        handleResults(results.items);
                    },
                    handleError,
                    this.timeout
                );
            },

            /**
             * Retrieve track by id.
             *
             * @param {String} id - The id of the track to retrieve information from.
             * @param {Function} handleResults - Handles the results.
             * @param {Function} handleError - Handles an error.
             */
            getTrack: function (trackId, handleResults, handleError) {
                call(
                    this.baseUrl + "tracks/" + trackId,
                    this.token,
                    handleResults,
                    handleError,
                    this.timeout
                );
            }
        }

    })()
