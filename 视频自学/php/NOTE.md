## PHP 系统学习笔记

1. ### php简介
    - #### php执行环境 —— web服务器
        + apache
        + nginx
        + IIS
    - #### php开发的知名产品
        + 论坛: discuz 、 phpwind
        + 商城： shopnc 、 eschop 、 shopex 、 ecore os 、 ecmall
        + 国外： magento 、 zencart 、 opencart
        + 门户： dedecms 、 phpcms
        + 博客： wp(wordpress)
2. ### php安装与简单程序编写
    - #### 环境搭建  
        php 的运行环境是在 web 服务器下的，可以选择安装一些一体化集成环境,一般包括 web服务器、php版本、数据库。  
        + [phpstudy](http://phpstudy.php.cn/)
        + [WampServer](http://www.wampserver.com/)
        + [UPUPW Nginx](http://www.upupw.net/)
        + [XAMPP](https://www.apachefriends.org/index.html)
        + [MAMP Pro for Mac](https://www.mamp.info/en/downloads/)
    - #### 运行php
        环境搭建完成后，输入localhost尽可以访问一个模拟的web服务器。
        默认会进入一个页面，这个页面有 apache 的配置文件所设定。找到 **httpd.conf** 文件，搜索 **document** 可以查看到：如下图  
        ![](image/defaultIndexConfigPosition.png)  
        + php书写方式
            * 常见写法

                ```php
                <?php
                    echo 123;
                ?>
                ```

            *  短标签写法

                ```php
                <?
                    echo 123;
                ?>
                ```
            短标签写法必须在 `php.init` 文件中，把 `short_open_tas` 设为 `on`

            * ASP style
            
            ```php
                <%
                 echo 123;
                 %>
            ```
            ASP style写法必须在 `php.init` 文件中，把 `asp_tags` 设为 `on`

            * 标签插入
                
                ```html
                    <script language="php">
                        echo 123;
                    </script>
                ```
        + php 在 html 里的混编
            
            ```html
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Document</title>
            </head>
            <body>
                <span id="span"><?php echo 123;?></span>
                <button id="btn">btn</button>
                <script>
                    var oSpan = document.querySelector("#span");
                    var oBtn = document.querySelector("#btn");

                    oBtn.onclick = function(){
                        oSpan.innerHTML = "hehe";
                    }
                </script>
            </body>
            </html>
            ```
3. 