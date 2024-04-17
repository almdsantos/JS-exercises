//Obtem o formulário da pagina HTML
var btnSalvarAluno = document.querySelector("#btnSalvarAluno");
// Executa a função anonima ao clicar no botão
btnSalvarAluno.addEventListener("click",
function(event){
    // Evita o comportamento padrão que seria recarregar a página
    event.preventDefault();

    // Obtem o formulario da nossa página HTML
    var frmAluno = document.querySelector("#frmAluno");

    // Validar campos do formulário
    if (validarFormulárioAluno(frmAluno) == false){
        return;
    }

    //Cria um elemento tr dentro do documento HTML
    var linhaAluno = criaLinhaAluno(frmAluno);

    //Coloca o elemento tr como filha da tabela de alunos
    var tabelaAlunos = document.querySelector("#tabela-alunos").querySelector("tbody");
    tabelaAlunos.appendChild(linhaAluno);

    frmAluno.reset();
})

function criaLinhaAluno(frmAluno) {
    //Cria um elemento tr dentro do documento HTML
    var linhaAluno = document.createElement("tr");

    //coloca os elemento td como filhos do elemento tr
    linhaAluno.appendChild(criaColuna(frmAluno.nome.value));
    linhaAluno.appendChild(criaColuna(frmAluno.trabalho.value));
    linhaAluno.appendChild(criaColuna(frmAluno.prova.value));
    linhaAluno.appendChild(criaColuna(calcularMedia(frmAluno.trabalho.value, frmAluno.prova.value)));
    linhaAluno.appendChild(criaColunaAcoes());
    
    return linhaAluno
}

function criaColunaAcoes(){
    // Criando a coluna ações
    var colunaAcoes = document.createElement("td");
    colunaAcoes.classList.add("td-acoes");

    var botaoExcluir = document.createElement("span");
    botaoExcluir.classList.add("btn-excluir");
    botaoExcluir.textContent = "Excluir";

    colunaAcoes.appendChild(botaoExcluir);
    return colunaAcoes;
}

function criaColuna(valor){
    var coluna = document.createElement("td");
    coluna.textContent = valor;
    return coluna
}

// function criaAcao(criarAcao){
//     if (validarFormulárioAluno == true);
//         
// }

function validarFormulárioAluno(frmAluno){
    var divMensagens = document.querySelector("#divMensagens");
    divMensagens.textContent = "";

        if(frmAluno.nome.value.length == 0 && validarNotaTrabalho(frmAluno.trabalho.value) == false && validarNotaTrabalho(frmAluno.prova.value) == false){
            criaMensagem("Você não digitou nenhum campo")
            return false;
        }
        if (frmAluno.nome.value.length == 0) {
            criaMensagem("Nome inválido");
            return false;
        }
        if (validarNotaTrabalho(frmAluno.trabalho.value) == false) {
            criaMensagem("Nota do trabalho inválida.");
            return false;
        }
        if (validarNotaTrabalho(frmAluno.prova.value) == false) {
            criaMensagem("Nota da prova inválida.");
            return false;
        }
        return true;
}

function criaMensagem(texto){
    var msg = document.createElement("div");
    msg.classList.alert("alert");
    msg.classList.alert("alert-warning");
    msg.textContent = texto
    var divMensagens = document.querySelector("divMensagens");
    divMensagens.appendChild(msg);
}