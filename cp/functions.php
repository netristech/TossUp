<?php

if(isset($_POST['action']) && !empty($_POST['action'])) {
        $action = $_POST['action'];
        switch($action) {
                case 'test':
                        testFunc();
                        break;
                case 'init':
                        initFunc();
                        break;                        
                case 'shutdown':
                        shutdownVM();
                        break;
                case 'restart':
                        restartVM();
                        break;
                case 'disable-wifi':
                        disableWifi();
                        break;
                case 'update':
                        updateCode();
                        break;
        }
}

function testFunc() {
        $output = shell_exec("./test.sh");
        echo "<pre>" . $output . "</pre>";
}

function initFunc() {
        $output = shell_exec("./init.sh");
        echo "<pre>" . $output . "</pre>"
}

function updateCode() {
        $output = shell_exec("sudo ./update.sh");
        echo "<pre>" . $output . "</pre>";
}

function shutdownVM() {
        $output = shell_exec("sudo ./shutdown.sh");
        echo "<pre>" . $output . "</pre>";
}

function restartVM() {
        $output = shell_exec("sudo ./restart.sh");
        echo "<pre>" . $output . "</pre>";
}

function disableWifi() {
        $output = shell_exec("sudo ./disable-wifi.sh");
        echo "<pre>" . $output . "</pre>";
}

?>
