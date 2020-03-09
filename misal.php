<?php
	session_start();
	require 'Language/requiereLenguage.php';
?>
<!DOCTYPE HTML>

<html ng-app="App" lang="es">
	<head>
		<title>Breviary</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<link rel="stylesheet" href="assets/css/bootstrap.min.css">
		<link rel="stylesheet" href="assets/css/style.css">
		<link rel="stylesheet" href="css/normalize.css">
		<!-- <script type="text/javascript" src="assets/js/geolocalizacion.js"></script>-->
		<script src="js/modernizr-custom.js"></script>	
		
	</head>
	<body ng-controller="mainCtrl">

		<!-- Wrapper -->
			<div id="wrapper" ng-controller="mainCtrl" >

				<!-- Main -->
					<div id="main"  ng-controller="mainCtrl">
						<div class="inner"  ng-controller="mainCtrl">	
							<!-- Header -->
								<header id="header">
									<a href="index.html" class="logo"><strong><?php echo $titulo; ?></strong><?php echo $titulo1; ?></a>
										<ul class="icons">
										<li><strong><a href="Language/changeLanguage.php?language=es">ES</a></strong></li>
										<li><strong><a href="Language/changeLanguage.php?language=en">EN</a></strong></li>
										<li><strong><a href="Language/changeLanguage.php?language=pt">PT</a></strong></li>
										<li><strong><a href="Language/changeLanguage.php?language=it">IT</a></strong></li>
										<li><strong><a href="Language/changeLanguage.php?language=es">ES-LT</a></strong></li>
										<li><?php echo date("d-M-Y");  ?></li>
									</ul>
								</header>

							<!-- Banner -->
								<section id="banner">
									<div class="content">
										<div class="" id="divIntro">
											<header>
												<center><h1><?php echo $tituloH1Header; ?></h1></center>
											</header>
											<p><center><img src="images/EscudoAR.png" width="60%" height="60%"></center></p><br>
										</div>
										<div class="ocultar" id="divRI">
												<header>
													<center><h1>RITOS INICIALES</h1></center>
												</header>
												<?php include("conexion/misal/ODM/mostrarRI.php");?>
										</div>
										<div class="ocultar" id="divCredo">
												<header>
													<center><h1>CREDO</h1></center>
												</header>
												<?php include("conexion/misal/ODM/mostrarC.php");?>
										</div>
										<div class="ocultar" id="divLE">
												<header>
													<center><h1>LITURGIA EUCARÍSTICA</h1></center>
												</header>
												<?php include("conexion/misal/ODM/mostrarLE.php");?>
										</div>
										<div class="ocultar" id="divRC">
												<header>
													<center><h1>RITO DE COMUNIÓN</h1></center>
												</header>
												<?php include("conexion/misal/ODM/mostrarRC.php");?>
										</div>
										<div class="ocultar" id="divRCS">
												<header>
													<center><h1>RITO DE CONCLUSIÓN</h1></center>
												</header>
												<?php include("conexion/misal/ODM/mostrarRCS.php");?>
										</div>
										<div class="ocultar" id="divBen">
												<header>
													<center><h1>BENDICIÓN</h1></center>
												</header>
												<?php include("conexion/misal/ODM/mostrarB.php");?>
										</div>
										<div class="ocultar" id="divOLD">
												<header>
													<center><h1>ORACIÓN Y LECTURAS DEL DÍA</h1></center>
												</header>
												<?php include("conexion/misal/mostrarOLD.php");?>
										</div>
										<div class="ocultar" id="divPrefacio">
											<header>
												<center><h1>SELECCIONE PREFACIO</h1></center>
											</header>
											<form action="viewPrefacioMisal.php" method="post">
												<select class="" id="Pre" name="Pre">
													<option>Seleccione</option>
													<optgroup label="Prefacio" >
															<option>Prefacio Común I</option>
															<option>Prefacio Común II</option>
															<option>Prefacio Común III</option>
															<option>Prefacio Común IV</option>
															<option>Prefacio Común V</option>
															<option>Prefacio Común VI</option>
															<option>Prefacio Común VII</option>
															<option>Prefacio Común VIII</option>
															<option>Prefacio Común IX</option>
															<option>Prefacio Común X</option>
															<option>Prefacio de Adviento I</option>
															<option>Prefacio de Adviento II</option>
															<option>Prefacio de Adviento III</option>
															<option>Prefacio de Adviento IV</option>
															<option>Prefacio de Navidad I</option>
															<option>Prefacio de Navidad II</option>
															<option>Prefacio de Navidad III</option>
															<option>Prefacio de Epifanía</option>
															<option>Prefacio de Cuaresma I</option>
															<option>Prefacio de Cuaresma II</option>
															<option>Prefacio de Cuaresma III</option>
															<option>Prefacio de Cuaresma IV</option>
															<option>Prefacio de Pascua I</option>
															<option>Prefacio de Pascua II</option>
															<option>Prefacio de Pascua III</option>
															<option>Prefacio de Pascua IV</option>
															<option>Prefacio de la Ascensión I</option>
															<option>Prefacio de la Ascensión II</option>
															<option>Prefacio de la Ascensión III</option>
															<option>Prefacio para después de la Ascensión</option>
															<option>Prefacio Dominical I</option>
															<option>Prefacio Dominical II</option>
															<option>Prefacio Dominical III</option>
															<option>Prefacio Dominical IV</option>
															<option>Prefacio Dominical V</option>
															<option>Prefacio Dominical VI</option>
															<option>Prefacio Dominical VII</option>
															<option>Prefacio Dominical VIII</option>
															<option>Prefacio Dominical IX</option>
															<option>Prefacio Dominical X</option>
															<option>Prefacio de la Santisima Trinidad</option>
															<option>Prefacio de Eucaristía I</option>
															<option>Prefacio de Eucaristía II</option>
															<option>Prefacio de Eucaristía III</option>
															<option>Prefacio de la Confirmación</option>
															<option>Prefacio de la pasión del Señor I</option>
															<option>Prefacio de la pasión del Señor II</option>
															<option>Prefacio de la S. Virgen María I</option>
															<option>Prefacio de la S. Virgen María II</option>
															<option>Prefacio de la S. Virgen María III</option>
															<option>Prefacio de la S. Virgen María IV</option>
															<option>Prefacio de la S. Virgen María V</option>
															<option>Prefacio de las Ordenaciones I</option>
															<option>Prefacio de las Ordenaciones II</option>
															<option>Prefacio de los Ángeles</option>
															<option>Prefacio de los Apóstoles I</option>
															<option>Prefacio de los Apóstoles II</option>
															<option>Prefacio de los Santos I</option>
															<option>Prefacio de los Santos II</option>
															<option>Prefacio de los Santos Mártires</option>
															<option>Prefacio de los Santos Pastores</option>
															<option>Prefacio de San José</option>
															<option>Prefacio de San Pedro y San Pablo, Apóstoles</option>
															<option>Prefacio de Santas Vírgenes y Santos Religiosos</option>
															<option>Prefacio en la fiesta de la conversión de San Agustín</option>
															<option>Prefacio en la fiesta de Ntra. Sra., Madre del buen consejo</option>
															<option>Prefacio en la fiesta de Santa Rita de Casia</option>
															<option>Prefacio en la fiesta de Santa Clara de Montefalco</option>
															<option>Prefacio en la memoria de San Ezequiel Moreno</option>
															<option>Prefacio en la fiesta de Santa Mónica</option>
															<option>Prefacio en la solemnidad de San Agustín</option>
															<option>Prefacio en la solemnidad de Ntra. Sra. Madre de la consolación</option>
															<option>Prefacio en la fiesta de San Nicolás de Tolentino</option>
															<option>Prefacio en la fiesta de Santo Tomás de Villanueva</option>
															<option>Prefacio en la fiesta den todos los Santos de la Orden</option>
															<option>Prefacio del Bautismo</option>
															<option>Prefacio de Difuntos I</option>
															<option>Prefacio de Difuntos II</option>
															<option>Prefacio de Difuntos III</option>
															<option>Prefacio de Difuntos IV</option>
															<option>Prefacio de Difuntos V</option>
													</optgroup>
												</select><br>
												<center><input type="submit" id="btnMostar" name="mostrar" value="mostrar"></center>
											</form>
										</div>
										<div class="ocultar" id="divPE_I">
												<header>
													<center><h1>PLEGARIA EUCARÍSTICA I</h1></center>
												</header>
												<?php include("conexion/misal/PE/mostrarPE_I.php");?>
										</div>
										<div class="ocultar" id="divPE_II">
												<header>
													<center><h1>PLEGARIA EUCARÍSTICA II</h1></center>
												</header>
												<?php include("conexion/misal/PE/mostrarPE_II.php");?>
										</div>
										<div class="ocultar" id="divPE_III">
												<header>
													<center><h1>PLEGARIA EUCARÍSTICA III</h1></center>
												</header>
												<?php include("conexion/misal/PE/mostrarPE_III.php");?>
										</div>
										<div class="ocultar" id="divPE_IV">
												<header>
													<center><h1>PLEGARIA EUCARÍSTICA IV</h1></center>
												</header>
												<?php include("conexion/misal/PE/mostrarPE_IV.php");?>
										</div>
										<div class="ocultar" id="divPE_VA">
												<header>
													<center><h1>PLEGARIA EUCARÍSTICA V/a</h1></center>
												</header>
												<?php include("conexion/misal/PE/mostrarPE_VA.php");?>
										</div>
										<div class="ocultar" id="divPE_VB">
												<header>
													<center><h1>PLEGARIA EUCARÍSTICA V/b</h1></center>
												</header>
												<?php include("conexion/misal/PE/mostrarPE_VB.php");?>
										</div>
										<div class="ocultar" id="divPE_VC">
												<header>
													<center><h1>PLEGARIA EUCARÍSTICA V/c</h1></center>
												</header>
												<?php include("conexion/misal/PE/mostrarPE_VC.php");?>
										</div>
										<div class="ocultar" id="divPE_VD">
												<header>
													<center><h1>PLEGARIA EUCARÍSTICA V/d</h1></center>
												</header>
												<?php include("conexion/misal/PE/mostrarPE_VD.php");?>
										</div>
										<div class="ocultar" id="divPE_SRI">
												<header>
													<center><h1>PLEGARIA EUCARÍSTICA SOBRE LA RECONCILIACIÓN I</h1></center>
												</header>
												<?php include("conexion/misal/PE/mostrarPE_SRI.php");?>
										</div>
										<div class="ocultar" id="divPE_SRII">
												<header>
													<center><h1>PLEGARIA EUCARÍSTICA SOBRE LA RECONCILIACIÓN II</h1></center>
												</header>
												<?php include("conexion/misal/PE/mostrarPE_SRII.php");?>
										</div>
										<div class="ocultar" id="divPE_NI">
												<header>
													<center><h1>PLEGARIA EUCARÍSTICA PARA LOS NIÑOS I</h1></center>
												</header>
												<?php include("conexion/misal/PE/mostrarPE_NI.php");?>
										</div>
										<div class="ocultar" id="divPE_NII">
												<header>
													<center><h1>PLEGARIA EUCARÍSTICA PARA LOS NIÑOS II</h1></center>
												</header>
												<?php include("conexion/misal/PE/mostrarPE_NII.php");?>
										</div>

										<div class="ocultar" id="divComunes">
											<header>
												<center><h1>SELECCIONE COMUNES</h1></center>
											</header>
											<form action="viewComunes.php" method="post">
												<select class="" id="Co" name="Co">
													<option>Seleccione</option>
													<optgroup label="Comunes">
														<?php
															$comunes = array("Aniversario Dedicación de una Iglesia(en la Iglesia)","Aniversario Dedicación de una Iglesia(fuera de la Iglesia)","Común de Santa María Virgen I","Común de Santa María Virgen II","Común de Santa María Virgen III","Común de Santa María Virgen IV(Tiempo de Adviento)","Común de Santa María Virgen V(Tiempo de Navidad","Común de Santa María Virgen V(Tiempo Pascual)","Común de Santa María Virgen VI(Tiempo Pascual)","JesuCristo, Sumo y eterno Sacerdote","Sagrada Eucaristía I","Sagrada Eucaristía II","Santísima Trinidad","Los Santos Ángeles","San José","Misterio de la Santa Cruz","Sagrado Corazón de Jesús","Espititu Santo","Santisimo nombre de Jesús","Preciosísima sangre de Jesús","Todos los Santos","María, Madre de la Iglesia","Común de Mártires I(varios mártires)","Común de Mártires II(varios mártires)","Común de Mártires III(un mártir)","Común de Mártires IV(un mártir)","Común de Mártires V(virgen mártir)","Común de Mártires VI(mujer mártir)","Común de Mártires VII(un misionero)","Común de Mártires VIII(varios misioneros)","Común de Mártires IX(varios mártires en tiempo Pascual)","Común de Mártires X(varios mártires fuera del tiempo Pascual)","Común de Pastores I(Papas)","Común de Pastores II(Obispos)","Común de Pastores III(Pastores)","Común de Pastores IV(Fundador)","Común de Pastores V(Fundadores)","Común de Pastores VI(Misioneros)","Exequias(fuera del Tiempo Pascual)","Exequias(Tiempo Pascual)","Común de Doctores de la Iglesia","Unidad de los Cristianos","Por la Santa Iglesia","Misa Pro Papa","Por el Obispo","Por los Sacerdotes","Por las Vocaciones Sacerdotales","Acción de Gracias","Para la elección del Papa o del Obispo","Por el Concilio o el Sínodo","Misa por los Laicos","Misa por los Cristianos Perseguidos","Misa por la Paz y la Justicia","Misa en Tiempo de Guerra o Desorden","Misa por la Santificación del Trabajo","Misa por los Enfermos","Misa por cualquier Necesidad","Misa por la Familia","Por la evangelización de los Pueblos","Común de Virgenes I","Común de Virgenes II","Común de Virgenes III(varias Virgenes","Común de Santos y Santas I","Común de Santos y Santas II", "Común de Santos y Santas III(un santo)","Común de Santos y Santas IV(un abad)","Común de Santos y Santas V(religiosos)","Común de Santos y Santas VI(santos consagrados a una actividad caritativa)","Común de Santos y Santas VII(educadores)","Común de Santos y Santas VIII(santas mujeres)");
															for($i=0;$i<count($comunes);$i++){
																echo "<option>".$comunes[$i]."</option>";}
														?>
													</optgroup>
												</select><br>
												<center><input type="submit" id="btnMostar" name="mostrar" value="mostrar"></center>
											</form>
										</div>
									</div>
									
								</section>
								<!-- Footer -->
								<div class="derechos">
									<footer>
										<center><span>Diseño y Desarrollo por <img src="images/Logo.png" width="4%" height="4%"></span></center>
									</footer>
								</div>
						</div>
					</div>

				<!-- Sidebar -->
					<div id="sidebar" ng-controller="mainCtrl">
						<div class="inner"  ng-controller="mainCtrl">

							<!-- Search -->
								<section id="search" class="alt">
									<form method="post" action="#">
										<input type="text" name="query" id="query" placeholder="Search" />
									</form>
								</section>

							<!-- Menu -->
								<nav id="menu" ng-controller="mainCtrl">
									<header class="major">
										<h2><?php echo $menu; ?></h2>
									</header>
									<ul>
										<li class="submenu"><a href="">Ordinarios de la misa</a>
											<ul class="submenu1">
												<li onclick="viewODM_RI()"><a href="#">Ritos Iniciales</a></li>
												<li onclick="viewODM_C()"><a href="#">Credo</a></li>
												<li onclick="viewODM_LE()"><a href="#">Liturgia Eucarística</a></li>
												<li onclick="viewODM_RC()"><a href="#">Rito de Comunión</a></li>
												<li onclick="viewODM_RCS()"><a href="#">Rito de Conclusión</a></li>
												<li onclick="viewODM_B()"><a href="#">Bendición</a></li>
											</ul>
										</li>
										<li onclick="viewOLD()"><a href="">Oración y lecturas del día</a></li>
										<li onclick="viewPrefacio()"><a href="">Prefacio</a></li>
										<li class="submenu2"><a href="">Plegaria Eucarística</a>
											<ul class="submenu3">
												<li onclick="viewPE_I()"><a href="#">Plegaria Eucarística I</a></li>
												<li onclick="viewPE_II()"><a href="#">Plegaria Eucarística II</a></li>
												<li onclick="viewPE_III()"><a href="#">Plegaria Eucarística III</a></li>
												<li onclick="viewPE_IV()"><a href="#">Plegaria Eucarística IV</a></li>
												<li onclick="viewPE_VA()"><a href="#">Plegaria Eucarística V/a</a></li>
												<li onclick="viewPE_VB()"><a href="#">Plegaria Eucarística V/b</a></li>
												<li onclick="viewPE_VC()"><a href="#">Plegaria Eucarística V/c</a></li>
												<li onclick="viewPE_VD()"><a href="#">Plegaria Eucarística V/d</a></li>
												<li onclick="viewPE_SRI()"><a href="#">Plegaria Eucarística sobre la reconciliación I</a></li>
												<li onclick="viewPE_SRII()"><a href="#">Plegaria Eucarística sobre la reconciliación II</a></li>
												<li onclick="viewPE_NI()"><a href="#">Plegaria Eucarística para Niños I</a></li>
												<li onclick="viewPE_NII()"><a href="#">Plegaria Eucarística para Niños II</a></li>
											</ul>
										</li>
										<li onclick="viewComunes()"><a href="">Comunes</a></li>
										<li><a href="index.php"><?php echo $btInicio; ?></a></li>
									</ul>
								</nav>													

							<!-- Section -->
								<section>
									
									<ul class="contact">
									<li><img src="images/EscudoAR.png"></li>
										<li onclick="gps();" class="fa-map-marker" id="geolocation-test"><a href=""><?php echo $ubicacion; ?></a><span id="flag"></span></li>
										<!--<li id="flag"></li>-->
									</ul>
								</section>

							<!-- Footer -->
							<footer class = "copy">
									<center><span>Todos los derechos reservados &copy; 2020</span></center>
								</footer>

						</div>
					</div>

			</div>

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/skel.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>
			<script src="assets/js/lib/angular.min.js"></script>
			<script type="text/javascript" src="scripts/viewAdmin.js"></script>
			<script src="scripts/gps.js"></script>
			
			<script >
			(function(){

				var app = angular.module('App',[ ]);
				app.controller('mainCtrl', ['$scope', function($scope){
				  
				}]);
			})();
			</script>


	</body>
</html>