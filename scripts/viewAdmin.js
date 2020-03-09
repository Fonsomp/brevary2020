/*funciones llamadas en index.php*/
function viewFiles(){
	document.getElementById("login").style.display = "none";
	document.getElementById("contenido").style.display = "none";
	document.getElementById("verArchivos").style.display = "block";
	document.getElementById("verNotificaciones").style.display = "none";}

function viewNotifications(){
	document.getElementById("login").style.display = "none";
	document.getElementById("contenido").style.display = "none";
	document.getElementById("verArchivos").style.display = "none";
	document.getElementById("verNotificaciones").style.display = "block";}

function viewLogin(){
	document.getElementById("login").style.display = "block";
	document.getElementById("contenido").style.display = "none";
	document.getElementById("verArchivos").style.display = "none";
	document.getElementById("verNotificaciones").style.display = "none";}


/*Funciones llamadas en controlPanel.php*/
function viewEditLiturgias(){
	document.getElementById("notificacion").style.display = "none";
	document.getElementById("liturgias").style.display = "block";
	document.getElementById("upFiles").style.display = "none";}

function viewEditNotifications(){
	document.getElementById("notificacion").style.display = "block";
	document.getElementById("liturgias").style.display = "none";
	document.getElementById("upFiles").style.display = "none";}
				
function viewUpFiles(){
	document.getElementById("notificacion").style.display = "none";
	document.getElementById("liturgias").style.display = "none";
	document.getElementById("upFiles").style.display = "block";}

//Funciones llamadas en misal.php
function viewODM_RI(){
	document.getElementById("divIntro").style.display = "none";
	document.getElementById("divRI").style.display = "block";
	document.getElementById("divCredo").style.display = "none";
	document.getElementById("divLE").style.display = "none";
	document.getElementById("divRC").style.display = "none";
	document.getElementById("divRCS").style.display = "none";
	document.getElementById("divBen").style.display = "none";
	document.getElementById("divOLD").style.display = "none";
	document.getElementById("divPrefacio").style.display = "none";
	document.getElementById("divPE_I").style.display = "none";
	document.getElementById("divPE_II").style.display = "none";
	document.getElementById("divPE_III").style.display = "none";
	document.getElementById("divPE_IV").style.display = "none";
	document.getElementById("divPE_VA").style.display = "none";
	document.getElementById("divPE_VB").style.display = "none";
	document.getElementById("divPE_VC").style.display = "none";
	document.getElementById("divPE_VD").style.display = "none";
	document.getElementById("divPE_SRI").style.display = "none";
	document.getElementById("divPE_SRII").style.display = "none";
	document.getElementById("divPE_NI").style.display = "none";
	document.getElementById("divPE_NII").style.display = "none";
	document.getElementById("divComunes").style.display = "none";}

function viewODM_C(){
	document.getElementById("divIntro").style.display = "none";
	document.getElementById("divRI").style.display = "none";
	document.getElementById("divCredo").style.display = "block";
	document.getElementById("divLE").style.display = "none";
	document.getElementById("divRC").style.display = "none";
	document.getElementById("divRCS").style.display = "none";
	document.getElementById("divBen").style.display = "none";
	document.getElementById("divOLD").style.display = "none";
	document.getElementById("divPrefacio").style.display = "none";
	document.getElementById("divPE_I").style.display = "none";
	document.getElementById("divPE_II").style.display = "none";
	document.getElementById("divPE_III").style.display = "none";
	document.getElementById("divPE_IV").style.display = "none";
	document.getElementById("divPE_VA").style.display = "none";
	document.getElementById("divPE_VB").style.display = "none";
	document.getElementById("divPE_VC").style.display = "none";
	document.getElementById("divPE_VD").style.display = "none";
	document.getElementById("divPE_SRI").style.display = "none";
	document.getElementById("divPE_SRII").style.display = "none";
	document.getElementById("divPE_NI").style.display = "none";
	document.getElementById("divPE_NII").style.display = "none";;
	document.getElementById("divComunes").style.display = "none";}

function viewODM_LE(){
	document.getElementById("divIntro").style.display = "none";
	document.getElementById("divRI").style.display = "none";
	document.getElementById("divCredo").style.display = "none";
	document.getElementById("divLE").style.display = "block";
	document.getElementById("divRC").style.display = "none";
	document.getElementById("divRCS").style.display = "none";
	document.getElementById("divBen").style.display = "none";
	document.getElementById("divOLD").style.display = "none";
	document.getElementById("divPrefacio").style.display = "none";
	document.getElementById("divPE_I").style.display = "none";
	document.getElementById("divPE_II").style.display = "none";
	document.getElementById("divPE_III").style.display = "none";
	document.getElementById("divPE_IV").style.display = "none";
	document.getElementById("divPE_VA").style.display = "none";
	document.getElementById("divPE_VB").style.display = "none";
	document.getElementById("divPE_VC").style.display = "none";
	document.getElementById("divPE_VD").style.display = "none";
	document.getElementById("divPE_SRI").style.display = "none";
	document.getElementById("divPE_SRII").style.display = "none";
	document.getElementById("divPE_NI").style.display = "none";
	document.getElementById("divPE_NII").style.display = "none";
	document.getElementById("divComunes").style.display = "none";}

