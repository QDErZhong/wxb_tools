<?php
	//获取网页内容
	$link=$_POST["url"];
	$content=file_get_contents($link);
	
	//处理script和title
	$scriptpattern="/<script[\s\S]*?<\/script>/i";
	$content=preg_replace($scriptpattern,'',$content);
	$titlepattern="$<title>([\S\s]*?)<\/title>$";
	$content=preg_replace($titlepattern,'',$content);
	$h2pattern="$<h2([\S\s]*?)<\/h2>$";
	$content=preg_replace($h2pattern,'',$content);
	str_replace($content,"href=\"javascript:void(0);\"","");
	
	//获取img
	//$urlpattern='~data-src=".*?"~';
	$imgpattern="$<img data-ratio=.*?>$";
	preg_match_all($imgpattern,iconv("UTF-8","GBK",$content),$imgarray);
	
	//下载img并替换
	$dir=get_dir();
	foreach($imgarray[0] as $i=>$img){
		$url=explode('"',explode('data-src="',$img)[1])[0];
		$file=dl_img($url,$dir.$i.".".explode("wx_fmt=",$url)[1]);
		$replace='<img class="alignnone size-medium wp-image-240" src="'.$file.'" alt="" width="9999" height="9999" />';
		$content=str_replace($img,$replace,$content);
	}
	
	//输出
	//echo $content;
	echo htmlentities($content,ENT_QUOTES,"UTF-8");
	
	//函数
	function dl_img($url,$loc){
		$image=file_get_contents($url);
		file_put_contents($loc,$image);
		return $loc;
	}
	
	function get_dir(){
		if(!file_exists("./../wp-content/uploads/wximg")){
			mkdir("./../wp-content/uploads/wximg");
		}
		for($i=1;;$i++){
			if(!file_exists("./../../wp-content/uploads/wximg/".$i)){
				mkdir("./../../wp-content/uploads/wximg/".$i);
				break;
			}
		}
		return "./../wp-content/uploads/wximg/".$i."/";
	}
?>
