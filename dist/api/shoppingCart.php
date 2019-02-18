<?php
    $uid = isset($_GET["uid"])? $_GET["uid"]: null;
    $gid = isset($_GET["gid"])? $_GET["gid"]: null;
    $qty = isset($_GET["qty"])? $_GET["qty"]: null;
    header("content-type:text/html;charset=utf-8");
    include 'connect.php';

    //  判断是否有传qty
    if($qty){
            //根据商品id查询获得需要的商品
        $getGods = $conn -> query("select * from goodslist where gid=".$gid);
        //获取查询商品的第一条数据
        $content = $getGods->fetch_assoc();
        $getGods->close();
        //查询获取订单表该用户购物车所有的商品信息
         $orderList = $conn -> query("select * from orderlist where gid=".$gid." and uid=".$uid);
        $orderRes = $orderList->fetch_assoc();
         //判断该用户是否
        if($orderList->num_rows >0){
            //存在则update
            $updateQty = $qty+$orderRes['qty'];
            $conn -> query('update orderlist set qty="'.$updateQty.'" where gid='.$gid.' and uid='.$uid.';');
            $orderList->close();
        }else{
            //不存在就插入
            //把用户id  商品数量qty  和商品相关信息增加到订单表 
            $conn -> query('insert into orderlist (uid,qty,godsName,gid,price,url) values ("'.$uid.'","'.$qty.'","'.$content['godsName'].'","'.$gid.'","'.$content['price'].'","'.$content['url'].'")');
        }
    }
  
    // 根据用户id 查询获取该用户所有的订单商品信息
    $getUserOrder = $conn -> query("select * from orderlist where uid=".$uid);
    //获取所有getUserOrder结果集
    $res = $getUserOrder->fetch_all(MYSQLI_ASSOC);
    $getUserOrder->close();
    $conn->close();
    echo json_encode($res);
?>