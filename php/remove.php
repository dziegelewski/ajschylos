<?php 
require_once('base.php');
$toDelete = $_POST['toDelete'];
$output['log'] = "Users to delete: $toDelete";
foreach ($toDelete as $key => $value) {
	$query = "DELETE FROM users WHERE id='$value'";
	if ($result = mysqli_query($db, $query)) {
		$output['log'] = $output['log'] . " --- User $value has been removed";
	} else {
		$output['log'] = $output['log'] . " --- Error while removing user $value ";
	}
}

$db->close();
echo json_encode($output);


?>