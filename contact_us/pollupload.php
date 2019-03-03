<?php
	$xml=new DOMDocument("1.0","utf-8");
	$poll=$xml->createElement("poll");
	$xml->appendChild($poll);
	cpa($poll,"time",date("Y-m-d H:i:s"));
	cpa($poll,"grade",$_POST["grade"]);
	cpa($poll,"class",$_POST["MT"].$_POST["class"]);
	cpa($poll,"person",$_POST["personal"]);
	cpa($poll,"content",$_POST["content"]);
	cpa($poll,"status","待审");
	$filename=getfilename($_POST["grade"],$_POST["MT"].$_POST["class"].$_POST["personal"]);
	echo $filename;
	$files=fopen($filename,"w");
	fwrite($files,$xml->saveXML());
	echo $files;
	fclose($files);
	//header("location:http://60.205.217.184/?page_id=352/");
	function getfilename($grade,$class){
		$filename=$grade.$class;
		$i=1;
		while(True){
			$filename1="./files/".$filename."-".$i.".xml";
			if(!file_exists($filename1)){
				return $filename1;
			}
			$i++;
		}
	}
	function cpa($fa,$name,$str){ //create and append
		global $xml;
		$in=$xml->createElement($name,$str);
		$fa->appendChild($in);
	}
?> 
