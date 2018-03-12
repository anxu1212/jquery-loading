```
npm install

npm run dev

npm run prod
```

```js
        $('#t1').on('click', function () {
            var box = $('body').loadingBox();

            setTimeout(function () {
                box.remove();
            },500);
        });
```