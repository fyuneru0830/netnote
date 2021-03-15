<?php
header('Access-Control-Allow-Origin: *');
$mysqli = new mysqli( 'localhost', 'root', 'Zheshi31ma', 'note');

if( $mysqli->connect_errno ) {
        echo $mysqli->connect_errno . ' : ' . $mysqli->connect_error;
}

$mysqli->set_charset('utf8');

$sql = "
INSERT INTO data (did,dvalue) 
VALUES ('".$_POST['id']."','') 
ON DUPLICATE KEY UPDATE 
dvalue = '".$_POST['value']."';
";
$res = $mysqli->query($sql);

if( $res ) {
       // var_dump($res->fetch_all());
}
$mysqli->close();

