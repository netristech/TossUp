#!/bin/bash
#update TossUp app from GitHub

#Update TossUp Application
echo "--------Updating TossUp App--------"
git config --global credential.helper store
if [ ! -z "$1"] && [ ! -z "$2"]; then
  username=$1
  password=$2
  echo "https://$username:$password@github.com" > /root/.git-credentials
fi
tar -czf /root/backup/backup_$(date +"%Y%m%d").tgz -C /var/www html
cd /var/www/html
git fetch --all
git reset --hard origin/master

#Update control panel
echo "--------Updating Control Panel--------"
cd /root/ && git pull origin master
command cp -r /root/cp/* /var/www/html/cp/
chmod 550 /var/www/html/cp/*.sh

chown -R apache:apache /var/www/html
systemctl reload httpd
echo "Update completed!"
