var old_routes = [
    'bock11',
    'kasthuri11',
    'celegans',
    'male-c-elegans',
    'pristionchus-pacificus',
    'array-tomography',
    'fly-medulla',
    'neural-behavior-maps',
    'synapseweb',
    'bhatla15',
    'hildebrand16',
    'lee16',
    'wanner16',
    'services'
];


_(old_routes).each(function(r) {
    re = r.replace(/-/g, '_');
    reg = r.replace(/-/g, '[-_]');
    Router.route(new RegExp('[#\!]*' + reg + '\/*'), {
        template: 'old_' + re,
        name: 'old_' + re
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
