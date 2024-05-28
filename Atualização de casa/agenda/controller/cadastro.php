<?php

    require_once('../configuracao/conexao.php');
    require_once('../configuracao/model.php');

    $json = file_get_contents('php://input');
    $reqbody = json_decode($json);
    $nome = $reqbody->nomeJS;
    $nasc = $reqbody->dataNascJS;
    $email = $reqbody->emailJS;
    $tel = $reqbody->telefoneJS;
    $password = $reqbody->senhaJS;

    //Criando um objeto da classe conexão;
    $conexao = new Conexao();
    // Criando uma variavel que ira receber o método abrirConexao atraves do obj conexao
    $conexaoDB = $conexao->abrirConexao();
    // Criando um objeto ModelUsuario
    $a = new Model($conexaoDB);


    $a->nome = $nome;
    $a->nasc = $nasc;
    $a->email = $email;
    $a->telefone = $tel;
    $a->senha = $password;

    
    $retorno = $a->cadastro();
    echo json_encode($retorno);
?>