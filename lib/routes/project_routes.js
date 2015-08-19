Router.route('projects', function() {
    this.render('public_project_index')
});
Router.route('projects/:token', {
    template: 'project_page',
    name: 'project_page',
    data: function() {
        return {token: this.params.token }
    }
});
