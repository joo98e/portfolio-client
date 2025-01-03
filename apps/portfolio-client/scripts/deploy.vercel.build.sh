BLACK='\033[30m'
BG_GREEN='\033[42m'

echo -e "${BG_GREEN}${BLACK}Vercel Build Script Start"

yarn build
exit 0