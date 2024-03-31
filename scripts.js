function googleSearch() {
    var query = document.getElementById('searchBox').value;
    window.open('https://www.google.com/search?q=' + encodeURIComponent(query));
}