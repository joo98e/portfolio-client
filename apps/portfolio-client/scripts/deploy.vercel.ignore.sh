BLACK='\033[30m'
BG_GREEN='\033[42m'

echo -e "${BG_GREEN}${BLACK}Vercel Ignore Build Step Script Start"

if [[ "$VERCEL_ENV" == "production" && "$VERCEL_GIT_COMMIT_REF" == "main"  ]] ; then
  echo "🟩 - Proceed build"
  exit 0;
else
  echo "🟥 - Build cancelled (Current Branch : $VERCEL_GIT_COMMIT_REF)"
  exit 0;
fi