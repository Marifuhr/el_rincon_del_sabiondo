// const { Router } = require("express");
const express = require("express");
const routeMailHandler = require("../handlers/routeMailHandler");

//Creación del router
const router = express.Router();

//Rutas
router.post("/", routeMailHandler);

// Exportación
module.exports = router;
