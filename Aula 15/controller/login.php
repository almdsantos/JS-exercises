<?php
    require_once('../configuracao/conexao.php');
    require_once('../configuracao/model.php');

    //Entrada
    $json = file_get_contents('php://input');
    $reqbody = json_decode($json);
    $login = $reqbody->nomeJs;
    $senha = $reqbody->password;

    //Criando um objeto da classe conexão;
    $conexao = new Conexao();
    // Criando uma variavel que ira receber o método abrirConexao atraves do obj conexao
    $conexaoDB = $conexao->abrirConexao();
    // Criando um objeto ModelUsuario
    $m = new Model($conexaoDB);

    $m->nome = $login;
    $m->senha = $senha;
    $retorno = $m->logar();
    echo json_encode($retorno);
?>