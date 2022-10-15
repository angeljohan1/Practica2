console.log("Starting.....")

//---------------------------------bloque import
//---------------------------------bloque variables y constantes
//---------------------------------bloque funciones

listarGuitarras = (resultado) => {
    resultado.forEach( (articulo) => {
            //Destructuring
            const {_id, nombre, descripcion, precio, imagen} = articulo;
            console.log(_id, nombre, descripcion, precio, imagen.url);

            const contenedorImagen = document.querySelector("#container-imagen");

            contenedorImagen.innerHTML +=  `
                                            <div>
                                            <div>
                                                <strong>Id: </strong> ${_id}
                                            </div>
                                            <div>
                                                <strong>Nombre: </strong> ${nombre}
                                            </div>

                                            <div>
                                                <img src="${imagen.url}" alt="${nombre}">
                                            </div>

                                            <div>
                                                <strong>Descripcion: </strong> ${descripcion}
                                            </div>
                                            <div>
                                                <strong>Precio: </strong> ${precio}
                                            </div>
                                            </div>
                                            <hr>
                                            <br>
                                        `;
        }); 
}

//Asyncronas
const consultarApi = async () => {
    try {
        const respuesta = await fetch("https://whispering-wildwood-03076.herokuapp.com/guitarras");

        const resultado = await respuesta.json();

        listarGuitarras(resultado);

    } catch (error) {
        console.log("Error: " + error.message);
    }
}

//---------------------------------bloque programa principal

consultarApi();


