<?php
  $filename=$_GET['file'];
  if(file_exists('./files/'.$filename)){
    $xml=simplexml_load_file("./files/".$filename);
    $xml->status[0]="已审";
    echo $xml->saveXML();
    $file=fopen('./files/'.$filename, 'w');
    fwrite($file, $xml->saveXML());
    fclose($file);
  }
?>
