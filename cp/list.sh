#!/bin/bash

echo "Available Backup Files:"
echo " "
ls -lah /root/backup/backup_* | awk '{print $9}'
