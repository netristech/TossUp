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
        <div id="modal" hidden>
                <form>
                        <label>GitHub Username</label><input id="username" type="text" name="username" />
                        <label>Github Password</label><input id="password" type="password" name="password" />
                        <span><input class="submit" type="submit" value="Submit"><button id="cancel">Cancel</button></span>
                </form>
        </div>
        <div id="top">
                <button id="test" hidden>Test</button>
                <button id="restart">Restart VM</button>
                <button id="shutdown">Shutdown VM</button>
                <button id="disable-wifi" hidden>Disable WiFi</button>
                <button id="enable-wifi" hidden>Enable WiFi</button>
                <button id="update">Update Code</button>
                <button id="fix">Auto Fix</button>
                <button id="list">List Backups</button>
                <button id="restore">Restore From Backup</button>
                <button id="launch">Launch Game UI</button>
        </div>
        <div id="output"></div>
</body>
</html>
