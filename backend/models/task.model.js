const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: {
        type: String,
    },
    start: {
        type: String,
    },
    deadline:{
        type: String,
    },
    completed: {
        type: Boolean,
        required: true,
    },
    subjectID: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    userID: {
        type: String,
        //required: true,
    }
}, {
    timestamps: true,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;