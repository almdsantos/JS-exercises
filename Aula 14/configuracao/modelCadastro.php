<?php
class ModelCadastro{
    public $banco = null;
    public $nome = null;
    public $dataNasc = null;
    public $email = null;
    public $telefone = null;
    public $senha = null;
    public function __construct($acesso)
    {
        $this->banco = $acesso;
    }
    public function acessoRetorno(){
        $retorno = ['status' => 0, 'dados' => null];
        try {
            $stmt = $this->banco->prepare(
                'INSERT INTO usuarios(nome_completo, data_nasc, email, telefone) VALUES (":nome", ":dataNasc", ":email", ":telefone");',
                'INSERT INTO administrador(id_usuario, senha) VALUES ("LAST_INSERT_ID()", ":senha");'
            );

            $stmt->bindValue(':nome', $this->nome);
            $stmt->bindValue(':dataNasc', $this->dataNasc);
            $stmt->bindValue(':email', $this->email);
            $stmt->bindValue(':telefone', $this->telefone);
            $stmt->bindValue(':senha', $this->senha);
            $stmt->execute();
            $informacao = $stmt->fetch();
            if ($informacao && $informacao['id'] && $informacao['id'] > 0) {
                $retorno['status'] = 1;
                $retorno['dados'] = $informacao;
            }
        } catch (PDOException $ex) {
            echo 'Erro ao logar: ' . $ex->getMessage();
        }
        return $retorno;
    }
}


