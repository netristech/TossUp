#!/bin/bash

echo "Available Backup Files:"
ls -lah /root/backup/backup_* | awk '{print $9}'
