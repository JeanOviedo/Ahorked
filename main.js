let palabras = [
    "pepino",
    "tomate",
    "alura",
    "diente",
    "cerveza",
    "galleta",
    "platano",
    "sopa",
    "comida",
    "software"
];
let palabrasuser = [];
aleatorio = Math.floor(Math.random() * (palabras.length));
seleccion = palabras[aleatorio]
let array1 = seleccion.split('');
let array = array1.reverse();
console.log("trace(seleccion)", array)


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    document.getElementById('form').insertAdjacentHTML('afterbegin', `<img src="img.png" alt="" id="img_${element}" name="img_${element}"  value="${element}"/>`)

}


let Form = document.getElementById("btna");
Form.addEventListener("submit", function (event) {
    event.preventDefault();
});

function inutil() {}


function f_a() { // let a = document.getElementById("btna").value;
    let resultado2  = array.filter(x => x.toLowerCase().includes("a"));
    //const resultado2 = array.find(array => array == 'a');
    console.log("clicka", resultado2)

for (let index = 0; resultado2.length; index++) {
   
    var btn = document.createElement("button");
    //btn.setAttribute('style', 'background-color: black' );
    btn.innerText= "A";
    let quita = document.getElementById("form");
    let pone = document.getElementById("img_a");
    quita.replaceChild(btn, pone)
    document.getElementById('btna').style.visibility='hidden';
}

    
}


document.write('<br>')
