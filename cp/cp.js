$(document).ready(function() {
        $.ajax({
                url: 'functions.php',
                type: 'post',
                data: 'action=init',
                success: function(result) {
                        $('#output').html(result);
                }
        });
        $('#test').click(function(e) {
                e.preventDefault();
                $.ajax({
                        url: 'functions.php',
                        type: 'post',
                        data: 'action=test',
                        success: function(result) {
                                $('#output').html(result);
                        }
                });
        });
        $('#restart').click(function(e) {
                e.preventDefault();
                if (!confirm('This will restart the TossUp application')) {
                        return;
                } else {
                        $('#output').html('<pre>Restarting the TossUp system now.</pre><pre> Please wait, this will take a moment. . .</pre>');
                        $.ajax({
                                url: 'functions.php',
                                type: 'post',
                                data: 'action=restart',
                                success: function(result) {
                                        $('#output').html($('#output').html() + result);
                                }
                        });
                }
        });
        $('#shutdown').click(function(e) {
                e.preventDefault();
                if (!confirm('This will completely shutdown the TossUp application')) {
                        return;
                } else {
                        $('#output').html('<pre>Shutting down the TossUp System now.</pre><pre>Please wait, this will take a moment. . .</pre>');
                        $.ajax({
                                url: 'functions.php',
                                type: 'post',
                                data: 'action=shutdown',
                                success: function(result) {
                                        $('#output').html($('#output').html() + result);
                                }
                        });
                }
        });
        $('#disable-wifi').click(function(e) {
                e.preventDefault();
                $('#output').html('<pre>Shutting down the wireless interface. . .</pre>');
                $.ajax({
                        url: 'functions.php',
                        type: 'post',
                        data: 'action=disable-wifi',
                        success: function(result) {
                                $('#output').html($('#output').html() + '<pre>The interface has been disabled successfully.</pre>');
                        }
                });
        });
        $('#enable-wifi').click(function(e) {
                e.preventDefault();
                $('#output').html('<pre>Starting the wireless interface. . .</pre>');
                $.ajax({
                        url: 'functions.php',
                        type: 'post',
                        data: 'action=enable-wifi',
                        success: function(result) {
                                $('#output').html($('#output').html() + '<pre>The interface has been enabled successfully.</pre>');
                        }
                });
        });
        $('#fix').click(function(e) {
                e.preventDefault();
                $('#output').html('<pre>Performing automatic diagnostics.</pre><pre>Please be patient, this will take a moment. . .</pre>');
                $.ajax({
                        url: 'functions.php',
                        type: 'post',
                        data: 'action=fix',
                        success: function(result) {
                                $('#output').html($('#output').html() + result);
                        }
                });
        });
        $('#update').click(function(e) {
                e.preventDefault();
                $('#output').html('<pre>Make sure you have an active internet connection before proceeding</pre>');
                $('#modal').fadeIn();
        });
        $('#modal button').click(function(e) {
                e.preventDefault();
                $('#output').html($('#output').html() + '<pre>Update canceled.</pre>');
                $('#modal').hide();
        });
        $('#modal .submit').click(function(e) {
                e.preventDefault();
                var username = $('#username').val();
                var password = $('#password').val();
                $('#modal').fadeOut();
                $('#output').html($('#output').html() + '<pre>Please wait, this could take a couple minutes. . .</pre>');
                $.ajax({
                        url: 'functions.php',
                        type: 'post',
                        data: 'action=update&username='+username+'&password='+password,
                        success: function(result) {
                                $('#output').html($('#output').html() + result);
                        }
                })
        });
        $('#list').click(function(e) {
                e.preventDefault();
                $.ajax({
                        url: 'functions.php',
                        type: 'post',
                        data: 'action=list-backups',
                        success: function(result) {
                                $('#output').html(result);
                        }
                });
        });
        $('#restore').click(function(e) {
                e.preventDefault();
                var date = prompt('Enter the backup file date in YYYYmmdd format:');
                if (date != null && date != '') {
                        $('#output').html($('#output').html() + '<pre>Starting restore operation. This will take a couple minutes. . .</pre>');
                        $.ajax({
                                url: 'functions.php',
                                type: 'post',
                                data: {action: 'restore', restdate: date},
                                success: function(result) {
                                        $('#output').html($('#output').html() + result);
                                }
                        });
                }
                else {
                        $('#output').html('<pre>Operation cancelled.</pre>');
                        return;
                }
        });
        $('#launch').click(function(e) {
                e.preventDefault();
                var win = window.open("http://192.168.255.254", "_blank");
                win.focus();
        });        
});
