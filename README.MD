1

mongod.exe --dbpath "d://MongoDB//data" --logpath "d://MongoDB//log//mongodb.log" --logappend

2

sc create mongodb binPath= "D:\Program Files\MongoDB\Server\3.6\bin\mongod.exe --service --dbpath D:\Program Files\MongoDB\db --logpath=D:\Program Files\MongoDB\log\mongodb.log --logappend --directoryperdb"

3

以管理员身份启动cmd，在cmd中输入net start MongoDB
