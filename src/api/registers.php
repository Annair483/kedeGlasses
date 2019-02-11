<?php
    $uname = isset($_POST["uname"])?$_POST["uname"]:null;
    $upw = isset($_POST["upw"])?$_POST["upw"]:null;
    // $email = isset($_GET["email"])?$_GET["email"]:null;
	header("content-type:text/html;charset=utf-8");
	include 'connect.php';
    $conn -> query('insert into sign (uname,upw) values ("'.$uname.'","'.$upw.'")');
    $conn->close();
    echo "1";
?>