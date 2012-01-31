var app = require('./app')
var port = process.env.PORT || 3001;

try {
    var cluster = require('cluster');
        cores = require('os').cpus().length,
        env = process.env.NODE_ENV || "development";

    if (cluster.isMaster) {
        console.log("Initializing cluster on port: "+port);
        // fork workers
        console.log("Forking "+cores+" workers...")
        for (var i = 0; i < cores; i++) {
            cluster.fork();
        }
        cluster.on('death', function(worker){
            console.log('Worker ' + worker.pid + ' died.');
            console.log('Forking new worker.');
            cluster.fork();
        });
    } else {
        app.listen(port, function(){
            console.log('Worker ready.');
        });
    }
} catch(e) {
    app.listen(port);
}
