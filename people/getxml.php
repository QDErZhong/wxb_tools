<?php
    //ini_set('error_reporting','E_ALL');
    $link_pattern = '<a .*?a>';
    $china=simplexml_load_file('politics.xml');
    $world=simplexml_load_file("world.xml");
    //var_dump($china);
    //var_dump($world);
    for($i=0;$i<100;$i++){
        $listchina[$i]=getnews($china,$i);
        $listworld[$i]=getnews($world,$i);
    }
    /*for($i=0;$i<count($listworld);$i++){
        $listworld[$i]=getnews($world,$i);
    }*/
    $loc=getlocation();
    if($_GET['method']=='table'){
        printtable($loc);
    }
    else if($_GET['method']=='show'){
        $page=$_GET['page']+1;
        echo preg_replace($link_pattern,'',$loc[$page][1]);
        echo '<button onclick="back()" style="font-size:10px">返回</button>';
    }

    function getlocation(){
        global $listchina,$listworld;
        if($_GET['type']=='china'){
            return $listchina;
        }
        else if($_GET['type']=='world'){
            return $listworld;
        }
    }
    function printtable($list){
        $page=$_GET['page'];
        $id=0;
        for($i=10*$page+1;$i<=10*$page+10;$i++){
            echo '<tr><td onclick="select('.$id.');" id="'.$id.'">'.$list[$i][0].'</td></tr>';
            if($i>=99) break;
              $id++;
   	 }
    }
    function getnews($xml,$i){
        $title=$xml->xpath("/rss/channel/item[".$i."]/title")[0];
        $content=$xml->xpath("/rss/channel/item[".$i."]/description")[0];
        return array($title,$content);
    }
    
?>
