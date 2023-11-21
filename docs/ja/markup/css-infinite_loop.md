# コピペで実装 - CSSだけで実現できる無限ループアニメーション

<style lang="scss" scope>
  @keyframes infiniteLoop {
    from {
      background-position: 0 100%;
    }
  
    to {
      background-position: 800px 100%;
    }
  }

  @keyframes infiniteLoopVertical {
    from {
      background-position: 0% 0;
    }
    
    to {
      background-position: 0% 500px;
    }
  }

  .loop {
    animation-name: infiniteLoop;
    animation-duration: 10s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    background-image: url(../../img/frontend/bg_buildings.svg);
    background-size: 800px auto;
    background-repeat: repeat-x;
    background-position: 0 100%;

    background-color: orange;
    height: 300px;
  }


  .loop-vertical {
    animation-name: infiniteLoopVertical;
    animation-duration: 10s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    /* animation-direction: normal; */
    /* animation-direction: reverse; */

    background-image: url(../../img/frontend/bg_filmRoll.jpg);
    background-size: auto 500px;
    background-repeat: repeat-y;
    background-position: 0 0;

    background-color: #d9d9d9;
    height: 300px;
  }
</style>

<br>


## 横スクロール

<div class="loop"></div>


### HTML
```html
<div class="loop"></div>
```

### CSS
```scss
@keyframes infiniteLoop {
  from {
    background-position: 0 100%;
  }

  to {
    // アニメーションの最後に横の位置が background-size と一致するのがポイント
    background-position: 800px 100%;
  }
}

.loop {
  animation-name: infiniteLoop;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  background-image: url(画像URL);
  background-size: 800px auto;
  background-repeat: repeat-x;
  background-position: 0 100%;

  background-color: orange;
  height: 300px;
}
```


## 縦スクロール

<div class="loop-vertical"></div>

### HTML
```html
<div class="loop-vertical"></div>
```

### CSS
```scss
@keyframes infiniteLoopVertical {
  from {
    background-position: 0% 0;
  }
  
  to {
    // アニメーションの最後に縦の位置が background-size と一致するのがポイント
    background-position: 0% 500px; 
  }
}

.loop-vertical {
  animation-name: infiniteLoopVertical;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  background-image: url(画像URL);
  background-size: auto 500px;
  background-repeat: repeat-y;
  background-position: 0 0;
  
  background-color: #d9d9d9;
  height: 300px;
}
```
