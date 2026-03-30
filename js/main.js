//    salvar tudo no localstorege
let inome  = document.getElementById("inome")
let itelefone = document.getElementById("itelefone")
let iemail = document.getElementById("iemail")
let idata = document.getElementById("idata")
let enviar = document.getElementById("enviar")


enviar.addEventListener("click",()=>{

    if (inome.value === "") {
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

    


    localStorage.setItem("nome",inputnome.value) // envair para pagina 2
    localStorage.setItem("telefone",itelefone.value)
    localStorage.setItem("email",iemail.value)
    localStorage.setItem("data",idata.value)

   window.location.href = "page/agenda.html"


})














































































































// let maiusc = maiuscula.some(letra => senha.includes(letra))
// let temnumero = numeros.some(num => senha.includes(num))
// let temespecial = [...caracters].some(c => senha.includes(c))

// local storege


//     localStorage.setItem("nome",inputnome.value) // envair para pagina 2
//     localStorage.setItem("senha",inputsenha.value)

//    window.location.href = "index2.html"


// if (receberdadospagina1) {
//    let nome = localStorage.getItem("nome")  //pegar da pagina1
//    let senha = localStorage.getItem("senha")

//    receberdadospagina1.innerHTML = `
//       <p>:${nome}</p>
//       <p>:${senha}</p>

//    `
// }