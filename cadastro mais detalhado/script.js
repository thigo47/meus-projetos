let ip = {
    nome: document.getElementById("nome"),
    sobrenome: document.getElementById("sobrenome"),
    nacio: document.getElementById("nacio"),
    tel : document.getElementById("tel"),
    nasc : document.getElementById("nasc"),
}
let allinfo = []
let ic = {
    email:document.getElementById("email"),
    senha: document.getElementById("senha"),
    senhac : document.getElementById("confirmaçaosenha"),
}
function cadastro() {
    if (ip.nome.value == 0 || ip.sobrenome.value == 0 || ip.nacio.value == 0 || ip.tel.value == 0 || ip.nasc.value == 0) {
        window.alert("Adicione suas informaçoes antes de cadastrar")
    } else if(ip.nasc.value >= "2009") {
        window.alert("voce é novo demais para se cadastrar")
    }else if (ic.senha.value != ic.senhac.value){
        window.alert("a senha precia ser igual")
    }else{
        ///////////////////
        let ipstring = JSON.stringify(ip);
        allinfo.push(ipstring)
        //////////////////
        let sucesso = document.getElementById("sucesso")
        let h2 = document.createElement("h2")
        h2.innerHTML= `Olá ${ip.nome.value} ${ip.sobrenome.value} , voce foi cadastrado com sucesso ${allinfo}`

        sucesso.appendChild(h2)
        //

        let link = document.createElement("a")
        link.href = "../Login/index.html"
        link.innerText= "ir para login"

        sucesso.appendChild(link)

        //localStorage.setItem()


        // é preciso continuar a inserçao dos valores em string para armazenar e usar na pagina login
    }
}