<?php
    $uname = isset($_GET["uname"])?$_GET["uname"]:null;
    $upw = isset($_GET["upw"])?$_GET["upw"]:null;
    // $email = isset($_GET["email"])?$_GET["email"]:null;
	header("content-type:text/html;charset=utf-8");
	include 'connect.php';
    $conn -> query('insert into sign (uname,upw) values ("'.$uname.'","'.$upw.'")');
    $conn->close();
    echo "1";
    // ,"'.$email.'"
?>