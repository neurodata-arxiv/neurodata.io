Router.route('download', {
    name: 'download',
    template: 'download'
});

Router.route('download/:token', {
    name: 'download_token',
    template: 'download',
    data: function() {
        return { token: this.params.token || undefined };
    }
});
Router.route('ingest');
