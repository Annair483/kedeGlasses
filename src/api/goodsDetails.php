<?php
    $gid = isset($_GET['gid'])?$_GET['gid']:null;
    $fromName  = isset($_GET['fromName'])?$_GET['fromName']:null;
    header("content-type:text/html;charset=utf-8");
	include 'connect.php';
    $res = $conn -> query('select * from '.$fromName.' where gid='.$gid);
    $godsDeta = $res->fetch_assoc();
    echo   json_encode($godsDeta);
    $res -> close();
    $conn -> close();
?>