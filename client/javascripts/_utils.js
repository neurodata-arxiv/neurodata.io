UI.registerHelper('title', function(t) {
    document.title = t + " | ocp.me"
});

UI.registerHelper('contact_email_link', function() {
    return '<a href="mailto:contact@ocp.me">contact@ocp.me</a>';
});
