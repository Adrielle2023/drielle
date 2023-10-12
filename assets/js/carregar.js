window.addEventListener("load", ()=> {
    let tarefas = JSON.parse(localStorage.getItem("tarefa")) || []
    tarefas.forEach(tarefa => criarCard(tarefa))
})

function criarCard(tarefa){
    const card = document.createElement("div")

    card.innerHTML = `
    <div class="col s12 m6">
    <div class="card">
      <div class="card-content">
        <span class="card-title">${tarefa.titulo}</span>
        <p>${tarefa.descricao}<p>
        <span data-badge-caption="pontos" class="badge black white-text"></span>
        ${tarefa.pontos}
      </div>
      <div class="card-action">
        <a href="#" class="btn black">
            <i class="material-icons">close</i>
          </a>
          <a href="#" class="btn black">
              <i class="material-icons">done</i>
          </a>
      </div>
    </div>
  </div>
  `

    document.querySelector("#lista-tarefas").appendChild(card)

}