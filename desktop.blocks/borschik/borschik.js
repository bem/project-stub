(function() {
    var borschik = window['borschik'] = {};

    var links = {};

    borschik.addLinks = function(json) {
        for (var link in json) {
            links[link] = json[link];
        }
    };

    borschik.link = function(link) {
        // link with "@" is dynamic
        if (link.charAt(0) === '@') {
            return links[link.substr(1)];
        }

        return link;
    };

})();