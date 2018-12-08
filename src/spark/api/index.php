<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,POST,PUT,DELETE,HEAD,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

function error () {
  header('HTTP', true, 400);
}

$method = $_SERVER["REQUEST_METHOD"];
if ($method == "GET") {
  echo file_get_contents('./data.json');
} else if ($method == 'PUT') {
  $data = file_get_contents('php://input');
  if (json_decode($data) && file_put_contents('./data.json', $data)) {
    // Success
  } else {
    error();
  }
} else if ($method == 'OPTIONS') {
  // Preflight
} else {
  error();
}
