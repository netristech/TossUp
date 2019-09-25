#!/bin/bash
service=httpd

if [ $(systemctl status $service | grep 'Active:' | awk '{print $2}') == 'active' ]
then
  exit
else
  systemctl start $service
fi
