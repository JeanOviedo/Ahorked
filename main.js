let palabras = [
    "pepino",
    "tomate",
    "alura",
    "diente",
    "cerveza",
    "galleta",
    "platano",
    "computador",
    "comida",
    "software",
    "spiderman",
    "vengador",
    "camisa",
    "pelicula",
    "cabeza",
    "pantalon",
    "bailar"

];
let correcto = 0;
let incorrecto = 0;
let palabrasuser = [];
aleatorio = Math.floor(Math.random() * (palabras.length));
let seleccion = palabras[aleatorio]
let array1 = seleccion.split('');
let array = array1.reverse();
console.log("trace(seleccion)", array)


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    document.getElementById('form').insertAdjacentHTML('afterbegin', `<img src="img/img.png" alt="" id="img_${element}" name="img_${element}"  value="${element}"/>`)

}


let Form = document.getElementById("btna");
Form.addEventListener("submit", function (event) {
    event.preventDefault();
});


function jugar(params) {
    document.getElementById('formhome').style.display = "none";
    document.getElementById('form').style.display = "";
}

function f_a(letra) { // let a = document.getElementById("btna").value;
    let resultado2 = array.filter(x => x.toLowerCase().includes(letra));
    // const resultado2 = array.find(array => array == 'a');
    console.log("clicka", resultado2)

    if (array.length == 1) {

        document.getElementById('oculto').style.display = "";
        document.getElementById('formganaste').style.display = "";
        document.getElementById('form').style.display = "none";
    }

    if (resultado2.length < 1) {
        incorrecto = incorrecto + 1;
        document.getElementById("img").src = "img/ahorcado"+incorrecto+".png";
        // document.getElementById('btn' + letra).style.visibility = 'hidden';
        document.getElementById('btn' + letra).setAttribute("disabled", "disabled");
        if (array.length < incorrecto) {
            document.getElementById('oculto2').style.display = "";
            document.getElementById('form').style.display = "none";
            document.getElementById('formperdiste').style.display = "";
            document.getElementById("img").src = "img/ahorcado.png";
        }



    } else {

        for (let index = 0; resultado2.length; index++) {
            var btn = document.createElement('img')
            btn.src = 'img/' + letra + '.png';
            let quita = document.getElementById("form");
            let pone = document.getElementById("img_" + letra);
            quita.replaceChild(btn, pone)
            document.getElementById('btn' + letra).setAttribute("style", "background-color: #e600b0;");
            document.getElementById('btn' + letra).setAttribute("id", "btnokd" + letra);
            correcto = correcto + 1;
            //incorrecto = incorrecto - 1;
            array = array.filter(function (f) {
                return f !== letra;
            })
        }
    }


}


document.write('<br>')
