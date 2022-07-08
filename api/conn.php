<?php

$dbHost = 'localhost';
$dbUser = 'root';
$dbPwd = '';
$dbName = 'quick-accounts';

$conn = mysqli_connect(
  $dbHost,
  $dbUser,
  $dbPwd,
  $dbName
);

if(!$conn){
  die('Could not connect to the server');
}

?>
