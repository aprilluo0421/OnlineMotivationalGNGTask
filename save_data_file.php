<?php
// the $_REQUEST[] array will contain the passed in filename and data
// the directory "data" is writable by the server (chmod 770)
$filename = "data/".$_REQUEST['filename'];
#var_dump($_REQUEST);
$data = $_REQUEST['filedata'];
// write the file to disk
file_put_contents($filename, $data.",\n", FILE_APPEND | LOCK_EX);
print("success");
?>

