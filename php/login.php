<?php 
require_once('base.php');

$nick = entities($_GET['nick']);

$pass = $_GET['pass'];
// $pass = entities($_GET['pass'];)

$sql = "SELECT * FROM users WHERE nick='$nick'"; // AND pass='$pass'";
	$output['log'] = "Select query with data: nick: $nick, pass: $pass";
if ($result = $db->query($sql)) {
	$output['log'] = $output['log'] . ' ------ Query done.';
	$usersNum = $result->num_rows;
	if ($usersNum > 0) {
	$output['log'] = $output['log'] . ' ------ User IS in database.';
		$result = $result->fetch_assoc();
		if (password_verify ($pass, $result['pass'])) {
			$output['log'] = $output['log'] . '------ Password successfully VERIFIED';

			$output['userData'] = $result;
		} else {
			$output['log'] = $output['log'] . '------ Password NOT verified.';
		}

	} else {
		$output['log'] = $output['log'] . ' ------ User IS NOT in database.';
	}
} else {
	$output['log'] = $output['log'] . ' ------ Query failed.';
}
$db->close();
echo json_encode($output); 
?>