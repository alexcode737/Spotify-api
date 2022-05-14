// Pasos para consumir una api

// 1. Para donde voy (conocer URI del servicio o api a consumir)
const URI = 'https://api.spotify.com/v1/artists/3eyhtBUxcN1VopDo3UCUg6/top-tracks?market=US';
const TOKEN = 'Bearer BQCCNppsLEyD4gPo_C1Jl_Gnuzh8mHVIQ60qCTUlTyfBLlrIUcmvIC_nGHnxrs5Cmf4gTYXw2bTJx__crSPKj3BhvytasKuGBBaXAk9gw3x_aDWuPcBooPBeTF8tzAP1prMOg79Q2XRMPEu0ce0vYL1nm8enSyJV_w0';
// 2. Armo la peticion (que vas a hacer ombe ?)

const PETICION = {
    method: "GET",
    headers: {Authorization:TOKEN}
}

//3. Arranca pues pal servidor (Consumir el api)
fetch(URI,PETICION)
.then(function(respuesta){
    return(respuesta.json()) //garantizo que retorne en formato Json
})
.then(function(respuesta){
    pintarCanciones(respuesta) // Hago lo que quiera con la respuesta
})
.catch(function(respuesta){
    console.log(respuesta) // Muestro el fallo si no se pudo consumir el api
})

// crear funcion para pintar la info que llega de la api
function pintarCanciones(canciones){
    let fila = document.getElementById("fila");

    // recorro el arreglo de canciones
    canciones.tracks.forEach(function(cancion){
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)

        //crear una columna para cada cancion
        let columna = document.createElement("div");
        columna.classList.add("col");
        

        //creo la targeta
        let targeta = document.createElement("div");
        targeta.classList.add("card","h-100")

        // creo la foto
        let foto = document.createElement("img")
        foto.src = cancion.album.images[0].url;
        foto.classList.add("card-img-top");

        // creo el titulo
        let titulo = document.createElement("h1")
        titulo.textContent = cancion.name;
        titulo.classList.add("card-titulo")

        // creo el audio
        let audio = document.createElement("audio");
        audio.src = cancion.preview_url;
        audio.classList.add("w-100");
        audio.setAttribute("controls","controls");

        // Padres e hijos
        targeta.appendChild(titulo);
        targeta.appendChild(foto);
        targeta.appendChild(audio);
        columna.appendChild(targeta);
        fila.appendChild(columna);
    }) 
        
}