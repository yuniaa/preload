#H5图片预加载

###使用方法

引用：

```
<script src="preload.js"></script>
```

调用：

```
<script>
    new Preload({
        time: 8000,
        img: ['xxx.jpg','aaa.jpg'],
        callback: function(){}
    })
</script>
```

###参数说明

- `time`：单位时间（毫秒）后取消预加载，防止图片死链造成页面卡在预加载状态
- `img`：图片数组，存放需要提前加载的图片
- `callback`：预加载完成时的回调函数