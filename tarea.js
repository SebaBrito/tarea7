import 'regenerator-runtime/runtime';
import axios from 'axios';

class Personajes {
    constructor(_nombre, _especie, _imagen, _id) {
        this.nombre = _nombre;
        this.especie = _especie;
        this.imagen = _imagen;
        this.id = _id;
    }
    Mostrar() {
        var Personajes = [this.imagen, this.nombre, this.especie, this.id];
        show(Personajes); //funcion show para ingresar los datos
    }
}

async function api() {
    try {
        const api_url = "https://rickandmortyapi.com/api/character";
        var response = await fetch(api_url);
        var data = await response.json();
        try {
            for (let i = 0; i < data.results.length; i++) {
                const response = await axios.get(api_url); //consulta otravez la url anterior
                var data2 = response.data;
                //Datos
                var id = data2.results[i].id;
                var name = data2.results[i].name;
                var especie = data2.results[i].species;
                var imagen = data2.results[i].image;
                // ingresa datos del api
                let list = new Personajes(name, especie, imagen, id);
                list.Mostrar(); //get del class
            }
        } catch (error) {
            console.log(error + ' | Error en la API AXIOS')
        }
    } catch (error) { console.log(error + ' | Error en la API FETCH') }
}

api()

function show(Personajes) {
    let tab =
        `<div class="card">
        <h1>${[Personajes[3]]}</h1>
    <img src="${[Personajes[0]]}"></img>
    <h1>${[Personajes[1]]}</h1>
    <h1>${[Personajes[2]]}</h1>
</div>`;
    document.getElementById("container-grid").innerHTML += tab;
}














































/*const api = "https://rickandmortyapi.com/api/character";

class RickAndMorty {
    constructor() {
        this.characterUrl = undefined;
        this.id = undefined;
        this.name = undefined;
        this.name = undefined;
        this.species = undefined;
        this.image = undefined;
    }
}
show(){
    const characterUrl = new characterUrl;
    characterUrl.forEach(element => { });
    fetch(characterUrl)
          .then((res) => res.json())
          .then((data) =>{
             createRick(data)
    });    
    };
*/