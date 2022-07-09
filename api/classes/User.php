<?php

require_once dirname(__FILE__).'/../conn.php';
require_once dirname(__FILE__).'/../function.php';

class User {
  public $id;
  function __construct($id) {
    $this->id = $id;
  }

  public static function login($username, $password) {
    $userData = getUserDataByName($username);
    $ffo = array(
      'status' => 0,
      'msg' => 'Unknown error',
    );
    if(!is_null($userData)) {
      if(password_verify($password, $userData['password'])) {
        startSession();
        $_SESSION['qaUserId'] = $userData['id'];
        $_SESSION['qaUserToken'] = $userData['token'];
        $ffo = array(
          'status' => 1,
          'msg' => 'Welcome back',
        );
      }
      else {
        $ffo = array(
          'status' => 0,
          'msg' => 'Wrong details',
        );
      }
    }
    else {
      $ffo = array(
        'status' => 0,
        'msg' => 'Wrong details',
      );
    }
    return $ffo;
  }

  public static function register($username, $password, $role = 'accountant') {
    global $conn;
    $ffo = array(
      'status' => 0,
      'msg' => 'Unknown error',
    );
    $userData = getUserDataByName($username);
    if(is_null($userData)) {
      $hash = password_hash($password, PASSWORD_DEFAULT);
      $token = password_hash($username, PASSWORD_DEFAULT);
      $sql = $conn->prepare("INSERT INTO users (username, password, token, role) VALUES ?, ?, ?, ?");
      $sql->prepare('ssss', $username, $password, $token, $role);
      $sql->execute();
      $userData = getUserData($sql->insert_id);
      startSession();
      $_SESSION['qaUserId'] = $userData['id'];
      $_SESSION['qaUserToken'] = $userData['token'];
      $ffo = array(
        'status' => 1,
        'msg' => 'User registered',
      );
    }
    else {
      $ffo = array(
        'status' => 0,
        'msg' => 'Username already exists',
      );
    }

    return $ffo;
  }

  public static function checkRole() {
    $ffo = array(
      'status' => 0,
      'msg' => 'Unknown error',
    );
    $isLoggedIn = self::isLoggedIn();
    if($isLoggedIn['status'] === 1) {
      $userData = getUserData(htmlspecialchars($_SESSION['qaUserId']));
      $ffo = array(
        'status' => 1,
        'msg' => 'Unknown error',
        'data' => $userData['role'],
      );
    }
    else {
      $ffo = array(
        'status' => 0,
        'msg' => 'Login please',
      );
    }

    return $ffo;
  }

  public static function isLoggedIn() {
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
