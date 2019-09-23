#!/bin/bash
ifdown enp0s8
#ifdown enp0s3
command cp /root/ifcfg-enp0s3 /etc/sysconfig/network-scripts/
chmod 500 /etc/sysconfig/network-scripts/ifcfg-enp0s3
#ifup enp0s3
ifup enp0s8
systemctl reload httpd
ip addr show | grep "enp0s3"
ip addr show | grep "enp0s8"
echo " "
echo "Repairs complete! If problems persist, use the 'Restart VM' button."
