const parrafo = document.querySelector ("p");
const input = document.querySelector ("detalles");

input.addEventListener ("change", (Event) ⇒ {
    parrafo.textContent = Event.target.value
});

function clickTitulo () {
    console.log ("El usuario hizo click en el titulo");
}

const titulo2 = document.getElementById ("titulodes");

titulo2.addEventListener("click",clickTitulo);

document.addEventListener ("DOMContentLoaded"), ()  ⇒ {
    console.log("El documento se ha cargado");
}; 

const productos1 =  [
    {nombre: "Banqueta", precio: $40000},
    { nombre: "Mesa", precio: $50000},
    {nombre: "silla", precio: $45000}, 
    {nombre: "Huerta", precio: $35000},
];

localStorage.setItem("productos1", JSON.stringify(productos1));

const productos1EnLS = JSON.parse (localStorage.getItem("productos1"));
console.log(productos1EnLS);
