// https://patrickaregan.github.io/custom-search-engine/
// Search engine id: 84bf6c59ec9dc5496
// Public URL: https://cse.google.com/cse?cx=84bf6c59ec9dc5496

// https://www.googleapis.com/customsearch/v1?[parameters]
// https://www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY&cx=017576662512468239146:omuauf_lfve&q=lectures



function handler(response) {
    for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];
        // in production code, item.htmlTitle should have the HTML entities escaped.
        document.getElementById("content").innerHTML += "<br>" + item.htmlTitle + "<br><img src='" + item.image.thumbnailLink + "'>";
    }
}
