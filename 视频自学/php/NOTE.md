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
    `var_dump($var)` 打印变量同时可以查看变量类型。  
    `print_r($var)` 打印变量，但没有变量类型。
    `unset($var)` 删除 `$var`。
    - #### 整数  
        声明一个整形 : `$a = 10`。可以直接输入其他进制如  

        ```php
            $a = 020; //16
            $b = 0x20; //32
        ```
    - #### 字符串  
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
    - #### 布尔型

        ```php
            $a = true;
            var_dump($a);
        ```
    - #### 对象类型 object

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
    - #### 资源类型(resource)  
        php中常用的资源类型有：控制文件的，链接数据库的等等

        ```php
            $fp = fopen("./file_src","r");
            var_dump($fp); //resource(3) of type (stream)
        ```
    - #### 数组类型
        
        ```php
            $a = array(1,2,3);
            var_dump($a);
        ```
    - #### 浮点型

        ```php
            $a = 2;
            $a = -2;
            $a = 2e2;
        ```
    - #### NULL
        + 变量未设置
        + 变量设置了没有赋值
        + 变量被显性的赋予NULL

        ```php
            $a = null;
            var_dump($a);
        ```
4. ### 变量的变量，变量的引用，常量
    - #### 变量的变量  
    对于变量嵌套变量，会逐层解析。
    ```php
        $h = 'hello';
        $hello = 'hi';
        echo $h; // hello
        echo $$h; //hi
    ```
    - #### 变量的引用  
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
    - #### 常量  
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
    
6. ### 流程控制
    - #### 分支语句

        ```php
            if($condition){
                //todo ...
            }else if($condition){
                //todo ...
            }else{
                //todo ...
            }

            switch($var){
                case 'a':
                //todo ...
                break;
                case 'b':
                //todo ...
                break;
            }
        ```
    - #### 循环语句

        ```php
            //-for------------------
            $sum = 0;
            for($i = 1;$i <= 100; $i++ ){
                $sum += $i;
            }
            //-do-while-------------------
            $a = 0;
            $ind = 1;
            do{
                $a += $ind;
                $ind ++;
            }while($ind <= 100)

            //-while--------------------
            while($ind <= 100){
                $a += $ind;
                $ind ++;             
            }
        ```
    - `break`和`continue`

7. ### 类型测试函数
    - 检测是否整型  
        `is_int()`, `is_long()`, 'is_integer()'
    - 检测是否浮点数  
        `is_float()`(单精度的浮点数), `is_real()`(is_float的别名), `is_double()`(双精度的浮点数)
    - 检测是否字符串  
        `is_string()`
    - 检测是否数组  
        `is_array()`
    - 检测是否对象  
        `is_object()`
    - 检测是否资源  
        `is_resource()`
    - 检测是否布尔型  
        `is_bool()`  
    - 检测是否 `null`  
        `is_null()`   
    - 检测是否是数值(比如 10, "10")  
        `is_numeric()`  

8. ### 表单提交  
    `header(Location:success.php)` 跳转到 success.php 页面
    - php 如何收集表单所提交的数据？  
        使用超级全局变量, `$_GET`,`$_POST`; `$_REQUEST` 可以同时接受 `$_GET` 和 `$_POST` 所接受到的变量。  
        + `get`方法 `$_GET`

            ```html
                <form action="" method="get">
                    <input type="text" name="user">
                    <input type="submit" value="submit">
                </form>
                <?php
                    echo $_GET['user'];
                ?>
            ```
        + `post`方法 `$_POST`

            ```html
                <form action="" method="post">
                    <input type="text" name="user">
                    <input type="submit" value="submit">
                </form>
                <?php
                    echo $_POST['user'];
                ?>
            ```
        + `post`与`get`的区别
            * post 提交比 get 更加安全，因为 get 提交会在地址栏显示提交内容。
            * post 提交比 get 所能提交的数据更大，在 php.ini 中可以通过 `post_max_size` 可以设置。  
                ![](image/POST_size.png)
            * post 提交会刷新页面。      
            
9. ### 函数定义 & 执行流程
    - #### 函数的定义
        + 语法
            
            ```php
                function fun_name([arg1,arg2...]){
                    //todo...
                }
            ```
        + 例：输入 n 行 n 列表格
            
            ```php
                function outTable($row,$column){
                    echo "<table>";
                    for($i = 0;$i < $row; $i++){
                        echo "<tr>";
                        for($j = 0;$j < $column; $j++){
                            echo "<td> $i - $j </td>";
                        }  
                        echo "</tr>";                  
                    }
                    echo "</table>";
                }
                outTable(3,3);
            ```

        + 特性  
            * 函数中 `return` 后面的语句不会执行
            * 函数被调用完后会返回调用函数的地方
    - #### 函数执行流程   
        ![](image/function_run_flow.png)   
        上图中的 4 个函数 `fn1`, `fn2`, `fn3`, `fn4`   都会被执行到，而且会执行完毕后会返回上一个函数的作用域中。
        
