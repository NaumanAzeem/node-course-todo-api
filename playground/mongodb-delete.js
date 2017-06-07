// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to delete Todos', err);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to delete Todos', err);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to delete Todos', err);
    // });

    db.collection('Users').deleteMany({name: 'Nauman'}).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to delete Todos', err);
    });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('593820c1b53eda695eece398')}).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to delete Todos', err);
    });

    // db.close();
});