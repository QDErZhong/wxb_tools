<?php
	$file=$_GET["file"];
	if($file==''){
		echo "<tr><th>文件不存在</th></tr>";
		exit();
	}
	$xml=simplexml_load_file("./files/".$file);
	echo "<tr><th>班级</th><td>".$xml->xpath("/poll/grade")[0].$xml->xpath("/poll/class")[0]."</td></tr>";
	echo "<tr><th>发起人</th><td>".$xml->xpath("/poll/person")[0]."</td></tr>";
        echo "<tr><th>审核状态</th><td>".$xml->xpath("/poll/status")[0]."</td></tr>";
	echo "<tr><th>内容</th><td>".$xml->xpath("/poll/content")[0]."</td></tr>";
	
?>
