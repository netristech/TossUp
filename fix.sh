#!/bin/bash
# Reset network interfaces

echo "|----------------------------------------------|"
echo "| Restarting services... This may take         |"
echo "| a few minutes. Please be patient...          |"
echo "|----------------------------------------------|"
echo " "
/etc/init.d/network restart
ifdown enp0s3
ifdown enp0s8
rm -f /etc/sysconfig/network-scripts/ifcfg-enp0s3
cp /root/ifcfg-enp0s3 /etc/sysconfig/network-scripts/
chmod 500 /etc/sysconfig/network-scripts/ifcfg-enp0s3
ifup enp0s3
ifup enp0s8
systemctl stop httpd
systemctl start httpd
ip addr show | grep "enp0s3"
ip addr show | grep "enp0s8"
echo " "
echo "Repairs complete!"
echo " "
