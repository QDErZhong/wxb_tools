<?php
	header("content-type:text/html;charset=utf-8"); 
	$path="./toupiao";
	$dir=scandir($path);
	foreach($dir as $i=>$name){
		if(is_dir('./toupiao/'.$name)){
			unset($dir[$i]);
		}
	}
	echo $_GET['c1'];
	foreach($dir as $i=>$name){	
		$xml=simplexml_load_file("./toupiao/".$name);
		if($xml->xpath('/poll/status')[0]=='待审'&&$_GET['c1']=='1'){
			echo "<option value='".$name."'>".$name."</option>";
		}
		if($xml->xpath('/poll/status')[0]=='驳回'&&$_GET['c2']=='1'){
			echo "<option value='".$name."'>".$name."</option>";
		}
		if($xml->xpath('/poll/status')[0]=='通过'&&$_GET['c3']=='1'){
			echo "<option value='".$name."'>".$name."</option>";
		}	
		if($xml->xpath('/poll/status')[0]=='reviewing'&&$_GET['c1']=='1'){
			echo "<option value='".$name."'>".$name."</option>";
		}	
	}
?>
