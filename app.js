class Product{
    constructor(id, model, descripcion, marca, precio){
        this.id = id;
        this.model = model;
        this.descripcion = descripcion;
        this.marca = marca;
        this.precio = precio;
    }

    equivale(otherProduct){
        return (this.id == otherProduct.id);
    }
}

const tenis = new Product(101, "Air Jordan 1 Mid SE", "CABALLEROS", "AIR ORDAN", 3299, "por definir", "../media/img/store/products/jordan-1-hombre.webp");

const sudadera = new Product(106, "Sudadera Adidas Crew", "DAMAS", "ADIDAS", 1699, "por definir", "../media/img/store/products/sudadera-adidas-crew.jpg");

const pantalon = new Product(108, "Pantalón Puma X The Ragged Priest", "DAMAS", "PUMA", 1799, "por definir", "../media/img/store/products/pantalon-puma-ragged-priest.jpg");

const gorra = new Product(110, "Gorra New Era Yankees Sakura", "CABALLEROS", "NEW ERA", 1049, "por definir", "../media/img/store/products/gorra-new-era-yankees-sakura.jpg")

const tenisPlataforma = new Product(109, "Tenis Adidas Nizza x Hello Kitty", "DAMAS", "ADIDAS", 2199, "por definir", "../media/img/store/products/tenis-adidas-nizza-platform-hello-kitty.webp");

window.alert(`Los productos en tu carrito son: ${imprimirProducto(tenis)} ${imprimirProducto(sudadera)} ${imprimirProducto(pantalon)} ${imprimirProducto(gorra)} ${imprimirProducto(tenisPlataforma)}`);

