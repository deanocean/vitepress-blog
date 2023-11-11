# Vite - ビルドされた assets フォルダーの中身をファイルの種類ごとに分ける

## やりたいこと
ビルドされた assets フォルダーの中にある js、css、img などのファイルを種類ごとのフォルダーに分けたいです。

変更前のディレクトリ構造：
```
my-app/
├─ dist/
│  ├─ assets/
|  |    | index.js
|  |    | index.css        
```

変更後のディレクトリ構造：
```
my-app/
├─ dist/
│  ├─ assets/
|  |    |-js/
|  |    |   index.js
|  |    |-css/
|  |    |  index.css  
```

## 方法

出力ファイル名は、Rollup が使われて、`build.rollupOptionsd` で設定されています：

1. `output.assetFileNames` でアセットファイル（メディアファイルや stylesheets など）を設定します。
2. `output.chunkFileNames` で vendor chunk のファイルを設定てします。
3. `output.entryFileNames` で index.js を設定します。

```javascript
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
});
```

<br>

**参考サイト：**  
[Vite - change ouput directory of assets](https://stackoverflow.com/questions/71180561/vite-change-ouput-directory-of-assets)