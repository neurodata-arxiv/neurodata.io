Template.public_project_index.rendered = function() {
    Session.set('project_query', '');
    Meteor.call('get_public_projects', function(err, val) {
        if (err) {
            bootbox.alert("Trouble establishing connecting with server...")
        } else {
            Session.set('public_projects', val.data)
        }
    });
}

Template.public_project_index.events({
    'keyup #project-index-search': function(ev) {
        Session.set('project_query', ev.target.value);
    }
});

Template.public_project_index.helpers({
    'public_projects': function() {
        return Session.get('project_query') ? _(Session.get('public_projects')).filter(function(p) {
            return !!~p.toLowerCase().indexOf(Session.get('project_query').toLowerCase())
        }) : Session.get('public_projects');
    }
});