function viewODM_RC(){
	document.getElementById("divIntro").style.display = "none";
	document.getElementById("divRI").style.display = "none";
	document.getElementById("divCredo").style.display = "none";
	document.getElementById("divLE").style.display = "none";
	document.getElementById("divRC").style.display = "block";
	document.getElementById("divRCS").style.display = "none";
	document.getElementById("divBen").style.display = "none";
	document.getElementById("divOLD").style.display = "none";
	document.getElementById("divPrefacio").style.display = "none";
	document.getElementById("divPE_I").style.display = "none";
	document.getElementById("divPE_II").style.display = "none";
	document.getElementById("divPE_III").style.display = "none";
	document.getElementById("divPE_IV").style.display = "none";
	document.getElementById("divPE_VA").style.display = "none";
	document.getElementById("divPE_VB").style.display = "none";
	document.getElementById("divPE_VC").style.display = "none";
	document.getElementById("divPE_VD").style.display = "none";
	document.getElementById("divPE_SRI").style.display = "none";
	document.getElementById("divPE_SRII").style.display = "none";
	document.getElementById("divPE_NI").style.display = "none";
	document.getElementById("divPE_NII").style.display = "none";
	document.getElementById("divComunes").style.display = "none";}

function viewODM_RCS(){
	document.getElementById("divIntro").style.display = "none";
	document.getElementById("divRI").style.display = "none";
	document.getElementById("divCredo").style.display = "none";
	document.getElementById("divLE").style.display = "none";
	document.getElementById("divRC").style.display = "none";
	document.getElementById("divRCS").style.display = "block";
	document.getElementById("divBen").style.display = "none";
	document.getElementById("divOLD").style.display = "none";
	document.getElementById("divPrefacio").style.display = "none";
	document.getElementById("divPE_I").style.display = "none";
	document.getElementById("divPE_II").style.display = "none";
	document.getElementById("divPE_III").style.display = "none";
	document.getElementById("divPE_IV").style.display = "none";
	document.getElementById("divPE_VA").style.display = "none";
	document.getElementById("divPE_VB").style.display = "none";
	document.getElementById("divPE_VC").style.display = "none";
	document.getElementById("divPE_VD").style.display = "none";
	document.getElementById("divPE_SRI").style.display = "none";
	document.getElementById("divPE_SRII").style.display = "none";
	document.getElementById("divPE_NI").style.display = "none";
	document.getElementById("divPE_NII").style.display = "none";
	document.getElementById("divComunes").style.display = "none";}

function viewODM_B(){
	document.getElementById("divIntro").style.display = "none";
	document.getElementById("divRI").style.display = "none";
	document.getElementById("divCredo").style.display = "none";
	document.getElementById("divLE").style.display = "none";
	document.getElementById("divRC").style.display = "none";
	document.getElementById("divRCS").style.display = "none";
	document.getElementById("divBen").style.display = "block";
	document.getElementById("divOLD").style.display = "none";
	document.getElementById("divPrefacio").style.display = "none";
	document.getElementById("divPE_I").style.display = "none";
	document.getElementById("divPE_II").style.display = "none";
	document.getElementById("divPE_III").style.display = "none";
	document.getElementById("divPE_IV").style.display = "none";
	document.getElementById("divPE_VA").style.display = "none";
	document.getElementById("divPE_VB").style.display = "none";
	document.getElementById("divPE_VC").style.display = "none";
	document.getElementById("divPE_VD").style.display = "none";
	document.getElementById("divPE_SRI").style.display = "none";
	document.getElementById("divPE_SRII").style.display = "none";
	document.getElementById("divPE_NI").style.display = "none";
	document.getElementById("divPE_NII").style.display = "none";
	document.getElementById("divComunes").style.display = "none";}

function viewOLD(){
	document.getElementById("divIntro").style.display = "none";
	document.getElementById("divRI").style.display = "none";
	document.getElementById("divCredo").style.display = "none";
	document.getElementById("divLE").style.display = "none";
	document.getElementById("divRC").style.display = "none";
	document.getElementById("divRCS").style.display = "none";
	document.getElementById("divBen").style.display = "none";
	document.getElementById("divOLD").style.display = "block";
	document.getElementById("divPrefacio").style.display = "none";
	document.getElementById("divPE_I").style.display = "none";
	document.getElementById("divPE_II").style.display = "none";
	document.getElementById("divPE_III").style.display = "none";
	document.getElementById("divPE_IV").style.display = "none";
	document.getElementById("divPE_VA").style.display = "none";
	document.getElementById("divPE_VB").style.display = "none";
	document.getElementById("divPE_VC").style.display = "none";
	document.getElementById("divPE_VD").style.display = "none";
	document.getElementById("divPE_SRI").style.display = "none";
	document.getElementById("divPE_SRII").style.display = "none";
	document.getElementById("divPE_NI").style.display = "none";
	document.getElementById("divPE_NII").style.display = "none";
	document.getElementById("divComunes").style.display = "none";}

	function viewPrefacio(){
	//document.getElementById("divIntro").style.display = "none";
	document.getElementById("divRI").style.display = "none";
	document.getElementById("divPrefacio").style.display = "block";
	document.getElementById("divPE").style.display = "none";
	document.getElementById("divComunes").style.display = "none";}

	function viewPE_I(){
		document.getElementById("divIntro").style.display = "none";
		document.getElementById("divRI").style.display = "none";
		document.getElementById("divCredo").style.display = "none";
		document.getElementById("divLE").style.display = "none";
		document.getElementById("divRC").style.display = "none";
		document.getElementById("divRCS").style.display = "none";
		document.getElementById("divBen").style.display = "none";
		document.getElementById("divOLD").style.display = "none";
		document.getElementById("divPrefacio").style.display = "none";
		document.getElementById("divPE_I").style.display = "block";
		document.getElementById("divPE_II").style.display = "none";
		document.getElementById("divPE_III").style.display = "none";
		document.getElementById("divPE_IV").style.display = "none";
		document.getElementById("divPE_VA").style.display = "none";
		document.getElementById("divPE_VB").style.display = "none";
		document.getElementById("divPE_VC").style.display = "none";
		document.getElementById("divPE_VD").style.display = "none";
		document.getElementById("divPE_SRI").style.display = "none";
		document.getElementById("divPE_SRII").style.display = "none";
		document.getElementById("divPE_NI").style.display = "none";
		document.getElementById("divPE_NII").style.display = "none";
		document.getElementById("divComunes").style.display = "none";}

