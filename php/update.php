<?php 
require_once('base.php');
$id = $_POST['id'];
$nick = entities($_POST['nick']);
$oldNick = entities($_POST['oldNick']);

$pass = entities($_POST['pass']);

$email = entities($_POST['email']);
$name = entities($_POST['name']);
$surname = entities($_POST['surname']);
$address = entities($_POST['address']);
$newUser = entities($_POST['newUser']);


if ($oldNick != $nick) {
	require_once('nameUniquenessTest.php');
}

if (ctype_alnum($nick) == false) {
	$output = "not-allnum-error";
}

if (!isset($output)) {
	if (isset($_POST['newUser'])) {
		$pass = password_hash($pass, PASSWORD_DEFAULT);

		$query = "INSERT INTO users (id, nick, email, pass, name, surname, address) VALUES (NULL, '$nick', '$email', '$pass', '$name', '$surname', '$address')";
		if ($result = $db->query($query)) {
			$output['log'] = "User added";
			$output['success'] = true;

		} else {
			$output['log'] = "Failed while adding user.";
		}

	} else {

		if (strlen($pass) > 0) {
			$pass = password_hash($pass, PASSWORD_DEFAULT);
			$thePass = $pass;
			$query = "UPDATE users SET pass = '$pass' WHERE nick = '$oldNick'";
			if ($result = $db->query($query)) {
				$output['pass'] = "Password changed";
				$output['success'] = true;
			} else {
				$output['pass'] = "Failed while changing password.";

			}
		}

		$query = "UPDATE users SET 
		nick = '$nick', 
		name = '$name', 
		surname = '$surname', 
		address = '$address', 
		email = '$email' 
		WHERE id='$id'";

		if ($result = $db->query($query)) {
			$output['log'] = "All data changed";
			$output['success'] = true;
		} else {
			$output['log'] = "Failed while changing all data.";

		}
	}
}

$db->close();
echo json_encode($output);
?>