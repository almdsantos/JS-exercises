<?php
    require_once('../configuracao/conexao.php');
    require_once('../configuracao/modelUsuario.php');

    //Entrada
    $json = file_get_contents('php://input');
    $reqbody = json_decode($json);
    $login = $reqbody->nomeJs;
    // $senha = $reqbody->password;

    //Criando um objeto da classe conexão;
    $conexao = new Conexao();
    // Criando uma variavel que ira receber o método abrirConexao atraves do obj conexao
    $banco = $conexao->abrirConexao();
    // Criando um objeto ModelUsuario
    $m = new ModelUsuario($banco);

    $m->nome = $login;
    // $m->senha = $senha;
    $retorno = $m->entrar();
    echo json_encode($retorno);
?>