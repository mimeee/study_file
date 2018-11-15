- ###  animation & transition & transform
---
- 题目: 在CSS3中要使元素由一种样式转换成另一种样式，怎么实现
- 解答: 
    + `animation`
        产生一个动画效果
        * 创建一个动画 @keyframe
        * 将动画绑定在某个 CSS 样式中
        * 动画具有的属性
            - `@keyframes`
            - `animation-name` 动画的名称
            - `animation-duration` 持续时间
            - `animation-timing-function` 时间曲线
            - `animation-delay` 何时开始
            - `animation-iteration-count` 动画播放的次数
            - `animation-direction` 规定动画下一个周期是否逆向的播放
            - `animation-play-state` 规定动画是否正在运行或者终止
            - `animation-fill-mode` 规定动画初始和结束时候的状态
        *  在 javascript 使用 `animationend` 事件监听动画是否完成
    + `transition`
        当一个样式过度到另一个样式的时候添加效果，其属性有
        * `transition-property` 需要过度的 CSS 样式
        * `transition-duration` 持续时间
        * `transition-timing-function` 时间曲线(ease)
        * `transition-delay` 过渡效果何时开始
        * 在javascript中可以监听 `transitionend` 事件来知道过度结束
    + `transform`  
     `transform` 转换可以分为 2D 转换和 3D 转换
        * `matrix( n,n,n,n,n,n )`
        * `translate( x,y )` 移动元素
        * `translateX( n )`
        * `translateY( n )`
        * `scale( x,y )` 改变元素的高度和宽度
        * `scaleX( n )`
        * `scaleY( n )` 
        * `rotate( angle )` 旋转
        * `skew( x-angle,y-angle )` 倾斜旋转
        * `skewX( angle )`
        * `skewY( angle )` 
        * 还有一系列转换的 3D 方法
            - `rotate3d( x,y,z,angle )` 
- [示例](animation&transition&transform.html) 

    
- ###  margin & padding
---
- 题目: margin-top, padding-top 的值是百分值得时候如何计算
- 解答: margin 和 padding 使用百分号设置都是基于其最近的父元素的 **width** 来确定的， 如果父元素没有设定 **width**，则使用父元素计算出来的 **width** (不管是 margin-top,margin-bottom,margin-left,margin-right)(padding也是同理)。
> 来自 《CSS权威指南》 的解释
> 我们认为，正常流中的大多数元素都会足够高以包含其后代元素(包括外边距)，如果一个元素的上下边距为父元素的height的百分数，就可能导致一个无限循环，父元素的height会增加，以适应后代元素的上下外边距，而相应的，子元素的上下外边距就会因为父元素的height改变而改变，从而形成循环。  
- [示例](margin&padding.html)

- ### DTD( Document Type Definition )
---
- 解释: 文档类型定义，为了进行程序见的数据交换而建立的关于标记符的语法规则。比如 
    ```
        <?xmlversion="1.0"?>
        <!DOCTYPE note [
        <!ELEMENT note (to,from,heading,body)>
        <!ELEMENT to (#PCDATA)>
        <!ELEMENT from (#PCDATA)>
        <!ELEMENT heading (#PCDATA)>
        <!ELEMENT body (#PCDATA)>
        ]>
        <note>
        <to>Tove</to>
        <from>Jani</from>
        <heading>Reminder</heading>
        <body>Don't forget me this weekend</body>
        </note>
    ```
就是以标签的形式表达内容( 如XML和HTML )。其包括元素、属性、实体(如`&ensp;`)、PCDATA( parsed character data，标签开始和标签结束之间的文本)、CDATA(character data，不会被解析的文本)。

- ###  盒子模式
---
- 题目: 什么是盒子模式
- 解答: 盒子模型就是表示 HTML 中一个元素，其有 `margin + padding + border + content-width` 来构成。  
在 W3C 标准中，盒子的 width = margin + padding + border + content-width, 而对元素的 width 设置指定的值，只是设定了盒子中的 content-width 的宽度，其总宽度还需要在计算。   
在 IE 之前的怪异模式下，设置元素的 width，就是指定了盒子中的 content-width + padding + border。 
- ![示例图](image/box_pic.png)














- ###  animation & transition & transform
---
    + 题目: 在CSS3中要使元素由一种样式转换成另一种样式，怎么实现
    + 解答:

- ###  animation & transition & transform
---
    + 题目: 在CSS3中要使元素由一种样式转换成另一种样式，怎么实现
    + 解答:
