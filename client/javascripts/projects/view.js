Template.project_page.rendered = function() {
    Session.set('current_proj_token', this.data.token);
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
        return "http://openconnecto.me/ocp/ocpviz/" + Session.get('current_proj_token') + "/";
    },

    'sample_img': function() {
        return Session.get('current_project').channels.image ? "http://openconnecto.me/ocp/ca/" + Session.get('current_proj_token') + "/image/xy/1/2000,2500/5000,5500/50/" : "/images/makemine.jpg";
    },

    'proj_info_link': function() {
        return "http://openconnecto.me/ocp/ca/" + Session.get('current_proj_token') + "/info/";
    }
});
