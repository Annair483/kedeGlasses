<?php
    $uname = isset($_POST['uname'])?$_POST['uname']:null;
    $upw = isset($_POST['upw'])?$_POST['upw']:null;
    header("content-type:text/html;charset=utf-8");
	include 'connect.php';
    $res = $conn -> query('select uid from sign where uname="'.$uname.'" and upw="'.$upw.'"');
    if($res->num_rows > 0){
        $content = $res->fetch_all(MYSQLI_ASSOC);
        $encodeName = base64_encode($uname);
        $data = array(
            'token'=>$encodeName . "\n",
            'uid'=>$content[0]['uid'],
            'code'=>1
        );
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
        $res->close();
        $conn->close();
   }else{
       echo "0";
        $res->close();
        $conn->close();
   };
?>