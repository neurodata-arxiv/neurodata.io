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


var modalities = ['mri', 'clarity'];

_(modalities).each(function(m) {
    Router.route(m, {
        path: '/modalities/' + m
    });
});


Router.route('visualize');
Router.route('support');
