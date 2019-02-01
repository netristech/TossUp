# TossUp Events Management Scripts
 >./fix
This script can be run to reset the network stack on the VMs and resolve network / Internet connectivity issues.

>./install
This script performs a <b>clean</b> installation of TossUp from GitHub Repo. A backup of any existing installation is automatically created during this process. <b>WARNING:</b> Running this script will remove any customizations, uploads, etc.

>/restore
This script can be used to perform a restore of the TossUp app from one of the automatically generated backup files that are created during the update or install operations.

>./startup
This script automatically runs when the VMs boot up and updates itself and all other scripts to the latest version.

>./update
This script can be run to update the TossUp apps on the VMs to the latest version available on Github. Like the install script, a backup of the existing installation is automatically generated.
