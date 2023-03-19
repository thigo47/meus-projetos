let i  = {
    datatxt: document.getElementById("datatxt"),
    horatxt: document.getElementById("horatxt"),
    bomdia : document.getElementById("bomdia"),
    imgp : document.getElementById("fotop"),
    imgg : document.getElementById("fotog"), 
}
function atualizarhr(params) {
    let data = new Date()
    let hora = 16 //data.getHours()
    let min = data.getMinutes()
    let  seg =data.getSeconds()

    if (seg < 10) {
     i.horatxt.innerHTML = `  ${hora} :  ${min} : 0${seg}`
    }else if(hora < 10){
        i.horatxt.innerHTML = ` 0${hora} : ${min} : ${seg}`
    }else if (min < 10){
        i.horatxt.innerHTML = ` ${hora} : 0${min} : ${seg}`
    }else{
        i.horatxt.innerHTML = ` ${hora} : ${min} : ${seg}`
    }

    if (hora >= 6 && hora <= 11) {
        i.bomdia.innerHTML="bom dia"
        i.imgp.src = "midia/morning.pequeno.png"

    } else if(hora >= 12 && hora <= 18 ) {
        i.bomdia.innerHTML="boa tarde"
        i.imgp.src = "midia/evening.pequeno.png"

    }else if(hora >= 19 && hora <= 23){
        i.bomdia.innerHTML="boa noite"
        i.imgp.src = "midia/night.pequeno.png"

    }else if(hora >= 0 && hora <= 5 ){
        i.bomdia.innerHTML="boa madrugada"
        i.imgp.src = "midia/midnight.grande.png"
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

//falta mudar a cor dinamicamente , talvez por um som de funo tambem ficaria interessante