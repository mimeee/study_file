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
    - #### 变量引用传参  
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
    - #### 函数参数默认值   
        给函数设定默认值,凡是没有默认值得函数必须传参。且传参的顺序与设定的形参的顺序一致；所以默认参数都放后面。

        ```php
            function aa($a, $b, $c= "30", $d=1){
                echo $c;
            }
            aa(2,6,7);
            aa(1,5,3);
        ```
    - #### 可变参数( 参数求和 )  
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

    - #### 回调函数  
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

    - #### 递归  
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

    - #### `require` 和 `include` 和 `require_one` 和 `include_one`   
        `require` 和 `include` 都是引用文件。他们的 **区别**是：当所包含的文件找不到时， `require` 所报的错误是致命错误，同时终止文件执行。 `include` 是报警告，后面代码仍可以执行。  
        **相同点** : 重复包含都会报致命错误。可考虑使用 `require_once`, `include_once`。

    - #### 可替换的流程控制结构  
        ```php
            if($a > 30){
                echo "大于30";
            }else if( $a > 20 ){}
                echo "大于20";
            }else{
                echo "不大于";
            }

            //可替换的流程控制结构
            //if
            if( $a > 30 ):
                echo "大于30";
            elseif( $a > 20):
                echo "大于20";
            else:
                echo "不大于";
            endif;
            //for
            for( $i = 0; $i < 100; $i++):
                echo $i;
            endfor;
            //while
            while( $i < 100):
                echo $i;
                $i++;
            endwhile;
            //switch
            switch (variable) 
                case '20':
                    echo "20";
                    break;               
                default:
                    echo "default";
                    break;
            endswitch;
        ```


12. ### 数组的定义
    - #### 什么是数组   
        数组是内容中一块用来存储数据的连续区域。分为：数组索引、 关联索引。 数组的索引是惟一的。
        + 数组索引
            
            ```php
                //1 
                $arr = array(10,20,30);
                print_r($arr); //Array ( [0] => 10 [1] => 20 [2] => 30 )

                //2
                $arr = array(0 => 10, 1 => 20, 2 => 30);
                print_r($arr); //Array ( [0] => 10 [1] => 20 [2] => 30 )

                //3
                $arr = array(3 => 10, 1 => 20, 2 => 30);
                print_r($arr); //Array ( [3] => 10 [1] => 20 [2] => 30 )

                //4,空索引一定是数组索引，而且判断其索引要看前面最大索引然后再加 1。
                $arr[] = 10;
                $arr[] = 20;
                $arr[] = 30;
                print_r($arr); //Array ( [0] => 10 [1] => 20 [2] => 30 ) 

                //5
                $arr[10] = 10;
                $arr[6] = 20;
                $arr[] = 30;
                print_r($arr); //Array ( [10] => 10 [6] => 20 [11] => 30 ) 

                //读取 与 修改
                $arr = array(10,20,30);
                echo $arr[1]; //20
                $arr[1] = 50;
                echo $arr[1]; //50
            ```

        + 关联索引

            ```php
                //1
                $userInfo = array(
                    "father" => "hehe",
                    "son" => "heihei",
                    "grandFather" => "haha",
                    "grandSon" => "gege",
                );

                //2
                $arr['father'] = 'hehe';
                $arr['son'] = 'heihei';
                $arr['grandFather'] = 'haha';
                $arr['grandSon'] = 'gege';

                //3,关联数组和索引数组可以混写
                $userInfo = array(
                    "hehe",
                    "heihei",
                    "grandFather" => "haha",
                    "grandSon" => "gege",
                );
            ```
    - #### 二维数组
        
        ```php
            //1
            $userInfo = array(
                0 => array(10,20,30),
                1 => array(40,50,60),
                2 => array(70,80,90)
            )

            //读取
            echo $user[0][0]; //10

            //修改
            echo $user[0][0] = 100; //100

            //删除
            unset($userInfo[0][0]);
        ```

