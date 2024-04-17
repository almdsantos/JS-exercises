<?php
class ModelUsuario{
    public $db = null;
    public $nome = null;
    public function __construct($conexaoBanco)
    {
        $this->db = $conexaoBanco;
    }
    public function entrar(){
        ;
        $retorno = ['status' => 0, 'dados' => null];
        try {
            $stmt = $this->db->prepare('SELECT * FROM usuarios WHERE nome_completo = :nome');
            $stmt->bindValue(':nome', $this->nome);
            $stmt->execute();
            $dado = $stmt->fetch();
            if ($dado && $dado['id'] && $dado['id'] > 0) {
                $retorno['status'] = 1;
                $retorno['dados'] = $dado;
            }
        } catch (PDOException $ex) {
            echo 'Erro ao logar: ' . $ex->getMessage();
        }
        return $retorno;
    }
}