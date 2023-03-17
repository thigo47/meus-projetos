let Login = document.querySelector("#logine")
let senha = document.querySelector("senhae")

let emailesenhac = []

emailesenhac.push(localStorage.getItem("Email"),
localStorage.getItem("Senha"))

//document.body.innerHTML += emailesenhac


function login(params) {
    if (Login.value.length ==  0  || Login.value.length == 0) {
        window.alert("adicione suas Login e Senha Cadastrados anteriormente primeiro")
    } else {
        if (Login !== emailesenhac[0] && senha !== emailesenhac[1]) {
            window.alert("Email ou senha incorretos , tente novamente")
        } else {
            window.alert("ola")
        }
    }
}
//vhjk
//vghjbk