13. ### 数组遍历
    - `for` 循环
    - `foreach` 循环( 类似于 `javascript` 的 `for..in..`)  
        `foreach($arr as $key => $value){}` 其中这个 `as` 表示把指针指向 `$arr` 的最开始。
    - `each()` 函数
        `each()` 循环会将该数组按数值索引和关联索引分为 `key` 和 `value` 返回；同时指针下移。当遍历完后，如果不用 `reset` 重置数组指针，则返回 `fasle`。

        ```php
            $arr = array(
                'morning' => '早上',
                'afternoon' => '下午',
                'night' => '晚上'
            );
            $temp = each($arr);
            print_r($temp);//Array ( [1] => 早上 [value] => 早上 [0] => morning [key] => morning ) 

            $temp = each($arr);
            print_r($temp); //Array ( [1] => 下午 [value] => 下午 [0] => afternoon [key] => afternoon ) 
        ```

    - `reset($arr)`
        重置 `$arr` 数组内部的指针的位置。

    ```php
            $arr = array(
                'morning' => '早上',
                'afternoon' => '下午',
                'night' => '晚上'
            );
            $temp = each($arr);
            print_r($temp);//Array ( [1] => 早上 [value] => 早上 [0] => morning [key] => morning ) 
            reset($arr);
            $temp = each($arr);
            print_r($temp); //Array ( [1] => 早上 [value] => 早上 [0] => morning [key] => morning )
    ```

    - `list()`
        接受 `key` 和 `value` 的值，可使用该函数把他们重新拼凑成关联数组

        ```php
            $arr = array(
                'morning' => '早上',
                'afternoon' => '下午',
                'night' => '晚上'
            );
            $temp = each($arr);
            print_r($temp);//Array ( [1] => 早上 [value] => 早上 [0] => morning [key] => morning ) 
            
            unset($temp['key']);//这里是为了说明 list 接收的是 索引为 0 和 1 的值；
            
            list($k , $v) = $temp;
            print_r($k); //morning
            print_r($v); //早上


            //遍历数据
            reset($arr);
            $temp = each($arr);
            list($k , $v) = $temp;
            echo $k . '--->' . $v; //morning--->早上
            $temp = each($arr);
            list($k , $v) = $temp;
            echo $k . '--->' . $v; //afternoon--->下午
            $temp = each($arr);
            list($k , $v) = $temp;
            echo $k . '--->' . $v; //night--->晚上

            //遍历数据
            while(list($k , $v) = each($arr)){
                echo $k . '--->' . $v;
            }
        ```


