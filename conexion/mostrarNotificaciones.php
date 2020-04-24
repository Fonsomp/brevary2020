<?php
//session_start();
require_once("conexionDB.php");

$fechaLocal = date('Y-m-d');
echo "<h4>Fecha de notificaciones: ".$fechaLocal."</h4>";
//echo $_SESSION['session_name'] = $_GET['session_name'];

$objConexion = new ConexionDB();

//Sentencia para realizar consulta
$sql = "SELECT * FROM notificaciones WHERE DateN='$fechaLocal'";
$rows = $objConexion->consul_noti($sql);
foreach ($rows as $value) {
    echo "<ul><li>".$value['Notification']."</li></ul>";
}



/*if($objConexion->buscar($sql) != 0){
	for($i = 0; $i<$cnt; $i++){
		echo $row['Notification']."<br>";}}
else{
	echo "No se tienen notificaciones para el dia de hoy".$fechaLocal;
}*/
//if (isset($_GET['session_name'])) {

	//$_SESSION['session_name'] = $_GET['session_name'];
	/*while ($reg = mysqli_fetch_array($registro)) {
		echo $reg['Notification']."<br>"; //muestra la notificación de acuerdo al dia que esta en la variable $fechaDia
	}*/

//}

?>