const dbClient = require("mongodb").MongoClient;

const uri = "mongodb+srv://movieslist:movieslist@starter-5leqy.gcp.mongodb.net/comit-movies?retryWrites=true&w=majority";
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };

function getAll(cb) {

  dbClient.connect(uri, mongoOptions, (err, client) => {

    // Si no se pudo conectar a la db, log y retorno algo vacío
    if (err) {

      console.log(err);
      cb([]);

    } else {

      const collection = client.db("comit-movies").collection("movies");
      collection.find().toArray((err, result) => {

        // Si hubo err en la query, log y retorno algo vacío
        if (err) {

          console.log(err);
          cb([]);

        } else {

          cb(result);

        }

        client.close();
      });

    }

  });

}

function getById(id, cb) {

  dbClient.connect(uri, mongoOptions, (err, client) => {

    // Si no se pudo conectar a la db, log y retorno algo vacío
    if (err) {

      console.log(err);
      cb(null);

    } else {

      const collection = client.db("comit-movies").collection("movies");
      collection.findOne({ id: parseInt(id) }, (err, result) => {

        // Si hubo err en la query, log y retorno algo vacío
        if (err) {

          console.log(err);
          cb(null);

        } else {

          cb(result);

        }

        client.close();
      });

    }

  });

}


module.exports = {
  getAll,
  getById
}

