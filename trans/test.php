<?php
include './phpQuery/phpQuery.php';
$word = $_GET['q'];
$language = $_GET['to'];
phpQuery::newDocumentFile('http://dict.youdao.com/w/'.$language.'/'.$word.'/');
if($word==''){
  pq('#container')->remove();
}
pq('#topImgAd')->remove();
pq('.dict-votebar')->remove();
pq('.c-snav')->remove();
pq('.via')->remove();
pq('.additional')->remove();
pq('.items a')->remove();
pq('.example-via')->remove();
pq('.more-example')->remove();
pq('#rel-search')->remove();
pq('.c-sust')->remove();
pq('#c_footer')->remove();
pq('#baidu-adv')->remove();
pq('#follow')->remove();
pq('#ugcTrans')->remove();
pq('link')->remove();
pq('#examples')->remove();
pq('.see_more')->remove();
pq('script')->remove();
pq('.c-logo')->attr('href', './query.php?q=test&to=eng');
pq('#f')->after('<div class="c-fm-w"><div id="langSelector" class="langSelector"><span id="langText" class="langText">中英</span><span class="aca">▼</span><span class="arrow"></span><input type="hidden" id="le" name="le" value="eng"></div><span class="s-inpt-w"><input type="text" class="s-inpt" autocomplete="off" name="q" id="query" value="'.$word.'"><input type="hidden" name="tab" value=""><input type="hidden" name="keyfrom" value="dict2.top"><span id="hnwBtn" class="hand-write"></span></span><button onclick="loadXMLDoc()" class="s-btn">翻译</button></div>');
pq('#f')->remove();
pq('.viaInner')->remove();
pq('body')->append('<script>deleteblock();</script>');
/*pq('head')->append('<link rel="stylesheet" href="./css/result-min.css"></link>');
pq('head')->append('<link rel="stylesheet" href="./css/pad.css"></link>');
pq('head')->append('<link rel="stylesheet" href="./css/result-ugc.css"></link>');
pq('head')->append('<script src="./script/jquery.min.js"></script>');
pq('head')->append('<script src="./script/add.js"></script>');
pq('#editwordform')->after('<script type="text/javascript" src="./script/autocomplete_json.js"></script>');
pq('#editwordform')->after('<script type="text/javascript" src="./script/result-min.js"></script>');*/
pq('img')->remove();
//pq('script')->remove();
//$banned_str = ['<script src="https://analytics.163.com/ntes.js" type="text/javascript"></script>', '<script defer src="https://shared.ydstatic.com/js/rlog/v1.js"></script>', '<script async src="https://dict.youdao.com/dictugc/ugc/json/getUgcs?callback=jQuery18208371175201756011_1541580989338&amp;len=3&amp;offset=0&amp;_=1541580989366"></script>'];
$html = pq('html');
$ans = str_replace('<p><a href="http://f.youdao.com/?path=thesis&amp;vendor=dictweb.basictuijian" target="_blank" rel="nofollow">论文要发表？专家帮你译！</a></p>','',$html);
//$ans = preg_replace('/<script.*?script>/','',$ans);
//$ans = preg_replace('/\<a href=\"[^\#]*?\"/','',$ans);
echo $ans;
?>