10. ### 变量作用域
    - #### 局部变量作用域  
        - 函数中定义的变量叫局部变量，局部变量，外部是不可以范围的。
        - 局部变量在函数调用完毕后会被释放。
        - 函数外定义的变量，函数是不可以访问的
            
            ```php
                $sum = 0;
                function add($num){
                    $sum += $num;
                    return $sum;
                }
                echo add(5);//报错,Notice: Undefined variable: sum in D:\XAMPP\htdocs\Testtt\New folder\function.php
            ```

    - #### `global` 关键字  
        使用 `global` 关键字来声明变量，可以使得变量称为全局变量。全部变量只有在 **程序运行结束才会被销毁**。

        ```php
            function add($num){
                global $sum;
                $sum += $num;
                return $sum;
            }
            add(5); //5
            add(5); //10
            add(5); //15
        ```

        就算使用 `global` 关键字把一个变量变为全局变量，下一次再另一个函数中使用的时候，还是要使用 `global` 函数进行声明。  

        ```php
            function add($num){
                global $sum;
                $sum += $num;
                return $sum;
            }
            add(5);
            add(5);
            function show(){
                //echo $sum; 
                //错误, Undefined variable: sum in D:\XAMPP\htdocs\Testtt\New folder\function.php
                //使用如下
                global $sum;
                echo $sum;
            }
            show();
        ```
    - #### 静态 ( `static` ) 变量  
        使用 `static` 关键字把变量变成静态变量。其特点
        + 一次初始化( 赋值 )
        + 数据会被共享
        + 变量在函数调用完毕后不会被释放
        
        ```php
            function add($num){
                static $sum;
                $sum += $num;
                return $sum;
            }
            echo add(5);
            echo add(5);
        ```

11. ### 引用传参, 默认参数, 可变参数
    - 变量引用传参
        引用传参传递的是指针，可以改变指针所指向内存里的东西。而值传递传递的是值，会在函数内开辟另外一个内容空间去存储值；之后值得改变就与所传递的变量无关。

        ```php
            $a = 10;
            $b = 11;
            //值传递
            function deliveryValue($n1,$n2){
                $temp = $n1;
                $n1 = $n2;
                $n2 = $temp;
            }
            deliveryValue($a,$b);
            echo $a; //10
            echo $b; //11
            //引用传递
            function deliveryAdress(&$n1,&$n2){
                $temp = $n1;
                $n1 = $n2;
                $n2 = $temp;
            }
            deliveryAdress($a,$b);
            echo $a; //11
            echo $b; //10

        ```
    - 函数参数默认值
        给函数设定默认值,凡是没有默认值得函数必须传参。且传参的顺序与设定的形参的顺序一致；所以默认参数都放后面。

        ```php
            function aa($a, $b, $c= "30", $d=1){
                echo $c;
            }
            aa(2,6,7);
            aa(1,5,3);
        ```
    - 可变参数( 参数求和 )  
        `count()` 该函数是计算数组的长度的。  
        在 `javascript` 中有 `arguments` 这个参数表示函数所接受到的参数，是一个数组( `array` )。  
        而 `php` 中也有一个函数起到 `arguments` 的功能: `func_get_args()`;  
        只取一个传入的参数，给该函数传入一个下标: `func_get_arg($position)`;  
        获取到传递给函数参数的个数: `func_num_args()`;  

        ```php
            function add(){
                $args = func_get_args();
                print_r($args);

                $sum = 0;
                $sum1 = 0;
                for( $i = 0; $i < count( $args ); $i++){
                    $sum += $args[$i];
                    $sum1 += func_get_arg($i);
                }
                echo $sum;
                echo $sum1;
            }
            add(10,20,50,30);//array:10,20,50,30


        ```

    - 回调函数
        回调函数就是把函数当做参数传递给另一个函数。

        ```php
            function aa(fn){
                if(fn()){
                    echo 1;
                }else if(fn()){
                    echo 2;
                }
            }

            function isEvent(){
                return floor(random()*100) % 2 === 0;
            }

            $fn = 'isEvent';
            aa($fn);
        ```

    - 递归  
        自己调用自己的函数叫做递归。
        
        ```php
            function showNum( $n ){
                echo $n . "\t";
                if($n > 0){
                    showNum($n - 1);
                }else{
                    echo "<------->";
                }
                echo $n . "t";
            }

            showNum(3) // 3 2 1 0 <-------> 0 1 2 3 
        ```
        
        斐波拉切数列: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

        ```php
            function showFei( $n ){
                if( $n < 2 ){
                    return 1;
                }else{
                    return showFei( $n - 1 ) + showFei( $n - 2 );
                }
            }
            showFei( 1 );
            showFei( 3 );
        ```

        阶乘: n!;  3! = 3 * 2 * 1;
        ```php
            function mul( $n ){
                if( $n == 1){
                    return 1;
                }else{
                    return $n * mul( $n -1 );
                }
            }
            echo mul(3);
        ```

    - `require` 和 `include`
    - 可替换的流程控制结构


12. ### 
