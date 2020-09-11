async function routes (fastify, options) {

    // GET /users/:id
    fastify.get('/g', async (req, res) => {
        res.redirect("https://www.google.com");
    });

};

module.exports = routes;