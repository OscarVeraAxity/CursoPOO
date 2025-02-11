import { Producto } from "./IProducto";
import { ProductoManager } from "./ProductoManager";

//En este archivo hacemos uso de de los metodos de ProductoManager, asignandole valores. 
const productoManager = new ProductoManager();

const producto1:Producto = {
    id: 1,
    nombre:"Pegamento Blanco",
    descripcion:"Un gran pegamento para pegarlo en los techos de tu salón.",
    precio: 12
};

const producto2:Producto = {
    id: 2,
    nombre:"Tijeras",
    descripcion:"Tijeras para cortar todas las cosas que necesites.",
    precio: 8
};

const producto3:Producto = {
    id: 3,
    nombre:"Lapiz",
    descripcion:"Una lapiz de gran caidad para cualquier trabajo.",
    precio: 4
};

let productos: Producto[] = [producto1,producto2,producto3];

productoManager.añadirProductos(productos);

productoManager.consultarProductos();

productoManager.restarProducto(2);

productoManager.consultarProductos();