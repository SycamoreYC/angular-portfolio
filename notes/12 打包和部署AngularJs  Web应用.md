# 第十二章 打包和部署AngularJs  Web应用

## 12.1 提升网络相关的性能

思路：减少每个请求中的下载数据量和限制HTTP请求数量来减少HTTP流量。

### 压缩静态资源

减少web服务器和浏览器之间传输的字节数量。

**压缩**可以减少需要下载到浏览器端的数据量，还能提高代码的安全性。

#### Angular JS如何判断依赖关系

Angular 可以判断出一个指定函数的依赖关系，然后通过$injector服务获取这些依赖服务，之后将这些作为参数提供给函数。

这个判断一个指定函数依赖关系的方法十分简单。Angular Js会将函数定义转换为字符串，然后使用正则表达式来匹配依赖函数的名称，从而解析出依赖关系。

#### 编写会被安全压缩的JavaScript代码

但是如果代码被压缩，这种判断依赖关系的方式就会有问题。因为代码压缩一般都会改变参数的命名。

于是需要使用其他方式提供依赖关系提示。

Angular针对压缩代码提供了几种不同的方法来声明依赖关系。

- 数组依赖方法。

  即使function的参数名称被修改了，压缩工具也不会修改数组中的元素。

  ```javascript
   angular.module('app.zoo')
          .controller('zooCtrl', ['mammal', 'birds', 'fish', 'reptiles', 'zooConfig', function(e,f){
            // 控制器的实现代码
          }]);
  ```

##### 数组风格依赖注入的缺陷

代码重复。我们需要把函数的每个参数都写两遍：函数定义写一遍，数组中再写一遍。

这样容易忘记添加参数在数组中或参数中，也很容易把参数顺序写错。

### 模版预加载

模版预加载可以大幅减少网络通信，提升UI界面的响应速度。

Angular JS提供了两种不同的方法用于初次使用模版之前对它们进行预加载：

<script>指令和$templateCache服务。

Angular Js 能够缓存所有已经请求过的模版（$templateCache）。Angular Js会通过网络获取模版之前，先检查 $templateCache服务已缓存的内容。这样同一个模版就不会通过网络请求两次。所以，使用$templateCache服务，就可以确保所有局部模版在应用启动之后全部加载就绪，永远无需再通过网络下载。

##### 使用<script>指令预加载模版

##### 填充$templateCache服务

##### 组合使用不同的预加载技术

## 12.2 优化首页

### 避免显示未经处理的模版

ng-cloak和ng-bind可以解决这个问题

#### 使用ng-cloak指令隐藏DOM元素

ng-cloak可以隐藏DOM树中的任意节点，直到Angular js为处理整个页面做好准备之后，才会将DOM元素显示出来。

#### 使用ng-bind指令隐藏表达式

优点：使用{{}}的表达式不会在页面中出现

### 引入Angular JS 和应用脚本文件

#### 引用脚本文件  

如果应用首页中包涵大量静态内容，只有少量动态内容，那么就将<script>标签放在页面最后，然后使用ng-bind指令以便在页面加载和处理过程中隐藏数据绑定。否则就将<script>标签挪到<head>标签中，然后使用ng-cloak指令。

#### Angular Js和异步模块定义

## 12.3 浏览器支持









