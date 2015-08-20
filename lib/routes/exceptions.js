var routeExceptions = [
    {
        route: '#!bock11/ckw3',
        link: 'http://openconnecto.me/#!bock11/ckw3'
    },
    {
        route: '#!array-tomography/c1z9t',
        link: 'http://openconnecto.me/#!array-tomography/c1z9t'
    },
    {
        route: '#!kasthuri11/c12r2',
        link: 'http://openconnecto.me/#!kasthuri11/c12r2'
    },
    {
        route: '#!celegans/c5tg',
        link: 'http://openconnecto.me/#!celegans/c5tg'
    },
    {
        route: '#!male-c-elegans/c13v6',
        link: 'http://openconnecto.me/#!male-c-elegans/c13v6'
    },
    {
        route: '#!pristionchus-pacificus/c1qb3',
        link: 'http://openconnecto.me/#!pristionchus-pacificus/c1qb3'
    },
    {
        route: '#!fly-medulla/c1c5p',
        link: 'http://openconnecto.me/#!fly-medulla/c1c5p'
    },
    {
        route: '#!neural-behavior-maps/c11xb',
        link: 'http://openconnecto.me/#!neural-behavior-maps/c11xb'
    },
    {
        route: '#!bhatla15/chwq',
        link: 'http://openconnecto.me/#!bhatla15/chwq'
    },

];

_(routeExceptions).each(function(r) {
    Router.route(r.route, {where: 'server'}).get(function() {
        this.response.writeHead(302, {
            'Location': r.link
        });
        this.response.end();
    });
});
