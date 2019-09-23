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
                case 'enable-wifi':
                        enableWifi();
                        break;
                case 'fix':
                        autoFix();
                        break;
                case 'update':
                        updateCode();
                        break;
                case 'list-backups':
                        listBackups();
                        break;
                case 'restore':
                        restoreBackup();
                        break;
        }
}

function testFunc() {
        $output = shell_exec("./test.sh");
        echo "<pre>" . $output . "</pre>";
}

function initFunc() {
        $output = shell_exec("./init.sh");
        echo "<pre>" . $output . "</pre>";
}

function restartVM() {
        $output = shell_exec("sudo ./restart.sh");
        echo "<pre>" . $output . "</pre>";
}

function shutdownVM() {
        $output = shell_exec("sudo ./shutdown.sh");
        echo "<pre>" . $output . "</pre>";
}

function disableWifi() {
        $output = shell_exec("sudo ./disable-wifi.sh");
        echo "<pre>" . $output . "</pre>";
}

function enableWifi() {
        $output = shell_exec("sudo ./enable-wifi.sh");
        echo "<pre>" . $output . "</pre>";
}

function autoFix() {
        $output = shell_exec("sudo ./fix.sh");
        echo "<pre>" . $output . "</pre>";
}

function updateCode() {
        if(isset($_POST['username']) && isset($_POST['password'])) {
                $username = $_POST['username'];
                $password = $_POST['password'];
                $output = shell_exec("sudo ./update.sh $username $password");
                echo "<pre>" . $output . "</pre>";
        }
}

function listBackups() {
        $output = shell_exec("sudo ./list.sh");
        echo "<pre>" . $output . "</pre>";
}

function restoreBackup() {
        if(isset($_POST['restdate']) && !empty($_POST['restdate'])) {
                $date = $_POST['restdate'];
                $output = shell_exec("sudo ./restore.sh $date");
                echo "<pre>" . $output . "</pre>";
        }
}

?>
