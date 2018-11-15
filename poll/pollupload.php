<?php
	$xml=new DOMDocument("1.0","utf-8");
	$poll=$xml->createElement("poll");
	$xml->appendChild($poll);
	cpa($poll,"grade",$_POST["grade"]);
	cpa($poll,"name",$_POST["name"]);
	cpa($poll,"class",$_POST["MT"].$_POST["class"]);
	cpa($poll,"person",$_POST["personal"]);
	cpa($poll,"purpose",$_POST["purpose"]);
	cpa($poll,"status","待审");//added,reviewing,failed.
	$choices=$xml->createElement("choice");
	$poll->appendChild($choices);
	$choice=explode("\r\n",$_POST["choice"]);
	cpa($poll,"length",count($choice));
	foreach($choice as $i=>$n){
		cpa($choices,"C".$i,(string)$n);
	}
	$filename=getfilename($_POST["grade"],$_POST["MT"].$_POST["class"]);
	$files=fopen($filename,"w");
	fwrite($files,$xml->saveXML());
	fclose($files);
	header("location:http://60.205.217.184:2334/?page_id=352/");
	function getfilename($grade,$class){
		$filename=$grade.$class;
		$i=1;
		while(True){
			$filename1="./toupiao/".$filename."-".$i.".xml";
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
