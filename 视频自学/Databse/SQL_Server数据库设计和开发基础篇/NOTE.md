1. ### 数据库设计
    - #### 数据库设计在软件开发中所处的地位
        + 软件开发周期
            * 需求分析阶段  分析客户的业务需求和数据处理需求
            * 概要设计阶段  设计数据库的E-R图，确认需求信息的正确和完整
            * 详细设计阶段  将E-R图转换为多张表，进行逻辑设计，并应用数据库设计的三大范式进行审核
            * 代码编写阶段  选择具体数据库进行物理实现
            * 软件测试阶段
            * 安装部署
        + 数据库设计阶段分步
            * 需求分析  独立于任何数据库管理系统
            * 概念结构设计  独立于任何数据库管理系统
            * 逻辑结构设计  与选用的DBMS密切相关
            * 物理结构设计  与选用的DBMS密切相关
            * 数据库实施
            * 数据库运行和维护
    - #### 数据库设计案例
        + 概念结构设计 —— 数据抽象与局部视图
            * 分类：将同一类的事务划分成一个E-R图的实体(如老师、学生)
            * 聚集：确定实体的组成部分，对应于E-R图的属性
            * 下图就是E-R中的实体以及其对应的属性  
                ![entity](image/entity.png)
        + 逻辑结构设计 —— 向关系模型转换
            * 实体键关系的转换规则
                - 一个1:1关系可以转换为一个独立的关系模式，也可以与任意一端所对应的关系模式合并 
                - 一个1:n关系可以转换为一个独立的关系模式，也可以与n端多对应的关系模式合并
                - 一个m:n关系转换为一个关系模式。转换的方法为:与该关系相连的各实体的码以及关系本身的属性均转换为关系的属性，新关系的码为两个相连实体码的组合
                - 三个或三个以上实体间的多元关系转换为一个关系模式
            * 实体键关系(自联系)的转换原则
                - 同一个实体集的实体间的联系，称为自联系，也可按上述实体键关系的转换规则处理，同样也存在 1:1, 1:n, n:m 的关系
                - 比如在学生表中有一个字段是表示班长的，而班长又是一个学生，这就属于自联系中的1:n
            * 将上述概念结构设计转化成逻辑结构设计为下图
                ![relationship](image/relationship.png)
                - 转化过程
                    + 在1:1的关系中，可以将两个表合成一个表，也可以通过一个字段的关联将一个表拆分成两个表。比如，学生和身份证。可以建立一个学生表，一个身份证表，由于其实1:1的关系，所以可以通过在学生总增加一个字段去关联身份证表，或者在身份证表中建立一个字段去关联学生表  
                    ![](image/1-1student.png)  
                    ![](image/1-1status.png)
                    + 在1：N的关系中，在N的表中建立一个字段去关联1的表即可。如学生和专业，可以在学生字段中添加一个字段代表其所对应的专业。
                    ![](image/1-nstudent.png)  
                    ![](image/1-nmajor.png)
                    + 在N:M的关系中则需要在建立一张新的表去表示关系。如课程和学生，需要建立一张新的表，其中包含代表课程的字段、学生的字段以及其关系(这里可以是成绩)的字段。当然，这个新建的表不一定只是表示两个实体的多对多的关系，也可以表示三个或者三个以上的实体的关系，只要有字段代表即可。比如说学生、课程、考场，可以有的字段就是学生编号，课程编号，考场编号，成绩。
                    ![](image/n-mrelationship.png)  
    - #### 数据库设计规范
        + 数据库设计三范式
            * 第一范式(1NF) 属性不可分  
                - 目标: 确保每列的原子性
                - 如果每列都是不可再分的最小数据单元，则满足第一范式
                - 示例  
                ![满足](image/design_stan_one_correct.png)  
                ![不满足](image/design_stan_one_incorrect.png)
            * 第二范式(2NF) 
                - 每个表只描述一件事情
                - 每条记录有唯一标识列
                - 示例 产品的价格只依赖与产品，订单的时间只依赖与订单。应该分成两个表   
                ![满足](image/design_stan_two_correct.png)  
                ![不满足](image/design_stan_two_incorrect.png)  
            * 第三范式(3NF)
                - 数据库表中不包含已在其他表中已包含的非主关键字信息
                - 示例 在产品的表中已经记录产品价格，这里就没必要在记录的  
                ![](image/design_stan_three_incorrect.png)
            * 第四范式(4NF)
            * 第五范式(5NF)
            * BC范式(BCNF)
            * 满足最低要求的范式是第一范式。在第一范式的基础上进一步满足更多要求的称为第二范式，其余范式以此类推。一般说来，数据库只需要满足第三范式就行了。
        + 良好的数据库设计
            * 节省数据的存储空间
            * 能够保证数据的完整性
            * 方便进行数据库应用系统的开发
        + 糟糕的数据库设计
            * 数据冗余、存储空间浪费
                - 更新异常，就是修改一个字段的内容要对多条记录进行修改
                - 添加异常，添加一条记录可能会需要虚拟一些暂时还不存在的数据
                - 删除异常，删除一条记录的时候，可能会把其他相关的记录一并删除
            * 内存空间浪费
            * 数据更新和插入的异常
