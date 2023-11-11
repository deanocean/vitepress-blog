# レスポンシブで縦横比を固定する

## やりたいこと
iframe で埋め込まれた Youtube のビデオの縦横比をレスポンシブで固定したいです。

## 方法  
親要素を作って、iframe を子要素として配置します。  
親要素は `padding-top` 又は `padding-bottom` を % 単位で設定します。  
padding の % はよや要素の横幅を基準とされるので、これで縦横比が固定されます。  
子要素である iframe は `position: absolute` で配置します。  
ビデオの縦横比は `16:9` としたくて、高さが横幅の `9/16` 倍なので、ここでは `padding-bottom: 56.25%;` とします。

[Codepen](https://codepen.io/deanocean/pen/porQqeE)

```html
<div class="c-video">
  <iframe class="c-video_child" src="https://www.youtube.com/embed/by4SYYWlhEs"></iframe>
</div>
```

```css
.c-video {
  position: relative;
  height: 0;
  padding-bottom: 56.25%;
}

.c-video_child {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
```