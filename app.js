const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/staffDB', { useNewUrlParser: true, useUnifiedTopology: true });
const staffSchema = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    city: String,
    phone: Number
});
const Person = mongoose.model('Person', staffSchema);

/////////////////////////////   All Documents   /////////////////////////////
app.route('/persons')
    .get(function (req, res) {
        Person.find(function (err, foundPersons) {
            if (!err) {
                res.send(foundPersons);
            } else {
                res.send(err);
            }
        });
    })
    .post(function (req, res) {
        const newPerson = new Person({
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            city: req.body.city,
            phone: req.body.phone
        });
        newPerson.save(function (err) {
            if (!err) {
                res.send('New Document Added..');
            } else {
                res.send(err);
            }
        });
    })
    .delete(function (req, res) {
        Person.deleteMany(function (err) {
            if (!err) {
                res.send('Deleted All Documents');
            } else {
                res.send(err);
            }
        });
    });

/////////////////////////////   Specific Documents   /////////////////////////////

app.route('/persons/:personId')
    .get(function (req, res) {
        Person.findOne({ id: req.params.personId }, function (err, foundPerson) {
            if (foundPerson) {
                res.send(foundPerson);
            } else {
                res.send('No Document is matching the given person Id..');
            }
        });
    })
    .put(function (req, res) {
        Person.update(
            { id: req.params.personId },
            { id: req.body.id, name: req.body.name, email: req.body.email, city: req.body.city, phone: req.body.phone },
            { overwrite: true },
            function (err) {
                if (!err) {
                    res.send('Document Updated Completely');
                } else {
                    res.send(err);
                }
            });
    })
    .patch(function (req, res) {
        Person.update(
            { id: req.params.personId },
            { $set: req.body },
            function (err) {
                if (!err) {
                    res.send('Document Updated - Patch');
                } else {
                    res.send(err);
                }
            });
    })
    .delete(function (req, res) {
        Person.deleteOne(
            { id: req.params.personId },
            function (err) {
                if (!err) {
                    res.send('Deleted the selected Document.');
                } else {
                    res.send(err);
                }
            });
    });

app.listen(3000, function (req, res) {
    console.log('Server started on 3000');
});