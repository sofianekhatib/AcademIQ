<?php
header("Access-Control-Allow-Origin:*");
header("Content-Type:application/json");
$connection  = mysqli_connect("localhost","root","","websitedb");
$sql = "SELECT * FROM exams";
$result = mysqli_query($connection , $sql);
$rows=[];
while ($row=mysqli_fetch_assoc($result))
	$rows[] = $row;
echo json_encode($rows);
?>
