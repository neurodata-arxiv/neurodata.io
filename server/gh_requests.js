Meteor.methods({
    'get_gh_desc': function(repo) {
        return HTTP.get('https://api.github.com/repos/openconnectome/' + repo, {headers:{
            "User-Agent": "Meteor/1.0"
        }}).description
    }
});
