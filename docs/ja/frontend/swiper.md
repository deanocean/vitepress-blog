# # コピペで実装 - Swiper（HTML/SCSS/JavaScript/Vite環境）

<br>
実装環境：Vite


[Swiper](https://swiperjs.com/) を導入する手順とサンプルコードを記載します。

## Swiper のインストール
```
npm install swiper
```

## JSのモジュールを作る
`assets/js/swiper.js`
```javascript
// Swiper のメインコードとモジュールをインポートする
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export default function () {
  const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],

    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 60,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });  
}
```

## エントリーポイントにインポート
JSモジュールとSwiperのCSSをインポートします。

`main.js`
```javascript
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import swiper from './assets/js/swiper.js';

swiper();
```

## HTML
```html
<!-- Slider main container -->
<div class="swiper">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- If we need scrollbar -->
  <div class="swiper-scrollbar"></div>
</div>
```