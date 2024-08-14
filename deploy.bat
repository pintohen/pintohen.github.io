@echo off

:: Run npm build
npm run build

:: Commit the changes with a date in the commit message
git add .
for /f "tokens=2 delims==" %%i in ('wmic os get localdatetime /value') do set datetime=%%i
set datetime=%datetime:~0,4%-%datetime:~4,2%-%datetime:~6,2% %datetime:~8,2%:%datetime:~10,2%:%datetime:~12,2%
git commit -am "build: deploy commit at %datetime%"

:: Push to origin master
git push origin master