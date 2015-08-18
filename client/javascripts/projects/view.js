Template.project_page.rendered = function() {
    var token = this.data.token;
    HTTP.get('http://ocp.me/ocp/ca/' + token + '/info/', function(err, val) {
        if (err) {
            bootbox.alert(
                "Could not fetch project info for token " +
                token + ".", function() {
                    // Router.go('home');
            });
        } else {
            Session.set('current_project', val);
        }
    });
};

Template.project_page.helpers({
    'name': function() {
        return Session.get('current_project') ? Session.get('current_project').name : ''
    },

    'gen_date': function() {
        return new Date();
    }
});