function viewPE_II(){
		document.getElementById("divIntro").style.display = "none";
		document.getElementById("divRI").style.display = "none";
		document.getElementById("divCredo").style.display = "none";
		document.getElementById("divLE").style.display = "none";
		document.getElementById("divRC").style.display = "none";
		document.getElementById("divRCS").style.display = "none";
		document.getElementById("divBen").style.display = "none";
		document.getElementById("divOLD").style.display = "none";
		document.getElementById("divPrefacio").style.display = "none";
		document.getElementById("divPE_I").style.display = "none";
		document.getElementById("divPE_II").style.display = "block";
		document.getElementById("divPE_III").style.display = "none";
		document.getElementById("divPE_IV").style.display = "none";
		document.getElementById("divPE_VA").style.display = "none";
		document.getElementById("divPE_VB").style.display = "none";
		document.getElementById("divPE_VC").style.display = "none";
		document.getElementById("divPE_VD").style.display = "none";
		document.getElementById("divPE_SRI").style.display = "none";
		document.getElementById("divPE_SRII").style.display = "none";
		document.getElementById("divPE_NI").style.display = "none";
		document.getElementById("divPE_NII").style.display = "none";
		document.getElementById("divComunes").style.display = "none";}

function viewPE_III(){
		document.getElementById("divIntro").style.display = "none";
		document.getElementById("divRI").style.display = "none";
		document.getElementById("divCredo").style.display = "none";
		document.getElementById("divLE").style.display = "none";
		document.getElementById("divRC").style.display = "none";
		document.getElementById("divRCS").style.display = "none";
		document.getElementById("divBen").style.display = "none";
		document.getElementById("divOLD").style.display = "none";
		document.getElementById("divPrefacio").style.display = "none";
		document.getElementById("divPE_I").style.display = "none";
		document.getElementById("divPE_II").style.display = "none";
		document.getElementById("divPE_III").style.display = "block";
		document.getElementById("divPE_IV").style.display = "none";
		document.getElementById("divPE_VA").style.display = "none";
		document.getElementById("divPE_VB").style.display = "none";
		document.getElementById("divPE_VC").style.display = "none";
		document.getElementById("divPE_VD").style.display = "none";
		document.getElementById("divPE_SRI").style.display = "none";
		document.getElementById("divPE_SRII").style.display = "none";
		document.getElementById("divPE_NI").style.display = "none";
		document.getElementById("divPE_NII").style.display = "none";
		document.getElementById("divComunes").style.display = "none";}

function viewPE_IV(){
		document.getElementById("divIntro").style.display = "none";
		document.getElementById("divRI").style.display = "none";
		document.getElementById("divCredo").style.display = "none";
		document.getElementById("divLE").style.display = "none";
		document.getElementById("divRC").style.display = "none";
		document.getElementById("divRCS").style.display = "none";
		document.getElementById("divBen").style.display = "none";
		document.getElementById("divOLD").style.display = "none";
		document.getElementById("divPrefacio").style.display = "none";
		document.getElementById("divPE_I").style.display = "none";
		document.getElementById("divPE_II").style.display = "none";
		document.getElementById("divPE_III").style.display = "none";
		document.getElementById("divPE_IV").style.display = "block";
		document.getElementById("divPE_VA").style.display = "none";
		document.getElementById("divPE_VB").style.display = "none";
		document.getElementById("divPE_VC").style.display = "none";
		document.getElementById("divPE_VD").style.display = "none";
		document.getElementById("divPE_SRI").style.display = "none";
		document.getElementById("divPE_SRII").style.display = "none";
		document.getElementById("divPE_NI").style.display = "none";
		document.getElementById("divPE_NII").style.display = "none";
		document.getElementById("divComunes").style.display = "none";}
		
function viewPE_VA(){
		document.getElementById("divIntro").style.display = "none";
		document.getElementById("divRI").style.display = "none";
		document.getElementById("divCredo").style.display = "none";
		document.getElementById("divLE").style.display = "none";
		document.getElementById("divRC").style.display = "none";
		document.getElementById("divRCS").style.display = "none";
		document.getElementById("divBen").style.display = "none";
		document.getElementById("divOLD").style.display = "none";
		document.getElementById("divPrefacio").style.display = "none";
		document.getElementById("divPE_I").style.display = "none";
		document.getElementById("divPE_II").style.display = "none";
		document.getElementById("divPE_III").style.display = "none";
		document.getElementById("divPE_IV").style.display = "none";
		document.getElementById("divPE_VA").style.display = "block";
		document.getElementById("divPE_VB").style.display = "none";
		document.getElementById("divPE_VC").style.display = "none";
		document.getElementById("divPE_VD").style.display = "none";
		document.getElementById("divPE_SRI").style.display = "none";
		document.getElementById("divPE_SRII").style.display = "none";
		document.getElementById("divPE_NI").style.display = "none";
		document.getElementById("divPE_NII").style.display = "none";
		document.getElementById("divComunes").style.display = "none";}
		
