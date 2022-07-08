<?php

require_once dirname(__FILE__).'/conn.php';

function startSession() {
  if(session_status() !== PHP_SESSION_ACTIVE) {
    session_start();
  }
}

function getUserData($id) {
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

?>
