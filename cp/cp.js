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
                $('#output').html('<pre>Performing automatic diagnostics.</pre><pre>This will take a moment. . .</pre>');
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
                $('#output').html('<pre>Updating source code from Git Hub. Please wait. . .</pre>');
                $.ajax({
                        url: 'functions.php',
                        type: 'post',
                        data: 'action=update',
                        success: function(result) {
                                $('#output').html(result);
                        }
                });
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
                        $('#output').html($('#output').html() + '<pre>Operation cancelled.</pre>');
                        return;
                }
        });        
});
