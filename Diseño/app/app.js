
/* Carrusel galeria Glider JS */
window.addEventListener('load' , function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 4,
        slidesToScroll: 2,

        itemWidth: undefined,

        exactWidth: false,
      
        duration: .5,
      
        dots: '.indicadores',
      
        arrows: {
          prev: '.flecha-izq',
          next: document.querySelector('.flecha-der')
        },
      
        draggable: true,
        dragVelocity: 1,
      
        easing: function (x, t, b, c, d) {
          return c*(t/=d)*t + b;
        },
      
        scrollPropagate: false,
        eventPropagate: true,
      
        scrollLock: false,
        scrollLockDelay: 150,
      
        resizeLock: true,
      
        responsive: [
          {
            breakpoint: 200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      });
})


/* Evento de visualizacion de imagen */
const img = document.querySelectorAll('.img');
const containerImg = document.querySelector('.container-img')
const mostrarImg = document.querySelector('.img-show');

img.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
    addImg(imagen.getAttribute('src'))
    })
})

const addImg = (srcImagen) =>{
    containerImg.classList.toggle('mostrar')
    mostrarImg.src = srcImagen
}

if(containerImg){
    containerImg.addEventListener('click', ()=>{
    containerImg.classList.toggle('mostrar');
})}


/* Juego de Preguntas */

const preguntas = [{
    preg : {
        img : '../multimedia/images/trivia/1.jpg',
        texto : "¿Ámsterdam es la capital de que país?",
        0 : {
            r : 'Grecia',
            check : false
        },1 : {
            r : 'Alemania',
            check : false
        },2 : {
            r : 'Noruega',
            check : false
        },3 : {
            r : 'Paises Bajos',
            check : true
        }
    }
},{
    preg : {
        img : '../multimedia/images/trivia/2.jpg',


        texto : "¿Cuál es el lema oficial de la ciudad?",
        0 : {
            r : 'Heroica, resuelta y misericordiosa',
            check : true
        },1 : {
            r : 'Labor, orgullo y respeto',
            check : false
        },2 : {
            r : 'Tierra, cultura y silenciosa',
            check : false
        },3 : {
            r : 'Juramento, gloria y sacrificio',
            check : false
        }
    }
},{
    preg : {
        img : '../multimedia/images/trivia/3.jpg',

        texto : "¿Que famosa cerveceria tiene su fabrica en la ciudad?",
        0 : {
            r : 'Budweiser',
            check : false
        },1 : {
            r : 'Heineken',
            check : true
        },2 : {
            r : 'Stella',
            check : false
        },3 : {
            r : 'Corona',
            check : false
        }
    }
},{
    preg : {
        img : '../multimedia/images/trivia/4.jpg',

        texto : "¿Cuál es el vehiculo de transporte mas utilizado en la ciudad?",
        0 : {
            r : 'Bicicletas',
            check : true
        },1 : {
            r : 'Motos',
            check : false
        },2 : {
            r : 'Monopatines electricos',
            check : false
        },3 : {
            r : 'Autos',
            check : false
        }
    }
},{
    preg : {
        img : '../multimedia/images/trivia/5.jpg',

        texto : "¿Qué significa Rosse buurt?",
        0 : {
            r : 'Cerveceria',
            check : false
        },1 : {
            r : 'Jardin botanico',
            check : false
        },2 : {
            r : 'Taller de chapa y pintura',
            check : false
        },3 : {
            r : 'Barrio rojo',
            check : true
        }
    }
},{
    preg : {
        img : '../multimedia/images/trivia/6.jpg',

        texto : "¿Cuál es el atractivo comercial de los Coffe shops?",
        0 : {
            r : 'Venta de Cannabis',
            check : true
        },1 : {
            r : 'Venta de animales exóticos',
            check : false
        },2 : {
            r : 'Venta de quesos regionales',
            check : false
        },3 : {
            r : 'Venta de granos de café',
            check : false
        }
    }
},{
    preg : {
        img : '../multimedia/images/trivia/7.jpg',

        texto : "¿A que importante pintor pertenece este cuadro?",
        0 : {
            r : 'Picasso',
            check : false
        },1 : {
            r : 'Rembrendthuis',
            check : false
        },2 : {
            r : 'Van Gogh',
            check : true
        },3 : {
            r : 'Velazquez',
            check : false
        }
    }
},{
    preg : {
        img : '../multimedia/images/trivia/8.jpg',

        texto : "¿Con que paises limita Paises Bajos?",
        0 : {
            r : 'Alemania y Dinamarca',
            check : false
        },1 : {
            r : 'Belgica y Francia',
            check : false
        },2 : {
            r : 'Suiza e Italia',
            check : false
        },3 : {
            r : 'Alemania y Belgica',
            check : true
        }
    }
},{
    preg : {
        img : '../multimedia/images/trivia/9.jpg',

        texto : "¿De qué colores son las franjas de la bandera del país?",
        0 : {
            r : 'Azul, amarillo y morado',
            check : false
        },1 : {
            r : 'Naranja y blanco',
            check : false
        },2 : {
            r : 'Rojo , naranja y blanco',
            check : false
        },3 : {
            r : 'Rojo, blanco y azul',
            check : true
        }
    }
},{
    preg : {
        img : '../multimedia/images/trivia/10.jpg',

        texto : "¿En qué museo de la ciudad esta exhibida esta obra?",
        0 : {
            r : 'Rijksmuseum',
            check : true
        },1 : {
            r : 'Museo Van Gogh',
            check : false
        },2 : {
            r : 'Stedelijk',
            check : false
        },3 : {
            r : 'Museo del Louvre',
            check : false
        }
    }
},
]

