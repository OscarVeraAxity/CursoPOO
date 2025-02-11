"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoManager = void 0;
//Esta clase contendra todos los metodos necesarios para cumplir con la logica del uso de productos.
var ProductoManager = /** @class */ (function () {
    function ProductoManager() {
        this.productos = [];
    }
    ProductoManager.prototype.añadirProductos = function (producto) {
        var _this = this;
        producto.forEach(function (producto) {
            _this.productos.push(producto);
            console.log("Se agrego \"".concat(producto.nombre, "\" a la tienda!"));
        });
    };
    ProductoManager.prototype.restarProducto = function (id) {
        var posicion = this.productos.findIndex(function (producto) { return producto.id === id; });
        if (posicion !== -1) {
            var producto = this.productos.splice(posicion, 1)[0];
            console.log("Se elimino el producto: ".concat(producto.nombre, " con el ID: ").concat(producto.id));
        }
    };
    ProductoManager.prototype.consultarProductos = function () {
        console.log("Productos: ");
        this.productos.forEach(function (producto) {
            console.log("ID: ".concat(producto.id, " | Nombre: ").concat(producto.nombre, " | Descripcion: ").concat(producto.descripcion, " | Precio: ").concat(producto.precio));
        });
    };
    return ProductoManager;
}());
exports.ProductoManager = ProductoManager;
