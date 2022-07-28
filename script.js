//Yamila Hesain Comision 30440

//Presentación de la página
alert("BIENVENIDO A TIENDA FENIX \n       ♥ by YamiHesa ♥")

//Pido Nombre y Apellido para Saludo de Bienvenida
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

    alert("Hola!!!! \n" + nombre + " " + apellido);

alert("Estos son los productos que tenemos↓↓↓")  

//Creo la clase de objeto producto como base para cargar los productos 
class Producto {
    constructor(nombre, id, precio, stock) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.stock = stock;
    }
    vender(cantidad) {
        this.stock = this.stock - cantidad;
    }
}

//Inicializo arrays para las categorias de los productos
const velas = [];
const sahumerios = [];
const hornitos = [];
const fuentes = [];
const atrapasueños = [];



//Cargo el stock de productos segun su categoria
//VELAS
const productos = []
velas.push(new Producto("Vela Chica", 1, 100, 10));
velas.push(new Producto("Vela Mediana", 2, 150, 20));

//SAHUMERIOS
sahumerios.push(new Producto("Sahumerio de Rosas", 3, 120, 20));
sahumerios.push(new Producto("Sahumerio de Sándalo ", 4, 150, 10));

//HORNITOS
hornitos.push(new Producto("Hornito de Cerámica", 5, 2900, 10));
hornitos.push(new Producto("Hornito de Piedra", 6, 1000, 10));

//FUENTES
fuentes.push(new Producto("Fuente de Agua Mediana", 7, 8500, "Negro", 5));
fuentes.push(new Producto("Fuente de Grande", 8, 11500, 5));

//ATRAPASUEÑOS
atrapasueños.push(new Producto("Atrapasueños Mediano", 9, 1000, 10));
atrapasueños.push(new Producto("Atrapasueños Grande", 10, 1000, 10));


//Recorro los arrays para mostrarle los productos al usuario
for (const vela of velas) {
    alert("ID ("+ vela.id + ") » " + vela.nombre);
}
for (const sahumerio of sahumerios) {
    alert("ID ("+ sahumerio.id + ") » " + sahumerio.nombre);
}
for (const hornito of hornitos) {
    alert("ID ("+ hornito.id + ") » " + hornito.nombre);
}
for (const fuente of fuentes) {
    alert("ID ("+ fuente.id + ") » " + fuente.nombre);
}
for (const atrapasueño of atrapasueños) {
    alert("ID ("+ atrapasueño.id + ") -» " + atrapasueño.nombre);
}
//Funcion para calcular el precio de la compra de cada ID
function calcularPrecio(precioProducto, cantidadProducto){
    return ((precioProducto * 1.21) * cantidadProducto);
}
   

let cantidadCompras = parseInt(prompt("Ingrese la cantidad de productos a comprar:"))
let precioTotal = 0;
for(let i = 0; i < cantidadCompras; i++){
//Solicito al usuario el ID del producto a comprar
let productosSeleccionado = parseInt(prompt("Ingrese el ID del producto que desea comprar:"));
const velaBuscada = velas.find(vela => vela.id === productosSeleccionado);
const sahumerioBuscado = sahumerios.find(sahumerio => sahumerio.id === productosSeleccionado);
const hornitoBuscado = hornitos.find(hornito => hornito.id === productosSeleccionado);
const fuenteBuscada = fuentes.find(fuente => fuente.id === productosSeleccionado);
const atrapasueñoBuscado = atrapasueños.find(atrapasueño => atrapasueño.id === productosSeleccionado);

//Solicito al usuario la cantidad de productos que desea comprar

let cantidad = parseInt(prompt("Ingrese la cantidad de unidades que quiere comprar del producto seleccionado:"));

if (productosSeleccionado <= 0) {
    alert("Ingresa un ID valido");
} else if (productosSeleccionado <=2) {
    precioTotal += calcularPrecio(velaBuscada.precio, cantidad);
    alert("El precio final de tu compra es: $" + calcularPrecio(velaBuscada.precio, cantidad));
    velaBuscada.vender(cantidad);
} else if (productosSeleccionado <=4) { 
    precioTotal += calcularPrecio(sahumerioBuscado.precio, cantidad);   
     alert("El precio final de tu compra es: $" + calcularPrecio(sahumerioBuscado.precio, cantidad));
    sahumerioBuscado.vender(cantidad);
} else if (productosSeleccionado <= 6) {
    precioTotal += calcularPrecio(hornitoBuscado.precio, cantidad);
    alert("El precio final de tu compra es: $" + calcularPrecio(hornitoBuscado.precio, cantidad));
    hornitoBuscado.vender(cantidad);
} else if (productosSeleccionado <= 8) {
    precioTotal += calcularPrecio(fuenteBuscada.precio, cantidad);
    alert("El precio final de tu compra es: $" + calcularPrecio(fuenteBuscada.precio, cantidad));
    fuenteBuscada.vender(cantidad);
} else if (productosSeleccionado <= 10) {
    precioTotal += calcularPrecio(atrapasueñoBuscado.precio, cantidad);
    alert("El precio final de tu compra es: $" + calcularPrecio(atrapasueñoBuscado.precio, cantidad));
    atrapasueñoBuscado.vender(cantidad);
} else {
    alert("Ingresa un ID valido, ese producto es inexistente");
} 
}
//Le mostramos al usuario el precio Total de su compra
alert ("El total de su compra es $ " + precioTotal)
alert("¡Que disfrute de su compra  \n Lo esperamos de nuevo!")

//comentario y Saludo de despedida
let comentario = prompt("¿Desea dejar un comentario?");

alert("Gracias por dejarnos tu comentario!!!")

alert("¡¡Hasta la proxima!!☺")