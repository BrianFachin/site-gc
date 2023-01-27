<?php

    $dbHost = 'Localhost';
    $dbUsername  = 'root';
    $dbPassword = '';
    $dbName = 'Login-GC';

    $conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName)

    if($conexao->connect_errno)
    {
        echo "Erro";
    }
    else
    {
        echo "Conexão efutuada com sucesso";
    }
?>