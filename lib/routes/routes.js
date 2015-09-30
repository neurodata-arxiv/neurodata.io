Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 't404',
});

Router.route('/', function() {
    this.render('_home_navbar', {to: 'adaptive_navbar'});
    this.render('home');
}, {
    name: 'home',
    template: 'home'
});


var modalities = ['mri', 'clarity', 'at', 'em'];


_(modalities).each(function(m) {
    Router.route(m, {
        path: '/modalities/' + m
    });
});

Router.route('bigNeuro2015');
Router.route('visualize');
