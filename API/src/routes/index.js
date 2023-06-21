const { Router } = require("express");

const { getLibros } = require("../controllers/index");

const router = Router();
router.get("/books", getLibros);

module.exports = router;
