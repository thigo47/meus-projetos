let i  = {
    datatxt: document.getElementById("datatxt"),
    horatxt: document.getElementById("horatxt"),
}
function atualizarhr(params) {
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    let  seg = data.getSeconds()

    if (seg < 10) {
     i.horatxt.innerHTML = `${hora} : ${min} : 0${seg}`
    }else{
        i.horatxt.innerHTML = `${hora} : ${min} : ${seg}`
    }
    
}

function atualizardia(params) {
let data = new Date()
let ano = data.getFullYear()
let mes = data.getMonth() + 1
let dia = data.getDate()

i.datatxt.innerHTML = `${dia} / ${mes}/ ${ano}`
}

setInterval(atualizardia, 1000)

setInterval(atualizarhr, 1000)