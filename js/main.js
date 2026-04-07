//    salvar tudo no localstorege
let inome  = document.getElementById("inome")
let itelefone = document.getElementById("itelefone")
let iemail = document.getElementById("iemail")
let idata = document.getElementById("idata")
let enviar = document.getElementById("enviar")
let receber_array_dados = document.getElementsByClassName("receber_array_dados")[0]
const verdadoscadastrados = document.getElementsByClassName("verdadoscadastrados")[0];
let limpar = document.getElementById("limpar")


if (enviar) {
    
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

}

if (verdadoscadastrados) {
verdadoscadastrados.addEventListener("click",()=>{

let lista = JSON.parse(localStorage.getItem("pessoa")) || []
    if (lista.length === 0) {
       return alert("erro add algo para limpar os dados")
    }

    receber_array_dados.innerHTML = "" // limpar antes

    lista.forEach(pessoa => {
        let div = document.createElement("div")

        div.innerHTML = `
                <p><strong>Nome:</strong> ${pessoa.nome}</p>
                <p><strong>Telefone:</strong> ${pessoa.telefone}</p>
                <p><strong>Email:</strong> ${pessoa.email}</p>
                <p><strong>Data:</strong> ${pessoa.data}</p>
                <hr>
            `

            receber_array_dados.appendChild(div)
    });

console.log("teste")
})
}

if (limpar) {

limpar.addEventListener("click",()=>{
    console.log("teste")
    localStorage.removeItem("pessoa")
})
}