2. ### 数据库开发基础
    - #### SQL语句的类型 批 注释 标识符
        - Ttansact-SQL 语句的类型
            + 数据定义语言(Date Definition Language,DDL)语句: DDL语句通过生成数据库，表、和用户自定义的数据库
                * create object_name 创建
                * alter object_name 修改
                * drop object_name 删除
            + 数据控制语言(Date Control Language,DCL)语句: 改变某个用户或角色相关联的权限
                * grant 授予权限  
                    `grant select on table_name to public`
                * deny 拒绝权限  
                    `deny select on table_name to public`
                * revoke 取消权限
            + 数据操作语言(Date Manipulation Language,DML): 操作数据库中的数据。
                * select
                * insert
                * delete
                * update
        - Ttansact-SQL 语句的语法要素
            + 批处理
                * `go`
                    一个批处理命令通知 SQLServer 分析并运行一个批处理的所有指令(它实际上并不是一个Ttansact-SQL语句，只是描述一个批处理，用来将语句划分。局部变量作用范围局限在一个批内，`go`必须独占一行)
                * `Exec`
                    用于执行用户自定义的函数，系统存储过程，用户自定义的存储过程或扩展存储过程
            + 注释语句
                * 行注释 `--`
                * 块注释 `/**/`
        - 标识符
            + 标准标识符 比如表名就是一个标识符
                * 第一个字符是a-zA-Z
                * 第一个字符后可以是数字，字母，或各种符号`@`,`$`,`_`
                * `@` 代表局部变量(@age 就是一个变量)  
                    ```sql
                        set @age = 10
                    ```
                * `#` 代表临时表和存储过程(临时表表示一个用户创建的，其他用户不可以使用。当数据库关闭的时候就消失了)
                     ```sql
                        create table #t
                        {
                            Tage int,
                            Tname nvarchar(10)
                        }
                     ```
                * `##` 代表一个全局临时表(全局临时表表示一个用户创建的，其他用户也可以使用。当数据库关闭的时候就消失了)
                    ```sql
                        create table ##t
                        {
                            Tage int,
                            Tname nvarchar(10)
                        }
                    ```
            + 限定标识符 
                * 当对象名包含空格时，当保留关键字被用作对象的姓名时，必须使用括号和引号把限定标识符括起来
                ```sql
                    create table [order detail]
                    {
                        ....
                    }

                    select * from [order detail]
                    -- 使用双引号界定符要打开
                    set quoted_identifier on
                    -- set quoted_identifier off
                    select * from "order detail"
                ```
    - #### 数据库中数据类型
        - 数字型
            + 数字:int,tinyint,smallint,bigint
            + 十进制小数:money,smallmoney,decimal
            + 浮点数
            + real
        - 日期型
            + datetime
        - 字符型
            + 定长字符 
                * char(20) 1个字符占用1个字节(英语)
                * nchar(20) 1个字符占用2个字节
            + 变长字符 varchar(20)
                * varchar(20) 1个字符占用1个字节(英语)
                * nvarchar(20) 1个字符占用2个字节
        - 二进制型
        - 唯一标识 代表一个全局特殊标识符，是一个16位16进制的值
        - SQL变量 包括SQL所支持的各种数据类型
        - 位图和文本 属于大型二进制对象结构
        - 表 代表一个表结构，将一个表保存在一个字段中
        - 游标 用于存储过程的编程
        - 用户自定义数据类型
    - #### 变量 函数 数据类型转换
        - 数据库中的变量
            ```sql
                -- 声明变量
                declare @sname varchar(10),@address nvarchar(10)
                -- 赋值
                set @address = "mimee"
                select @address = "mimee"
                -- 全局变量
                select @@version
                select @@servername
            ```
        - 函数
            + 系统函数
                * 聚集函数，对于一个 *集合*中的值进行运算，返回一个 *单一的，汇总的*值
                ```sql
                    select avg(column) as avg_num from tablename

                    -- 0到100的整数
                    declare @r int
                    set @r = rand() * 100
                    select @r
                ```
                * 标量函数，只对 *单个值*进行运算并返回 *单一*的值，只要表达式正确，就可以使用这些函数
                ```sql
                    select DB_name() as 'database'
                ```
                * 系统函数范例
                    ```sql
                        -- 时间转化为其它格式，convert()可以转换数据类型
                        -- convert(varchar,10);
                        select 'ansi:',convert(varchar(30),getdate(),102) as style
                        union
                        select 'janpanese:',convert(varchar(30),getdate(),111) as style
                        union
                        select 'European:',convert(varchar(30),getdate(),113) as style
                    ```
                * 数学运算符
                    - `+ - * / %`
                    - `= < > >= <=`
                    - 字符串连接使用 `+`，空字符不等于空值
                    - 逻辑运算符`and or not`
                * 表达式
                    - 表达式是各种符号和对单个数据进行操作  
                    `select column1+column form tablename`
    - #### SQL的日期函数
        + `getdate()` 获取系统的当前时间
        + `Year(getdate())` 获取年份
        + `Month(getdate())` 获取月份
        + `Day(getdate())` 获取日期
        + `dateadd(yy,4,(getdate()))` 表示对当前时间加上4年，
            * yy 表示年
            * qq 表示季度
            * mm 表示月
            * wk 表示周
            * hh 表示小时
            * mi 表示分钟
            * ss 表示秒
            * dy 表示一年中的第几天
        + datediff(day,'2005-5-3',getdate()) 返回时间差
        + datepart(day,getdate())

3. ###