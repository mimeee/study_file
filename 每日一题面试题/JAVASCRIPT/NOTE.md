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

---
- ### 事件冒泡与捕获
    + 事件流: js是以事件驱动来和用户进行交互的，所有有事件流的概念。事件流指的是在一个事件(click)发生的时候，事件以一个怎么样的时序来传递。IE主张的事件流是冒泡，即事件从目标向上传递；Netscape主张的是捕获，即事件从最不具体的元素向具体元素传递。在 *DOM2级事件* 中规定事件流包含三个阶段，捕获->处于目标->冒泡。绑定事件的方法也就需要传递三个参数：
        * 绑定的事件类型
        * 触发的函数
        * 选择在哪个阶段发生该事件(true->捕获阶段，false->冒泡阶段，*事件处于的目标的阶段被规定为属于冒泡阶段*)
    + 应用场景
        * 捕获 
        * 冒泡 - 事件代理
    + [示例](EventPassProcessd.html)

---
- ### HTTP状态码

---
- ### DOMContentLoaded事件
    + DOMContentLoaded 是在DOM Tree 加载完成后触发的，这个时候document(包括图片等资源)并没完全加载好。`document.addEventListenr('DOMContentLoaded',fn)`和jQuery的 `$()`,`$(document).ready()`,`$().ready()`等价。  
    但是该事件是W3C定义的，所以IE8以前不支持，低版本IE浏览器特有的doScroll方法，当dom结构没有加载完成时，调用此方法会报错，于是可以通过定时器函数不断的调用此方法，并结合try catch语句来实现判断功能。[参考](https://www.jb51.net/article/132741.htm)
    + onload 是在document文档完全加载好后触发的
