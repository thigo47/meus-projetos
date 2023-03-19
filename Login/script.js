let Login = document.querySelector("#logine")
let senha = document.querySelector("#senhae")
let aviso = document.getElementById("aviso")
let blogin = document.getElementById("blogin")

let emailesenhac = []
let emailesenhal = []

emailesenhac.push(localStorage.getItem("Email"),
localStorage.getItem("Senha"))

//document.body.innerHTML += emailesenhac


function login() {
    if (Login.value ==  0  || senha.value == 0) {
        window.alert("adicione suas Login e Senha Cadastrados anteriormente primeiro")

        aviso.innerHTML = "Nao esta cadstrado ainda? clique aqui"
    } else {

        emailesenhal.push(Login.value , senha.value)

        if (emailesenhal[0] !== emailesenhac[0] && emailesenhal[1] !== emailesenhac[1]) {
            window.alert("Email ou senha incorretos , tente novamente")

            aviso.innerHTML = "Nao esta cadastrado ainda? clique aqui"

        } else {
            window.alert("ola")

     window.location.replace("../hora e data/index.html")
        }
    }
}
// terminar o resto das interaçoes // colocar botao de "nao é cadastrado? entre outros"