<?php
// dados de conexão aqui
require_once('../configuracao/conexao.php');
require_once('../configuracao/model.php');

// Entrada
$json = file_get_contents('php://input');
$reqbody = json_decode($json);

$conexao = new Conexao();
// Criando uma variavel que ira receber o metodo abrirConexao atraves do obj conexao
$conexaoDB = $conexao->abrirConexao();
// Criando um obj ModelTeste
$m = new Model($conexaoDB);

$resultado = $m->contatos();
echo json_encode($resultado);
?>