<?php

require_once "connection.php";
$connection = DBConnection();

function RegisterLead($connection, $name, $email, $ip, $resposta){

    checkEmail($connection, $email);

  try {

    $sql  = "INSERT INTO Leads(Name, Email, IP, RegTime, Resposta)VALUES(:name, :email, :ip, NOW(), :resposta);";
    $stmt = $connection->prepare($sql);
      $stmt->bindParam(':name', $name);
      $stmt->bindParam(':email', $email);
      $stmt->bindParam(':ip', $ip);
      $stmt->bindParam(':resposta', $resposta);

        if($stmt->execute()){
            $msgReturn = array("type" => "true", "message"=> "Cadastro efetuado com sucesso.");
        }else{
            $msgReturn = array("type" => "false", "message"=> "Não foi possível efetuar o cadastro.");
        }

        echo json_encode($msgReturn);

  } catch (PDOException $e) {
      echo $e->getMessage();
  }

}

function checkEmail($connection, $email){
  try {
    $sql  = "SELECT Email FROM Leads WHERE Email = :email;";
    $stmt = $connection->prepare($sql);
    $stmt->bindParam(':email', $email);
    $stmt->execute();

    if($stmt->rowCount() > 0){
        $msgReturn = array("type" => "false", "message"=> "Email já cadastrado.");
        die(json_encode($msgReturn));
      }

  } catch (PDOException $e) {
      echo $e->getMessage();
  }
}

$name = $_POST['name'];
$email = $_POST['email'];
$resposta = $_POST['resposta'];
$ip = $_SERVER["REMOTE_ADDR"];

RegisterLead($connection, $name, $email, $ip, $resposta);

?>
