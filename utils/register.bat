@echo off
set tempfile="%~dp0blank.exe"
cd ..
cd node_modules\node-notifier\vendor\snoreToast

snoretoast-x64.exe -install "SnoreToast\0.7.0\OwO Farm Bot.lnk" %tempfile% "OwO Farm Bot"

exit
