UI.registerHelper('title', function(t) {
    document.title = t + " | neurodata.io"
});

UI.registerHelper('contact_email_link', function() {
    return '<a href="mailto:contact@ocp.me">contact@ocp.me</a>';
});

UI.registerHelper('ocp_github', function(repo) {
    return "https://github.com/openconnectome/" + repo + "/"
});

UI.registerHelper('ocp_sphinx', function(project) {
    return "https://openconnectome.github.io/" + project + "/"
});
