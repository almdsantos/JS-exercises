console.log("Senac Taboão da Serra");

        //Atribuindo o H1 que contem o Titulo da Pagina para a variavel titulo
        var titulo = document.querySelector(".titulo-pagina");
        //Alterando o texto do titulo para 'JavaScript'
        titulo.textContent = "JavaScript"

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
    }