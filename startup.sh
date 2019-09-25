#!/bin/bash
PATH="/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/root/bin"
# Startup Script for TossUp VMs

#Shutdown Ethener adapter during provisioning operations
#ifdown enp0s3

#Backup existing configuration
cd /root
tar -czf /root/backup/scripts_backup.tgz -C /root install update fix restore startup servicecheck cp

# Globally allow storing of Git Credentials
git config --global credential.helper store

#Pull latest files and configuration from GitHub
git fetch --all
git reset --hard origin/master

#Move files and change permissions
chmod 550 /root/*.sh
cp -r /root/cp /var/www/html/
chown -R apache:apache /var/www/html
chmod 550 /var/www/html/cp/*.sh
cp /root/crontab /var/spool/cron/root
chmod 500 /var/spool/cron/root

#make adjustments to environment
usermod apache -a -G wheel
sed -i 's/upload_max_filesize = 2M/upload_max_filesize = 200M/g' /etc/php.ini
sed -i 's/post_max_size = 8/post_max_size = 200/g' /etc/php.ini
sed -i 's/max_execution_time = 30/max_execution_time = 120/g' /etc/php.ini
sed -i 's/max_input_time = 60/max_input_time = 240/g' /etc/php.ini
if [ $(cat /etc/sudoers | grep -c "%wheel  ALL = NOPASSWD:") -eq 0 ]; then
  sed -i '/# %wheel/a %wheel  ALL = NOPASSWD: /var/www/html/cp/*.sh' /etc/sudoers
fi

#Bring Ethenet adapter back up
#ifup enp0s3
