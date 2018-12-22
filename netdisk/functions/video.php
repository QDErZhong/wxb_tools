<?php
    //获取视频播放地址
    @$url = $_GET['url'];
    $url = str_replace("./","../",$url);
?>
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>视频播放器</title>
    <link rel="stylesheet" href="../static/css/video-js.css">
</head>
<body>
    <video id="my-video" class="video-js" controls preload="auto" width="1280" height="720" data-setup="{}">
        <source src="<?php echo $url; ?>">
      </video>
    <script src = "../static/js/video.js"></script>
</body>
</html>
