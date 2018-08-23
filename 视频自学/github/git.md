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
 
- ### Git Bash操作的4个坑
    - 命令行换行
       - \ 反斜杠是换行符（将命令视为一行）
    - 命令行终结
       - Ctrl + C 强制退出
    - 命令行翻页和退出
       - git log
       - 显示了一些信息
       - g --》 向下走一行
       - k --》 向上走一行
       - gg --》 最顶端
       - G --》 最底端
       - /搜索内容 --》 查找搜索内容
       - n --》 查看下一个匹配的
       - u --》 查看上一个匹配的
       - q --》 退出
       
    - vim的模式操作
       - i --》 编辑模式
       - ESC --》普通模式
       - : --》 命令模式
    - Linux Bash 快捷键
    
- ### Git操作
     - #### git的工作流程
     git分为工作区 --add--》 暂存区 --commit--》 仓库区。  
     当文件提交至仓库区，文件当前的版本即被存档，于是，多次的提交就会产生历史提交记录。根据历史提交记录，文件可以回退到任意一个历史记录的版本。  
     - #### git bash 命令分类（本地）
        - 新建代码仓库
           - git init  
           在当前目录新建一个Git代码库
           - git clone [url]  
           下载一个项目和它的整个代码历史
        - 添加删除文件
           - git add [file1] [file2]  
           添加指定文件到<font color=#00ffff>暂存区</font>
           - git rm [file1] [file2]  
           删除<font color=#00ffff>工作区</font>文件，并且将这次删除放入暂存区
           - git mv [file-origin] [file-renamed]  
           改名文件，并且将这个改名放入<font color=#00ffff>暂存区</font>
        - 代码提交
           - git commit -m [message]  
           提交暂存区到仓库
           - git commit -a -m [message]  
           直接从工作区提交到仓库  
           前提该文件已经有仓库中的历史版本
        - 查看信息类
           - git status  
           显示变更信息
           - git log
           - git log --oneline  
           显示当前分支的历史版本
           - git show [hash of file]  
           查看一个文件
        - 同步远程仓库
           - git remote add [shortname] [url]  
           增加远程仓库，并命名
           - git push [remote] [branch]  
           将本地的提交推送到远程仓库
           - git pull [remote] [branch]  
           将远程仓库的提交拉下到本地
           - git remote -v  
           查看是否和其他仓库建立连接
           - git clone [url]  
           克隆远程仓库里的东西到本地
     - #### git练习地址
        - https://try.github.io
        - 使用nodeJS安装Git-it  
        命令： npm install git-it -g;

---


## 第二章 Git进阶

#### git的四个区，5个状态

##### 四个区
  + 工作区 working area
  + 暂存区 stage
  + 本地仓库 local Repository
  + 远程仓库 remote repository
  
##### 五个状态
  + 未修改 origin
  + 已修改 modified & 未追踪 untracked
  + 已暂存 staged
  + 已提交 committed
  + 已推送 Pushed
  
可参考 [一张图看明白Git的四个区五种状态](https://geektutu.com/post/git-four-areas-five-states.html)

  #### git 图形界面工具 -- GIT GUI

   - GUI工具
      - GIT GUI
        启动方式：
          - 点击 Git GUI 图标
          - 在 Git Bash 中输入 `gitk`

        打开界面，选择一个仓库进入，得到下图 

        ![GIT GUI](image/gitgui.png)

        图中操作按钮含义如下：
          - Rescan 重新扫描，即刷新
          - Stage Changed 将工作区的文件提交到暂存区，即git add
          - Sign Off 提交到仓库时所带的备注
          - Commit 将暂存区的文件提交到仓库
          - Push 提交到远程仓库

      - SOURCE TREE

        这是一个开源的，轻量的，免费的GUI工具。 [sourcetree](https://www.sourcetreeapp.com/)。  

        点击文件状态就可以查看工作区和暂存区，以及相关操作。点击日志/历史可是查看git log。

      - EGit

        EGit 是 HBuilder 或者 IDE Eclisp 的一个插件。

  #### Git配置

    - gitignore
        
        格式：纯文本  
        
        在git仓库里放一个`.gitignore`文件，告诉git每次在git staged的时候，把.gitignore下的所包含的文件忽略。
      

    - 换行
    - 别名
    - 凭证



      
