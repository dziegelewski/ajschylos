<?php // Check if the nick is unique
$sql = "SELECT * FROM users WHERE nick='$nick'";
if ($result = $db->query($sql)) {
	$usersNum = $result->num_rows;
	if ($usersNum > 0) {
		$output = "not-unique-error";
	}
}
?>