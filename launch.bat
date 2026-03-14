@echo off
title Proof-of-Skill — Polygon On-Chain Skills Platform
color 0D

echo.
echo   ======================================================
echo   =                                                    =
echo   =    [37m⬡  P R O O F - O F - S K I L L[0m                  =
echo   =    [36mPolygon On-Chain Skills Platform[0m                =
echo   =                                                    =
echo   ======================================================
echo.
echo   [33mStarting server...[0m
echo.

node server.js

if %errorlevel% neq 0 (
    echo.
    echo   [31m✖ Node.js is required! Install from https://nodejs.org[0m
    echo.
    pause
)
