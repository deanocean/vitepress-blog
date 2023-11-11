# Vite - ビルドされたファイル名にあるハッシュ値を取る

## やりたいこと
案件によって、ビルドされたファイル名にハッシュ値を取りたいです。

変更前のファイル名:
```
dist/index-fjieha43.css
dist/index-eputbp83.js
```

変更後のファイル名:
```
dist/index.css
dist/index.js
```

## 方法
vite.config.js: 
```javascript
export default defineConfig({
  ...
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
})
```