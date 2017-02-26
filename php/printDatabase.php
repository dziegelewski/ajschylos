<?php 
require_once('base.php');

$query = "SELECT * FROM users";
if ($result = $db->query($query)) {
	$howMany = $result->num_rows;

// ----------------------
// VERY IMPORTANT!
	while ($row = mysqli_fetch_row($result)) 	{
	  $data['numRows'] ++;
	  $data[] = $row;
	}
// ----------------------

	$data['howMany'] = $howMany;
}	

$db->close();
echo json_encode($data);
?>