<?php
    include_once("./zdir.class.php");
    include_once("./Parsedown.php");
    $Parsedown = new Parsedown();
    @$file = $_GET['file'];

    $content = $zdir->viewmd($file);
    $content = $Parsedown->text($content);
?>
<!DOCTYPE html>
<html lang="zh-cmn-Hans" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>MDtoHTML</title>
    <meta name="author" content="" />
    <meta name="keywords" content="MDtoHTML,markdown" />
    <meta name="description" content="MDtoHTML快速将Markdown文件转换为HTML" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../static/css/github.min.css">
    <link rel="stylesheet" href="../static/layui/css/layui.css">
    <link rel="stylesheet" href="../static/css/md.css">
</head>
<body>
    <div id="container" class = "layui-bg-gray">
        <div class="layui-container">
            <div class="layui-row">
                <div class="layui-col-lg8 layui-col-sm12 layui-col-xs12 layui-col-md12 layui-col-md-offset2">
                    <div class="md-html">
                        <?php echo $content; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="../static/js/highlight.min.js"></script>
    <script src="../static/js/jquery.min.js"></script>
    <script>hljs.initHighlightingOnLoad();</script>
    <script>
        $(document).ready(function(){
            //获取第一个H1作为标题
            var h1 = $("h1").text();
            //如果获取到了H1
            if(h1) {
                $("title").text(h1 + " - MDtoHTML");
            }
        });
    </script>
    <!--页面缓存于<?php echo $ftime; ?>-->
</body>
</html>
