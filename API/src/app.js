const express = require('express');

module.exports = express();
const express = require('express');
const { auth, requiresAuth } = require('express-openid-connect');

const app = express();

app.use(
  auth({
    authRequired: false,
    issuerBaseURL: 'https://YOUR_AUTH0_DOMAIN',
    baseURL: 'http://localhost:5173',
    clientID: '0VbI0VgjMwnZ0YhQZZ4tJSjfcc7v7jaq',
    secret: '-OVdWrqmPDOF-0SPFpwybF1QTfe3mUOSuHW3Xqn2SitSPLRK0zpLI_1K-Wn41mrL',
  })
);

// Resto de la configuración de tu aplicación Express

app.listen(3000, () => {
  console.log('Servidor en ejecución en el puerto 3000');
});
app.use('/', logoutRouter);

// Resto de las rutas y configuraciones

app.listen(3000, () => {
  console.log('Servidor en ejecución en el puerto 3000');
});