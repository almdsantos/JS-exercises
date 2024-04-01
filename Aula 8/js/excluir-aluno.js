var tabela = document.querySelector("#tabela-alunos");
tabela.addEventListener("click", function(event){
        // Dentro da função de callback, o evento é passado como paramentro e armazenado na variavel event
        // event.target contém o elemento HTML que foi clicado na tabela    var elementoClicado = event.target;

    var elementoClicado = event.target;
        // Verifica se o elemento clicado possui a classe "btn-excluir"

    if(elementoClicado.classList.contains("btn-excluir")) {
        // Se o elemento clicado for um botao de exclusão, continua com o código parentNode retorna o nó pai do elemento, ou seja, a cédula da tabela que contem o botão
        
        var celula = elementoClicado.parentNode;
        // parentNode novamente retorna o nó pai, desta vez a linha da tabela que contem a cédula

        var linha = celula.parentNode;
        // Remove a linha da tabela

        linha.remove()
    }
})