linux install mongodb

default directories

```shell

/var/lib/mongo (the data directory)
/var/log/mongodb (the log directory)

```

You can start the mongod process by issuing the following command:

```shell

sudo systemctl start mongod

```

Verify that MongoDB has started successfully

```shell
sudo systemctl status mongod

```

You can optionally ensure that MongoDB will start following a system reboot by issuing the following command:


```shell

sudo systemctl enable mongod

```

Stop MongoDB

```shell

sudo systemctl stop mongod
```


Restart MongoDB

```shell
sudo systemctl restart mongod

```

You can follow the state of the process for errors or important messages by watching the output in the` /var/log/mongodb/mongod.log `file


Begin using MongoDB.

Start a mongo shell on the same host machine as the mongod. You can run the mongo shell without any command-line options to connect to a mongod that is running on your localhost with default port 27017:

```shell

mongo


```
