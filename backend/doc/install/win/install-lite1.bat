@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
choco install notepadplusplus -y
choco install git -y
choco install nodejs.install -version 5.10.1 -y
call refreshenv

choco install mongodb -y
call refreshenv
mkdir c:\Windows\data
mkdir c:\Windows\data\db
C:\"Program Files"\MongoDB\Server\3.2\bin\mongod --install --logpath "c:\Windows\data\log.txt"
net start MongoDb

choco install jdk8 -y
call refreshenv

npm install -g npm@next
npm install --global --production windows-build-tools
npm config set msvs_version 2015 --global

choco install dotnet4.5 -y
choco install intellijidea-ultimate -y
choco install msaccess2010-redist-x64 -y

regedit.exe /S yourfile.reg