function viewPE_VB(){
		document.getElementById("divIntro").style.display = "none";
		document.getElementById("divRI").style.display = "none";
		document.getElementById("divCredo").style.display = "none";
		document.getElementById("divLE").style.display = "none";
		document.getElementById("divRC").style.display = "none";
		document.getElementById("divRCS").style.display = "none";
		document.getElementById("divBen").style.display = "none";
		document.getElementById("divOLD").style.display = "none";
		document.getElementById("divPrefacio").style.display = "none";
		document.getElementById("divPE_I").style.display = "none";
		document.getElementById("divPE_II").style.display = "none";
		document.getElementById("divPE_III").style.display = "none";
		document.getElementById("divPE_IV").style.display = "none";
		document.getElementById("divPE_VA").style.display = "none";
		document.getElementById("divPE_VB").style.display = "block";
		document.getElementById("divPE_VC").style.display = "none";
		document.getElementById("divPE_VD").style.display = "none";
		document.getElementById("divPE_SRI").style.display = "none";
		document.getElementById("divPE_SRII").style.display = "none";
		document.getElementById("divPE_NI").style.display = "none";
		document.getElementById("divPE_NII").style.display = "none";
		document.getElementById("divComunes").style.display = "none";}
		
function viewPE_VC(){
		document.getElementById("divIntro").style.display = "none";
		document.getElementById("divRI").style.display = "none";
		document.getElementById("divCredo").style.display = "none";
		document.getElementById("divLE").style.display = "none";
		document.getElementById("divRC").style.display = "none";
		document.getElementById("divRCS").style.display = "none";
		document.getElementById("divBen").style.display = "none";
		document.getElementById("divOLD").style.display = "none";
		document.getElementById("divPrefacio").style.display = "none";
		document.getElementById("divPE_I").style.display = "none";
		document.getElementById("divPE_II").style.display = "none";
		document.getElementById("divPE_III").style.display = "none";
		document.getElementById("divPE_IV").style.display = "none";
		document.getElementById("divPE_VA").style.display = "none";
		document.getElementById("divPE_VB").style.display = "none";
		document.getElementById("divPE_VC").style.display = "block";
		document.getElementById("divPE_VD").style.display = "none";
		document.getElementById("divPE_SRI").style.display = "none";
		document.getElementById("divPE_SRII").style.display = "none";
		document.getElementById("divPE_NI").style.display = "none";
		document.getElementById("divPE_NII").style.display = "none";
		document.getElementById("divComunes").style.display = "none";}

function viewPE_VD(){
		document.getElementById("divIntro").style.display = "none";
		document.getElementById("divRI").style.display = "none";
		document.getElementById("divCredo").style.display = "none";
		document.getElementById("divLE").style.display = "none";
		document.getElementById("divRC").style.display = "none";
		document.getElementById("divRCS").style.display = "none";
		document.getElementById("divBen").style.display = "none";
		document.getElementById("divOLD").style.display = "none";
		document.getElementById("divPrefacio").style.display = "none";
		document.getElementById("divPE_I").style.display = "none";
		document.getElementById("divPE_II").style.display = "none";
		document.getElementById("divPE_III").style.display = "none";
		document.getElementById("divPE_IV").style.display = "none";
		document.getElementById("divPE_VA").style.display = "none";
		document.getElementById("divPE_VB").style.display = "none";
		document.getElementById("divPE_VC").style.display = "none";
		document.getElementById("divPE_VD").style.display = "block";
		document.getElementById("divPE_SRI").style.display = "none";
		document.getElementById("divPE_SRII").style.display = "none";
		document.getElementById("divPE_NI").style.display = "none";
		document.getElementById("divPE_NII").style.display = "none";
		document.getElementById("divComunes").style.display = "none";}

function viewPE_SRI(){
		document.getElementById("divIntro").style.display = "none";
		document.getElementById("divRI").style.display = "none";
		document.getElementById("divCredo").style.display = "none";
		document.getElementById("divLE").style.display = "none";
		document.getElementById("divRC").style.display = "none";
		document.getElementById("divRCS").style.display = "none";
		document.getElementById("divBen").style.display = "none";
		document.getElementById("divOLD").style.display = "none";
		document.getElementById("divPrefacio").style.display = "none";
		document.getElementById("divPE_I").style.display = "none";
		document.getElementById("divPE_II").style.display = "none";
		document.getElementById("divPE_III").style.display = "none";
		document.getElementById("divPE_IV").style.display = "none";
		document.getElementById("divPE_VA").style.display = "none";
		document.getElementById("divPE_VB").style.display = "none";
		document.getElementById("divPE_VC").style.display = "none";
		document.getElementById("divPE_VD").style.display = "none";
		document.getElementById("divPE_SRI").style.display = "block";
		document.getElementById("divPE_SRII").style.display = "none";
		document.getElementById("divPE_NI").style.display = "none";
		document.getElementById("divPE_NII").style.display = "none";
		document.getElementById("divComunes").style.display = "none";}

