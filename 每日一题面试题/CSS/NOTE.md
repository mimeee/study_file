- ###  animation & transition & transform
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

---    
- ###  margin & padding
- 题目: margin-top, padding-top 的值是百分值得时候如何计算
- 解答: margin 和 padding 使用百分号设置都是基于其最近的父元素的 **width** 来确定的， 如果父元素没有设定 **width**，则使用父元素计算出来的 **width** (不管是 margin-top,margin-bottom,margin-left,margin-right)(padding也是同理)。
> 来自 《CSS权威指南》 的解释
> 我们认为，正常流中的大多数元素都会足够高以包含其后代元素(包括外边距)，如果一个元素的上下边距为父元素的height的百分数，就可能导致一个无限循环，父元素的height会增加，以适应后代元素的上下外边距，而相应的，子元素的上下外边距就会因为父元素的height改变而改变，从而形成循环。  
- [示例](margin&padding.html)

---
- ###  盒子模式
- 题目: 什么是盒子模式
- 解答: 盒子模型就是表示 HTML 中一个元素，其有 `margin + padding + border + content-width` 来构成。  
在 W3C 标准中，盒子的 width = margin + padding + border + content-width, 而对元素的 width 设置指定的值，只是设定了盒子中的 content-width 的宽度，其总宽度还需要在计算。   
在 IE 之前的怪异模式下，设置元素的 width，就是指定了盒子中的 content-width + padding + border。 
- ![示例图](image/box_pic.png)

---
- ### css position
    + css2中 `position` 包括
        * `absolute` 绝对定位，相对于不是 `static` 定位的第一个父元素 
        * `static` (默认值)没有定位，元素出现在正常流中
        * `fixed` 绝对定位，相对于浏览器窗口
        * `relative` 相对定位，相对于自身本来应该在的位置
        * `inherit` 规定从父元素继承position属性

---
- ### css display
    + css2中 `display` 主要包括
        * `none` 此元素不会被显示
        * `inline` 显示为内联元素，前后没有换行符
        * `inline-block` 显示为行内块元素
        * `block` 显示为块元素，前后带换行符
        * `table` 作为块级表格来显示，表格前后带有换行符
        * `list-item` 作为列表显示
        * `flex(css3)` [伸缩性布局](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)[实例](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)
---
- ### css 优先级
    + 首先考虑权重( `!important` ),加了该权重的优先级最高。
    + 其次看特殊性 ( 0,0,0,0 )
        * 内联样式 ( 1,0,0,0 )
        * id选择器 ( 0,1,0,0 )
        * 类选择器，属性选择器，伪类(`:link`,`:active`,`:hover`,`:visited`) ( 0,0,1,0 )
        * 元素和伪元素 ( 0,0,0,1 )
        * 通配符 ( 0,0,0,0 )
    + 最后看声明的顺序
    + 补充：如果class选择器超过 255 个，不同的浏览器会表现不同。有的浏览器( FF,IE )认为class选择器的优先级会超过id选择器

> css继承是从一个元素向其后代元素传递属性值所采用的机制。确定应当向一个元素应用哪些值时，浏览器不仅要考虑继承，还要考虑声明的特殊性，另外需要考虑声明本身的来源。这个过程就称为层叠。——《css权威指南》

---
- ### css Sprites
    + 原理: 将多个图合并在一张图片上，利用 `backgroud-position` 来定位显示图片。
    + 要求: 承载背景的图片最好是有大小的，否则容易把不属于该盒子的背景显示出来。
    + 优点: 减少http请求的次数，提高网站加载的性能
    + 确定: 可维护性比较低，在使用该技术下，图片的位置中的 `center` 之类的属性用不了了，降低了灵活性，同时由于需要把盒子的大小给定，则不利于平铺以及网页缩放。


---
- ### boostrap(4) 分辨率问题/布局问题
    + bootstrap识别宽度的分割点
        * `min-width` - 576px
        * `min-width` - 768px
        * `min-width` - 992px
        * `min-width` - 1200px

        * `max-width` - 575.98px
        * `max-width` - 767.98px
        * `max-width` - 991.98px
        * `max-width` - 1199.98px
        * 比如 `@media (min-width: 768px) and (max-width: 1199.98px) { ... }`
    + 布局等级对应关系
    
        |       | extra small | small | medium | large | extra large |
        | ----- | ----- | ----- | ----- | ----- | ----- |
        | Max container width | auto| 540px | 720px | 960px | 1140px |
        | class prefix | .col- | .col-sm- | .col-md- | .col-lg- | .col-xl- | 

---
- ### [IE,FF CSS的区别](CSS兼容性.html)
---











- ###  animation & transition & transform
---
    + 题目: 在CSS3中要使元素由一种样式转换成另一种样式，怎么实现
    + 解答:

- ###  animation & transition & transform
---
    + 题目: 在CSS3中要使元素由一种样式转换成另一种样式，怎么实现
    + 解答:
