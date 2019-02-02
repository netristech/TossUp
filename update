#!/bin/bash
#update TossUp app from GitHub

echo "|----------------------------------------------|"
echo "| Starting update of TossUp app. This may take |"
echo "| a few minutes. Please be patient...          |"
echo "|----------------------------------------------|"
echo " "
systemctl stop httpd
ifdown enp0s3
tar -czf /root/backup/backup_$(date +"%Y%m%d").tgz -C /var/www html
cd /var/www/html
#git pull origin master
git fetch --all
git reset --hard origin/master
chown -R apache:apache /var/www/html
cd /root
ifup enp0s3
systemctl start httpd
echo " "
echo "Update process complete!"
echo " "
