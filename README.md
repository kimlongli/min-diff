#### 一个基于动态规划lcs算法的迷你文本比较器

此项目暂时不超过一百行代码，主体文件为diff.js。

使用方法如下：
* 引入js文件
``` javascript
<script type="text/javascript" src="diff.js"></script>
```
* 调用diff函数获取结果
``` javascript
result = diff(txt1, txt2);
```
其中txt1和txt2为需要比较的文本内容，比较结果将会以以下结果返回：
``` javascript
 function test() {
 	a = 1;
+	b = a + 2;
-	c = b;
 }
```
每行前面的+代表这是增加的行，-代表这是减少的行。
可以通过[demo](https://kimlongli.github.io/demo/diff-demo.html)来了解具体的实例。


