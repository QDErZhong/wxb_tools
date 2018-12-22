<!DOCTYPE html>
<html lang="zh-cmn-Hans" xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta charset="utf-8" />
	<title><?php echo $siteinfo['title']; ?></title>
	<meta name="keywords" content="<?php echo $siteinfo['keywords']; ?>" />
	<meta name="description" content="<?php echo $siteinfo['description']; ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="shortcut icon" href="favicon.ico"  type="image/x-icon" />
	<link rel="stylesheet" href="./static/layui/css/layui.css">
	<link rel='stylesheet' href='./static/css/style.css?v=1.4'>
	<link rel="stylesheet" href="./static/css/font-awesome.min.css">
</head>
<body>
	<!--顶部导航栏-->
	<div class = "header">
        <div class = "layui-container">
            <div class = "layui-row">
                <div class = "layui-col-lg12">
	                <div class="logo">
		                <h1><a href="./"><i class="fa fa-sitemap" aria-hidden="true"></i> <?php echo $siteinfo['title']; ?></a></h1>
	                </div>
                    <div class = "layui-hide-xs">
                        <ul class="layui-nav menu" lay-filter="">
                            <li class="layui-nav-item"><a href="./"><i class="fa fa-home" aria-hidden="true"></i> 首页</a></li>
                            <li class="layui-nav-item"><a href="./cache.php"><i class="fa fa-file-text" aria-hidden="true"></i> 文件索引</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 顶部导航栏END -->