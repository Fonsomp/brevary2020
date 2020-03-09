<?php
//session_start();
require_once("conexion/conexionDB.php");

$language = $_SESSION["language"]; 
$fechaActual = date('Y-m-d');

$objConexion = new ConexionDB();

//Sentencia para realizar consulta
$sql = "SELECT * FROM Misal WHERE DateLiturgia = '$fechaActual' AND Type = 'Plegaria Eucarística' AND SubType = 'Plegaria Eucarística I' AND language = '$language'";
$resultado = $objConexion->consulta($sql);
echo $resultado['TextB'];
	
?>
