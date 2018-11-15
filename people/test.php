<?php
/*$f = file_get_contents('politics.xml');
echo $f;
$a = new SimpleXMLElement($f);
var_dump($a);*/
var_dump(simplexml_load_file('./politics.xml'));
?>
