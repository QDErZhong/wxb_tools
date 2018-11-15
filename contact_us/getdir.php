<?php
	header("content-type:text/html;charset=utf-8"); 
	$path="./files/";
	$dir=scandir($path);
	foreach($dir as $i=>$name){
		if(is_dir('./files/'.$name)){
			unset($dir[$i]);
		}
	}
	echo $_GET['c1'];
	foreach($dir as $i=>$name){	
		$xml=simplexml_load_file("./files/".$name);
		if($xml->xpath('/poll/status')[0]=='待审'&&$_GET['c1']=='1'){
			echo "<option value='".$name."'>".$name."</option>";
		}
		if($xml->xpath('/poll/status')[0]=='已审'&&$_GET['c2']=='1'){
			echo "<option value='".$name."'>".$name."</option>";
		}
	}
?>
