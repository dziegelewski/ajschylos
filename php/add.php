<?php 
require_once('base.php');
$id = $_POST['id'];
$name = entities($_POST['name']);
$surname = entities($_POST['surname']);
$address = entities($_POST['address']);

$query = "UPDATE users SET name = '$name', surname = '$surname', address = '$address' WHERE id='$id'";
	$output['log'] = "Update query with data: name: $name, surname: $surname, address: $address";
if (mysqli_query($db, $query)) {
		$output['log'] = $output['log'] . " --- Query done";
		$output['success'] = true;
	} else {
		$output['success'] = false;
		$output['log'] = $output['log'] . " --- Query failed";
	}

$db->close();
echo json_encode($output);
?>