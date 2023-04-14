/*  SE ASEGURA QUE TODO EL CÓDIGO SE EJECUTE DESPUÉS DE QUE SE HAYAN CARGADO TODOS LOS ELEMENTOS DE LA PÁGINA.*/
document.addEventListener("DOMContentLoaded", function () {

    /* OBTENER REFERENCIA DE TODOS LOS BOTONES DEL CATÁLOGO */
    let botones = window.document.querySelectorAll("#catalogo > article > button");
    /* SE COLOCA UN CONTADOR DESDE 0 PARA CONTAR LOS PRECIOS FINALES DE CADA PRODUCTO */
    let totalPagar = 0;
    /* ALMACENAR EL NUMERO DE LIBROS EN EL CARRITO */
    let numLibros = 0;

    /* AGREGAMOS EL EVENTO CLICK Y EJECUTAR METODO */
    botones.forEach(element => {
        element.addEventListener("click", agregarCarrito);
    });

    /* METODO PARA AGREGAR EL PRODUCTO AL CARRITO */
    function agregarCarrito(producto) {
        /* CONSEGUIR DATOS DEL PRODUCTO */
        let tituloProducto = producto.target.parentElement.querySelector("h3");
        let precioProducto = producto.target.parentElement.querySelector(".precioFinal");
        let imagenProducto = producto.target.parentElement.querySelector("picture");
        let precioFinal = parseFloat(producto.target.parentElement.querySelector(".precioFinal").textContent.substr(3));

        /* COLOCAR EN EL MODAL */
        let modalCuerpo = document.querySelector("#ventanaCarrito > div > div > div.modal-body");

        /* CONDICIONAL PARA SABER SI EL CARRITO ESTÁ VACÍO */
        if (modalCuerpo.querySelector("p").innerHTML == "Sin ninguna compra.") {
            modalCuerpo.innerHTML = "";
            /* REINICIA EL NUMERO DE PRODUCTOS EN EL CARRITO */
            numLibros = 0;

            /* ACTUALIZAR EL CONTADOR DE PRODUCTOS EN EL HTML */
            let contadorProductos = document.querySelector("#contador-productos");
            contadorProductos.textContent = numLibros;

            /* REINICIA LOS PRECIOS EN EL CARRITO */
            totalPagar = 0;

            /* ACTUALIZA EL MONTO FINAL EN EL MODAL */
            let modalPie = document.querySelector("#ventanaCarrito > div > div > div.modal-footer > div.mb-3");
            modalPie.innerHTML = "<h3><p>Total: S/ 00.00</h3></p>";
        }

        /* SE AGREGA LOS ATRIBUTOS DE LOS LIBROS AL MODEL - BODY */
        modalCuerpo.innerHTML += "<h3>" + tituloProducto.innerHTML + "<h3><p>" + precioProducto.innerHTML + "</p>" + "<p>" + imagenProducto.innerHTML + "</p>" + "<hr>";

        /* SE REGISTRA EL PRECIO FINAL DE CADA PRODUCTO QUE VA AUMENTAR Y ALMACENAR EN EL CONTADOR totalPagar*/
        totalPagar += precioFinal;

        /* ACTUALIZAR EL NUMERO DE PRODUCTOS EN EL CARRITO */
        numLibros++;

        /* ACTUALIZAR EL CONTADOR DE PRODUCTOS EN EL HTML */
        let contadorProductos = document.querySelector("#contador-productos");
        contadorProductos.textContent = numLibros;

        /* SE REGISTRA EL tottalPagar AL PIE DEL MODEL JUNTO CON LOS 2 BOTONES */
        let modalPie = document.querySelector("#ventanaCarrito > div > div > div.modal-footer > div.mb-3");
        modalPie.innerHTML = "<h3><p>Total: S/ " + totalPagar.toFixed(2) + "</h3></p>";

        /* AVISAR SI SE AGREGÓ CORRECTAMENTE */
        alert("Se agregó correctamente. Son S/ " + totalPagar.toFixed(2) + " hasta ahora.");
    }

});

/* SE OBTIENE LA REFERENCIA DEL BOTON ELIMINAR DESDE LA ETIQUETA BUTTON DE ID = "botonEliminar" */
let botonBorrar = document.querySelector("#botonBorrar");

/* AGREGAMOS EL EVENTO CLICK Y EJECUTAR MÉTODO "vaciarCarrito"*/
botonBorrar.addEventListener("click", vaciarCarrito);

/* METODO PARA ELIMINAR EL PRODUCTO DEL CARRITO Y REINICIANDO DESDE 0 INCLUYENDO AL CONTADOR*/
function vaciarCarrito() {
    let modalCuerpo = document.querySelector("#ventanaCarrito > div > div > div.modal-body");
    modalCuerpo.innerHTML = "<p>Sin ninguna compra.</p>";

    totalPagar = 0;

    let modalPie = document.querySelector("#ventanaCarrito > div > div > div.modal-footer > div.mb-3");
    modalPie.innerHTML = "<h3><p>Total: S/ 00.00</h3></p>";

    numLibros = 0;

    let contadorProductos = document.querySelector("#contador-productos");
    contadorProductos.textContent = numLibros;

    /* AVISAR SI SE ELIMINÓ CORRECTAMENTE */
    alert("Se eliminó correctamente.")
}

/* SE OBTIENE LA REFERENCIA DEL BOTON FINALIZAR DESDE LA ETIQUETA BUTTON DE ID = "botonFinalizar" */
let botonFinalizar = document.querySelector("#botonFinalizar");

/* AGREGAMOS EL EVENTO CLICK Y EJECUTAR MÉTODO "finalizarCompra" */
botonFinalizar.addEventListener("click", finalizarCompra);

/* ESTE MÉTODO NOTIFICA LA COMPRA REALIZADA */
function finalizarCompra() {
    alert("La compra está hecha. Gracias por su compra.");
    let modalCuerpo = document.querySelector("#ventanaCarrito > div > div > div.modal-body");
    modalCuerpo.innerHTML = "<p>Sin ninguna compra.</p>";

    totalPagar = 0;

    let modalPie = document.querySelector("#ventanaCarrito > div > div > div.modal-footer > div.mb-3");
    modalPie.innerHTML = "<h3><p>Total: S/ 00.00</h3></p>";

    numProductos = 0;

    let contadorProductos = document.querySelector("#contador-productos");
    contadorProductos.textContent = numProductos;

}