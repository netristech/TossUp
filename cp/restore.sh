#!/bin/bash

date=$1
cd /var/www
tar -xzf /root/backup/backup_${date}.tgz
chown -R apache:apache /var/www/html
cd /root
echo " "
echo "Restore Operation Complete!"
