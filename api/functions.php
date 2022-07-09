<?php

require_once dirname(__FILE__).'/conn.php';

function startSession() {
  if(session_status() !== PHP_SESSION_ACTIVE) {
    session_start();
  }
}

function isPostFieldValid($key){
  if(isset($_POST[$key])){
    if(!empty(trim(htmlspecialchars($_POST[$key])))){
      return true;
    }
  }

  return false;
}

function isGetFieldValid($key){
  if(isset($_GET[$key])){
    if(!empty(trim(htmlspecialchars($_GET[$key])))){
      return true;
    }
  }

  return false;
}


function loadClass($class){
  $path = dirname(__FILE__).'/classes/';
  $file = $path.$class.'.php';

  if(file_exists($file)){
    require_once $file;
  }
  else {
    echo 'No such file';
  }
}
spl_autoload_register('loadClass');

function getUserData($id) {
  global $conn;
  $sql = $conn->prepare("SELECT * FROM users WHERE id = ?");
  $sql->bind_param('s', $id);
  $sql->execute();
  $result = $sql->get_result();
  if(mysqli_num_rows($result) === 1) {
    $row = mysqli_fetch_assoc($result);
    return $row;
  }
  else {
    return null;
  }
}


function getUserDataByName($id) {
  global $conn;
  $sql = $conn->prepare("SELECT * FROM users WHERE username = ?");
  $sql->bind_param('s', $id);
  $sql->execute();
  $result = $sql->get_result();
  if(mysqli_num_rows($result) === 1) {
    $row = mysqli_fetch_assoc($result);
    return $row;
  }
  else {
    return null;
  }
}

?>