14. ### 数组常用函数
    - `array_values($arr)`  
        返回数组中所有的值，并且给其重建数字索引( 从 0 开始 )

        ```php
            $arr = array(
                'morning' => '早上',
                'afternoon' => '下午',
                'night' => '晚上'
            );
            print_r($arr); //Array ( [morning] => 早上 [afternoon] => 下午 [night] => 晚上 )
            print_r(array_values($arr)); //Array ( [0] => 早上 [1] => 下午 [2] => 晚上 ) 
        ```

    - `array_keys($arr,[$value,[search_pattern]])`   
        返回数组中所有或者部分的键，并且给其重建数字索引( 从 0 开始 ); 如果传入第二参数 `$value` 只返回 `value = $value` 的键

        ```php
            $arr = array(
                'morning' => '早上',
                'afternoon' => '下午',
                'night' => '晚上'
            );
            print_r($arr); //Array ( [morning] => 早上 [afternoon] => 下午 [night] => 晚上 )
            print_r(array_keys($arr)); //Array ( [0] => morning [1] => afternoon [2] => night ) 
            print_r(array_keys( $arr, '晚上' )); //Array ( [0] => night )
        ```

    - `sort()` , `rsort()` 改变索引   
        `sort()` 从小到大  
        `sort()` 从大到小

    - `asort()` , `arsort()` 保留索引   
        `sort()` 从小到大  
        `sort()` 从大到小

        ```php
            $arr = array(10,5,0,9,33,5,4,0,55);
            sort($arr);
            print_r($arr);//Array ( [0] => 0 [1] => 0 [2] => 4 [3] => 5 [4] => 5 [5] => 9 [6] => 10 [7] => 33 [8] => 55 ) 
            rsort($arr);
            print_r($arr);//Array ( [0] => 55 [1] => 33 [2] => 10 [3] => 9 [4] => 5 [5] => 5 [6] => 4 [7] => 0 [8] => 0 ) 
        ```

    - `in_array()`  
        查看某个值是否在数组中,区分大小写，可使用函数 `strtolower()` 转换成小写； 或者 `strtoupper()` 转换成大写。   

        ```php
            $arr = array('jpg', 'png', 'jpeg', 'gif');
            $fileName = 'test.jpg';
            list($name, $ext) = explode('.', $fileName);// $name = test, $ext = jpg
            if(in_array($ext, $fileName)){
                echo 'ok';
            }
        ```

    - `array_reverse()`   
        将数组反转  

        ```php
            $arr = array(10,50,30);
            print_r(array_reverse( $arr ));//Array ( [0] => 30 [1] => 50 [2] => 10 ) 
        ```
        
    - `count($arr,[$all_lenght])`   
        返回数组长度

        ```php
            $arr = array(
                10 => array( 2,5,8 ),
                20 => array( 2,5,8 ),
                30 => array( 2,5,8 )
            );
            print_r(count( $arr )); //3
            print_r(count( $arr, true )); //12,包括了一位数组的项数和一维数组里的数组的项数。
        ```
        
    - `array_count_values()`   
        统计值重复出现的次数
        
        ```php
            $arr = array(10,20,10,10,30,30,50,10,90);
            print_r(array_count_values($arr));//Array ( [10] => 4 [20] => 1 [30] => 2 [50] => 1 [90] => 1 )  10出现4次，20出现1次....


            //一个与之功能一样的自己写的函数
            $newArr = array();
            foreach( $arr as $k => $v){
                if(!isset( $newArr[$v] )){
                    $newArr[$v] = 1;
                }else{
                    $newArr[$v]++ ;
                }
            }
        ```
    - `range($start, $end,[number $step = 1 ])`   
    生成一段范围的数值,类似于 `for` 循环  
        
        ```php
            print_r(range(1,20));//Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5 [5] => 6 [6] => 7 [7] => 8 [8] => 9 [9] => 10 [10] => 11 [11] => 12 [12] => 13 [13] => 14 [14] => 15 [15] => 16 [16] => 17 [17] => 18 [18] => 19 [19] => 20 ) 
        ```

    - `array_unique()`   
        数组去重复  

        ```php
            $arr = array(10,20,10,10,30,30,50,10,90);
            print_r(array_unique($arr)); //Array ( [0] => 10 [1] => 20 [4] => 30 [6] => 50 [8] => 90 ) 
        ```
        
    - `array_filter( array $array [, callable $callback [, int $flag = 0 ]])`  
        数组过滤  
        ```php
        $entry = array(
             0 => 'foo',
             1 => false,
             2 => -1,
             3 => null,
             4 => ''
          );

        print_r(array_filter($entry));//Array ( [0] => foo [2] => -1 ) 


        // 传入function
        function odd($var){
            // returns whether the input integer is odd
            return($var & 1);
        }
        function even($var){
            // returns whether the input integer is even
            return(!($var & 1));
        }
        $array1 = array("a"=>1, "b"=>2, "c"=>3, "d"=>4, "e"=>5);
        $array2 = array(6, 7, 8, 9, 10, 11, 12);

        echo "Odd :\n";
        print_r(array_filter($array1, "odd"));// Array ( [a] => 1 [c] => 3 [e] => 5 ) 
        echo "Even:\n";
        print_r(array_filter($array2, "even"));//Array ( [0] => 6 [2] => 8 [4] => 10 [6] => 12 ) 


        ```
        
    - `array_walk()`   
        使用用户自定义函数对数组中的每个元素做回调处理，返回 `bool`

        ```php
            $arr =array("hehe"=>"xiao","wawa"=>"ku");
            function show($v, $k){
                echo $v . "---->" . $k;
            }            
            array_walk($arr,"show");//xiao---->heheku---->wawa
        ```
        
    - `array_slice()`  
        
        ```php
        ```
        
    - `array_merge()`  
        合并两个数组

        ```php
            $arr1 = array( 10,20,30 );
            $arr2 = array( 30,50,60 );
            //重复的值不会产生覆盖
            $arr3 = array_merge($arr1, $arr2);
            print_r( $arr1 ); //Array ( [0] => 10 [1] => 20 [2] => 30 )
            print_r( $arr2 ); //Array ( [0] => 40 [1] => 50 [2] => 60 ) 
            print_r( $arr3 ); //Array ( [0] => 10 [1] => 20 [2] => 30 [3] => 30 [4] => 50 [5] => 60 ) 
        ```
        
    - `array_push()`  
        压栈( 最后一项 )
        
    - `array_pop()`  
        出栈( 最后一项 )
        
    - `array_shift()`  
        出栈( 最前一项 )
        
    - `array_unshift()`  
        压栈( 最前一项 )

    - `array_rand($arr , $n)`  
        从一个数组中随机 n 数出来。

        ```php
            $array = array(10,2,030,5855,9,63,25,45,2);
            $newArr = array_rand($array , 3); //Array ( [0] => 2 [1] => 3 [2] => 7 ) ,Array ( [0] => 1 [1] => 5 [2] => 6 ) ,....
        ```

    - `shuffle()`  
        打乱一个数组

        ```php
           $arr = array( 10,20,30 );
           print_r($arr); //Array ( [0] => 10 [1] => 20 [2] => 30 )
           shuffle($arr); 
           print_r($arr); //Array ( [0] => 10 [1] => 30 [2] => 20 ) 
        ```

    - `array_sum()`  
        数组求和       

