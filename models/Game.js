const { Schema, model } = require('mongoose');


const schema = new Schema ({
    name: {
        type:String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    genre: {
        type: Schema.Types.ObjectId,
        ref: 'Genre'
    },
    createdAt: {
        type: Date.now
    },
    updatedAt: {
        type: Date.now
    }
})

const game = model('game', schema)
module.exports = game