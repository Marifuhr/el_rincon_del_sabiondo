const { Router } = require("express");
const routeSellingsTotalHandler = require("../handlers/routeSellingsTotalHandler");
const routeGetSellingTotalHandler = require("../handlers/routeGetSellingTotalHandler");
const routeCreateSellingTotalHandler = require("../handlers/routeCreateSellingTotalHandler");

const routerSellings = Router();

routerSellings.get('/', routeSellingsTotalHandler);
routerSellings.get('/:IdSelling', routeGetSellingTotalHandler);

routerSellings.post('/', routeCreateSellingTotalHandler);
routerSellings.put('/:IdSelling', routeGetSellingTotalHandler);

module.exports = routerSellings;