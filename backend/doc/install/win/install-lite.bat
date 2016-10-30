@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
choco install git -y
choco install nodejs.install -version 5.10.1 -y
refreshenv

choco install mongodb -y
refreshenv
mkdir c:\data
mkdir c:\data\db
C:\Program Files\MongoDB\Server\3.2\bin\mongod --install --logpath "c:\data\log.txt"
net start MongoDb

choco install jdk8 -y
refreshenv

npm install --global --production windows-build-tools
npm config set msvs_version 2015 --global
npm install -g npm@next