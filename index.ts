import * as express from "express";

const app = express();
const port = process.env.PORT || 3003;

app.get("/almacen", (req, res) => {
  res.json({
    lista: [],
  });
});
app.post("/productos", (req, res) => {
  res.status(201).json({
    message: "agregado",
    codigo: 1234,
  });
});
app.get("/almacen/:codigo", (req, res) => {
  res.json({
    message: "Producto en stock",
  });
});
app.listen(port, () => {
  console.log("api corriendo en ", port);
});
