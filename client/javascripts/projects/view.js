Template.project_page.rendered = function() {
    var token = this.data.token;
    Meteor.call('get_proj_info', token, function(err, val) {
        if (err) {
            bootbox.alert(
                "Could not fetch project info for token " +
                token + ".", function() {
                    // Router.go('home');
            });
        } else {
            Session.set('current_project', val.data);
        }
    });
};

function _project(key) {
    return Session.get('current_project') ? Session.get('current_project')[key] : undefined;
}

Template.project_page.helpers({
    'name': function() {
        return _project('name');
    },

    'gen_date': function() {
        return new Date();
    },

    'ocpviz_link': function() {
        var project = _project('project');
        return project ? project.dataurl + '/ocpviz/' + project.dataset : '#';
    }
});
