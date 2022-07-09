<?php

require_once dirname(__FILE__).'/conn.php';
require_once dirname(__FILE__).'/functions.php';

if($_SERVER['REQUEST_METHOD'] == 'POST') {
  $ffo = User::isLoggedIn();
  echo json_encode($ffo);
}


?>
