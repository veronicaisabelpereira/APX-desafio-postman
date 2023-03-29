"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = process.env.PORT || 3003;
app.get("/almacen", function (req, res) {
    res.json({
        lista: [],
    });
});
app.post("/productos", function (req, res) {
    res.status(201).json({
        message: "agregado",
        codigo: 1234,
    });
});
app.get("/almacen/:codigo", function (req, res) {
    res.json({
        message: "Producto en stock",
    });
});
app.listen(port, function () {
    console.log("api corriendo en ", port);
});
