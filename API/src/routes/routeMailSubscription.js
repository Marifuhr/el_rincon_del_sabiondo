const express = require("express");
const routeMailSubscriptionHandler = require("../handlers/routeMailSubscriptionHandler");

const router = express.Router();

router.post("/", routeMailSubscriptionHandler);

module.exports = router;
