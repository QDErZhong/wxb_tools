<?php
  $filename=$_GET['file'];
  if(file_exists('./toupiao/'.$filename)){
    $xml=simplexml_load_file("./toupiao/".$filename);
    $xml->status[0]=$_GET['type'];
    echo $xml->saveXML();
    $file=fopen('./toupiao/'.$filename, 'w');
    fwrite($file, $xml->saveXML());
    fclose($file);
  }
?>
