#!/bin/bash

cat /etc/motd
systemctl status httpd | awk 'NR==1,NR==3'
