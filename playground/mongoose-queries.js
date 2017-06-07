const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

User.findById('59383f60e50d5014181cc2e5').then((user) => {
    if(!user){
        return console.log('Unable to found user');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => console.log(e));

// var id = '59385c2598ad3317048f916211';

// if(!ObjectID.isValid(id)) {
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));