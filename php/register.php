<?php 
require_once('base.php');
$nick = $_POST['nick'];

// $pass = $_POST['pass'];
$pass = entities($_POST['pass']);
$pass = password_hash($pass, PASSWORD_DEFAULT);

$email = entities($_POST['email']);

// Allnum validation
if (ctype_alnum($nick) == false) {
	$output = "not-allnum-error";
}

$nick = entities($_POST['nick']);

require_once('nameUniquenessTest.php');

if (!isset($output)) {
	$query = "INSERT INTO users (id, nick, email, pass)	VALUES (NULL, '$nick', '$email', '$pass')";

	$output['log'] = "Query with data: $nick, $pass, $email";

	if ($result = mysqli_query($db, $query)) {
		$output['log'] = $output['log'] . " --- Query done. Nick: $nick, email: $email, pass: $pass";
	} else {
		$output['log'] = $output['log'] . " --- Query failed";
	}
}
echo json_encode($output);
$db->close();
?>