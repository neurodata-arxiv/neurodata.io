routeExceptions = [
    {
        route: '/#!array-tomography/c1z9t',
        text: 'Array Tomography',
        link: 'http://openconnecto.me/#!array-tomography/c1z9t'
    },
    {
        route: '/#!kasthuri11/c12r2',
        text: 'Mouse S1',
        link: 'http://openconnecto.me/#!kasthuri11/c12r2'
    },
    {
        route: '/#!celegans/c5tg',
        text: 'C. elegans (Herm)',
        link: 'http://openconnecto.me/#!celegans/c5tg'
    },
    {
        route: '/#!male-c-elegans/c13v6',
        text: 'C. elegans (Male)',
        link: 'http://openconnecto.me/#!male-c-elegans/c13v6'
    },
    {
        route: '/#!pristionchus-pacificus/c1qb3',
        text: 'Pristionchus pacificus',
        link: 'http://openconnecto.me/#!pristionchus-pacificus/c1qb3'
    },
    {
        route: '/#!fly-medulla/c1c5p',
        text: 'Fly Medulla',
        link: 'http://openconnecto.me/#!fly-medulla/c1c5p'
    },
    {
        route: '/#!neural-behavior-maps/c11xb',
        text: 'Neural Behavior Maps',
        link: 'http://openconnecto.me/#!neural-behavior-maps/c11xb'
    },
    {
        route: '/#!bhatla15/chwq',
        text: 'C elegans Anterior Pharynx',
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
