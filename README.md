## API-Testing-with-POSTMAN

#### HTTP Request Verbs: `GET` , `POST` , `PUT` , `PATCH` , `DELETE`
#### All documents (/documents) : GET, POST, DELETE
#### specific document (/documents/id) : GET, PUT, PATCH, DELETE

Initializing the node project
```
npm init -y
```
Installing required node packages
```
npm install express mongoose body-parser
```

Working with main file (`app.js`)
```
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.listen(3000, function (req, res) {
    console.log('Server started on 3000');
});
```
Running Server on port 3000
```
node app.js
```
Opening Browser at
```
http://localhost:3000/
```

Extending the use of Mongoose and BodyParser
```
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost:27017/testDB', { useNewUrlParser: true, useUnifiedTopology: true });
```

Example code for `get` request
```
app.get('/documents', function (req, res) {
        Person.find(function (err, foundPersons) {
            if (!err) {
                res.send(foundPersons);
            } else {
                res.send(err);
            }
        });
 });
```
## GET request from POSTMAN
![API Request - GET](https://github.com/ravikkumar777/API-Testing-with-POSTMAN/blob/master/api-test.png)
