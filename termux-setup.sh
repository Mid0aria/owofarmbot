RESTORE='\033[0m'

RED='\033[00;31m'
GREEN='\033[00;32m'
YELLOW='\033[00;33m'
BLUE='\033[00;34m'
PURPLE='\033[00;35m'
CYAN='\033[00;36m'
LIGHTGRAY='\033[00;37m'

LRED='\033[01;31m'
LGREEN='\033[01;32m'
LYELLOW='\033[01;33m'
LBLUE='\033[01;34m'
LPURPLE='\033[01;35m'
LCYAN='\033[01;36m'
WHITE='\033[01;37m'
clear
echo -e "${BLUE}░█████╗░░██╗░░░░░░░██╗░█████╗░"
echo -e "██╔══██╗░██║░░██╗░░██║██╔══██╗"
echo -e "██║░░██║░╚██╗████╗██╔╝██║░░██║"
echo -e "██║░░██║░░████╔═████║░██║░░██║"
echo -e "╚█████╔╝░░╚██╔╝░╚██╔╝░╚█████╔╝"
echo -e "░╚════╝░░░░╚═╝░░░╚═╝░░░╚════╝░"
sleep 1

echo -e "░█▀▀▀ ─█▀▀█ ░█▀▀█ ░█▀▄▀█ ░█▀▀█ ░█▀▀▀█ ▀▀█▀▀"
echo -e "░█▀▀▀ ░█▄▄█ ░█▄▄▀ ░█░█░█ ░█▀▀▄ ░█──░█ ─░█──" 
echo -e "░█─── ░█─░█ ░█─░█ ░█──░█ ░█▄▄█ ░█▄▄▄█ ─░█── ${RESTORE}"
echo -e "${GREEN} [=] ${BLUE} Please Allow termux to access files in the dialuge shown ${RESTORE}"
sleep 1
termux-setup-storage
echo -e "${YELLOW} [!] ${PURPLE} Please Wait... ${RESTORE}"
sleep 6
echo -e "${GREEN} [+] ${BLUE} Updating termux.... ${RESTORE}"
sleep 2
echo -e "Kindly Press ENTER on any dialouge shown until Termux is updated"
apt update -y && apt upgrade -y
echo -e "${GREEN} [+] ${BLUE} Successfully updated termux ${RESTORE}"
echo -e "${GREEN} [+] ${BLUE} Installing necessary packages ${RESTORE}"
sleep 3
pkg install git wget 
sleep 1
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
sleep 1
source ~/.bashrc
sleep 2
nvm install v21.7.3

echo -e "${GREEN} [+] ${BLUE} Installed Packages ${RESTORE}"
echo -e "${GREEN} [+] ${BLUE} Installing OwO Farm Bot ${RESTORE}"
git clone https://github.com/Mid0aria/owofarmbot/
cd owofarmbot
echo -e "${GREEN} [+] ${BLUE} Installing nodejs packages${RESTORE}"
npm i --no-bin-links #using --no-bin-links to not get any errors regarding symbolic links
echo -e "${GREEN} [=] Installed Successfully , Please edit config.json"

