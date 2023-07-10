function descontoLivro(descontoNosLivros){
    const desconto = 0.3
    let livrosComDesconsto = descontoNosLivros.map((livro) => {
        return {...livro,preco: livro.preco - (livro.preco * desconto)}
    })

    return livrosComDesconsto
}




