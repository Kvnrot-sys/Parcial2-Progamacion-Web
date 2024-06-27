document.addEventListener('DOMContentLoaded',function(){

window.cambiarColor = cambiarColor

let articulo = document.querySelector('#principal')
let texto = document.querySelector('#texto')
let coloresBg = document.querySelector('#colores')
let universidad = document.querySelector('#universidades')


universidad.addEventListener('change', function(){

    let uniElegida = universidad.value



    if(uniElegida == 'UNLAM'){
        texto.innerHTML = 'UNLAM'
    }
    if(uniElegida == 'UAI'){
        texto.innerHTML = 'UAI'
    }
    if(uniElegida == 'UNSAM'){
        texto.innerHTML = 'UNSAM'
    }

})

coloresBg.addEventListener('change',function(){

    let colorElegido = coloresBg.value


    if(colorElegido == 'rojo'){
        articulo.style.background = 'red'

    }
    if(colorElegido == 'verde'){
        articulo.style.background = 'green'

    }
    if(colorElegido == 'azul'){
        articulo.style.background = 'blue'

    }


})

function cambiarColor(color){
    if(color.checked){
        if(color.value == "Blanco"){
            texto.style.color = 'white'

        }
        if(color.value == "Gris"){
            texto.style.color = 'gray'

        }
        if(color.value == "Amarillo"){
            texto.style.color = 'yellow'

        }
    }
}

})