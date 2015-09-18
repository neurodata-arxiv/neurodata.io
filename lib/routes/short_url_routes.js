// ShortURLs = new Meteor.Collection('short_urls');
//
// Router.route('/u/:code', {where: 'server'}).get(function() {
//     var su = ShortURLs.findOne({code: this.params.code});
//     console.log(su);
//     this.response.writeHead(302, {
//         'Location': su.url
//     });
//     this.response.end();
// });
