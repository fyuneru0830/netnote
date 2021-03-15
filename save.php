<?php
header('Access-Control-Allow-Origin: *');
$mysqli = new mysqli( 'localhost', 'root', 'Zheshi31ma', 'note');

if( $mysqli->connect_errno ) {
        echo $mysqli->connect_errno . ' : ' . $mysqli->connect_error;
}

$mysqli->set_charset('utf8');

$sql = "UPDATE data SET dvalue = '".$_GET['value']."' WHERE did= 1;";
$res = $mysqli->query($sql);

if( $res ) {
       // var_dump($res->fetch_all());
}
$mysqli->close();

