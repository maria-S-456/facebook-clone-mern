const Post = require("./../models/post.model");

module.exports = {
	getAll:(req, res) => {
		Post.find()
		.then(post => res.json(post))
		.catch((err) => res.json(err));
	},
	getOne:(req, res) => {
		Post.findById(req.params.id) 
		.then((post) => res.json(post))
		.catch((err) => res.json(err));
	},
	create:(req, res) => {
		/* If using req.body, make sure the keys match the keys in the redpanda.model.js */
		console.log(req.body);
		Post.create(req.body)
		.then((post) => res.json(post))
		.catch((err) => res.json(err));
	},
	update: (req, res) => {
		//update by default will not run validators, so you must add 'runValidators:true'
		Post.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators:true})
		.then((post) => res.json(post))
		.catch((err) => res.json(err));
	},
	delete: (req, res) => {
		Post.findByIdAndRemove(req.params.id)
		.then((message) => res.json(message))
		.catch((err) => res(err));
	}
}