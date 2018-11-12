- ###  inline & inline-block & block
---
     ```html
        <div style="width: 400px;height: 200px">
            <span style="float: left;width:auto;height:100%">
                <i style="position: absolute;float: left;width:100px;height: 5px">
                    hello
                </i>
            </span>
        </div>
     ```
    + 题目: 上面代码中 span 标签的 width 和 height 是多少       
    + 解答: 
        * `span` 标签和 `i` 标签本身是内联标签，所以没有 `height` 属性，但是有 `width` 属性
        * 添加 `float` 属性或者属性 `position: absolute` 之后，元素就变成块级元素，块级元素有属性 `width`,`height`
        * 而 `span` 元素是 `i` 元素的父元素，所以它的 `width` 被子元素挤开,也就是等于子元素的宽度，而高度为 `100%`，就是其父元素的高度
    + [示例](inline&inline-block&block.html)

- ###  表示高亮的 html 标签
---
    + 题目: 假设一个搜索结果展示页面，需要吧搜索关键字高亮显示，应该使用哪个标签      
    + 解答: `<mark>`

- ###  图像格式
---
    + 题目: 嵌入HTML文档中的图像格式可以是什么？     
    + 解答: `git`, `bmp`, `jpg`。 而 `tif( tagged image file format)`使用灵活的位图格式
    

