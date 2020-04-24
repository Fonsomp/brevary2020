<?php
//error_reporting(0);
//eader("Content-Type: text/html;charset=utf-8"); 
//mysql_query("SET NAMES 'utf8'");

//class ConexionDB extends mysqli{
class ConexionDB{
	
	private $con;
	private $host = "localhost";
	private $user = 'root';
	private $password = "";
	private $db = 'pruebabrevario';

	/*private $user = 'u842777312_rfonseca';
	private $password = 'Tpm?c$*b/a';
	private $db = 'u842777312_pruebabrevario';*/

	public function __construct(){
		/*parent:: __construct($this->host, $this->user, $this->password, $this->db);

		//Operador ternario para comprobar la conexion
		$this->connect_errno ? die('Error en la conexión'.mysqli_connect_errno()): $message = 'Conexión OK';

		echo $message;*/

		$this->con = new mysqli($this->host, $this->user, $this->password, $this->db);
		//$this->con->set_charset("utf8");
		if (mysqli_connect_errno()) {
            printf("Falló la conexión failed: %s\n", $this->con->connect_error);
    		exit();}
	}

	//funcion que busca y retorna el numero de regsitros encontrados
	public function buscar($sql){
		$result = $this->con->query($sql) or die($this->con->error);
		if($result){
			$row_cnt = $result->num_rows;
			return $row_cnt;
		}
	}

	//Funcion que retonar la consulta en un arreglo asociativo
	public function consulta($sql){
		//$result = mysqli_query($this->con,$sql);
		
		//return mysqli_fetch_all($result,MYSQLI_ASSOC);
		$result = $this->con->query($sql) or die($this->con->error);
		//Si la consulta es exitosa regresa un array asociativo
		if($result)
			return $result->fetch_array(MYSQLI_BOTH);	
        return false;
	}

	//Funcion que inserta y modifica datos en la DB
	public function insertar($sql){
		$result = $this->con->query($sql) or die($this->con->error);
	}

	/*public function consul_noti($sql){
		$result = $this->con->query($sql) or die($this->con->error);
		//Si la consulta es exitosa regresa un array asociativo
		if($result)
			return $result->fetch_all(MYSQLI_ASSOC);	
        return false;
	}*/

	public function cerrar() {
		$this->con->close();
		//return print("Se cerro correctamente la consulta");
	}


	/*public function contar_filas($sql){
		$result = $this->con->query($sql) or die($this->con->error);
		if($result){
			$row_cnt = $result->num_rows;
			if($row_cnt == 1){
				//return printf("Resultado set has %d rows.\n", $row_cnt);
				return print("<script>alert('Registro Encontrado');</script>");}
			return print("<script>
			alert('Registro Vacio!');
			window.location='controlPanel.php';
			</script>");
		}
	}*/

	

	

	
}
?>
