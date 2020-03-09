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
		<link rel="stylesheet" type="text/css" href="style.css"/>
		<link rel="stylesheet" href="assets/css/main.css" />
		<link rel="stylesheet" href="assets/css/bootstrap.min.css">
		<link rel="stylesheet" href="assets/css/normalize.css">
		<script src="scripts/viewAdmin.js"></script>
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
										<div class="" id="contenido">
											<header>
												<center><h1>Oficios de Lecturas</h1></center>
											</header>	
										</div>
										<div class="" id="divOficiosLecturas">
											<?php include("conexion/mostrar.php");?>
										</div>
										<!-- terminar mostrar todos los apartados del breviario -->
										<div class="ocultar" id="divLaudes">
											<?php include("conexion/mostrarLaudes.php");?>
										</div>
										<div class="ocultar" id="divHI">
											<?php include("conexion/mostrarHI.php");?>
										</div>
										<div class="ocultar" id="divVisperas">
											<?php include("conexion/mostrarVisperas.php");?>
										</div>
										<div class="ocultar" id="divCompletas">
											<?php include("conexion/mostrarCompletas.php");?>
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
										<li onclick="viewOficiosLecturas()"><a href="#">Oficios de Lecturas</a></li>
										<li onclick="viewLaudes()"><a href="#">Laudes</a></li>
										<li onclick="viewHoraIntermedia()"><a href="#">Hora Intermedia</a>
											<ul>
												<li>Tercia</li>
												<li>Sexta</li>
												<li>Nona</li>
											</ul>
										</li>
										<li onclick="viewVisperas()"><a href="#">Visperas</a></li>
										<li onclick="viewCompletas()"><a href="#">Completas</a></li>
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
				app.controller('mainCtrl', ['$scope', function($scope){}]);
				})();
			</script>
	</body>
</html>