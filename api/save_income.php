<?php

require_once dirname(__FILE__).'/conn.php';
require_once dirname(__FILE__).'/functions.php';

if($_SERVER['REQUEST_METHOD'] == 'POST') {
  $ffo = User::isLoggedIn();
  if($ffo['status'] === 1) {
    $user = new User(htmlspecialchars($_SESSION['qaUserId']));
    
  }
  else {
    echo json_encode(array(
      "status" => 0,
      "msg" => 'Invalid request',
    ));
  }
}


?>
