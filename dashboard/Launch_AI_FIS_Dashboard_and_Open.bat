
@echo off
cd /d "%USERPROFILE%\Downloads\ai_fis_technologies_website"
start http://localhost:3000
echo Starting AI-FIS Dashboard server...
npx serve .
pause
