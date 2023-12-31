---
outline: 'deep'
---

# 前端切版學習資源彙整

本文算是針對 **前端切版** 的資源彙整文章。  
希望透過本篇文章幫助「非新手但又還不能說專業的前端切版學習者」。  
在筆者的初學階段，網頁領域要學的東西很多，東學西學。但是常常學了東就忘了西，有些學過的，到要用的時候又想不起來，之前存的優質教學文一時也找不到。

筆者參考自己的學習經驗，把認為需要時常複習的觀念、知識整理起來。
這篇文算是寫給自己的筆記，也希望能夠幫助到和我一樣的學習者們。


**希望透過本文達到以下目的：**
- 彙整分享筆者常用到的學習資源
- 列出設定值多又易忘的 css 屬性，要用的時候方便查詢
- 整理觀念，讓學習者做觀念複習，系統性地檢視自己的不足點

<br>

::: info 目次
[[toc]]
:::


## Youtube 追蹤的資源

### AMOS 老師
是包括我在內很多資策會出身的學生的恩師，口頭禪是「啊這就稀飯版啊!」(看著版型簡單的網站)。鐵人賽的金魚系列是針對初學者的教學，youtube也有很多針對特別版面的切版直播。另外還有開辦聽說很硬的「切版暴力班」

[鐵人賽](https://ithelp.ithome.com.tw/users/20112550/ironman)  
[youtube](https://www.youtube.com/c/CSScoke)

### 六角學院
買了很多六角課程，近乎六角腦粉的我，受惠於六角很多呀~  
六角很多老師、助教都有個人部落格，當中的廖洧杰校長、卡斯柏也有寫很多實用的文章

**六角學院**  
[youtube](https://www.youtube.com/channel/UC-b2nGm0xLzic38Byti0VjA)

**廖洧杰校長**  
[鐵人賽](https://ithelp.ithome.com.tw/users/20040221/ironman)

**卡斯柏**  
[部落格](https://wcc723.github.io/tags/css/)
[鐵人賽](https://ithelp.ithome.com.tw/users/20083608/ironman)


### 英文 youtube 教學影片
會英文的話可以直接在 youtube 搜尋關鍵字。
像這個影片，除了響應式外也示範了引入 font awesome、owl carousel、aos.js 等常用的輔助工具到專案裡面，算是蠻完整的教學：  
[Complete Responsive Blooger Website Using HTML/CSS](https://www.youtube.com/watch?v=CrSC1ZA9j0M)

我會使用 `layout`、 `responsive`、`website`、`tutorial`、`HTML/CSS` 等的排列組合，搜尋從零到完成的切版教學。  
(英文很多教學的品質非常高，我曾經面試時被要求要用 JS 做出俄羅斯方塊，就是看某個印度人的教學影片刻出來的)



## 切版相關觀念

整理切版會用到的實用教學文章。


### CSS Reset

最常被使用的是 meyerweb 與 Normalize，像 Bootstrap 就是用 Normalize。

[meyerweb 版本](https://meyerweb.com/eric/tools/css/reset/)  
[Normalize 版本](http://necolas.github.io/normalize.css/)

資源
[前端路上那些重要與不重要的小事系列 - 小事之 CSS Reset 與 CSS normalize](https://ithelp.ithome.com.tw/articles/10196528)


### 垂直置中

[CSS 垂直置中的七個方法](https://www.oxxostudio.tw/articles/201502/css-vertical-align-7methods.html)  
[CSS垂直置中技巧，我只會23個，你會幾個](http://csscoke.com/2018/08/21/css-vertical-align/)


### 一目瞭然的 CSS 屬性順序

在寫屬性的時候，順序沒有統一的話，在日後維護時可能會不方便。  
前公司的設計規範要求我們最好依照一定的順序撰寫屬性。以下簡單列出我們公司的分類方式：  
```css=
.style { 
// 表示方式
display: ooo;
float: ooo;
position: ooo;
overflow: ooo;
white-space: ooo;

// 位置相關
top: ooo;
bottom: ooo;
left: ooo;
right: ooo;

// 盒模型相關
width: ooo;
height: ooo;
margin: ooo;
padding: ooo;
border: ooo;

// 文字設定
color: ooo;
font-size: ooo;
font-weight: ooo;
line-height: ooo;
text-align: ooo;
letter-spacing: ooo;

// 装飾
background: ooo;
border-radius: ooo;
box-shadow: ooo;

// 因為是"z"所以就放在最後吧
z-index: ooo;
}
```
而屬性分類的方式也有不同的流派，並沒有標準答案，以下列出更多相關資源。

**資源**  
[CSS設計規範[7]-CSS屬性書寫順序 | 樂倍達數位科技](https://www.doubleservice.com/2011/04/css-rule-lesson7-order-properties/)  
[CSS Property Order](https://github.com/devmgn/css-property-order)


### 選定 font-family 字型

煩惱 font-family 要設定哪些字型的話，就參考這幾篇文吧!

[font-family要怎麼玩 | 卡斯伯 Blog - 前端，沒有極限](https://wcc723.github.io/css/2014/01/01/font-family/)  
[如何優雅的選擇字型(font-family) | 程式前沿](https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/28746/)  
[CSS font-family 詳細介紹 - OXXO.STUDIO](https://www.oxxostudio.tw/articles/201811/css-font-family.html)  


### 格線系統

了解 Bootstrap 格線系統的原理

[怎樣也不會失手的 Bootstrap 格線運用技巧 | 卡斯伯 Blog - 前端，沒有極限](https://wcc723.github.io/development/2020/10/09/bootstrap-grid/)  
[Sass / SCSS 預處理器 - 自建 CSS 框架中的 Grid System 與 Spacing](https://awdr74100.github.io/2020-06-24-scss-gridsystem-spacing/)  
[如何用 Sass 實現類似 Bootstrap 4 的格線系統 | 六角學院](https://w3c.hexschool.com/blog/67bc4326)



## 設定值較多的 CSS 屬性

### flex
屬性一覽
```css=
display
flex-flow
flex-direction
flex-wrap
justify-content
align-items
align-self
align-content
order
flex
flex-grow
flex-shrink
flex-basis
```

**資源**  
用遊戲來學 flex：  
[FLEXBOX FROGGY](https://flexboxfroggy.com/)  
[FLEXBOX PIRATE(六角學院開發)](https://hexschool.github.io/flexbox-pirate/index.html#/)  

文章完整解析：  
[A Complete Guide to Flexbox | CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)  
[深入解析 CSS Flexbox - OXXO.STUDIO](https://www.oxxostudio.tw/articles/201501/css-flexbox.html)  


### background

屬性一覽
```css=
background-color
background-position
background-size
background-repeat
background-origin
background-clip
background-attachment
background-image
```

縮寫
```css=
body {
  background:
     url(sweettexture.jpg)    /* image */
     top center / 200px 200px /* position / size */
     no-repeat                /* repeat */
     fixed                    /* attachment */
     padding-box              /* origin */
     content-box              /* clip */
     red;                     /* color */
}
```

**資源**  
[background | CSS-Tricks](https://css-tricks.com/almanac/properties/b/background/)  
[金魚都能懂的CSS必學屬性](https://ithelp.ithome.com.tw/users/20112550/ironman/3803?page=2)
<!-- [CSS background 屬性一覽 | w3school中文](https://www.w3school.com.cn/cssref/pr_background.asp) -->
<!-- [Day18 CSS基本樣式-Background(上)](https://ithelp.ithome.com.tw/articles/10223887) -->
<!-- [Day19 CSS基本樣式-Background(下)](https://ithelp.ithome.com.tw/articles/10224214) -->


### transform

語法一覽
```css=
transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
transform: perspective(17px);
transform: rotate(0.5turn);
transform: rotate3d(1, 2.0, 3.0, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
transform: translate(12px, 50%);
transform: translate3d(12px, 50%, 3em);
transform: translateX(2em);
transform: translateY(3in);
transform: translateZ(2px);
transform: scale(2, 0.5);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleX(2);
transform: scaleY(0.5);
transform: scaleZ(0.3);
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);
```

其他相關屬性
```css=
backface-visibility
transform-origin
transform-style
perspective
perspective-origin
```

**資源**  
[transform - CSS | MDN](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transform)  
[CSS沒有極限 - CSS transform 概觀](https://wcc723.github.io/css/2013/10/08/css-transform/)


### animation

屬性一覽
```css=
@keyframes
animation-name
animation-duration
animation-delay
animation-iteration-count
animation-direction
animation-timing-function
animation-fill-mode
animation
```

**資源**  
[完整解析 CSS 動畫 ( CSS Animation ) - OXXO.STUDIO](https://www.oxxostudio.tw/articles/201803/css-animation.html)  
[三天內學會 CSS3 動畫 | Summer。桑莫。夏天](https://cythilya.github.io/2016/03/05/css3-animations/)


### filter

語法一覽
```css=
/* URL to SVG filter */
filter: url("filters.svg#filter-id");

/* <filter-function> values */
filter: blur(5px);  /* 模糊 */
filter: brightness(0.4);  /* 亮度 */
filter: contrast(200%);  /* 對比 */
filter: drop-shadow(16px 16px 20px blue);  /* 陰影 */
filter: grayscale(50%);  /* 灰階 */
filter: hue-rotate(90deg);  /* 色相旋轉 */
filter: invert(75%);  /* 負片 */
filter: opacity(25%);  /* 透明度 */
filter: saturate(30%);  /* 飽和 */
filter: sepia(60%);  /* 懷舊 */

/* Multiple filters */
filter: contrast(175%) brightness(3%);

/* Global values */
filter: inherit;
filter: initial;
filter: unset;
```

**資源**  
[CSS filter Property | w3schools](https://www.w3schools.com/cssref/css3_pr_filter.asp)  
[什麼?? CSS也有濾鏡可以用! (CSS3 filter) ─藝誠網頁設計公司](https://www.eztrust.com.tw/webdesign/B/13)
<!-- [CSS濾鏡效果 - 簡單究好 Simple is Best](https://css-tricks.com/almanac/properties/f/filter/) -->
<!-- [CSS Filter Examples and Quick Demos ← Alligator.io](https://alligator.io/css/css-filter-examples/) -->
<!-- [filter | CSS-Tricks](https://css-tricks.com/almanac/properties/f/filter/) -->
<!-- [filter | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter) -->
<!-- https://www.oxxostudio.tw/articles/201407/css-webkit-filter.html -->


### box-shadow

語法
```css=
box-shadow: 120px 0 8px 10px rgba(255, 165, 0, 0.8) inset;
/* box-shadow: x-位移 y-位移 blur-模糊的值 spread-擴散的值 color-顏色 inset-是否在內側 */
```

**資源**  
[CSS沒有極限 - box-shadow](https://ithelp.ithome.com.tw/articles/10131544)  
<!-- [CSS 陰影效果的比較：Drop-Shadow 與 Box-Shadow 簡單究好 Simple is Best](http://blog.shihshih.com/drop-shadow-vs-box-shadow/) -->


### 常用 CSS 屬性簡寫
[特性簡寫 - CSS | MDN](https://developer.mozilla.org/zh-TW/docs/Web/CSS/Shorthand_properties)



## 寫出更好維護的 CSS

### CSS 設計模式

較廣為人知的設計模式有以下三種，可以吸取、融合其各自精神，套用到自身的專案中。  
- SMACSS
- OOCSS
- BEM

**資源**  
[SMACSS官網](http://smacss.com/)  
[BEM官網](http://getbem.com/)  
[鐵人賽 2 - OOCSS 結構與樣式、容器與內容 | 卡斯柏](https://wcc723.github.io/css/2016/12/02/oocss-one/)  
[Sass / SCSS 預處理器 - OOCSS、SMACSS、BEM 模組化方法論 | Roya's Blog](https://awdr74100.github.io/2020-06-19-scss-oocss-smacss-bem/)  
[CSS 筆記、建議與指導方針總整理 | 保哥](https://github.com/doggy8088/CSS-Guidelines)  


### 7+1 Sass設計模式

歸納整理 Sass 檔案

**資源**  
[Sass / SCSS 預處理器 - 依造 Sass 7-1 Pattern 構建項目 | Roya's Blog](https://awdr74100.github.io/2020-06-08-scss-7-1-pattern/)  
[sass-7-1-pattern.scss](https://gist.github.com/rveitch/84cea9650092119527bc)  
[Sass Guidelines #the-7-1-pattern](https://sass-guidelin.es/#the-7-1-pattern)  