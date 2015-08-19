Meteor.methods({
    'get_proj_info': function(token) {
        return HTTP.get('http://ocp.me/ocp/ca/' + token + '/info/');
    },

    'get_public_projects': function() {
        return HTTP.get('http://ocp.me/ocp/ca/public_tokens/');
    }
})
