# コピペで実装 - 追従ボタン（HTML/SCSS/JavaScript/Vite環境）

<br>
実装環境：Vite


## スクロールによる表示の切り替え

サイトのトップから少しスクロールした後に表示させるようにしたいです。

Lodashを使って、スクロールの時のパフォーマンスを上げます。  
今回はlodashのES Moduleバージョンであるlodash-esを使います。  
ES Moduleの方が Vite の Tree Shaking に効きます。参照：[Tree shaking lodash with Vite](https://blog.battlefy.com/tree-shaking-lodash-with-vite)

### lodash-es のインストール

```
npm install lodash-es
```

### JSのモジュール

lodash の throttle を使います。  
参照：  
[lodash の debounce や throttle で簡単に負荷対策](https://qiita.com/waterada/items/986660d31bc107dbd91c)  
[Lodash Documentation](https://lodash.com/docs/4.17.15#throttle)

assets/js/scrollTop.js
```js
import * as _ from 'lodash-es'

export default function () {
  const pageTopBtn = document.querySelector('.js-pageTopBtn');

  window.addEventListener(
    'scroll',
    _.throttle(
      (e) => {
        scrollBtnView();
        return false;
      },
      100,
      { trailing: true, leading: true }
    )
  );

  // ページ読み込み時にスクロールトップボタンがkvより下にあれば表示
  window.addEventListener('load', () => {
    const scroll = window.scrollY;
    if (scroll > 200) {
      pageTopBtn.classList.add('is-view');
    } else {
      pageTopBtn.classList.remove('is-view');
    }
  });

  // 間引きしたい処理
  function scrollBtnView() {
    const scroll = window.scrollY;

    // スクロール量がkvの高さを超えたらページトップボタンを表示
    if (scroll > 200) {
      pageTopBtn.classList.add('is-view');
    } else {
      pageTopBtn.classList.remove('is-view');
    }
  }
}
```

### エントリーポイントにインポート
main.js
```js
import fixedBtn from './assets/js/fixedBtn.js';
fixedBtn();
```


### HTML
```html
<a href="#" class="c-fixedBtn js-pageTopBtn">TO TOP</a>
```

### CSS

_base.scss
```scss
html {
  scroll-behavior: smooth; // CSSだけで実装できるスクロールアニメーション
  scroll-padding-top: 8rem; // ヘッダーの高さに合わせる
}
```

_fixBtn.scss
```scss
.c-fixedBtn {
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  z-index: 9999;
  opacity: 0;
  pointer-events: none;
  transition: opacity .3s;

  &.is-view {
    opacity: 1;
    pointer-events: auto;
  }
}
```


## フッターまでスクロールしたら、フッターの少し上に固定したい場合

ScrollMagicを使います。

### インストール
```
npm install scrollmagic
```

### JSのモジュール

フッターまでスクロールしたら、フッターにクラス名 `is-animated` を追加します。

assets/js/scrollmagic.js
```js
import ScrollMagic from 'scrollmagic';

export default function () {
  const controller = new ScrollMagic.Controller();
  const footer = document.querySelector('.js-footer');
  
  new ScrollMagic.Scene({
    triggerElement: footer,
    triggerHook: 'onEnter',
    offset: 0,
  })
  .setClassToggle(footer, 'is-animated')
  .addTo(controller);
}
```

### CSS

`position: fixed;` だったボタンは、`position: absolute;` になります。

```scss
.l-footer{
  position: relative;

  &.is-animated {
    .l-footer_top {
      position: absolute;
      top: auto;
      bottom: calc(100% + 40px);
    }
  }
}
```

### HTML
```html
<footer class="l-footer js-footer">
  <a href="#" class="l-footer_top c-fixedBtn js-pageTopBtn">TO TOP</a>
</footer>
```