<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}
$connection  = mysqli_connect("localhost","root","","websitedb");
$data = json_decode(file_get_contents("php://input"),true);
if($data){
	$name = $data ["name"];
	$email = $data ["email"];
	$pass = $data ["pass"];
	$country = $data ["country"];
	$filliere = $data ["filliere"];
	$stmt = $connection->prepare("INSERT INTO usedata(name ,email ,pass,country,filliere) VALUES (? ,? ,? ,? ,? )");
$stmt->bind_param("sssss",$name , $email ,$pass , $country , $filliere );
if($stmt->execute()){
	echo json_encode(array("status"=> true,"message"=> "Registred successfully !"));
}else{
	echo json_encode(array("status"=> false,"message"=> "Failed to register !"));
}
$stmt->close();
}else{
	echo json_encode(array("status"=> "error","message"=>"No data Avalaible"));
}$connection->close();
?>
