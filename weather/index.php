<?php
    $json=file_get_contents("./weather.txt");
    $weather=json_decode($json);
    $daystr=array('(今天)','(明天)','(后天)');
    echo '<div><span>空气质量：</span>';
    echo '<span>'.$weather->data[0]->air.' '.$weather->data[0]->air_level.'</span></div><br />';
    for($i=0;$i<3;$i++){
        printwea($weather->data[$i],$i);
    }
    if($_GET['debug']=='1'){
    	var_dump($weather);
    }
    
    function printwea($data,$num){
        Global $daystr;
        echo '<img align="left" style="margin-right:15px" src="./tools/weather/image/'.$num.'.png" />';
        echo '<p style="margin-bottom:0px">'.$data->date.$daystr[$num].'</p>';
        echo '<p><span style="margin-right:20px">'.$data->wea.' '.$data->tem2.'~'.$data->tem1.'</span><span>'.$data->win[0].' '.$data->win_speed.'</span></p>';
        echo '<br />';
    }
?>