#!/bin/bash
#update TossUp app from GitHub

echo "Now updating. . ."
ifdown enp0s3
tar -czf /root/backup/backup_$(date +"%Y%m%d").tgz -C /var/www html
cd /var/www/html
git fetch --all
git reset --hard origin/master
chown -R apache:apache /var/www/html
cd /root
ifup enp0s3
systemctl reload httpd
echo "Update completed successfully!"
