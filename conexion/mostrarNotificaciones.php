<?php
//session_start();
//require_once("conexionDB.php");

$fechaLocal = date('Y-m-d');
echo "<h4>Fecha de notificaciones: ".$fechaLocal."</h4>";
//echo $_SESSION['session_name'] = $_GET['session_name'];

$objConexion = new ConexionDB();

//Sentencia para realizar consulta
/*$sql = "SELECT * FROM notificaciones WHERE DateN='$fechaLocal'";
$rows = $objConexion->consul_noti($sql);
foreach ($rows as $value) {
    echo "<ul><li>".$value['Notification']."</li></ul>";
}*/




?>
