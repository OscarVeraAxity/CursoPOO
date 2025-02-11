import { Producto } from "./IProducto";

//Esta clase contendra todos los metodos necesarios para cumplir con la logica del uso de productos.
export class ProductoManager{
    productos: Producto[] = [];
    
    añadirProductos(producto: Producto[]){
         producto.forEach((producto) => {
            this.productos.push(producto);
            console.log(`Se agrego "${producto.nombre}" a la tienda!`);
        });
    }

    restarProducto(id: number){
        const posicion = this.productos.findIndex((producto) => producto.id === id);
        if (posicion !== -1) {
            const producto = this.productos.splice(posicion, 1)[0];
            console.log(`Se elimino el producto: ${producto.nombre} con el ID: ${producto.id}`);
        }
    }

    consultarProductos(){
        console.log("Productos: ");
        this.productos.forEach((producto) =>{
            console.log(`ID: ${producto.id} | Nombre: ${producto.nombre} | Descripcion: ${producto.descripcion} | Precio: ${producto.precio}`);
        });
    }
}