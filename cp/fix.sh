#!/bin/bash

#ifdown enp0s8
#ifdown enp0s3
if [ $(cat /etc/default/grub | grep -c 'GRUB_CMDLINE_LINUX="ipv6.disable=1') -eq 0 ]; then
  sed -i 's/GRUB_CMDLINE_LINUX="/GRUB_CMDLINE_LINUX="ipv6.disable=1 /g' /etc/default/grub
  grub2-mkconfig -o /boot/grub2/grub.cfg
  echo "Repairs have been made that require reboot. Please use the 'Restart VM' button after completion"
fi
command cp /root/ifcfg-enp0s3 /etc/sysconfig/network-scripts/
chmod 500 /etc/sysconfig/network-scripts/ifcfg-enp0s3
ifup enp0s3
ifup enp0s8
systemctl reload httpd
ip addr show | grep "enp0s3"
ip addr show | grep "enp0s8"
echo " "
echo "Repairs complete! If problems persist, use the 'Restart VM' button."
