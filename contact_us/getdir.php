<?php
//	echo "2";
	//header("content-type:text/html;charset=utf-8"); 
	$path="./files/";
//	echo "1";
	$dir=scandir($path);
	//echo "3";
	foreach($dir as $i=>$name){
	//	echo $name;
		if(is_dir('./files/'.$name)){
			unset($dir[$i]);
		}
	}
	//echo $_GET['c1'];
	foreach($dir as $i=>$name){
		echo $name;	
		$xml=simplexml_load_file("./files/".$name);
		echo $name;
		if($xml->xpath('/poll/status')[0]=='待审'&&$_GET['c1']=='1'){
			echo "<option value='".$name."'>".$name."</option>";
		}
		if($xml->xpath('/poll/status')[0]=='已审'&&$_GET['c2']=='1'){
			echo "<option value='".$name."'>".$name."</option>";
		}
	}
?>
