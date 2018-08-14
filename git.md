## 第一章 git入门

- ### Git工具分类

   - 命令行
      - bash、cmd、power shell等
      （bash是linux的命令行）
   - GUI
      - GIT GUI、Github Desktop等
   - IDE集成
      - visual studio、Eclipse、intellij IDE
    
- ### Git安装

Git安装完成后会出现三个快捷方式。
   - Git Bash
   - Git CMD
   - Git GUI
   
安装完成后进入Git Bash，设置其环境：
   - 光标颜色
      - 默认：白色   --》 绿色
   - 光标形状
      - 默认：下划线 --》 块状
   - 光标闪烁
      - 默认：闪烁   --》 不闪
   - 字体大小
      - 默认：9号    --》 14号
     
Bash的简单命令
  - #change directory --》 cd
  - #make directory --》mkdir
  - #print working directory --》 pwd
  - #move --》 mv
  - #copy --》 cp
  - #remove --》 rm
  - #scan file --》 cat filename
  - #print --》 echo
  
设置Git参数
  - 显示当前的 Git 配置
     - git config --list
  - 设置提交仓库时的用户名信息
     - git config --global user.name "NAME"
  - 设置提交仓库时的邮箱信息
     - git config --global user.email "EMAIL"
     
 配置好的信息是在一个文件夹中存储着的，在主目录中，使用 cd ~ 命令回到主目录；ls -a 查看文件夹中的所有文件（-a代表包括隐藏文件）；配置信息存储在.gitconfig文件中。输入 vim .gitconfig 可以编辑此文件。
