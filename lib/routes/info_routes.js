Router.route('info', function() {
    this.render('_home_navbar', {to: 'adaptive_navbar'});
});

Router.route('/info/team', {
    template: 'team',
    name: 'team'
});

Router.route('info/support', {
    template: 'support',
    name: 'support'
});

Router.route('info/funds', {
    template: 'funds',
    name: 'funds'
});
