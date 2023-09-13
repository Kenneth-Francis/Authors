const mongoose = require('mongoose');

// Creates the Schema for Authors
const AuthorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Author Name is required"],
            minlength: [3, "Author Name must be at least 3 characters long."]
        }

        // favorite: {
        //     type: Boolean,
        //     default: false
        // }
    },

    {
        timestamps: true
    }
);

// Creates the constructor function for a Author
const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;
