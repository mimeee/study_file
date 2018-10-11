- # 连接
    + ## 购买阿里云
    + ## 打开购买阿里云的实例  
    ![](image/实例界面.png)
    + 在 [更多] 里可以设置远程连接密码，和用户登陆密码
    ![](image/option.png)
    + 重启实例( 设置完后一定要重启，否则不会生效 )
    + 然后就可以远程连接了。

- # 向服务器中拷贝文件
    + ## 连接完成后如下图   
    ![](image/connect.png)
    + ## 创建一个目录来存储文件  
        `mikdir /home/mimee/tools -p`, 在该目录下创建 tools 文件夹。
    + ## 安装 rz 命令，该命令用于可以在window系统下向linux系统移动文件  
        `yum install lrzsz -y`
    + ## 安装完成后，使用 `rz -y` 就可上传文件了。  
        ![](image/complete.png)

- # 上传文件( 都是linux文件，以 tar.gz 为后缀名)
    + libiconv 
    + libmcrypt
    + mcrypt
    + mhash
    + mysql
    + nginx
    + php