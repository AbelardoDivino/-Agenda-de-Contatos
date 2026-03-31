//    salvar tudo no localstorege
let inome  = document.getElementById("inome")
let itelefone = document.getElementById("itelefone")
let iemail = document.getElementById("iemail")
let idata = document.getElementById("idata")
let enviar = document.getElementById("enviar")


enviar.addEventListener("click",()=>{

    if (inome.value === "" || inome.value.length  < 8) {
        return alert("erro adicione o nome")
    }

    else if (itelefone.value === "") {
        return alert("erro adicione o telefone")
    }

    else if (iemail.value === "") {
     return alert("erro adicione o email")
    }

    else if (idata.value === "") {
        return alert("erro adicione a data")
    }

    // pegar mais de 1 dado e salvalo

  let pessoa = {
        nome: inome.value,
        telefone: itelefone.value,
        email: iemail.value,
        data: idata.value
    }

    let lista = JSON.parse(localStorage.getItem("pessoa")) || []
lista.push(pessoa)
localStorage.setItem("pessoa", JSON.stringify(lista))
 window.location.href = "page/agenda.html"

// pegar 1 dado so
//     localStorage.setItem("nome",inome.value) // envair para pagina 2
//     localStorage.setItem("telefone",itelefone.value)
//     localStorage.setItem("email",iemail.value)
//     localStorage.setItem("data",idata.value)

//    window.location.href = "page/agenda.html"


})
