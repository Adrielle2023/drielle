document.querySelector("#botao-cadastrar").addEventListener("click",()=> {

console.log("passei aqui")

    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

    const tarefa = {
        título: document.querySelector("#titulo").value,
        descricao: document.querySelector("#descricao").value,
        pontos: document.querySelector("#pontos").value
    }

    tarefas.push(tarefas)
    
    localStorage.setItem("tarefa", JSON.stringify(tarefas))

    window.location.href = "index.html"

})