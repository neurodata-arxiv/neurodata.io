Template.public_project_index.rendered = function() {
    HTTP.get('http://ocp.me/ocp/ca/public_tokens', function(err, val) {
        if (err) {
            bootbox.alert("Trouble establishing connecting with server...")
        } else {
            Session.set('public_projects', val)
        }
    });
}

Template.public_project_index.helpers({
    'public_projects': function() {
        return Session.get('public_projects');
    }
});
