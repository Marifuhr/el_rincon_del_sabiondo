const { Router } = require("express");
const routeBooksHandler = require("../handlers/routeBooksHandler.js");
const createBookHandler = require("../handlers/createBookHandler.js");
const routeBooksXIdHandler = require("../handlers/routeBooksXIdHandler.js");

const router = Router();

//Routes
router.get("/", routeBooksHandler);
router.get("/:id", routeBooksXIdHandler);
router.post("/", createBookHandler);


// Middlewares

module.exports = router;
