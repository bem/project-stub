<?php
    require "index.bh.php";

    echo $bh->apply(trim(trim(file_get_contents(__DIR__ . "/index.bemjson.js")),"()"));
?>
