var old_routes = [
    'bock11',
    'kasthuri11',
    'celegans'
];


_(old_routes).each(function(r) {
    Router.route(new RegExp('[#\!]*' + r + '\/*'), {
        template: 'old_' + r,
        name: 'old_' + r
    });
});

Router.route('projects', function() {
    this.render('public_project_index')
});
Router.route('projects/:token', {
    template: 'project_page',
    name: 'project_page',
    data: function() {
        return { token: this.params.token }
    }
});