function viewPE_SRII(){
		document.getElementById("divIntro").style.display = "none";
		document.getElementById("divRI").style.display = "none";
		document.getElementById("divCredo").style.display = "none";
		document.getElementById("divLE").style.display = "none";
		document.getElementById("divRC").style.display = "none";
		document.getElementById("divRCS").style.display = "none";
		document.getElementById("divBen").style.display = "none";
		document.getElementById("divOLD").style.display = "none";
		document.getElementById("divPrefacio").style.display = "none";
		document.getElementById("divPE_I").style.display = "none";
		document.getElementById("divPE_II").style.display = "none";
		document.getElementById("divPE_III").style.display = "none";
		document.getElementById("divPE_IV").style.display = "none";
		document.getElementById("divPE_VA").style.display = "none";
		document.getElementById("divPE_VB").style.display = "none";
		document.getElementById("divPE_VC").style.display = "none";
		document.getElementById("divPE_VD").style.display = "none";
		document.getElementById("divPE_SRI").style.display = "none";
		document.getElementById("divPE_SRII").style.display = "block";
		document.getElementById("divPE_NI").style.display = "none";
		document.getElementById("divPE_NII").style.display = "none";
		document.getElementById("divComunes").style.display = "none";}

function viewPE_NI(){
		document.getElementById("divIntro").style.display = "none";
		document.getElementById("divRI").style.display = "none";
		document.getElementById("divCredo").style.display = "none";
		document.getElementById("divLE").style.display = "none";
		document.getElementById("divRC").style.display = "none";
		document.getElementById("divRCS").style.display = "none";
		document.getElementById("divBen").style.display = "none";
		document.getElementById("divOLD").style.display = "none";
		document.getElementById("divPrefacio").style.display = "none";
		document.getElementById("divPE_I").style.display = "none";
		document.getElementById("divPE_II").style.display = "none";
		document.getElementById("divPE_III").style.display = "none";
		document.getElementById("divPE_IV").style.display = "none";
		document.getElementById("divPE_VA").style.display = "none";
		document.getElementById("divPE_VB").style.display = "none";
		document.getElementById("divPE_VC").style.display = "none";
		document.getElementById("divPE_VD").style.display = "none";
		document.getElementById("divPE_SRI").style.display = "none";
		document.getElementById("divPE_SRII").style.display = "none";
		document.getElementById("divPE_NI").style.display = "block";
		document.getElementById("divPE_NII").style.display = "none";
		document.getElementById("divComunes").style.display = "none";}

function viewPE_NII(){
		document.getElementById("divIntro").style.display = "none";
		document.getElementById("divRI").style.display = "none";
		document.getElementById("divCredo").style.display = "none";
		document.getElementById("divLE").style.display = "none";
		document.getElementById("divRC").style.display = "none";
		document.getElementById("divRCS").style.display = "none";
		document.getElementById("divBen").style.display = "none";
		document.getElementById("divOLD").style.display = "none";
		document.getElementById("divPrefacio").style.display = "none";
		document.getElementById("divPE_I").style.display = "none";
		document.getElementById("divPE_II").style.display = "none";
		document.getElementById("divPE_III").style.display = "none";
		document.getElementById("divPE_IV").style.display = "none";
		document.getElementById("divPE_VA").style.display = "none";
		document.getElementById("divPE_VB").style.display = "none";
		document.getElementById("divPE_VC").style.display = "none";
		document.getElementById("divPE_VD").style.display = "none";
		document.getElementById("divPE_SRI").style.display = "none";
		document.getElementById("divPE_SRII").style.display = "none";
		document.getElementById("divPE_NI").style.display = "none";
		document.getElementById("divPE_NII").style.display = "block";
		document.getElementById("divComunes").style.display = "none";}

function viewComunes(){
	//document.getElementById("divIntro").style.display = "none";
	document.getElementById("divRI").style.display = "none";
	document.getElementById("divPrefacio").style.display = "none";
	document.getElementById("divPE").style.display = "none";
	document.getElementById("divComunes").style.display = "block";}

//Funciones llamadas en oficiosLecturas.php en la lista desordenada
function viewOficiosLecturas(){
	document.getElementById("headerC").style.display = "none";
	document.getElementById("divOficiosLecturas").style.display = "block";
	document.getElementById("divLaudes").style.display = "none";
	document.getElementById("divHIT").style.display = "none";
	document.getElementById("divHIS").style.display = "none";
	document.getElementById("divHIN").style.display = "none";
	document.getElementById("divVisperas").style.display = "none";
	document.getElementById("divCompletas").style.display = "none";
}

function viewLaudes(){
	document.getElementById("headerC").style.display = "none";
	document.getElementById("divOficiosLecturas").style.display = "none";
	document.getElementById("divLaudes").style.display = "block";
	document.getElementById("divHIT").style.display = "none";
	document.getElementById("divHIS").style.display = "none";
	document.getElementById("divHIN").style.display = "none";
	document.getElementById("divVisperas").style.display = "none";
	document.getElementById("divCompletas").style.display = "none";
}

