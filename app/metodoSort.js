const ordenaPreco = document.getElementById('btnOrdenarPorPreco')

ordenaPreco.addEventListener('click', ordenarPorPreco)

function ordenarPorPreco(){
    const precosNovos = livros.toSorted((a,b) => a.preco - b.preco)
    mostraNaTela(precosNovos)
}
