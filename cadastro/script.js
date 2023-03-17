let i = {
    email:document.getElementById("emailc"),
    senha:document.getElementById("senhac"),
    res: document.getElementById("resp"),
}
   let cadastrado = []
  
   function cadastro() {
    if (i.email.value.length == 0 || i.email.value.length == 0) {
      window.alert("Adicione valores antes de cadastrar")
  } else {

    window.alert("tudo ok")
    cadastrado.push(i.email.value , i.senha.value)
      
      let link = document.createElement("a")
      link.href = "../Login/index.html"
      link.id = "outrapag"

      sessao.appendChild(link)

      let novobotao = document.createElement("button")
      novobotao.id = "login"
      novobotao.innerHTML = "login"
      outrapag.appendChild(novobotao)
  
      localStorage.setItem("Email",i.email.value)
      localStorage.setItem("Senha",i.senha.value)
  }
 }