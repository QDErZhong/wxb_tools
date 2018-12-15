<?php
	$xml=new DOMDocument("1.0","utf-8");
	$poll=$xml->createElement("poll");
	$xml->appendChild($poll);
	cpa($poll,"time",date("Y-m-d H:i:s"));
	cpa($poll,"type",$_POST["type"]);
	cpa($poll,"grade",$_POST["grade"]);
	cpa($poll,"name",$_POST["name"]);
	cpa($poll,"class",$_POST["MT"].$_POST["class"]);
	cpa($poll,"person",$_POST["personal"]);
	cpa($poll,"writer",$_POST["writer"]);
	cpa($poll,"language",$_POST["language"]);
	cpa($poll,"interpreter",$_POST["interpreter"]);
	cpa($poll,"publisher",$_POST["publisher"]);
	cpa($poll,"more",$_POST["choice"]);
	$filename=getfilename($_POST["grade"],$_POST["MT"].$_POST["class"], $_POST['personal'], $xml);
	$files=fopen($filename,"w");
	fwrite($files,$xml->saveXML());
	fclose($files);
	header("location:http://60.205.217.184:2334/?page_id=352/");
	function getfilename($grade,$class,$name,$xml){
		$filename=$grade.$class.$name;
		$i=1;
		while(True){
			$filename1="./toupiao/".$filename."-".$i.".xml";
			if(!file_exists($filename1)){
				return $filename1;
			} else {
				$tmpfile=fopen("./tmpfile.xml", "w");
				fwrite($tmpfile,$xml->saveXML());
				fclose($tmpfile);
				if(getarr(simplexml_load_file($filename1))==getarr(simplexml_load_file("./tmpfile.xml"))){
					echo "请不要重复提交相同内容!";
					die();
				}
			}
			$i++;
		}
	}
	function cpa($fa,$name,$str){ //create and append
		global $xml;
		$in=$xml->createElement($name,$str);
		$fa->appendChild($in);
	}
	function getarr($xml){
	$arr = array(
		$xml->xpath("/poll/type")[0]."",
		$xml->xpath("/poll/grade")[0].$xml->xpath("/poll/class")[0],
		$xml->xpath("/poll/person")[0]."",
		$xml->xpath("/poll/name")[0]."",
		$xml->xpath("/poll/writer")[0]."",
        	$xml->xpath("/poll/language")[0]."",
        	$xml->xpath("/poll/interpreter")[0]."",
        	$xml->xpath("/poll/publisher")[0]."",
        	$xml->xpath("/poll/more")[0].""
	);
	return $arr;
	}
?> 
