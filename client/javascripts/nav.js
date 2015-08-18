Template.nav.events({
    'keydown #site-search-input': function(ev) {
        if (ev.keyCode == 13) {
            ev.preventDefault();
            var query = $(ev.target).val();
            if (!!query) {
                window.open('https://www.google.com/?q=site:ocp.me%20' + query.replace(/\s/gi, '%20'))
            }
        }
    }
});
