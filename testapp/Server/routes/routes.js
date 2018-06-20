
var appRouter = function(app) {
    app.get("/home", function(req, res) {
        var posts = [
            {title: "Hello", content: "Hello content"}
        ]
        res.status(200).set('Access-Control-Allow-Origin', 'http://localhost:3000').send(posts);
    });
}

module.exports = appRouter;