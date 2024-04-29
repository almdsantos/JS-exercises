<?php
    $json = file_get_contents('php://input');
    $reqbody = json_decode($json);
    $nome = $reqbody->nomeJS;
    $nasc = $reqbody->dataNascJS;
    $email = $reqbody->emailJS;
    $tel = $reqbody->telefoneJS;
    $password = $reqbody->senhaJS;
?>