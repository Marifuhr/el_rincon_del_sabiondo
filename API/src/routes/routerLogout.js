const express = require('express');
const router = express.Router();

router.get('/logout', requiresAuth(), (req, res) => {
  req.logout(); // Realiza el logout

  // Redirige al usuario a la página de inicio u otra página deseada
  res.redirect('/');
});

module.exports = router;
