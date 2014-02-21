Ignitor
==========
Ignitor is a ArangoDb (http://arangodb.org/) Object Data Modeling (ODM) framework similar to mongoose, but different in a couple of other ways.  Ignitor uses the https://github.com/kaerus-component/arango library to access arango.  Again, ignitor is focused on access arango as much as the practicality of using models and objects to access the database.

## Installation
```js
npm install ignitor.js
```

### Basic Usage
```js
var ignitor = require('ignitor.js');
```
Now that you have an ignitor object, let's connect to arango.  Ignitor has a 'database connection manager'.  This means that you can set the connection url, and access this connection throughout your application.  

#### Connecting
```js
var ignitor = require('ignitor.js');
// For connection string formatting please reference:  https://github.com/kaerus-component/arango
var db = ignitor.connect("http://localhost:8529/mydb");
// db is now an arango connection, and you can access it anytime, db === ignitor.db
var db = ignitor.db // this is an arango connection also
```
You must call ignitor.connect(url) or set the ignitor.db.url ="" connection before using ignitor.js features.

#### Repository
The models are overlayed on top of a repository layer.  The repository is an abstraction on top of the arangodb client and largely is a passthough with useful functions.  You can use the repository directly.
```js
var ignitor = require('ignitor.js');
var repository = new ignitor.Repository('myCollection');

// All (you can use a promise or a callback)
repository.all()
    .then(function(res){
        res.result
    })
    .fail(function(err){
        // something bad happened
    });
    
// Find by Key
repository.findByKey(key, 
    function(err, res){
        
    });
```
#### Models
```js
var ignitor = require('ignitor.js');
var Person = ignitor.Model('Person', {
    name: { type: 'string', required: true }
});

var billy = new Person();
billy.isValid // will be false because name is required
billy.name = "Billy"; // how billy is valid
billy.save()
    .then(function(){
        // do something...
    });
```

##Roadmap
- Associations
- More Testing
- Examples
- Screencast
