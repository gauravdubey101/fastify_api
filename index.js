// IMPORTS
const fastify = require('fastify')({ logger: true })

// ROUTES
fastify.register(require('./routes/api'));

// LISTENER
fastify.listen(3000, function (err, address) {
    if (err) {
        console.log(err);
        process.exit(1);
    } else {
        console.log(address);
        console.log('Server is up and running on port 3000...');
    }
}); 