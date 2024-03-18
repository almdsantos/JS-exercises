//chamando a variavel nome
var nomeAluno = document.getElementById('txtNome');
var notaTrabalho = document.getElementById('txtTrabalho');
var notaProva = document.getElementById('txtProva');
var button = document.getElementById('botao')

function Salvar() {
    if (nomeAluno !="" && notaTrabalho != "" && notaProva != "") {

        alert("O aluno "+nomeAluno.value+" tirou "+notaTrabalho.value+" no trabalho e "+notaProva.value+" na prova");
    }
}

button.addEventListener("click", Salvar);