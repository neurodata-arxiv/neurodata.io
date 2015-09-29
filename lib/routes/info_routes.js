Router.route('about', function() {
    this.render('_home_ext_navbar', {to: 'adaptive_navbar'});
    this.render('about');
});

Router.route('/about/team', {
    template: 'team',
    name: 'team'
});

Router.route('about/support', {
    template: 'support',
    name: 'support'
});

Router.route('about/funds', {
    template: 'funds',
    name: 'funds'
});
