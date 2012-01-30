var typhoon = require('./lib/typhoon');
module.exports = typhoon.app(__dirname, require('./config'), false);
