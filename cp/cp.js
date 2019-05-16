$(document).ready(function() {
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
                        $(this).html("Restarting...");
                        $.ajax({
                                url: 'functions.php',
                                type: 'post',
                                data: 'action=restart',
                                success: function(result) {
                                        $('#output').html(result);
                                }
                        });
                }
        });
        $('#shutdown').click(function(e) {
                e.preventDefault();
                if (!confirm('This will completely shutdown the TossUp application')) {
                        return;
                } else {
                        $(this).html("Shutting Down...");
                        $.ajax({
                                url: 'functions.php',
                                type: 'post',
                                data: 'action=shutdown',
                                success: function(result) {
                                        $('#output').html(result);
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
        $('#update').click(function(e) {
                e.preventDefault();
                $.ajax({
                        url: 'functions.php',
                        type: 'post',
                        data: 'action=update',
                        success: function(result) {
                                $('#output').html(result);
                        }
                });
        });
});