// Conexiones con bloques HTML
const pregunta = document.getElementById("preg");
const lista = document.getElementById("respuestas");
const comenzar = document.getElementById('comenzar')
const final = document.getElementById('final')
const trivia = document.getElementById('trivia')
const imagen = document.getElementById('imagen')
const mensaje = document.getElementById('mensaje')

const res1 = document.getElementById('r1')
const res2 = document.getElementById('r2')
const res3 = document.getElementById('r3')
const res4 = document.getElementById('r4')
const res = [res1,res2,res3,res4]

//Variables usadas
let puntaje = 0;
let suma = 1;
let bandera = false;
let contador = 0;
let c = 0;
let total = 0


//Funcion para empezar y avanzar en el juego
function generarPregunta(){
    if(!bandera){

        trivia.classList.remove('d-none')
        if(preguntas.length > contador){
            imagen.src = preguntas[contador].preg.img
            imagen.setAttribute('src' , preguntas[contador].preg.img)

        pregunta.textContent = preguntas[contador].preg.texto

            for(let j = 0 ; j < 4 ; j++){
                res[j].textContent =
                `
                 ${preguntas[contador].preg[j].r}
                `                
                res[j].classList.remove('disabled')
            }
            
            comenzar.style.display = "none"
            bandera = true;

            

            return contador++;

    } else {
        alert("Fin del juego")

        lista.style.display = 'none'
        if(puntaje <= 4){
            pregunta.classList.add('text-danger')
            mensaje.classList.add('text-danger')
            mensaje.textContent = 'Sera la proxima'
        }else if(puntaje > 4 && puntaje <= 7){
            pregunta.classList.add('text-warning')
            mensaje.classList.add('text-warning')
            mensaje.textContent = 'Casi lo logras'

        }else if(puntaje > 7 && puntaje <= 9){
            pregunta.classList.add('text-success')
            mensaje.classList.add('text-success')
            mensaje.textContent = 'Lo has conseguido'
        }else if(puntaje == 10){
            pregunta.classList.add('text-primary')
            mensaje.classList.add('text-primary')
            mensaje.textContent = 'Puntuacion excelente'

        }


        pregunta.textContent = `Tu puntaje es de: ${puntaje}`

        
    }
}

}

//Funcion que verifica las respuestas
function verificar(index){
    c = 0;
    let check = preguntas[contador - 1 ].preg[index].check

    if(check){
        puntaje = puntaje + suma
    }

    bandera = false;
    generarPregunta();
}


/* Validacion de formulario */

const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const email = document.getElementById('email')
const consulta = document.getElementById('consulta')
const formulario = document.getElementById('form')
const enviarButton = document.getElementById('enviar')


function validarForm(){
    if(nombre.value.length <= 2){
        eForm(nombre)
        return false
    }
    if(apellido.value.length <= 2){
        eForm(apellido)
        return false

    }
    if(consulta.value.length <= 0){
        eForm(consulta)
        return false
    }

    let chMail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    let valor = email.value
    if(!(chMail.test(valor))) {
        eForm(email)
        return false
    }

    console('Mensaje Enviado')
    document.form.submit();
}

function eForm(n){
    n.classList.toggle('error')
}
