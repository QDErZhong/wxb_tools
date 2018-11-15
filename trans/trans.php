<?php
function httpRequest($sUrl, $aHeader, $aData){
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_URL, $sUrl);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $aHeader);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($aData));
    $sResult = curl_exec($ch);
    if($sError=curl_error($ch)){
        die($sError);
    }
    curl_close($ch);
    return $sResult;
}

function getTranslate($word)
{
    $url="http://fanyi.youdao.com/translate_o?smartresult=dict&smartresult=rule";
    $client = 'fanyideskweb';
    $secretKey = 'ebSeFb%=XZ%T[KZ)c(sy!';

    $ydhead=array(
        "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.109 Safari/537.36",
        "Accept: application/json, text/javascript, */*; q=0.01",
        "Accept-Encoding: gzip, deflate",
        "Accept-Language: zh-CN,zh;q=0.9,en;q=0.8",
        "Content-Type: application/x-www-form-urlencoded; charset=UTF-8",
        "Cookie: _ntes_nnid=c686062b6d8c9e3f11e2a8413b5bb9a8,1517022642199; OUTFOX_SEARCH_USER_ID_NCOO=1367486017.479911; OUTFOX_SEARCH_USER_ID=722357816@10.168.11.24; DICT_UGC=be3af0da19b5c5e6aa4e17bd8d90b28a|; JSESSIONID=abcCzqE6R9jTv5rTtoWgw; fanyi-ad-id=40789; fanyi-ad-closed=1; ___rl__test__cookies=1519344925194",
        "Referer: http://fanyi.youdao.com/",
        "X-Requested-With: XMLHttpRequest"
    );

    $yddata=array(
        "from" =>"AUTO",
        "to" => "AUTO",
        "smartresult" => "dict",
        "client" => "fanyideskweb",
        "doctype" => "json",
        "version" => "2.1",
        "keyfrom" => "fanyi.web",
        "action" => "FY_BY_REALTIME",
        "typoResult" => "false"
    );

    $salt = microtime();
    $sign = md5($client.$word.$salt.$secretKey);
    $yddata["client"]=$client;
    $yddata["salt"]=$salt;
    $yddata["sign"]=$sign;
    $yddata["i"]=$word;

    $data=httpRequest($url,$ydhead,$yddata);

    var_dump(gzdecode($data));
}

getTranslate("help");
?>