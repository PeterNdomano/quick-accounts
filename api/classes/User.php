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
    if(isset($_SESSION['qaUserId'])){

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
