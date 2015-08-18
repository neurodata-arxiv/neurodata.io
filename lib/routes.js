Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function() {
    this.render('_home_navbar', {to: 'adaptive_navbar'});
    this.render('home');
}, {
    name: 'home',
    template: 'home'
});


// PROJECTS
Router.route('projects', function() {
    this.render('public_project_index')
});
Router.route('projects/:token', {
    template: 'project_page',
    data: function() {
        return {token: this.params.token }
    }
});

var modalities = ['mri', 'clarity'];

_(modalities).each(function(m) {
    Router.route(m, {
        path: '/modalities/' + m
    });
});


Router.route('visualize');
Router.route('download');
Router.route('support');
