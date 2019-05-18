#!/bin/bash

read -p "Select backup to restore (type date only in YYYYmmdd format or type quit to exit): " backupvar
if [ $backupvar == 'quit' ]; then
  exit 1
fi
cd /var/www
tar -xzf /root/backup/backup_${backupvar}.tgz
chown -R apache:apache /var/www/html
cd /root
echo " "
echo "Restore Operation Complete!"