function viewHoraIntermediaTercia(){
	document.getElementById("headerC").style.display = "none";
	document.getElementById("divOficiosLecturas").style.display = "none";
	document.getElementById("divLaudes").style.display = "none";
	document.getElementById("divHIT").style.display = "block";
	document.getElementById("divHIS").style.display = "none";
	document.getElementById("divHIN").style.display = "none";
	document.getElementById("divVisperas").style.display = "none";
	document.getElementById("divCompletas").style.display = "none";
}

function viewHoraIntermediaSexta(){
	document.getElementById("headerC").style.display = "none";
	document.getElementById("divOficiosLecturas").style.display = "none";
	document.getElementById("divLaudes").style.display = "none";
	document.getElementById("divHIT").style.display = "none";
	document.getElementById("divHIS").style.display = "block";
	document.getElementById("divHIN").style.display = "none";
	document.getElementById("divVisperas").style.display = "none";
	document.getElementById("divCompletas").style.display = "none";
}

function viewHoraIntermediaNona(){
	document.getElementById("headerC").style.display = "none";
	document.getElementById("divOficiosLecturas").style.display = "none";
	document.getElementById("divLaudes").style.display = "none";
	document.getElementById("divHIT").style.display = "none";
	document.getElementById("divHIS").style.display = "none";
	document.getElementById("divHIN").style.display = "block";
	document.getElementById("divVisperas").style.display = "none";
	document.getElementById("divCompletas").style.display = "none";
}

function viewVisperas(){
	document.getElementById("headerC").style.display = "none";
	document.getElementById("divOficiosLecturas").style.display = "none";
	document.getElementById("divLaudes").style.display = "none";
	document.getElementById("divHIT").style.display = "none";
	document.getElementById("divHIS").style.display = "none";
	document.getElementById("divHIN").style.display = "none";
	document.getElementById("divVisperas").style.display = "block";
	document.getElementById("divCompletas").style.display = "none";
}

function viewCompletas(){
	document.getElementById("headerC").style.display = "none";
	document.getElementById("divOficiosLecturas").style.display = "none";
	document.getElementById("divLaudes").style.display = "none";
	document.getElementById("divHIT").style.display = "none";
	document.getElementById("divHIS").style.display = "none";
	document.getElementById("divHIN").style.display = "none";
	document.getElementById("divVisperas").style.display = "none";
	document.getElementById("divCompletas").style.display = "block";
}



