const express = require('express');
const { requiresAuth } = require('express-openid-connect');

const router = express.Router();

router.get('/', requiresAuth(), (req, res) => {
  req.logout(); // Realiza el logout

  // Redirige al usuario a la página de inicio u otra página deseada
  res.redirect('/');
});

module.exports = router;