<?php
	/*$file=$_GET["file"];
	if($file==''){
		echo "<tr><th>文件不存在</th></tr>";
		exit();
	}
	$xml=simplexml_load_file("./files/".$file);
	echo "<tr><th>班级</th><td>".$xml->xpath("/poll/grade")[0].$xml->xpath("/poll/class")[0]."</td></tr>";
	echo "<tr><th>发起人</th><td>".$xml->xpath("/poll/person")[0]."</td></tr>";
        echo "<tr><th>审核状态</th><td>".$xml->xpath("/poll/status")[0]."</td></tr>";
	echo "<tr><th>内容</th><td>".$xml->xpath("/poll/content")[0]."</td></tr>";
	*/$path="./files/";
	$dir=scandir($path);
	foreach($dir as $i=>$name){
		if(is_dir('./files/'.$name)){
			unset($dir[$i]);
		}
	}
	foreach($dir as $i=>$name){
		//echo $name;	
		$xml=simplexml_load_file("./files/".$name);
		//echo $name;
		if($xml->xpath('/poll/status')[0]=='待审'&&$_GET['c1']=='1'){
			printinf($xml, $name);
		}
		if($xml->xpath('/poll/status')[0]=='已审'&&$_GET['c2']=='1'){
			printinf($xml, $name);
		}
	}
function printinf($xml, $name) {
	echo "<tr><td>".$xml->xpath("/poll/time")[0]."</td>";	
	echo "<td>".$xml->xpath("/poll/grade")[0].$xml->xpath("/poll/class")[0]."</td>";
	echo "<td>".$xml->xpath("/poll/person")[0]."</td>";
	$status = $xml->xpath("/poll/status")[0];
        echo "<td>".$status."</td></tr>";
	if($status == "待审") {
		$todo = "已阅";
	} else {
		$todo = "撤销";
	}
	echo "<tr class='content'><td colspan='3'>".$xml->xpath("/poll/content")[0]."&nbsp;</td><td style='width:60px;'><button onclick=\"pass('".$name."')\">".$todo."</button></td></tr>";
	
}
?>
