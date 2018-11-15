<?php
	$file=$_GET["file"];
	if($file==''){
		echo "<tr><th>文件不存在</th></tr>";
		exit();
	}
	$xml=simplexml_load_file("./toupiao/".$file);
	echo "<tr><th>投票名称</th><td>".$xml->xpath("/poll/name")[0]."</td></tr>";
	echo "<tr><th>班级</th><td>".$xml->xpath("/poll/grade")[0].$xml->xpath("/poll/class")[0]."</td></tr>";
	echo "<tr><th>发起人</th><td>".$xml->xpath("/poll/person")[0]."</td></tr>";
	echo "<tr><th>投票目的</th><td>".$xml->xpath("/poll/purpose")[0]."</td></tr>";
        echo "<tr><th>审核状态</th><td>".$xml->xpath("/poll/status")[0]."</td></tr>";
	echo "<tr><th>选项</th></tr>";
	for($i=1;$i<=$xml->xpath("/poll/length")[0];$i++){
		echo "<tr><th>".$i."</th><td>".$xml->xpath("/poll/choice/C".($i-1))[0]."</td></tr>";
	}
?>
