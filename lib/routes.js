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

Router.route('mri');
Router.route('clarity');

Router.route('support');
