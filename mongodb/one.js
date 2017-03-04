var mongo = require('mongodb').MongoClient 

/*
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  if (err) throw err
  var parrots = db.collection('parrots')
  parrots
    .find({ 
      age : {$gt : parseInt(process.argv[2])}
    },
    {
      name: 1,
      age: 1,
      _id: 0
    })
    .toArray(function (err, documents) {
      if (err) throw err
      console.log(documents)
      db.close()
    })
})
*/


mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  if (err) throw err
  var collection = db.collection('docs')
  collection.insert({
    firstName: process.argv[2],
    lastName: process.argv[3]
  }, function (err,data) {
    if (err) throw err
    console.log(data)
    db.close()
  })
  
})
