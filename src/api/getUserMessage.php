<?php
    $token = isset($_GET["token"])?$_GET["token"]:null;
    $uname = base64_decode($token);
    header("content-type:text/html;charset=utf-8");
	include 'connect.php';
    $res = $conn -> query('select uid,uname from sign where uname="'.$uname.'"');
     if($res->num_rows > 0){
        $content = $res->fetch_all(MYSQLI_ASSOC);
        array_push($content,['code'=>0]);
        echo json_encode($content,JSON_UNESCAPED_UNICODE);
    	 $res->close();
    	 $conn->close();
     	  
    }else{
        echo "1";
        $conn->close();
    }
?>