15. ### 练习
    - [表单输出素数](practice/FormOutPutPrime.php)
    - [冒泡算法](practice/BubbleAlgorithm.php)
        + 原理  
        ![冒泡算法](image/BubbleAlgo1.png)  
        ![冒泡算法](image/BubbleAlgo2.png)  
        ![冒泡算法](image/BubbleAlgo3.png)  
        + 特点  
            每一次比较都会调换数组里的值。
    - [选择算法](practice/SelectionAlgorithm.php)
        + 原理  
        ![选择算法](image/SelectionAlgo.png)  
        + 特点   
           确定为最小(大)值才调换数组里的值。
        + 与冒泡算法比较  
            由于不是每次比较都交换数组里面的值，其性能会比冒泡算法好。但是开辟了另外一块内存来存储变量。所以内存的暂用会比冒泡算法多。
    - [分页原理](practice/Pagination.php)  
         从 url 中显示的 页码page, 选取从 page 后的 n(pagesize)条数据。  
         ![](image/Pagination.png)

16. ### [三维数组的遍历](practice/traverseThreeDimenArr.php)
    
17. ### [列表查看方式](practice/Pagination.php)

18. ### 字符串函数
    - `print`
        打印字符串
    - `echo`
        打印字符串
    - `die`
        终止运行
    - `exit`
        终止运行
    - `trim`
        删除两端的空格 
    - `rtrim`,`ltrim`
        删除左边或者右边的空格
    - `str_pad`
        + 使用另一个字符串填充字符串为指定长度
        + 语法 `string str_pad(string $input,int $pad_length[,string $pad_string = "" [,int $pad_type = STR_PAD_RIGHT]])`
        + 示例
            ```php
                $string = 11111;
                echo str_pad($string, 7, "a"); //11111aa
                echo str_pad($string, 7, "a", STR_PAD_LEFT); //aa11111
            ```

    - `strtolower`
        转化成小写
    - `strtoupper`
        转化成大写
    - `ucfirst`
        首字母大写
    - `ucwords`
        每个单词首字母大写
    - `htmlspecialchars`
        不解释 html 标签(实体)，并且在页面中显示该标签 
    - `strip_tags`
        不解释 html 标签(实体)，并且不在页面中显示该标签 
    - `strrev`
        反转字符串
    - `md5`
        加密方法, 加密的字符串是唯一的，且不可逆。
    - `explode`
        切割字符串
    - `implode`
        合并数组
    - `strstr`
        查找字符串的首次出现，返回该字符串以后的所有字符串，查到即停止。
    - `strpos`
        查找字符串的首次出现，返回索引，查到即停止,从前往后找。
    - `strrpos`
        查找字符串的首次出现，返回索引，查到即停止,从后往前找。
    - `substr`
        截取字符串
    - `str_replace`
        替换字符串
    - `chr`
        Acsii 码转字符
    - `ord`
        字符转 Acsii 码

