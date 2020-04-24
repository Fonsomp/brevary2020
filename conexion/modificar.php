<?php
session_start();
require_once("conexionDB.php");
//header("Content-Type: text/html;charset=utf-8"); 
//mysql_query("SET NAMES 'utf8'");
 
$dateLiturgia = $_POST['dateLiturgia'];
$txa = $_POST['txtLiturgias'];//Envia texto del textarea
$oracion = $_POST['tipo'];//Captura el valor de la oración
$type = $_POST['brevaryDB'];//Captura el valor del tipo de de acuerdo a la oración
$language = $_SESSION["language"];


if($_POST['tipoS'] == "Hora Intermedia"){
	$subtype = $_POST['HI'];}
if($_POST['tipoS'] == "Prefacio"){
	$subtype = $_POST['Pre'];}
if($_POST['tipoS'] == "Ordinario de la Misa"){
	$subtype = $_POST['ODM'];}
if($_POST['tipoS'] == "Plegaria Eucarística"){
	$subtype = $_POST['PE'];}
if($_POST['tipoS'] == "Comunes"){
	$subtype = $_POST['Co'];}
if($_POST['tipoS'] == "Primera Parte: Preces y Celebraciones de la Comunidad"){
	$subtype = $_POST['PPPCC'];}
if($_POST['tipoS'] == "Segunda Parte: Ritual de la profesión religiosa"){
	$subtype = $_POST['SPRPR'];}
if($_POST['tipoS'] == "Tercera Parte"){
	$subtype = $_POST['TP'];}
if($_POST['tipoS'] == "Apéndice Musical"){
	$subtype = $_POST['AM'];}

$objConexion = new ConexionDB();

switch ($oracion) {
	case 'Breviario':
		$sql = "UPDATE Breviario set TextB='$txa' WHERE DateLiturgia='$dateLiturgia' AND Type = '$type' AND SubType = '$subtype' AND Language = '$language'";
		$objConexion->insertar($sql);
		$objConexion->cerrar();
		echo "<script>alert('Los datos se actualizaron correctamente en ".$type."');
		window.location='../controlPanel.php';
		</script>";	
	break;	
	case 'Misal':
			$sql = "UPDATE Misal set TextB='$txa' WHERE DateLiturgia='$dateLiturgia' AND Type = '$type' AND SubType = '$subtype' AND Language = '$language'";
			$objConexion->insertar($sql);
			$objConexion->cerrar();
			echo "<script>alert('Los datos se actualizaron correctamente en ".$type."');
			window.location='../controlPanel.php';
			</script>";
	break;
	case 'Rituales OAR':
			$sql = "UPDATE Rituales set TextB='$txa' WHERE DateLiturgia='$dateLiturgia' AND Type = '$type' AND SubType = '$subtype' AND Language = '$language'";
			$objConexion->insertar($sql);
			$objConexion->cerrar();
			echo "<script>alert('Los datos se actualizaron correctamente en ".$type."');
			window.location='../controlPanel.php';
			</script>";
	break;
	case 'Oraciones':
			$sql = "UPDATE Oraciones set TextB='$txa' WHERE DateLiturgia='$dateLiturgia' AND Type = '$type' AND SubType = '$subtype' AND Language = '$language'";
			$objConexion->insertar($sql);
			$objConexion->cerrar();
			echo "<script>alert('Los datos se actualizaron correctamente en ".$type."');
			window.location='../controlPanel.php';
			</script>";	
	break;
	case 'Ritual Sacramentos':
			$sql = "UPDATE Ritual_sacramento set TextB='$txa' WHERE DateLiturgia='$dateLiturgia' AND Type = '$type' AND SubType = '$subtype' AND Language = '$language'";
			$objConexion->execute($sql);
			$objConexion->cerrar();
			echo "<script>alert('Los datos se actualizaron correctamente en ".$type."');
			window.location='../controlPanel.php';
			</script>";			
	break;
	default:
			echo "<script>
			alert('La selección no tuvo exito');
			window.location='../controlPanel.php';
			</script>";
	break;
}

?>