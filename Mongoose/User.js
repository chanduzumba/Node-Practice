import mongoose from 'mongoose'
// Schema creation
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        immutable: true
    },
    isAdult: {
        type: Boolean,
        default: true
    },
    hobbies: Array,
})
//apply schema to model/collection of users data
const user = mongoose.model('User', userSchema)

export default user