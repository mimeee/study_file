- ### 内存越界
    + 题目: 处理 `a.html` 文件时，以下哪行伪代码可能导致内存越界或者抛出异常
    ```c++
        int totalBlank = 0;
        int blankNum = 0;
        int taglen = page.taglst.size();
        for(int i = 1;i < taglen - 1; ++i){
            while(page.taglst[i] == "<br>" && i < taglen){
                ++totalBlank;
                ++i;
            }
            if(totalBlank > 10){
                blankNum += totalBlank;
                totalBlank = 0;
            }
        }

        //以上代码中taglen是html文件中存在元素的个数，a.html中taglen的值是15，page.taglst[i] 取的是 a.html 中的元素。 例如 page.taglst[1] 的值是 <html>
    ```
    ```html
        <!--a.html -->
        <html>
        <title>title</title>
        <body>
        <div>aaaaaaa</div>
        </body>
        </html>
        <br>
        <br>
        <br>
        <br>
        <br>
    ```
    + 解答:
        在使用 && 符号的时候，由于其实短路返回；如 `condition_one && condition_two`, 如果 `condition_one` 的结果为真才回去判断 `condition_two`。  
        在这里 `page.taglst[i] == "<br>" && i < taglen` 会先判断 `page.taglst[i] == "<br>"` 这样就会造成溢出，并不会去判断 `i < taglen`
    + 名词解释: 
        * *内存溢出* 要求分配的内存超过了计算机可以分配的，就是系统不能满足需求
        * *内存越界*  使用一块内存的时候，内容的大小超出了申请的范围
        * *内存泄漏* 使用完内存但不归还内存，并且自己也不能再访问该块内存
        * *缓冲区溢出* 当计算机向缓冲区填充数据时，数据的长度超过了缓冲区本身的容量，移除的数据覆盖在合法数据上。
        * *栈溢出* 由于缓冲区溢出而使得有用的存储单元被改写，往往会引发不可预料的后果
