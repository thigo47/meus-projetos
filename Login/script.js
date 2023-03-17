let Login = document.querySelector("#logine")
let senha = document.querySelector("#senhae")

let emailesenhac = []
let emailesenhal = []

emailesenhac.push(localStorage.getItem("Email"),
localStorage.getItem("Senha"))

//document.body.innerHTML += emailesenhac


function login() {
    if (Login.value ==  0  || senha.value == 0) {
        window.alert("adicione suas Login e Senha Cadastrados anteriormente primeiro")
    } else {

        emailesenhal.push(Login.value , senha.value)

        if (emailesenhal[0] !== emailesenhac[0] && emailesenhal[1] !== emailesenhac[1]) {
            window.alert("Email ou senha incorretos , tente novamente")
        } else {
            window.alert("ola")
        }
    }
}
// terminar o resto das interaçoes // colocar botao de "nao é cadastrado? entre outros"