19. ### 正则表达式
    -  `preg_match`     
        + 执行一个正则表达式匹配,搜索 `subject` 与 `pattern` 给定的正则表达式的一个匹配。匹配到即返回。    
        + 参数: `string $pattern,string $subject [, array &$array [, int $flags = 0 [, int $offset = 0]]]`

    - `preg_match_all`  
        与上面的 `preg_match` 一样，但是是全局匹配。

    - `preg_replace`  
        + 执行一个正则表达式的搜索和替换  
        + 参数: `mixed $pattern , mixed $replacement , mixed $subject [, int $limit = -1 [, int &$count ]]`   
        + 例子:   
        ```php
            $string = 'April 15, 2018';
            $pattern = "(\w+) (\d+), (\d+)/i";
            $replace = "${1}1,$3";
            echo preg_replace($pattern,$replace,$string); //April1,2018


            $date = "Jan 1 2015";
            $pattern2 = '(\w+) (\d+) (\d+)';
            echo preg_replace($pattern,'\\1 \2 2016',$date); // Jan 1 2016
        ```

    - `preg_replace_callback`
        + 执行一个正则表达式，并且使用一个回调进行替换
        + 参数: ` mixed $pattern , callable $callback , mixed $subject [, int $limit = -1 [, int &$count ]]`
        + 练习: 
            * 敏感词过滤 ( `/^[\x{4e00}-\x{9fa5}]+$/u` )
                - 上述 `pattern` 中， `\x` 代表 十六进制， `u` 表示模式字符串被认为是 `utf-8` 编码的。
                
                ```php
                    $string = "hehehnimadeddd,a nimade,haha hahahahha,nimade";

                    $pattern = "/nimade/";
                    $line = preg_replace_callback(
                        $pattern,
                        function( $one ){
                            $str = "";
                            for($i = 0;$i < strlen($one[0]); $i++){             
                                $str .= "*";
                            }
                            return $str;
                        },
                        $string
                    );
                    echo $line; //heheh******ddd,a ******,haha hahahahha,******


                    $string = "你好";
                    var_dump(preg_match("/[\x{4e00}-\x{9fa5}]/u",$string,$match));
                    print_r($match); //Array ( [0] => 你 ) 
                ```

            * 标签过滤
                - 关键在于遏制贪婪,遏制贪婪可以使用修正符 `U`,或者在遏制的地方加上 `?`
                ```php
                    $string = "<b>ha\<hha</b><b>hehehe</b>";
                    $pattern = "/<[^>]+>(.+?)<\/[^>]+>/";
                    //或者$pattern = "/<[^>]+>(.+)<\/[^>]+>/U";
                    preg_match($pattern,$string,$match);
                    print_r($match[1]);//ha\<hha
                ```
    - 预搜索:预搜索是一个非获取匹配，不进行存储供以后使用。
        + 正向:   
          `(?=xxxxx)`:所在缝隙的右侧，必须能够匹配上 `xxxxx` 这部分的表达式;  
          `(?!xxxxx)`:所在缝隙的右侧，必须不能匹配 `xxxxx` 这部分表达式  
        + 反向:   
          `(?<=xxxxx)`:所在缝隙的 "左侧”能够匹配xxxxx部分;  
          `(?<!xxxxx)`:所在缝隙的“左侧”不能匹配xxxx部分。  


          ```php
            $str = 'windows NT windows 2003 windows xp';
            $pattern = "/windows (?=xp)/";
            preg_match_all($pattern,$str,$match);
            print_r($match);
            //Array ( [0] => Array ( [0] => windows(windows xp中的windows) ) )
             
            $str = 'windows NT windows 2003 windows xp';
            $pattern = "/windows (?!xp)/";
            preg_match_all($pattern,$str,$match);
            print_r($match);
            //Array ( [0] => Array ( [0] => windows(windows NT中的windows) [1] => windows(windows 2003中的windows) ) ) 
            
            $str = 'windows NT windows 2003 windows xp';
            $pattern = "/windows (?<=xp)/";
            preg_match_all($pattern,$str,$match);
            print_r($match);
            //Array ( [0] => Array ( ) ) 
            
            $str = 'windows NT windows 2003 windows xp';
            $pattern = "/windows (?<!xp)/";
            preg_match_all($pattern,$str,$match);
            print_r($match);
            //Array ( [0] => Array ( [0] => windows(windows NT中的windows) [1] => windows(windows 2003中的windows) [2] => windows(windows xp中的windows) ) ) 
            
            //进行存储
            $str = 'windows NT windows 2003 windows xp';
            preg_match_all('/windows ([^xp])/',$str,$res);
            print_r($res);
            //Array ( 
                //[0] => Array ( 
                    //[0] => windows N 
                    //[1] => windows 2 
                //) 
                //[1] => Array ( 子模式所匹配的字符串组成的数组，通过存储取得。
                    //[0] => N 
                    //[1] => 2 
                //) 
            //) 
          ```
    - `\b` 边界 `\B` 非边界
    - `\s` 空格 `\S` 非空格
        + 练习 
            * 去除两边的空格
            ```php
            $str = "         kaddsdkfj  kdsfjalk    ";
            echo $str;
            echo "\r\n";
            $pattern = "/^\s*|\s*$/";
            // $pattern = "/\s*\b/";  去除所有的空格
            $line = preg_replace($pattern,"",$str);
            echo $line;
            ```
    - `preg_split`  
        通过一个正则表达式分隔字符串  
        + 参数 `string $pattern , string $subject [, int $limit = -1 [, int $flags = 0 ]] `
        + 例子  

        ```php
            //使用逗号或空格(包含" ", \r, \t, \n, \f)分隔短语
            $keywords = preg_split("/[\s,]+/", "hypertext language, programming");
            print_r($keywords);           
        ```
        
    - 量词
        +  `{n}` 刚好 n 次
            ```php
                $string = "abc";
                $pattern = "/a{0}bc/";
                preg_match($pattern,$string,$matches);
                print_r($matches); //bc
            ```
        +  `{n,}` 至少 n 次
        +  `{n,m}` n 到 m 次
        +  `*` 0 次或者多次
        +  `+` 1 次或者多次
        +  `?` 0 次或者 1 次
    
    - 练习
        + 劈开 `php pro,hehe`;
            ```php
                $str = "php pro,hehe,dd";
                $pattern = "/\s|,+/";
                $keyword = preg_split($pattern, $str);
                print_r($keyword); //Array ( [0] => php [1] => pro [2] => hehe [3] => dd ) 
            ```
        + 统计字符出现最多的那个字符的次数和字符
            ```php
                $str = "fadsewfewfnkenkfenkeeeeeeeeeeeeeeeeeeeeeeese";
                $strArr =preg_split("//",$str);
                $counts =array_count_values($strArr);
                arsort($counts);
                list($k,$v) = each($counts);
                echo $k . '---' . $v;
            ```

20. ### mysql数据库入门
    - SQL(struct query language)：结构化查询语言
        + 关系型数据库
            * mysql: 企业版，集群版，社区版
            * oracle
            * sqlServer
    - NO-SQL( Not Only SQL )
        + 非关系数据库
            * redis
            * mongoDB
    - CS 类型软件( Client - Server )  
        应用软件到服务器，版本更新的话，两者都要更新。
    - BS 类型软件( Broswer - Server)  
        浏览器到服务器，版本更新的话，只需要更新服务器即可。
    - 图形化界面工具
        + [HeidiSQL](https://www.heidisql.com/) 免费
        + [SQLyou](https://www.webyog.com/)
    - 数据库引擎
        + MyISAN: 不支持事务，相对 Innodb 没有那么安全，数据相对 Innodb 小，支持全文索引。
        + Innodb: 支持事务，更安全，数据大，不支持全文索引，支持外键。
            * 外键: 如果一条记录有外键，必须先解除外键，才可以删除。
    - 简单的SQL语句
        + `SELECT * FROM user WHERE username LIKE '%z%'`  
            其中的 `%` 是占位符。 

21. ###
