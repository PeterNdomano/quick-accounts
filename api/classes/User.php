<?php

require_once dirname(__FILE__).'/../conn.php';
require_once dirname(__FILE__).'/../function.php';

class User {
  public $id;
  function __construct($id) {
    $this->id = $id;
  }

  public static function isLoggedIn(){
    $ffo = array(
      'status' => 0,
      'msg' => 'Unknown error',
    );

    startSession();
    if(isset($_SESSION['qaUserId'])) {
      $userId = htmlspecialchars($_SESSION['qaUserId']);
      $userData = getUserData($userId);
      if(isset($userData['token'])) {
        if($userData['token'] === $_SESSION['qaUserToken']) {
          $ffo = array(
            'status' => 1,
            'msg' => 'Welcome Back',
          );
        }
        else {
          $ffo = array(
            'status' => 0,
            'msg' => 'Login please',
          );
        }
      }
      else {
        $ffo = array(
          'status' => 0,
          'msg' => 'Login please',
        );
      }
    }
    else{
      $ffo = array(
        'status' => 0,
        'msg' => 'Login please',
      );
    }
    return $ffo;
  }
}

?>
