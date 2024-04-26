const mongoose = require('mongoose');
const ItemSchema = mongoose.Schema(
    {
        itemName: {
            type: String,
            required: true
        },
        itemID: {
            type: String,
            required: true
        },
        minQuantity: {
            type: Number,
            required: true
        },
        comment: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Item', ItemSchema); 