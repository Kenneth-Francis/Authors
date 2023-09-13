const Author = require('../models/author.model');


module.exports.getAll = (req, res) => {
    Author.find()
        .then(authors => res.json(authors))
        .catch(err => res.status(400).json(err));
};

module.exports.getOne = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err));
};

module.exports.createOne = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.status(400).json(err));
};

module.exports.updateOne = (req, res) => {
    Author.findOneAndUpdate( { _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err));
};

module.exports.deleteOne = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(status => res.json(status))
        .catch(err => res.status(400).json(err));
};
