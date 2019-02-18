<?php
    header("content-type:text/html;charset=utf-8");
    include 'connect.php';
     $hot = $conn -> query('select * from indexGods where gid BETWEEN 1 AND 10');
     $oneF = $conn -> query('select * from indexGods where gid BETWEEN 11 AND 26');
     $twoF = $conn -> query('select * from indexGods where gid BETWEEN 27 AND 36');

     $hotCon = $hot->fetch_all(MYSQLI_ASSOC);
     $oneFCon = $oneF->fetch_all(MYSQLI_ASSOC);
     $twoFCon = $twoF->fetch_all(MYSQLI_ASSOC);

     $all = [$hotCon,$oneFCon,$twoFCon];
     echo json_encode($all);
     $hot->close();
     $oneF->close();
     $twoF->close();
?>