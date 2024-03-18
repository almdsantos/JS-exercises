        //Atribuindo o H1 que contem o Titulo da Pagina para a variavel titulo
        var titulo = document.querySelector(".titulo-pagina");
        //Alterando o texto do titulo para 'JavaScript'
        titulo.textContent = "JavaScript"

        //Função simples que exibe uma mensagem
        function mostrarMensagem() {
            alert("O elemento foi clicado");
        }

        function mostrarSegundaMensagem() {
            alert("O segundo elemento foi clicado");
            titulo.removeEventListener("click", mostrarSegundaMensagem);
        }

        //Chamando a função ao clicar no titulo
        //titulo.onclick = mostrarMensagem;

        //Chamando a função ao passar o mouse pelo titulo
        //titulo.onmouseover = mostrarMensagem;

        //Chamando a função ao clicar duas vezes no título
        //titulo.ondblclick = mostrarMensagem;

        titulo.addEventListener("click", mostrarMensagem);
        titulo.addEventListener("click", mostrarSegundaMensagem);

        //Atribuindo o tr que contem o id segundo-aluno para a variavel tdAluno
        var alunos = document.querySelectorAll('.aluno');

        //Aqui vem a logica do FOR pra pecorrer todos os alunos que tem em classe
        for(let i = 0; i < alunos.length; i++){
        
        //Aqui crio a variavel trazendo todos os alunos
        var trAluno = alunos[i];
        
        //Buscamos todas as informações de cada classe do html
        var tdNome = trAluno.querySelector('.td-aluno')
        var tdTrabalho = trAluno.querySelector('.td-trabalho');
        var tdProva = trAluno.querySelector('.td-prova');
        var tdMedia = trAluno.querySelector('.td-media');      

        //Aqui alteramos os valores do HTML para número.
        var trabalho = Number(tdTrabalho.textContent);
        var prova = Number(tdProva.textContent);

        //Aqui verificamos se o valor é diferente do esperado
        if(prova < 0 || prova > 10 ) {
            tdMedia.textContent = "Nota de Prova inválida";
        } else if(trabalho < 0 || trabalho > 10 ) {
            tdMedia.textContent = "Nota de Trabalho inválida";
        } else {
            var media = (trabalho + prova) / 2;
            tdMedia.textContent = media
        }

        if (media < 7) {
        //     trAluno.style.backgroundColor = "grey";
        //     trAluno.style.color = "yellow";
                trAluno.classList.add("aluno-reprovado");
        } else {
            trAluno.classList.add("aluno-aprovado");
        }
    }