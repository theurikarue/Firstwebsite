<?php
$uploadDir = 'uploads/';
$uploadedFiles = $_FILES['files'];

foreach ($uploadedFiles['tmp_name'] as $key => $tmp_name) {
  $uploadFile = $uploadDir . basename($uploadedFiles['name'][$key]);
  move_uploaded_file($tmp_name, $uploadFile);
}
?>
