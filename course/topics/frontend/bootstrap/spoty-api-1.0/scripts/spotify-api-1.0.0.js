/**
 * Spotify API client.
 *
 * @version 1.0.0
 */
var spotifyApi;
(function () {
    "use strict";

    function call(url, token, handleSuccess, handleError, timeout) {
        $.ajax({
            url: url,
            headers: { Authorization: "Bearer " + token },
            timeout: timeout,
            success: handleSuccess,
            error: handleError
        });
    }

    spotifyApi = {
        baseUrl: "https://api.spotify.com/v1/",

        token:
            "BQC-QIhSjKyBIpuh5VZwmt2prm9dLeuyMx5i8wR4INcKWtmzJceqApRA3c1x1H900RqEbpf8z_rKae40Tj8aod3ziTNik-8Z7A3vRMxoFgeLCMc69-m5g6JE7-e15N0I2iMKc7ANxY7Seqc",

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
    };
})();
