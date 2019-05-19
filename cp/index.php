<html lang="en">
<head>
        <meta charset="utf-8">
        <title>TossUp Control Panel</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="style.css">
        <script src="<?php echo htmlspecialchars("//{$_SERVER['HTTP_HOST']}", ENT_QUOTES, "UTF-8"); ?>/assets/js/vendor/jquery-3.2.1.min.js" type="text/javascript"></script>
        <script src="cp.js" type="text/javascript"></script>
</head>
<body>
        <div id="top">
                <button id="test" hidden>Test</button>
                <button id="restart">Restart VM</button>
                <button id="shutdown">Shutdown VM</button>
                <button id="disable-wifi">Disable WiFi</button>
                <button id="fix">Auto Fix</button>
                <button id="update">Update Code</button>
                <button id="list">List Backups</button>
                <button id="restore">Restore From Backup</button>
        </div>
        <div id="output"></div>
</body>
</html>
