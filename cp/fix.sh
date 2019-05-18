echo "Restarting services... This may take a few minutes. Please be patient. . . "
sed -i 's/upload_max_filesize = 2M/upload_max_filesize = 200M/g' /etc/php.ini
sed -i 's/post_max_size = 8/post_max_size = 200/g' /etc/php.ini
sed -i 's/max_execution_time = 30/max_execution_time = 120/g' /etc/php.ini
sed -i 's/max_input_time = 60/max_input_time = 240/g' /etc/php.ini
/etc/init.d/network restart
ifdown enp0s8
ifup enp0s8
systemctl stop httpd
systemctl start httpd
ip addr show | grep "enp0s3"
ip addr show | grep "enp0s8"
echo " "
echo "Repairs complete!"
