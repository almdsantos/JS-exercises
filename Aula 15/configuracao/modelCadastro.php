<?php
class ModelCadastro{
    public $db = null;
    public $nome = null;
    public $nasc = null;
    public $email = null;
    public $telefone = null;
    public $senha = null;
    public function __construct($acesso)
    {
        $this->db = $acesso;
    }
    public function acessoRetorno(){
        $retorno = ['status' => 0];
        try {
            $stmt = $this->db->prepare(
                "INSERT INTO usuarios(nome_completo, data_nasc, email, telefone) VALUES (:nome, :nasc, :email, :telefone);,
                INSERT INTO administrador(id_usuario, senha) VALUES (LAST_INSERT_ID(), :senha)");

            $stmt->bindValue(':nome', $this->nome);
            $stmt->bindValue(':nasc', $this->nasc);
            $stmt->bindValue(':email', $this->email);
            $stmt->bindValue(':telefone', $this->telefone);
            $stmt->bindValue(':senha', $this->senha);
            $stmt->execute();

            $retorno['status'] = 1;
            
            return $retorno;

        } catch (PDOException $ex) {
            echo 'Erro ao Cadastrar: ' . $ex->getMessage();
        }
        return $retorno;
    }
}


