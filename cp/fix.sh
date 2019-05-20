echo "Restarting services... This may take a few minutes. Please be patient. . . "
/etc/init.d/network restart
ifdown enp0s8
ifup enp0s8
systemctl stop httpd
systemctl start httpd
ip addr show | grep "enp0s3"
ip addr show | grep "enp0s8"
echo " "
echo "Repairs complete!"
