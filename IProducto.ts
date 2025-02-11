//Para modelar Producto decidí hacerlo con una interfaz, porque no tendran un comportamiento individual, como alguna función.
export interface Producto{
    id: number,
    nombre: string,
    descripcion: string,
    precio: number
}