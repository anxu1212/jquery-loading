```
npm install

npm run dev

npm run prod
```
样式
![demo](https://github.com/anxu1212/jquery-loading/raw/master/doc/demo.jpg)

用法：

```js
        $('#t1').on('click', function () {
            var box = $('body').loadingBox(); //显示loading

            setTimeout(function () {
                box.remove(); //删除loading
            },500);
        });
```

