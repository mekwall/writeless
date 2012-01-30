module.exports = {
  'env': 'production',
  'title': 'writeless',                         // blog title
  'description': 'minimalism, productivity &amp; coffee', // blog description
  'favicon': __dirname + '/public/favicon.ico', // path to the blog's favicon
  'staticDir': __dirname + '/public',           // path to the blog's assets folder
  'viewsDir': __dirname + '/views',             // path to the views
  'articlesDir': __dirname + '/articles',       // path to the articles
  'host': 'writeless.se',                                   // host to listen on
  'port': 3001,                                 // port to listen on
  'baseUrl': '',                                // base url
  'encoding': 'utf8',                           // encoding of the articles
  'perPage': 5,                                 // articles per page

  // Optional configurations
  'articlesExt': '.jade',                       // extension of article files
  'viewsEngine': 'jade',                        // views engine
  'rss': true,                                  // enable the rss feed (requires feed view)

  // Specific to the views used by blog.ht4.ca
  'googleAnalytics': 'UX-XXXXX-X',              // google analytics tracking code
  'disqus': 'writeless',                        // disqus site id
  //'feedburner': 'writeless'                     // feedburner site id
}