let opcion; 
let permiso = true;
let salir = false;
let reintentar;
let id;
do{
    opcion = parseInt(window.prompt(`\nElige una la accion que deseas realizar:\n1) Obtener el precio total\n2) Aplicar cupon de descuento (codigos: VIMTV) \n3) Eliminar un producto \n4)Salir`));
    switch(opcion){
        case 1:
            window.alert(`El precio total de los productos es: ${tenis.precio + sudadera.precio + pantalon.precio + gorra.precio + tenisPlataforma.precio}`);
            break;

        case 2:
            let cupon;
            let volver = true;
            if(permiso = true){
                do{
                    cupon = window.prompt(`Ingresa el codigo de descuento, solo un codigo se pude utilizar por compra (VIMTV = 30%)`);
                    reintentar = 0;
                    if(cupon != "VIMTV"){
                        reintentar = parseInt(window.prompt(`Codigo no valido, quieres volver a intentarlo? si(1) no(0)`));
                    }
                }while(reintentar == 1);
    
                volver = cupon != "VIMTV" ? false : true;
                while(cupon == "VIMTV" && volver == true){
                    id = parseInt(window.prompt(`Ingresa el id del producto al que deseas aplicarle el descuento.\n
                    Los productos en tu carrito son: ${imprimirProducto(tenis)} ${imprimirProducto(sudadera)} ${imprimirProducto(pantalon)} ${imprimirProducto(gorra)} ${imprimirProducto(tenisPlataforma)}`));
    
                    switch(id){
                        case 101:
                            tenis.precio *= procesarCupon(cupon);
                            window.alert(`el nuevo precio de los tenis es: ${tenis.precio}`);
                            volver = false;
                            break;
                        case 106:
                            sudadera.precio *= procesarCupon(cupon);
                            window.alert(`el nuevo precio de los sudadera es: ${sudadera.precio}`);
                            volver = false;
                            break;
                        case 108:
                            pantalon.precio *= procesarCupon(cupon);
                            window.alert(`el nuevo precio de los pantalon es: ${pantalon.precio}`);
                            volver = false;
                            break;
                        case 110:
                            gorra.precio *= procesarCupon(cupon);
                            window.alert(`el nuevo precio de los gorra es: ${gorra.precio}`);
                            volver = false;
                            break;
                        case 109:
                            tenisPlataforma.precio *= procesarCupon(cupon);
                            window.alert(`el nuevo precio de los tenis de plataforma es: ${tenisPlataforma.precio}`);
                            volver = false;
                            break;
                        default:
                            let valor = parseInt(window.prompt(`id del producto no encontrado, reintentar? si(1) no(0)`));
                            volver = valor == 1 ? true : false;
                            break;
                    }
                }

                permiso = false;
            }else{
                window.alert("ya no tienes acceso a esta accion, porque acabas de usar un cupon")
            }
            break;

        case 3:
            reintentar = 1;
            console.log("entro");
            while(reintentar == 1){
                id = parseInt(window.prompt(`Ingresa el id del producto que deseas eliminar.\n
                Los productos en tu carrito son: ${imprimirProducto(tenis)} ${imprimirProducto(sudadera)} ${imprimirProducto(pantalon)} ${imprimirProducto(gorra)} ${imprimirProducto(tenisPlataforma)}`));

                switch(id){
                    case 101:
                        eliminar(tenis);
                        window.alert(`Producto Eliminado.\n
                        Los productos en tu carrito son: ${imprimirProducto(tenis)} ${imprimirProducto(sudadera)} ${imprimirProducto(pantalon)} ${imprimirProducto(gorra)} ${imprimirProducto(tenisPlataforma)}`);
                        reintentar = 0;
                        break;
                    case 106:
                        eliminar(sudadera);
                        window.alert(`Producto Eliminado.\n
                        Los productos en tu carrito son: ${imprimirProducto(tenis)} ${imprimirProducto(sudadera)} ${imprimirProducto(pantalon)} ${imprimirProducto(gorra)} ${imprimirProducto(tenisPlataforma)}`);
                        reintentar = 0;
                        break;
                    case 108:
                        eliminar(pantalon);
                        window.alert(`Producto Eliminado.\n
                        Los productos en tu carrito son: ${imprimirProducto(tenis)} ${imprimirProducto(sudadera)} ${imprimirProducto(pantalon)} ${imprimirProducto(gorra)} ${imprimirProducto(tenisPlataforma)}`);
                        reintentar = 0;
                        break;
                    case 110:
                        eliminar(gorra);
                        window.alert(`Producto Eliminado.\n
                        Los productos en tu carrito son: ${imprimirProducto(tenis)} ${imprimirProducto(sudadera)} ${imprimirProducto(pantalon)} ${imprimirProducto(gorra)} ${imprimirProducto(tenisPlataforma)}`);
                        reintentar = 0;
                        break;
                    case 109:
                        eliminar(tenisPlataforma);
                        window.alert(`Producto Eliminado.\n
                        Los productos en tu carrito son: ${imprimirProducto(tenis)} ${imprimirProducto(sudadera)} ${imprimirProducto(pantalon)} ${imprimirProducto(gorra)} ${imprimirProducto(tenisPlataforma)}`);
                        reintentar = 0;
                        break;
                    default:
                        reintentar = parseInt(window.prompt(`id del producto no encontrado, reintentar? si(1) no(0)`));
                        break;
                }
            }
            break;

        case 4:
            salir = true;
            break;

        default:
            opcion = parseInt(window.prompt(`Opcion invalida, vuelve a intentarlo con un valor correcto (entre 1 y 4) \n1) Obtener el precio total\n2) Aplicar cupon de descuento (codigos: HOTSALE23, VIMTV) \n3) Eliminar un producto \n4)Salir`))
            break;
    }
}while(salir == false || opcion < 1 || opcion > 4);

function procesarCupon(cupon){
    return cupon == "HOTASALE23" ? .75 : .70;
}

function eliminar(producto){
    producto.id = "eliminado";
    producto.model = "eliminado";
    producto.descripcion = "eliminado";
    producto.marca = "eliminado";
    producto.precio = NaN;
}

function imprimirProducto(producto){
    return producto == null ? "" : `\n====PRODUCTO====\nid: ${producto.id}\nmodel: ${producto.model} \ndescripcion: ${producto.descripcion} \nmarca: ${producto.marca} \nprecio: ${producto.precio}\n`;
}