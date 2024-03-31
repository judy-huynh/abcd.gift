document.addEventListener('DOMContentLoaded', function() {
    var searchButton = document.getElementById('searchButton');
    var luckyButton = document.getElementById('luckyButton');
    var searchBox = document.getElementById('searchBox');

    searchButton.addEventListener('click', function() {
        googleSearch();
    });

    luckyButton.addEventListener('click', function() {
        feelingLuckySearch();
    });

    searchBox.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            googleSearch();
        }
    });

    function googleSearch() {
        var query = searchBox.value;
        var searchURL = 'https://www.google.com/search?q=' + encodeURIComponent(query);
        window.open(searchURL, '_blank');
    }

    function feelingLuckySearch() {
        var query = searchBox.value;
        var luckyURL = 'https://www.google.com/search?btnI=I&q=' + encodeURIComponent(query);
        window.open(luckyURL, '_blank');
    }
});