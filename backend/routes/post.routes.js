const posts = require("./../controllers/post.controller");

module.exports = (app) => {
	app.get("/api/posts", posts.getAll);
	app.get("/api/posts/:id", posts.getOne);
	app.post("/api/posts", posts.create);
	app.put("/api/posts/:id", posts.update);
	app.delete("/api/posts/:id", posts.delete);
};