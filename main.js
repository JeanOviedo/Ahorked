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
let guardado = localStorage.getItem('datos');
if (guardado != "") {
  
    palabras= palabras.concat(JSON.parse(guardado));
    console.log(palabras , "guardas")
 }
let reset = false;
let correcto = 0;
let incorrecto = 0;
let palabrasuser = [];
let aleatorio = Math.floor(Math.random() * (palabras.length));
let seleccion = palabras[aleatorio]
let array1 = seleccion.split('');
let array = array1.reverse();
console.log("trace(seleccion)", array)





for (let index = 0; index < array.length; index++) {
    const element = array[index];
    document.getElementById('form').insertAdjacentHTML('afterbegin', `<img src="img/img.png" alt="" class="icos" id="img_${element}" name="img_${element}"  value="${element}"/>`)

}


let Form = document.getElementById("btna");
Form.addEventListener("submit", function (event) {
    event.preventDefault();
});


function jugar(params) {
    document.getElementById('formhome').style.display = "none";
    document.getElementById('form').style.display = "";
    document.getElementById('formperdiste').style.display = "none";
    document.getElementById('formganaste').style.display = "none";
}




function home(params) {
    document.getElementById('form').style.display = "none";
    document.getElementById('formhome').style.display = "";
    document.getElementById('formadd').style.display = "none";
    document.getElementById('formperdiste').style.display = "none";
    document.getElementById('formganaste').style.display = "none";
}


function palabra(params) {
    document.getElementById('form').style.display = "none";
    document.getElementById('formhome').style.display = "none";
    document.getElementById('formadd').style.display = "";
    document.getElementById('formperdiste').style.display = "none";
    document.getElementById('formganaste').style.display = "none";
}

function guardar() {
    let texto = document.getElementById('texto').value;
    palabrasuser.push(texto);
    console.log(palabrasuser);
     document.getElementById('oculto3').style.display = "";
    
   
    setTimeout(function(){
        document.getElementById('oculto3').style.display = "none";
    }, 1000);
   
    //document.getElementById("texto").reset();
    document.getElementById('texto').value = "";
    document.getElementById('texto').setAttribute("value", "");
    localStorage.setItem('datos', JSON.stringify(palabrasuser));
    return false; // stop submission
  }

function f_a(letra) { // let a = document.getElementById("btna").value;
    let resultado2 = array.filter(x => x.toLowerCase().includes(letra));
    // const resultado2 = array.find(array => array == 'a');
    console.log("clicka", resultado2)

    if (array.length == 1) {

        document.getElementById('oculto').style.display = "";
        document.getElementById('formganaste').style.display = "";
        document.getElementById('form').style.display = "none";
        document.getElementById('formperdiste').style.display = "none";
    }

    if (resultado2.length < 1) {
        incorrecto = incorrecto + 1;
        document.getElementById("img").src = "img/ahorcado" + incorrecto + ".png";
        // document.getElementById('btn' + letra).style.visibility = 'hidden';
        document.getElementById('btn' + letra).setAttribute("disabled", "disabled");
        if (array.length < incorrecto) {
            document.getElementById('oculto2').style.display = "";
            document.getElementById('form').style.display = "none";
            document.getElementById('formperdiste').style.display = "";
            document.getElementById("img").src = "img/ahorcado.png";
            document.getElementById('palabra').setAttribute("value",seleccion);
        }


    } else {

        for (let index = 0; resultado2.length; index++) {
            let btn = document.createElement('img')
            btn.src = 'img/' + letra + '.png';
            btn.class = 'icos';
            let quita = document.getElementById("form");
            let pone = document.getElementById("img_" + letra);
            pone = document.getElementById("img_" + letra);
            quita.replaceChild(btn, pone)
            document.getElementById('btn' + letra).setAttribute("style", "background-color: #e600b0;");
            //document.getElementById('btn' + letra).setAttribute("style", "background-color: #e600b0;");
            document.getElementById('btn' + letra).setAttribute("disabled", "disabled");
            //document.getElementById('btn' + letra).setAttribute("id", "btn" + letra);
            
           
            correcto = correcto + 1;
            // incorrecto = incorrecto - 1;
            array = array.filter(function (f) {
                return f !== letra;
            })
        }
    }


}


document.write('<br>')
