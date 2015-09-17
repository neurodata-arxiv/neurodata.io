
Router.route(/[#\!]*bock11[\/ckw3]*/, {
    template: 'old_bock11',
    name: 'old_bock11'
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
