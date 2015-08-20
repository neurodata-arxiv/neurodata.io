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
        var img_size = Session.get('current_project').dataset.imagesize['1'];
        
        var reasonable_x_range = (
            (+img_size[0] / 2) +
            "," +
            ((+img_size[0] / 2) + 700));

        var reasonable_y_range = (
            (+img_size[1] / 2) +
            "," +
            ((+img_size[1] / 2) + 400));

        var reasonable_z_slice = (+img_size[2] / 2);

        return Session.get('current_project').channels.image ? "http://openconnecto.me/ocp/ca/" + Session.get('current_proj_token') + "/image/xy/1/" + reasonable_x_range + "/" + reasonable_y_range + "/" + reasonable_z_slice + "/" : "/images/makemine.jpg";
    },

    'proj_info_link': function() {
        return "http://openconnecto.me/ocp/ca/" + Session.get('current_proj_token') + "/info/";
    }
});
