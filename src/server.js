// importar dependencia
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

// iniciando o express
const server = express();
server
  // utilizando os arquivos estáticos
  .use(express.static("public"))

  // configurar template engine
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  // criar uma rota
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage);
// .get("/", (request, response) => {
// console.log(request.query);
// console.log(__dirname + '/views');
// console.log(path.join(__dirname, 'views', 'index.html'));
// return response.sendFile(path.join(__dirname, 'views', 'index.html'))

//const city = "Aracaju";
// const city = request.query.city;
// return response.render('index', {name: name });
//return response.render("index", { city });
//});

// ligar o servidor
server.listen(5500);
