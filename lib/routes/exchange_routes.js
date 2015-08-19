Router.route('exchange');


Router.route('/exchange/download', {
    name: 'download',
    template: 'download'
});

Router.route('/exchange/download/:token', {
    name: 'download_token',
    template: 'download',
    data: function() {
        return { token: this.params.token || undefined };
    }
});
Router.route('exchange/ingest', {
    name: 'ingest',
    template: 'ingest'
});
