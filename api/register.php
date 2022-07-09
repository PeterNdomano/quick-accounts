<?php

require_once dirname(__FILE__).'/conn.php';
require_once dirname(__FILE__).'/functions.php';

$ffo = User::register('ndomano', 'ohhmama@222', 'admin');
echo json_encode($ffo);

?>
