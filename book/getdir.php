<?php
	header("content-type:text/html;charset=utf-8"); 
	$path="./toupiao";
	$dir=scandir($path);
	foreach($dir as $i=>$name){
		if(is_dir('./toupiao/'.$name)){
			unset($dir[$i]);
		}
	}
	foreach($dir as $i=>$name){	
		echo "<option value='".$name."'>".$name."</option>";
	}
?>
