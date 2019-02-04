const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const PostSchema = {
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    text: {
        type: String,
        required: true
    },
    likes:[{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
    }]
}
