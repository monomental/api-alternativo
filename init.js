const productos = "https://monomental.github.io/api-alternativo/producto.json";

function cargarDatos(url) {
    document.getElementById("data").innerHTML = "";
    fetch(url)
        .then(respuesta => respuesta.json())

        .then(datos => {

            datos.forEach(producto => {
                let row = "";
                row = `

                <tr>
                    <td>` + producto.nombre + ` </td>
                    <td> ` + producto.precio + `</td>
                     <td>` + producto.descripcion + `</td>
                 </tr>
                     
                     `

                document.getElementById("data").innerHTML += row;

            });



        })
        .catch(error => alert("Hubo un error: " + error));
}

cargarDatos(productos);
