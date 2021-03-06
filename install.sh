#!/bin/bash
# Perform a clean install of TossUp 
# !!! This will delete any customizations !!!


echo "|----------------------------------------------|"
echo "| Starting install of TossUp from GitHub. This |"
echo "| may take a few minutes. Please be patient... |"
echo "|----------------------------------------------|"
echo " "
systemctl stop httpd
ifdown enp0s3
tar -czf /root/backup/backup_$(date +"%Y%m%d").tgz -C /var/www html
rm -rf /var/www/html
git clone https://github.com/michaelballen/tossup.git /var/www/html/
ln -s /var/www/html /var/www/html/tossup2
chown -R apache:apache /var/www/html
ifup enp0s3
systemctl start httpd
echo " "
echo "Install process complete!"
echo " "
