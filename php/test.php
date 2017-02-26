<?php  
$pass = "";
$pass = entities($_POST['pass']);
$pass = password_hash($pass, PASSWORD_DEFAULT);
?>