<html>
<head>
<meta http-equiv="Content-Type" content="text/html"; charset="UTF-8"> 
<meta http-equiv="X-UA-Compatible" content="IE=edge" /> 
<meta name="viewport" content="width=device-width, initial-scale=1" /> 
<link rel="stylesheet" type="text/css" media="screen" href="/tools/datatable.css" /> 
<script src="/tools/jquery.min.js"></script> 
<script src="/tools/datatable.js"></script> 
</head>
<body>
<table id="content" class="stripe" style="width:100%">
<?php
	$path="./toupiao";
	$dir=scandir($path);
	foreach($dir as $i=>$name){
		if(is_dir('./toupiao/'.$name)){
			unset($dir[$i]);
		}
	}
	echo "<thead><tr><th>时间</th><th>资源类型</th><th>班级</th><th>姓名</th><th>名称</th><th>作者</th><th>语种</th><th>译者</th><th>出版社</th><th>备注</th></tr></thead>";	
	echo "<tbody>";
	foreach($dir as $i=>$name){	
		read($name);
	}

function read($file){
	if($file==''){
		echo "<tr><th>文件不存在</th></tr>";
		exit();
	}
	$xml=simplexml_load_file("./toupiao/".$file);
	echo "<tr><td>".$xml->xpath("/poll/time")[0]." </td>";	
	echo "<td>".$xml->xpath("/poll/type")[0]." </td>";
	echo "<td>".$xml->xpath("/poll/grade")[0].$xml->xpath("/poll/class")[0]." </td>";
	echo "<td>".$xml->xpath("/poll/person")[0]." </td>";
	echo "<td>".$xml->xpath("/poll/name")[0]." </td>";
	echo "<td>".$xml->xpath("/poll/writer")[0]." </td>";
        echo "<td>".$xml->xpath("/poll/language")[0]." </td>";
        echo "<td>".$xml->xpath("/poll/interpreter")[0]." </td>";
        echo "<td>".$xml->xpath("/poll/publisher")[0]." </td>";
        echo "<td>".$xml->xpath("/poll/more")[0]." </td></tr>";
}
?>
</tbody>
</table>
<script>
    $(document).ready(function(){
        $('#content').DataTable();
    });
</script>
</body>
</html>

