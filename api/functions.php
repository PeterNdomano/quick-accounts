<?php

require_once dirname(__FILE__).'/conn.php';

function startSession() {
  if(session_status() !== PHP_SESSION_ACTIVE) {
    session_start();
  }
}

function getUserData($id) {
  $sql = $conn->prepare("SELECT * FROM users WHERE id = ?");
  
}

?>
