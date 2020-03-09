<?php
session_start();
require_once("conexionDB.php");

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

//echo $type;
//echo $oracion;
$objConexion = new ConexionDB();

	switch ($oracion) {
		case 'Breviario':
			//Selecciona la DB brevario para verificar si exite o no el registro
			$sql = "SELECT * FROM Breviario WHERE DateLiturgia='$dateLiturgia' AND Type = '$type' AND SubType = '$subtype' AND Language = '$language'";
			$objConexion->buscar($sql);
			if ($objConexion->buscar($sql) == 0){
				//echo "Por fin funciono";
				$sql = "INSERT INTO Breviario(DateLiturgia,TextB,Type,SubType,Language) VALUES('$dateLiturgia','$txa','$type','$subtype','$language')";
				$objConexion->insertar($sql);
				$objConexion->cerrar();
				echo "<script>
				alert('Los datos fueron enviados correctamente a ".$type."');
				window.location='../controlPanel.php';
				</script>";
				}
			else{
				$objConexion->cerrar();
				echo "<script>
				alert('El registro ya existe en ".$type."');
				window.location='../controlPanel.php';
				</script>";}
		break;
		case 'Misal':
			$sql = "SELECT * FROM Misal WHERE DateLiturgia='$dateLiturgia' AND Type = '$type' AND SubType = '$subtype' AND Language = '$language'";
			$objConexion->buscar($sql);
			//Si no encuentra registro la funcion retorna un 0
			if ($objConexion->buscar($sql) == 0){
				$sql = "INSERT INTO Misal(DateLiturgia,TextB,Type,SubType,Language) VALUES('$dateLiturgia','$txa','$type','$subtype','$language')";
				$objConexion->insertar($sql);
				$objConexion->cerrar();
				echo "<script>
				alert('Los datos fueron enviados correctamente a ".$type."');
				window.location='../controlPanel.php';
				</script>";}
			else{
				$objConexion->cerrar();
				echo "<script>
				alert('El registro ya existe en ".$type."');
				window.location='../controlPanel.php';
				</script>";}
		break;
		case 'Rituales OAR':
			$sql = "SELECT * FROM Rituales WHERE Day='$calendarDay' AND Month='$calendarMonth' AND Type = '$type'";
			$objConexion->buscar($sql);

			if ($objConexion->buscar($sql) == 0){
				$sql = "INSERT INTO Rituales(Day,Month,TextB,Type,SubType) VALUES('$calendarDay','$calendarMonth','$txa','$type','$subtype')";
				$objConexion->insertar($sql);
				$objConexion->cerrar();
				echo "<script>
				alert('Los datos fueron enviados correctamente a ".$type."');
				window.location='../controlPanel.php';
				</script>";}
			else{
				$objConexion->cerrar();
				echo "<script>
				alert('El registro ya existe en ".$type."');
				window.location='../controlPanel.php';
				</script>";}
		break;
		case 'Oraciones':
			$sql = "SELECT * FROM Oraciones WHERE Day='$calendarDay' AND Month='$calendarMonth' AND Type = '$type'";
			$objConexion->buscar($sql);

			if ($objConexion->buscar($sql) == 0){
				$sql = "INSERT INTO Oraciones(Day,Month,TextB,Type) VALUES('$calendarDay','$calendarMonth','$txa','$type')";
				$objConexion->insertar($sql);
				$objConexion->cerrar();
				echo "<script>
				alert('Los datos fueron enviados correctamente a ".$type."');
				window.location='../controlPanel.php';
				</script>";}
			else{
				$objConexion->cerrar();
				echo "<script>
				alert('El registro ya existe en ".$type."');
				window.location='../controlPanel.php';
				</script>";}
		break;
		case 'Ritual Sacramentos':
			$sql = "SELECT * FROM Ritual_sacramento WHERE Day='$calendarDay' AND Month='$calendarMonth' AND Type = '$type'";
			$objConexion->buscar($sql);

			if ($objConexion->buscar($sql) == 0){
				$sql = "INSERT INTO Ritual_sacramento(Day,Month,TextB,Type) VALUES('$calendarDay','$calendarMonth','$txa','$type')";
				$objConexion->insertar($sql);
				$objConexion->cerrar();
				echo "<script>
				alert('Los datos fueron enviados correctamente a ".$type."');
				window.location='../controlPanel.php';
				</script>";}
			else{
				$objConexion->cerrar();
				echo "<script>
				alert('El registro ya existe en ".$type."');
				window.location='../controlPanel.php';
				</script>";}
		break;
		default:
			$objConexion->cerrar();
			echo "<script>
			alert('La selección no tuvo exito');
			window.location='../controlPanel.php';
			</script>";
			break;}
?>