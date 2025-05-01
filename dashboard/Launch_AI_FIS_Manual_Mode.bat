
@echo off
title AI-FIS Manual-Only Mode Launcher
cd /d "%~dp0"
echo -----------------------------------------
echo Launching AI-FIS Dashboard: Manual Mode
echo (No auto-triggered events)
echo -----------------------------------------
where npx >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js tools not found in PATH.
    echo Please restart your system OR reinstall Node.js from https://nodejs.org/
    pause
    exit /b
)

start http://localhost:3000
npx serve .
pause
