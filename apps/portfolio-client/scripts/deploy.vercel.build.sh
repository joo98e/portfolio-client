RED='\033[31m'
GREEN='\033[32m'
BLUE='\033[34m'
YELLOW='\033[33m'
BLACK='\033[30m'

BG_RED='\033[41m'
BG_GREEN='\033[42m'
BG_BLUE='\033[44m'

echo -e "${BG_GREEN}${BLACK}Vercel Build Script Start"

if [[ "$VERCEL_ENV" == "production" && "$VERCEL_GIT_COMMIT_REF" == "main"  ]] ; then
  yarn build
  exit 0;
else
  echo "🛑 - Build cancelled"
  exit 1;
fi