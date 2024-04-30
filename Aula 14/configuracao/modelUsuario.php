<?php
class ModelUsuario{
    public $db = null;
    public $nome = null;
    public $senha = null;
    public function __construct($conexaoBanco)
    {
        $this->db = $conexaoBanco;
    }
    public function entrar(){
        $retorno = ['status' => 0, 'dados' => null];
        try {
            $stmt = $this->db->prepare('SELECT * FROM usuarios u INNER JOIN administrador a on u.id = a.id WHERE nome_completo = :nome AND senha = :senha');
            $stmt->bindValue(':nome', $this->nome, PDO::PARAM_STR);
            $stmt->bindValue(':senha', $this->senha, PDO::PARAM_INT);
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