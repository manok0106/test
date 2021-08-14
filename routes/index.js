var express = require("express");

const router = express.Router();

var controller = require("../controller/index")

let routes = (app) => {
 
  router.post("/register", controller.registration);
  router.post("/login", controller.login);
  router.get("/getuser", controller.getUsers);


 

  app.use("/api", router);
};

module.exports = routes;

