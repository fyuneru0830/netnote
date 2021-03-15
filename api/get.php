<?php
header('Access-Control-Allow-Origin: *');
$mysqli = new mysqli( 'localhost', 'root', 'Zheshi31ma', 'note');

if( $mysqli->connect_errno ) {
        echo $mysqli->connect_errno . ' : ' . $mysqli->connect_error;
}

$mysqli->set_charset('utf8');

$sql = "SELECT dvalue from data where did='".$_GET['id']."'";
$res = $mysqli->query($sql);

if( $res ) {
        //var_dump($res->fetch_all());
        echo $res->fetch_all()[0][0];
}
$mysqli->close();

