var cluster = require('cluster'),
    app = require('./app'),
    cores = require('os').cpus().length,
    env = process.env.NODE_ENV || "development";

var port = process.env.PORT || 3001;

if (cluster.isMaster) {
    // fork workers
    for (var i = 0; i < cores; i++) {
        cluster.fork();
    }

    cluster.on('death', function(worker){
        console.log('worker ' + worker.pid + ' died');
    });

} else {
    app.listen(port, function(){
        console.log('listening to: '+port);
    });
}
