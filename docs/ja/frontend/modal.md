# コピペで実装 - モーダル（HTML/SCSS/JavaScript/Vite環境）

<br>
実装環境：Vite


## 普通のパターン

### JS
`assets/js/modal.js`
```js
export default function () {
  const body = document.querySelector("body"); // 背景固定用に使用　付与されるis-fixedがbodyに付きます。検証してもらうと内容わかります。
  const modal = document.querySelector(".js-modal"); // 実際に表示させるモーダルのdiv
  const modalTrigger = document.querySelectorAll(".js-modalTrigger"); // 選択したい各動画
  const modalOverlay = document.querySelector(".js-modalOverlay"); // モーダル表示した際の黒透過背景用
  const modalClose = document.querySelector(".js-modalClose"); // モーダルを閉じるボタン

  // modal open
  const triggerList = Array.prototype.slice.call(modalTrigger, 0);
  triggerList.forEach((targetBox) => {
    targetBox.addEventListener("click", () => {
      body.classList.add("is-fixed"); // bodyにclassを付与して背景固定
      modalOverlay.classList.add("is-active"); // 背景に黒透過を表示
      modal.classList.add("is-active"); // モーダルを表示
    });
  });

  // modal close
  modalClose.addEventListener("click", () => {
    body.classList.remove("is-fixed");
    modalOverlay.classList.remove("is-active");
    modal.classList.remove("is-active");
  });

  // 黒透過背景をクリックしたらモーダルを閉じる
  modalOverlay.addEventListener("click", () => {
    modalClose.click();
  });
}
```

`main.js`
```js
import modal from './assets/js/modal.js';
modal();
```


### CSS

`assets/scss/foundation/_base.scss`
```scss
body {
  &.is-fixed {
    overflow: hidden;
  }
}
```

`assets/scss/object/component/modal.scss`
```scss
@use '/assets/scss/global/mixin' as m;
@use '/assets/scss/global/variable' as v;

.c-modal {
  max-width: 870px;
  width: 90%;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 99999;
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s;

  @include m.sp {
    width: 90%;
    height: 70vh;
  }

  &.is-active {
    pointer-events: auto;
    opacity: 1;
  }

  &_overlay {
    width: 100vw;
    height: 100vh;
    background-color: rgba(#000, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9998;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s;

    &.is-active {
      pointer-events: auto;
      opacity: 1;
    }
  }

  &_close {
    width: 50px;
    height: 50px;
    position: absolute;
    top: -60px;
    right: 0;
    cursor: pointer;

    &:before {
      content: "";
      width: 80%;
      height: 3px;
      background-color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &:after {
      content: "";
      width: 80%;
      height: 3px;
      background-color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
    }

    @include m.sp {
      width: 40px;
      height: 40px;
      top: -50px;

      &:before {
        height: 2px;
      }

      &:after {
        height: 2px;
      }
    }
  }

  &_cont {
    width: 100%;
    max-height: 95vh;
    overflow: auto;
    background-color: #fff;
    padding: 4rem;
    
    @include m.sp {
      max-height: none;
      height: 100%;
      overflow: auto;
      border-width: 1.2rem;
    }
    
    iframe {
      width: 100%;
      height: 100%;
    }
  }
}
```

### HTML
#### トリガー
```html
<button class="js-modalTrigger">Modal Trigger</button>
```

#### モーダル本体
```html
<div class="c-modal_overlay js-modalOverlay"></div>
<div class="c-modal js-modal">
  <div class="c-modal_close js-modalClose"></div>
  <div class="c-modal_cont">
    <p>テキスト<br>テキスト<br>テキスト</p>
  </div>
</div>
```



## モーダルにYoutube動画を埋め込むパターン

### JS
`assets/js/modal.js`
```js
export default function () {
  const body = document.querySelector("body"); // 背景固定用に使用　付与されるis-fixedがbodyに付きます。検証してもらうと内容わかります。
  const modal = document.querySelector(".js-modal"); // 実際に表示させるモーダルのdiv
  const modalTrigger = document.querySelectorAll(".js-modalTrigger"); // 選択したい各動画
  const modalOverlay = document.querySelector(".js-modalOverlay"); // モーダル表示した際の黒透過背景用
  const modalClose = document.querySelector(".js-modalClose"); // モーダルを閉じるボタン

  // modal open
  const triggerList = Array.prototype.slice.call(modalTrigger, 0);
  triggerList.forEach((targetBox) => {
    targetBox.addEventListener("click", () => {
      // 各動画のhtmlタグに設置しているdata-movie属性の内容を取得
      const movieId = targetBox.getAttribute("data-movie");

      // モーダルの内容を動的に作成する為にdivを作成
      const movieCont = document.createElement("div");

      // 先程作成したdivにclassを付与
      movieCont.className = "c-modal_cont";

      // 実際に反映するiframeのurlを先程作成したdivに反映する
      // 各動画のiframeで変わる固有のID??があると思うので、そちらがdata-movieに入る内容にして頂ければ上手くいくと思います
      movieCont.innerHTML =
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/' +
        movieId +
        '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

      // モーダル用のdiv内に↑で準備したiframeなどを追加する
      modal.appendChild(movieCont);

      body.classList.add("is-fixed"); // bodyにclassを付与して背景固定
      modalOverlay.classList.add("is-active"); // 背景に黒透過を表示
      modal.classList.add("is-active"); // モーダルを表示
    });
  });

  // modal close
  modalClose.addEventListener("click", () => {
    const modalMovie = document.querySelector(".c-modal_cont");
    modal.removeChild(modalMovie);

    body.classList.remove("is-fixed");
    modalOverlay.classList.remove("is-active");
    modal.classList.remove("is-active");
  });

  // 黒透過背景をクリックしたらモーダルを閉じる
  modalOverlay.addEventListener("click", () => {
    modalClose.click();
  });
}
```

`main.js`
```js
import modal from './assets/js/modal.js';
modal();
```


### CSS

`assets/scss/foundation/_base.scss`
```scss
body {
  &.is-fixed {
    overflow: hidden;
  }
}
```

`assets/scss/object/component/modal.scss`
```scss
@use '/assets/scss/global/mixin' as m;
@use '/assets/scss/global/variable' as v;

.c-modal {
  width: 800px;
  height: 450px;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 9999;
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s;

  @include m.sp {
    width: 90%;
    height: 60vw;
  }

  &.is-active {
    pointer-events: auto;
    opacity: 1;
  }

  &_overlay {
    width: 100vw;
    height: 100vh;
    background-color: rgba(#000, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9998;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s;

    &.is-active {
      pointer-events: auto;
      opacity: 1;
    }
  }

  &_close {
    width: 50px;
    height: 50px;
    position: absolute;
    top: -60px;
    right: 0;
    cursor: pointer;

    &:before {
      content: "";
      width: 80%;
      height: 3px;
      background-color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &:after {
      content: "";
      width: 80%;
      height: 3px;
      background-color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
    }

    @include m.sp {
      width: 40px;
      height: 40px;
      top: -50px;

      &:before {
        height: 2px;
      }

      &:after {
        height: 2px;
      }
    }
  }

  &_cont {
    width: 100%;
    height: 100%;

    iframe {
      width: 100%;
      height: 100%;
    }
  }
}
```

### HTML
#### トリガー
```html
<button class="js-modalTrigger" data-movie="Opp9nqiN5m0">Modal Trigger</button>
```

#### モーダル本体
```html
<div class="c-modal_overlay js-modalOverlay"></div>
<div class="c-modal js-modal">
  <div class="c-modal_close js-modalClose"></div>
</div>
```