/*function enabledButton(){
	switch(document.forms[0].brevaryDB.selectedIndex){
		case 3:
				document.getElementById("HI").style.display = "block";
				document.getElementById("ODM").style.display = "none";
				document.getElementById("Pre").style.display = "none";
				document.getElementById("PE").style.display = "none";
				document.getElementById("Co").style.display = "none";
				document.getElementById("PPPCC").style.display = "none";
				document.getElementById("SPRPR").style.display = "none";
				document.getElementById("TP").style.display = "none";
				document.getElementById("AM").style.display = "none";
				document.getElementById("btn-enviar").disabled = false;
				document.getElementById("selectCD").disabled = false;
				document.getElementById("selectCM").disabled = false;
				break;
		case 6:
				document.getElementById("HI").style.display = "none";
				document.getElementById("ODM").style.display = "block";
				document.getElementById("Pre").style.display = "none";
				document.getElementById("PE").style.display = "none";
				document.getElementById("Co").style.display = "none";
				document.getElementById("PPPCC").style.display = "none";
				document.getElementById("SPRPR").style.display = "none";
				document.getElementById("TP").style.display = "none";
				document.getElementById("AM").style.display = "none";
				document.getElementById("btn-enviar").disabled = false;
				document.getElementById("selectCD").disabled = false;
				document.getElementById("selectCM").disabled = false;
				break;

		case 8:
				document.getElementById("HI").style.display = "none";
				document.getElementById("ODM").style.display = "none";
				document.getElementById("Pre").style.display = "block";
				document.getElementById("PE").style.display = "none";
				document.getElementById("Co").style.display = "none";
				document.getElementById("PPPCC").style.display = "none";
				document.getElementById("SPRPR").style.display = "none";
				document.getElementById("TP").style.display = "none";
				document.getElementById("AM").style.display = "none";
				document.getElementById("btn-enviar").disabled = false;
				document.getElementById("selectCD").disabled = false;
				document.getElementById("selectCM").disabled = false;
				break;
		case 9:
				document.getElementById("HI").style.display = "none";
				document.getElementById("ODM").style.display = "none";
				document.getElementById("Pre").style.display = "none";
				document.getElementById("PE").style.display = "block";
				document.getElementById("Co").style.display = "none";
				document.getElementById("PPPCC").style.display = "none";
				document.getElementById("SPRPR").style.display = "none";
				document.getElementById("TP").style.display = "none";
				document.getElementById("AM").style.display = "none";
				document.getElementById("btn-enviar").disabled = false;
				document.getElementById("selectCD").disabled = false;
				document.getElementById("selectCM").disabled = false;
				break;
		case 10:
				document.getElementById("HI").style.display = "none";
				document.getElementById("ODM").style.display = "none";
				document.getElementById("Pre").style.display = "none";
				document.getElementById("PE").style.display = "none";
				document.getElementById("Co").style.display = "block";
				document.getElementById("PPPCC").style.display = "none";
				document.getElementById("SPRPR").style.display = "none";
				document.getElementById("TP").style.display = "none";
				document.getElementById("AM").style.display = "none";
				document.getElementById("btn-enviar").disabled = false;
				document.getElementById("selectCD").disabled = false;
				document.getElementById("selectCM").disabled = false;
				break;
		case 11:
				document.getElementById("HI").style.display = "none";
				document.getElementById("ODM").style.display = "none";
				document.getElementById("Pre").style.display = "none";
				document.getElementById("PE").style.display = "none";
				document.getElementById("Co").style.display = "none";
				document.getElementById("PPPCC").style.display = "block";
				document.getElementById("SPRPR").style.display = "none";
				document.getElementById("TP").style.display = "none";
				document.getElementById("AM").style.display = "none";
				document.getElementById("btn-enviar").disabled = false;
				document.getElementById("selectCD").disabled = false;
				document.getElementById("selectCM").disabled = false;
				break;
		case 12:
				document.getElementById("HI").style.display = "none";
				document.getElementById("ODM").style.display = "none";
				document.getElementById("Pre").style.display = "none";
				document.getElementById("PE").style.display = "none";
				document.getElementById("Co").style.display = "none";
				document.getElementById("PPPCC").style.display = "none";
				document.getElementById("SPRPR").style.display = "block";
				document.getElementById("TP").style.display = "none";
				document.getElementById("AM").style.display = "none";
				document.getElementById("btn-enviar").disabled = false;
				document.getElementById("selectCD").disabled = false;
				document.getElementById("selectCM").disabled = false;
				break;
		case 13:
				document.getElementById("HI").style.display = "none";
				document.getElementById("ODM").style.display = "none";
				document.getElementById("Pre").style.display = "none";
				document.getElementById("PE").style.display = "none";
				document.getElementById("Co").style.display = "none";
				document.getElementById("PPPCC").style.display = "none";
				document.getElementById("SPRPR").style.display = "none";
				document.getElementById("TP").style.display = "block";
				document.getElementById("AM").style.display = "none";
				document.getElementById("btn-enviar").disabled = false;
				document.getElementById("selectCD").disabled = false;
				document.getElementById("selectCM").disabled = false;
				break;
		case 14:
				document.getElementById("HI").style.display = "none";
				document.getElementById("ODM").style.display = "none";
				document.getElementById("Pre").style.display = "none";
				document.getElementById("PE").style.display = "none";
				document.getElementById("Co").style.display = "none";
				document.getElementById("PPPCC").style.display = "none";
				document.getElementById("SPRPR").style.display = "none";
				document.getElementById("TP").style.display = "none";
				document.getElementById("AM").style.display = "block";
				document.getElementById("btn-enviar").disabled = false;
				document.getElementById("selectCD").disabled = false;
				document.getElementById("selectCM").disabled = false;
				break;						
		default:
				document.getElementById("HI").style.display = "none";
				document.getElementById("ODM").style.display = "none";
				document.getElementById("Pre").style.display = "none";
				document.getElementById("PE").style.display = "none";
				document.getElementById("Co").style.display = "none";
				document.getElementById("PPPCC").style.display = "none";
				document.getElementById("SPRPR").style.display = "none";
				document.getElementById("TP").style.display = "none";
				document.getElementById("AM").style.display = "none";
				document.getElementById("btn-enviar").disabled = false;
				document.getElementById("selectCD").disabled = false;
				document.getElementById("selectCM").disabled = false;
	}
}*/

