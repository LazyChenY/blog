# ssh简写免密登录

### ssh 免密登录
将公钥上传到服务器
```
ssh-copy-id username@remote-server //该工具会将本地所有公钥上传到服务器
```
### ssh简写登录命令
```
sudo vim ~/.ssh/config
```
在该文件中添加以下：
```
Host test // 简写
HostName xxx.xxx.x.xxx //服务器地址
User root //用户
IdentitiesOnly yes
```
有了上述两步登录远程服务器的时候直接`ssh test`就可以啦
