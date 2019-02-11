<?php
    $oid = isset($_GET["oid"])? $_GET["oid"]: null;
    $uid = isset($_GET["uid"])? $_GET["uid"]: null;
    $qty = isset($_GET["qty"])? $_GET["qty"]: null;
    $del = isset($_GET["del"])? $_GET["del"]: null;
    $Alldel = isset($_GET["Alldel"])? $_GET["Alldel"]: null;
	header("content-type:text/html;charset=utf-8");
    include 'connect.php';
    if($Alldel){
        $res = $conn -> query('DELETE FROM orderlist where uid='.$uid.';');
        echo '1';
    }else{
        if($del){
            $res = $conn -> query('DELETE FROM orderlist where oid='.$oid.';');
            echo '1';
        }else{
            $res = $conn -> query('update orderlist set qty='.$qty.' where oid='.$oid.';');
            echo '1';
        }
    }
   
     $conn->close();
?>