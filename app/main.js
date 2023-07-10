let livros = []
const listaLivros = document.getElementById('livros')

buscaApi()

async function buscaApi(){
    const coletaApi = await fetch('https://guilhermeonrails.github.io/casadocodigo/livros.json')
    const decodificaApi = await coletaApi.json()
    livros = decodificaApi
    const desconto = descontoLivro(livros)
    mostraNaTela(desconto)
}

