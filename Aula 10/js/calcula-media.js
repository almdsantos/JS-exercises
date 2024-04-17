var titulo = document.querySelector(".titulo-pagina");
titulo.textContent = "JavaScript";

// Função simples que exibe apenas uma mensagem
function mostrarMensagem() {
    alert("O elemento foi clicado.");
}

function mostrarSegundaMensagem() {
    alert("Chamou a segunda função.");
    titulo.removeEventListener("click", mostrarSegundaMensagem);
}

titulo.addEventListener("click", mostrarMensagem);
titulo.addEventListener("click", mostrarSegundaMensagem);

var alunos = document.querySelectorAll(".aluno");

for (let i = 0; i < alunos.length; i++) {

    var trAluno = alunos[i];

    var tdNome = trAluno.querySelector(".td-nome");
    var tdTrabalho = trAluno.querySelector(".td-trabalho");
    var tdProva = trAluno.querySelector(".td-prova");
    var tdMedia = trAluno.querySelector(".td-media");

    var nome = tdNome.textContent;
    var trabalho = Number(tdTrabalho.textContent);
    var prova = Number(tdProva.textContent);

    var notaTrabalhoValida = validarNotaTrabalho(trabalho);
    var notaProvaValida = validarNotaProva(prova);    

    if (notaTrabalhoValida && notaProvaValida) {
        var mediaAluno = calcularMedia(trabalho, prova);
        tdMedia.textContent = mediaAluno;

        if (mediaAluno < 7) {
            //Aluno foi reprovado
            //trAluno.style.backgroundColor = "salmon";
            trAluno.classList.add("aluno-reprovado");
        }
    } else {
        tdMedia.textContent = "Notas inválidas, verifique.";
    }
}

function calcularMedia(notaTrabalho, notaProva) {
    var mediaAluno = (parseFloat(notaTrabalho) + parseFloat(notaProva)) / 2;
    return mediaAluno;
}
function validarNotaTrabalho(notaTrabalho) {
    if (notaTrabalho.length == 0 || notaTrabalho < 0 || notaTrabalho > 10) {
        console.log("Nota do trabalho inválida");
        return false;
    } else {
        return true;
    }
}
function validarNotaProva(notaProva) {
    if (notaProva.length == 0 || notaProva < 0 || notaProva > 10) {
        console.log("Nota da prova inválida");
        return false;
    } else {
        return true;
    }
}