function activatedDataPicker(){	
	if(document.forms[0].brevaryDB.selectedIndex > 0){
		document.getElementById("dateL").disabled = false;}
		switch(document.forms[0].brevaryDB.selectedIndex){
			case 1:
					document.getElementById("HI").style.display = "none";
					document.getElementById("ODM").style.display = "none";
					document.getElementById("Pre").style.display = "none";
					document.getElementById("PE").style.display = "none";
					document.getElementById("Co").style.display = "none";
					document.getElementById("PPPCC").style.display = "none";
					document.getElementById("SPRPR").style.display = "none";
					document.getElementById("TP").style.display = "none";
					document.getElementById("AM").style.display = "none";
			break;
			case 2:
					document.getElementById("HI").style.display = "none";
					document.getElementById("ODM").style.display = "none";
					document.getElementById("Pre").style.display = "none";
					document.getElementById("PE").style.display = "none";
					document.getElementById("Co").style.display = "none";
					document.getElementById("PPPCC").style.display = "none";
					document.getElementById("SPRPR").style.display = "none";
					document.getElementById("TP").style.display = "none";
					document.getElementById("AM").style.display = "none";
			break;
			case 3:
					document.getElementById("HI").style.display = "block";
					document.getElementById("ODM").style.display = "none";
					document.getElementById("Pre").style.display = "none";
					document.getElementById("PE").style.display = "none";
					document.getElementById("Co").style.display = "none";
					document.getElementById("PPPCC").style.display = "none";
					document.getElementById("SPRPR").style.display = "none";
					document.getElementById("TP").style.display = "none";
					document.getElementById("AM").style.display = "none";
			break;
			case 4:
					document.getElementById("HI").style.display = "none";
					document.getElementById("ODM").style.display = "none";
					document.getElementById("Pre").style.display = "none";
					document.getElementById("PE").style.display = "none";
					document.getElementById("Co").style.display = "none";
					document.getElementById("PPPCC").style.display = "none";
					document.getElementById("SPRPR").style.display = "none";
					document.getElementById("TP").style.display = "none";
					document.getElementById("AM").style.display = "none";
			break;
			case 5:
					document.getElementById("HI").style.display = "none";
					document.getElementById("ODM").style.display = "none";
					document.getElementById("Pre").style.display = "none";
					document.getElementById("PE").style.display = "none";
					document.getElementById("Co").style.display = "none";
					document.getElementById("PPPCC").style.display = "none";
					document.getElementById("SPRPR").style.display = "none";
					document.getElementById("TP").style.display = "none";
					document.getElementById("AM").style.display = "none";
			break;
			case 6:
					document.getElementById("HI").style.display = "none";
					document.getElementById("ODM").style.display = "block";
					document.getElementById("Pre").style.display = "none";
					document.getElementById("PE").style.display = "none";
					document.getElementById("Co").style.display = "none";
					document.getElementById("PPPCC").style.display = "none";
					document.getElementById("SPRPR").style.display = "none";
					document.getElementById("TP").style.display = "none";
					document.getElementById("AM").style.display = "none";
					
			break;
			case 7:
					document.getElementById("HI").style.display = "none";
					document.getElementById("ODM").style.display = "none";
					document.getElementById("Pre").style.display = "none";
					document.getElementById("PE").style.display = "none";
					document.getElementById("Co").style.display = "none";
					document.getElementById("PPPCC").style.display = "none";
					document.getElementById("SPRPR").style.display = "none";
					document.getElementById("TP").style.display = "none";
					document.getElementById("AM").style.display = "none";
			break;			
			case 8:
					document.getElementById("HI").style.display = "none";
					document.getElementById("ODM").style.display = "none";
					document.getElementById("Pre").style.display = "block";
					document.getElementById("PE").style.display = "none";
					document.getElementById("Co").style.display = "none";
					document.getElementById("PPPCC").style.display = "none";
					document.getElementById("SPRPR").style.display = "none";
					document.getElementById("TP").style.display = "none";
					document.getElementById("AM").style.display = "none";
			break;
			case 9:
					document.getElementById("HI").style.display = "none";
					document.getElementById("ODM").style.display = "none";
					document.getElementById("Pre").style.display = "none";
					document.getElementById("PE").style.display = "block";
					document.getElementById("Co").style.display = "none";
					document.getElementById("PPPCC").style.display = "none";
					document.getElementById("SPRPR").style.display = "none";
					document.getElementById("TP").style.display = "none";
					document.getElementById("AM").style.display = "none";
			break;
			case 10:
					document.getElementById("HI").style.display = "none";
					document.getElementById("ODM").style.display = "none";
					document.getElementById("Pre").style.display = "none";
					document.getElementById("PE").style.display = "none";
					document.getElementById("Co").style.display = "block";
					document.getElementById("PPPCC").style.display = "none";
					document.getElementById("SPRPR").style.display = "none";
					document.getElementById("TP").style.display = "none";
			break;
			case 11:
					document.getElementById("HI").style.display = "none";
					document.getElementById("ODM").style.display = "none";
					document.getElementById("Pre").style.display = "none";
					document.getElementById("PE").style.display = "none";
					document.getElementById("Co").style.display = "none";
					document.getElementById("PPPCC").style.display = "block";
					document.getElementById("SPRPR").style.display = "none";
					document.getElementById("TP").style.display = "none";
					document.getElementById("AM").style.display = "none";
			break;
			case 12:
					document.getElementById("HI").style.display = "none";
					document.getElementById("ODM").style.display = "none";
					document.getElementById("Pre").style.display = "none";
					document.getElementById("PE").style.display = "none";
					document.getElementById("Co").style.display = "none";
					document.getElementById("PPPCC").style.display = "none";
					document.getElementById("SPRPR").style.display = "block";
					document.getElementById("TP").style.display = "none";
					document.getElementById("AM").style.display = "none";
			break;
			case 13:
					document.getElementById("HI").style.display = "none";
					document.getElementById("ODM").style.display = "none";
					document.getElementById("Pre").style.display = "none";
					document.getElementById("PE").style.display = "none";
					document.getElementById("Co").style.display = "none";
					document.getElementById("PPPCC").style.display = "none";
					document.getElementById("SPRPR").style.display = "none";
					document.getElementById("TP").style.display = "block";
					document.getElementById("AM").style.display = "none";
			break;
			case 14:
					document.getElementById("HI").style.display = "none";
					document.getElementById("ODM").style.display = "none";
					document.getElementById("Pre").style.display = "none";
					document.getElementById("PE").style.display = "none";
					document.getElementById("Co").style.display = "none";
					document.getElementById("PPPCC").style.display = "none";
					document.getElementById("SPRPR").style.display = "none";
					document.getElementById("TP").style.display = "none";
					document.getElementById("AM").style.display = "block";
			break;						
			default:
					document.getElementById("HI").style.display = "none";
					document.getElementById("ODM").style.display = "none";
					document.getElementById("Pre").style.display = "none";
					document.getElementById("PE").style.display = "none";
					document.getElementById("Co").style.display = "none";
					document.getElementById("PPPCC").style.display = "none";
					document.getElementById("SPRPR").style.display = "none";
					document.getElementById("TP").style.display = "none";
					document.getElementById("AM").style.display = "none";
		}

	}
function activatedButtons(){
	if(document.getElementById("dateL").value != ""){
		document.getElementById("btnEnviar").disabled = false;
		document.getElementById("btnBuscar").disabled = false;}
}

