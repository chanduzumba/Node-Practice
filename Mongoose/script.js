import mongoose from 'mongoose'
import User from './User.js'
//create a connection between app and mongodb
mongoose.connect('mongodb://localhost:27017')

//get db connection
const db = mongoose.connection

//log success msg
db.on('open', () => console.log('Connection successful'))

//log failure connection msg
db.on('error', () => console.log('Connection not successful'))


// new user creation/insertion
const newUser = new User({
    name: 'Chandu',
    age: '28',
    isAdult: true,
    hobbies: ['teaching']
})

//save data to collection
newUser.save().then((data) => {console.log(data)})

const user2 = await User.create({
    name: 'Chandu',
    age: 25,
    isAdult: true,
    hobbies: ['coding']
})

user2.save().then(data => console.log(data))

const user3 = await User.create({
    name: 'Nandi',
    age: 25,
    isAdult: true,
    hobbies: ['coding']
})

user3.save().then(data => console.log(data))
//other way to create and save data to collection

//find all data
const users = await User.find({})
console.log(users)

//find one
const user1 = await User.findOne({name: 'Chandu'}) 
console.log(user1)

//update
user1.age = 29
await user1.save().then(data => console.log(data))

//delete a record
const deletedUser = await User.deleteOne({name: 'Chandu'})
console.log(deletedUser)

//delete many
await User.deleteMany({name: 'Chandu'})

//test validation
const user4 = await User.create({
    name: 'ABC'
})

await user4.save().then(data => console.log(data))


