"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductoManager_1 = require("./ProductoManager");
//En este archivo hacemos uso de de los metodos de ProductoManager, asignandole valores. 
var productoManager = new ProductoManager_1.ProductoManager();
var producto1 = {
    id: 1,
    nombre: "Pegamento Blanco",
    descripcion: "Un gran pegamento para pegarlo en los techos de tu salón.",
    precio: 12
};
var producto2 = {
    id: 2,
    nombre: "Tijeras",
    descripcion: "Tijeras para cortar todas las cosas que necesites.",
    precio: 8
};
var producto3 = {
    id: 3,
    nombre: "Lapiz",
    descripcion: "Una lapiz de gran caidad para cualquier trabajo.",
    precio: 4
};
var productos = [producto1, producto2, producto3];
productoManager.añadirProductos(productos);
productoManager.consultarProductos();
productoManager.restarProducto(2);
productoManager.consultarProductos();
