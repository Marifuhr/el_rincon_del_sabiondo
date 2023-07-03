const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");
app.use(express.json());
app.use(cors());
// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
  access_token:
    "TEST-2452790176162293-070201-1acb740989b97e709a2c5e442aa179d2-232893913",
});
app.get("/", function (req, res) {
  res.send("el servidor de mercado funciona");
});
app.post("/create_preference", (req, res) => {
  let preference = {
    items: [
      {
        title: req.body.description,
        unit_price: Number(req.body.price),
        quantity: Number(req.body.quantity),
      },
    ],
    back_urls: {
      success: "http://localhost:5173/home",
      failure: "http://localhost:5173/home",
      pending: "",
    },
    auto_return: "approved",
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json({
        id: response.body.id,
      });
     /*  console.log(response.body); */
    })
    .catch(function (error) {
      console.log(error);
    });
});
app.listen(8080, () => {
  console.log("servidor corriendo");
});
