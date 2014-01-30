Ignitor.js
==========

Ignitor is a ArangoDD(http://arangodb.org/) Object Data Modeling(ODM) framework similar to mongoose. 

This is a work on progress.

## Installation
```js
npm install ignitor.js
```

### Usage
```js
var Ignitor = require('ignitor.js');
```
##### Connecting
You can set the connection string or call the connect function directly, and the connection string will be assigned automatically.

```js
Ignitor.connectionString = "";
// or you can call teh
Ignitor.connect(""); // this will save your connnectionString to Ignitor.connectionString
```
By default the Ignitor.db will be your arango.db object (as in the arango client).
```js
Ignitor.db = arango.db; // the arango db is now set on the db object
Ignitor.db.use('anotherDb'); // switch to another db
```

##### Models
Models are essential to validation and setting up Querying (which is super awesome using the AQL).  Defining an module
