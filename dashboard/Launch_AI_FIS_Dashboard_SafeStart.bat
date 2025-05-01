
@echo off
title Launching AI-FIS Dashboard
cd /d "%~dp0"
echo Checking for Node.js environment...

:waitForNpx
where npx >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js tools not found in PATH.
    echo Please restart your computer or install Node.js from https://nodejs.org/
    echo.
    pause
    exit /b
)

echo Node.js detected. Starting AI-FIS Dashboard server...
start http://localhost:3000
npx serve .
pause
