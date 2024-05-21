<?php

class Model{
    public $db = null;
    public $nome = null;
    public $nasc = null;
    public $email = null;
    public $telefone = null;
    public $senha = null;
    public function __construct($conexaoDB)
    {
        $this->db = $conexaoDB;
    }
    
    public function logar(){
        $retorno = ['status' => 0, 'dados' => null];
        try {
            $stmt = $this->db->prepare('SELECT * FROM usuarios u INNER JOIN administrador a on u.id = a.id WHERE email = :email AND senha = :senha');
            $stmt->bindValue(':email', $this->nome, PDO::PARAM_STR);
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


    public function cadastro(){
        $retorno = ['status' => 0];
        try {
            $stmt = $this->db->prepare(
                "INSERT INTO usuarios(nome_completo, data_nasc, email, telefone) VALUES (:nome, :nasc, :email, :telefone);
                SET @id_usuarios = LAST_INSERT_ID(); INSERT INTO administrador(id_usuario, senha) VALUES (@id_usuarios, :senha)");

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