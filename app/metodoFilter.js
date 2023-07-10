const botoes = document.querySelectorAll('.btn')

botoes.forEach((botao) => {
    botao.addEventListener('click', organizaBotoes)
})

function organizaBotoes(){
    const buscaId = document.getElementById(this.id)
    const valorBotao = buscaId.value
    
    const organizaBotoes = valorBotao == 'disponivel'? livrosDisponiveis(valorBotao): filtraLivros(valorBotao)
    return organizaBotoes
}

function filtraLivros(valorBotao){
    
    const livrosJaFiltrados = livros.filter(livro => {
        return livro.categoria == valorBotao
    })

    valorTotalDeLivrosDisponiveis.innerHTML = ''
    mostraNaTela(livrosJaFiltrados) 
}

let livrosDisponiveisAtualmente = []

function livrosDisponiveis(valorBotao){
    
    if(valorBotao == 'disponivel'){
        livrosDisponiveisAtualmente = livros.filter(livro => livro.quantidade > 0)
        mostraNaTela(livrosDisponiveisAtualmente)
    }
    const todosOsPrecosDosLivrosDisponiveis = livrosDisponiveisAtualmente.map(livro => livro.preco)
    const precoTotalDosLivros = todosOsPrecosDosLivrosDisponiveis.reduce((acumulador,elemento) => {
        return acumulador + elemento
    })

    valorTotalDeLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${precoTotalDosLivros.toFixed(2)}</span></p>
        </div>
        `
}
