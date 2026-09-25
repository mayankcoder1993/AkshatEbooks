@echo off
setlocal enabledelayedexpansion
title AkshatEbooks - Sync, Run and Share

:: 1. Navigate to AkshatEbooks folder
cd /d "%~dp0"
if not exist "package.json" (
    if exist "%~dp0AkshatEbooks\package.json" (
        cd /d "%~dp0AkshatEbooks"
    )
)

cls
echo =====================================================================
echo                 AKSHATEBOOKS - 1-CLICK SYNC & SHARE
echo =====================================================================
echo.

echo [1/4] Fetching latest updates from GitHub...
git fetch --all

:: Detect current branch name
for /f "tokens=*" %%i in ('git rev-parse --abbrev-ref HEAD') do set CURRENT_BRANCH=%%i
if "%CURRENT_BRANCH%"=="" set CURRENT_BRANCH=arena/01a0bfe5-akshatebooks

echo.
echo [2/4] Replacing local files with latest online code...
echo Target branch: %CURRENT_BRANCH%
git reset --hard origin/%CURRENT_BRANCH%

:: Stop any old background instances
taskkill /F /IM cloudflared.exe >nul 2>&1

:: Ensure cloudflared.exe is present
if not exist "cloudflared.exe" (
    echo.
    echo Downloading cloudflared tunneling tool...
    powershell -Command "curl.exe -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.exe -o cloudflared.exe"
)

echo.
echo [3/4] Starting Vite Dev Server...
start "AkshatEbooks - Dev Server" cmd /k "npm run dev"

echo Waiting 5 seconds for server to start...
timeout /t 5 /nobreak >nul

echo.
echo =====================================================================
echo [4/4] GENERATING PUBLIC URL (Shareable with anyone worldwide)
echo =====================================================================
echo.
echo Look for the URL below ending with: .trycloudflare.com
echo Anyone on phone, tablet, or laptop can open it directly!
echo.
echo ---------------------------------------------------------------------

:: Run cloudflared directly in this window so the URL is front and center
cloudflared.exe tunnel --url http://127.0.0.1:5173

pause
