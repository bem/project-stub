<?php
    require "index.bh.php";

    echo $bh->apply(file_get_contents(__DIR__ . "/index.bemjson.js"));
