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
3. ### 整数 & 字符串类型  
    `var_dump($var)` 可以查看变量类型。  
    `unset($var)` 删除 `$var`
    - 整数  
        声明一个整形 : `$a = 10`。可以直接输入其他进制如  

        ```php
            $a = 020; //16
            $b = 0x20; //32
        ```
    - 字符串  
        `$str = 'aaa' ` 或者 `$str = "aaa"`；使用单引号或者双引号包含字符串。
        * 单引号里面的变量不会解释
        * 双引号会解释里边的变量

        ```php
            $str = "222";
            echo "hehe$str"; //hehe222
            echo 'hehe$str';//hehe$str
        ```
        * 当在双括号中引入变量时，可能会发生如下情况
        
        ```php
            $str = "hehe";
            echo "$stris not";//这是$stris 会被当成变量，导致警告$stris变量未定义
            echo "{$str}is not";//使用大括号隔离变量与字符串
        ```
        * `{}` 是边界界定符，会解释变量。
        * heredoc语法，一般用于定义多行语法
        ```php

            $str = <<< HEHEDA
                <span>tired</span>
        HEHEDA;//解释，一定要顶格写。并且后面不能接任何内容，包括空格和tag键。
            echo $str;            
        ```
    - 布尔型

        ```php
            $a = true;
            var_dump($a);
        ```
    - 对象类型 object

        ```php
            class Person{
                private $name = "张三";
                public function getName(){
                    return $this->name;
                }
            }
            $p = new Person();
            var_dump($p);//object(Person)#1(1){ ... }
        ```
    - 资源类型(resource)  
        php中常用的资源类型有：控制文件的，链接数据库的等等

        ```php
            $fp = fopen("./file_src","r");
            var_dump($fp); //resource(3) of type (stream)
        ```
    - 数组类型
        
        ```php
            $a = array(1,2,3);
            var_dump($a);
        ```
    - 浮点型

        ```php
            $a = 2;
            $a = -2;
            $a = 2e2;
        ```
    - NULL
        + 变量未设置
        + 变量设置了没有赋值
        + 变量被显性的赋予NULL

        ```php
            $a = null;
            var_dump($a);
        ```
4. ### 变量的变量，变量的引用，常量
    - 变量的变量  
    对于变量嵌套变量，会逐层解析。
    ```php
        $h = 'hello';
        $hello = 'hi';
        echo $h; // hello
        echo $$h; //hi
    ```
    - 变量的引用  
    变量的引用使用 `&`。 添加引用表示让一个变量指向另一个变量的内容。  
    `@`，看到警告,可是使用该符号来抑制警告。

    ```php
        $a = 10;
        $b = &$a;
        $a = 30;
        echo $a;//30
        echo $b;//30
        unset($a);
        echo $a;//NULL
        echo $b;//30
    ```
    - 常量  
        常量使用 `define()` 函数来定义。使用 `defined()` 函数来检测是否定义了某个常量。

        ```php
            define('STR','sleeping');
            echo STR;//sleeping,在define() 函数中有三个参数，第三个参数( case_insensitive )默认为大小写敏感。
        ```
        系统自带常量:
        * `PHP_OS` ——— php运行的服务器版本
        * `PHP_VERSION` ———— php版本
        * `__FILE__` ———— 获取到当前的执行路径
        * `__LINE__` ———— 获取到当前执行代码的行号
        
5. ### 操作符，运算符  
    `isset($var)` 检测变量是否设置，并且不是 `NULL`(就是查看变量是否为`NULL`)。    
    `empty($var)` 检查一个变量是否为空,即隐式转化为布尔值是否为 `FALSE`。  
    `error_reporting()` 设置错误等级。  
    - 算数操作符(+, -, *, /, %, ++, --)
    - 复合操作符(+=, -=, *=, /=, %=, .=)
    - 比较操作符(>, >=, <, <=, ==, ===, !=, !==)
    - 逻辑操作符(&&, ||, !)
    - 位操作符(|, &)(@, ?(3元操作符))
6. ###
