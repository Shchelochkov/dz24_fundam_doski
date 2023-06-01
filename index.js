//задачка про стоимость фундамента

let but = document.getElementById('but')
let out = document.getElementById('out')

let ploshad = document.getElementById('ploshad')
let glubina = document.getElementById('glubina')
let stoimost = document.getElementById('stoimost')


but.onclick =f1


function f1(){
    console.log(ploshad.value)
    console.log(glubina.value)
    console.log(stoimost.value)
    let result = ploshad.value*glubina.value*stoimost.value
    result = Math.floor(result)
    out.innerText = 'Стоимость фундамента: ' + result + ' р'
}

//задачка про доски

let but1 = document.getElementById('but1')
let out1 = document.getElementById('out1')

let kolichestvo = document.getElementById('kolichestvo')



but1.onclick =f2


function f2(){
    let tzena = 1500

    console.log(kolichestvo.value)
    if (kolichestvo.value<=100){
        let result =tzena*kolichestvo.value
        result = Math.floor(result)
        out1.innerText = 'Нужно денег: ' + result + ' р' + ' Скидка 0%'
    }
    else if ((kolichestvo.value>100) && (kolichestvo.value<201)){
        let result =(tzena*kolichestvo.value)-((tzena*kolichestvo.value)*5/100)
        result = Math.floor(result)
        out1.innerText = 'Нужно денег: ' + result + ' р' + ' Скидка 5%'
    }
    else if ((kolichestvo.value>200) && (kolichestvo.value<301)){
        let result =(tzena*kolichestvo.value)-((tzena*kolichestvo.value)*10/100)
        result = Math.floor(result)
        out1.innerText = 'Нужно денег: ' + result + ' р' + ' Скидка 10%'
    }
    else if (kolichestvo.value>300){
        let result =(tzena*kolichestvo.value)-((tzena*kolichestvo.value)*20/100)
        result = Math.floor(result)
        out1.innerText = 'Нужно денег: ' + result + ' р' + ' Скидка 20%'
    }
}

