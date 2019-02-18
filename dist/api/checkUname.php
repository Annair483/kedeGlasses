<?php
    $uname = isset($_POST["uname"])?$_POST["uname"]:null;
    header("content-type:text/html;charset=utf-8");
	include 'connect.php';
    $res = $conn -> query('select uname from sign where uname="'.$uname.'"');
     if($res->num_rows > 0){
     	echo "0";
    	 $res->close();
    	 $conn->close();
    }else{
        echo "1";
         $res->close();
        $conn->close();
    }
?>