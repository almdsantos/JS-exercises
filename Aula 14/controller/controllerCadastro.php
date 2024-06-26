<?php

    require_once('../configuracao/conexao.php');
    require_once('../configuracao/modelCadastro.php');

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
    $acesso = $conexao->abrirConexao();
    // Criando um objeto ModelUsuario
    $a = new ModelCadastro($acesso);


    $a->nome = $nome;
    $a->dataNasc = $nasc;
    $a->email = $email;
    $a->telefone = $tel;
    $a->senha = $password;
    $retorno = $a->acessoRetorno();
    echo json_encode($retorno);
?>