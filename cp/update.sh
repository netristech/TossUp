#!/bin/bash
#update TossUp app from GitHub

echo "Now starting update of TossUp from GitHub."
echo "This can take a few minutes. Please be patient. . ."          |"
echo " "
systemctl stop httpd
ifdown enp0s3
tar -czf /root/backup/backup_$(date +"%Y%m%d").tgz -C /var/www html
cd /var/www/html
git fetch --all
git reset --hard origin/master
chown -R apache:apache /var/www/html
cd /root
ifup enp0s3
systemctl start httpd
echo "Update process complete!"
