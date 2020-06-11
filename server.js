const PORT = 3333;

// imports librerías
const path = require("path");
const express = require("express");
const expHbs = require("express-handlebars");

const movies = require("./movies");

const app = express();

// Middlewares

app.use(express.static(path.join(__dirname, "public")));


// ----------------------------------------------------------
// Configuración de Handlebars

app.set("view engine", "handlebars");

app.engine("handlebars", expHbs({
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, "views/layouts")
}))

app.set("views", path.join(__dirname, "views"));

// ----------------------------------------------------------



app.get("/", (req, res) => {

  res.render("home", { isHomeView: true });

});

app.get("/movie-list", (req, res) => {
  
  movies.getAll(data => {

    // Reviso filtros recibidos y reordeno según corresponda
    if (req.query.sort && req.query.order) {

      let filter = "";

      // según el filtro recibido, defino el nombre de la propiedad del objeto 
      // movie por el que voy a filtrar.
      // Si no reconozco el filtro, seteo el order en null
      // para que no ejecute el switch de ordenamiento y siga de largo
      if (req.query.sort === "name") {
        filter = "title"; 
      } else if (req.query.sort === "date") {
        filter = "year";
      } else {
        req.query.order = null;
      }
      
      switch (req.query.order) {
        case "asc":
          data = data.sort((a, b) => {
            if (a[filter] < b[filter]) { return -1 }
            if (a[filter] > b[filter]) { return 1 }
            return 0;
          });
          break;
      
        case "desc":
          data = data.sort((a, b) => {
            if (a[filter] > b[filter]) { return -1 }
            if (a[filter] < b[filter]) { return 1 }
            return 0;
          });
          break;
      }

    }

    res.render("movie-list", { 
      movies: data,
      order: {
        [req.query.sort + req.query.order]: true
      }
    });

  })

});

app.get("/movie/:id", (req, res) => {

  movies.getById(req.params.id, data => {

    // Si la búsqueda no devolvió una película, muestro un mensaje de error
    if (!data) {

      res.render("movie-detail", {
        errorMessage: "Error 404: Couldn't find the requested movie. Please try again."
      });

    } else {

      res.render("movie-detail", data);

    }

  })

});

// Inicio server
app.listen(PORT, () => {
  console.log("Servidor iniciado en puerto 3333...");
})