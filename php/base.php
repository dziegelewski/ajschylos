<?php
 

$server = '';
$user = '';
$password = '';
$database = '';

 
$db = mysqli_connect($server, $user, $password, $database);
 
if (mysqli_connect_errno()) 
{
    echo '<h2 class="error">Nie udało się połączyć z serwerem. Spróbuj ponownie później.</h2>';
    exit;   
}
else {
};

function entities($var) {
	return htmlentities($var, ENT_QUOTES, "UTF-8");
};
 
?>