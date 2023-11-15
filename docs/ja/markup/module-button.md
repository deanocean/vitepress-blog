# ボタンのモジュール化の考察

SCSSは Codepen に記載してあります。  
[Codepen](https://codepen.io/deanocean/pen/abXLree)

<style lang="scss" scope>

@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css");

$color-primary: #7952b3;
$color-secondary: #d2e6f6;

@mixin pc($width: 768px) {
  @media screen and (min-width: $width) {
    @content;
  }
}

@mixin sp($width: 767px) {
  @media screen and (max-width: $width) {
    @content;
  }
}
 
/* btn-theme-generator */
@mixin btn-theme-generator($name, $main-color, $arrow-color: #fff, $text-color: #fff){
  &--#{$name} {
    background-color: $main-color;
    color: $text-color;
    border-color: $main-color;

    &::after {
      border-color: $arrow-color;
      color: $arrow-color;
    }

    /* &.c-btn--arrow {
      border-color: $arrow-color;
      color: $arrow-color;
    } */

    svg,
    .c-btn_icon {
      fill: $arrow-color;
      stroke: $arrow-color;
    }

    &.c-btn--hoverOpa {
      &:hover {
        @include pc {
          color: $text-color;
          opacity: .85;
        }
      }
    }
      
    &.c-btn--hoverRe {
      &:hover {
        @include pc {
          color: $main-color;
          background-color: $text-color;
          
          &::after {
            border-left-color: $main-color;
            color: $main-color;
          }

          svg,
          .c-btn_icon {
            fill: $main-color;
            stroke: $main-color;
          }
        }
      }
    }
    
    &.c-btn--hoverLighten {
      &:hover {
        @include pc {
          color: $text-color;
          background-color: lighten($main-color, 4%);
          border-color: lighten($main-color, 4%);
        }
      }
    }
    
    &.c-btn--hoverDarken {
      &:hover {
        @include pc {
          color: $text-color;
          background-color: darken($main-color, 5%);
          border-color: darken($main-color, 5%);
        }
      }
    }
  }

  &--#{$name}Outline {
    background-color: $text-color;
    color: $main-color;
    border-color: $main-color;

    svg,
    .c-btn_icon {
      fill: $main-color;
      stroke: $main-color;
    }

    &.c-btn--hoverOpa {
      &:hover {
        @include pc {
          color: $main-color;
          opacity: .85;
        }
      }
    }
    
    &.c-btn--hoverRe {
      &:hover {
        @include pc {
          color: $text-color;
          background-color: $main-color;
  
          &::after {
            border-color: $arrow-color;
            color: $arrow-color;
          }
          
          svg,
          .c-btn_icon {
            fill: $arrow-color;
            stroke: $arrow-color;
          }
        }
      }
    }
    
    &.c-btn--hoverLighten {
      &:hover {
        @include pc {
          color: lighten($main-color, 4%);
          border-color: lighten($main-color, 4%);
        }
      }
    }

    &.c-btn--hoverDarken {
      &:hover {
        @include pc {
          color: darken($main-color, 4%);
          border-color: darken($main-color, 4%);
        }
      }
    }
  }
}
// btn-theme-generator

.c-btn {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  vertical-align: middle;
  height: 4rem;
  padding: 0 4rem;
  border: 2px solid transparent;
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  background-color: #ccc;
  transition: all .3s;
  
  @include btn-theme-generator(primary, $color-primary);
  @include btn-theme-generator(secondary, $color-secondary, #1d80d4, #1d80d4);

  &--rounded {
    border-radius: 4rem;
  }

  &--arrow {
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 10%;
      width: 1rem;
      height: 1rem;
      border-color: #000;
      border-width: 1px;
      border-right: solid;
      border-bottom: solid;
    }

    &Line {
      @extend .c-btn--arrow;

      &Up {
        @extend .c-btn--arrowLine;
        &::after {
          transform: translateY(-30%) rotate(-135deg);
        }
      }
  
      &Right {
        @extend .c-btn--arrowLine;
        &::after {
          transform: translateY(-50%) rotate(-45deg);
        }
      }
  
      &Down {
        @extend .c-btn--arrowLine;
        &::after {
          transform: translateY(-70%) rotate(45deg);
        }
      }
  
      &Left {
        @extend .c-btn--arrowLine;
        &::after {
          right: unset;
          left: 10%;
          transform: translateY(-50%) rotate(135deg);
        }
      } 
    }

    &Solid {
      @extend .c-btn--arrow;
      &::after {
        width: 0;
        height: 0;
        border-left: .6em solid;
        border-top: .32em solid transparent;
        border-bottom: .32em solid transparent;
        border-right: none;
      }

      &Up {
        @extend .c-btn--arrowSolid;
        &::after {
          transform: translateY(-50%) rotate(-90deg);
        }
      }
  
      &Right {
        @extend .c-btn--arrowSolid;
        &::after {
          transform: translateY(-50%) rotate(0deg);
        }
      }
  
      &Down {
        @extend .c-btn--arrowSolid;
        &::after {
          transform: translateY(-50%) rotate(90deg);
        }
      }
  
      &Left {
        @extend .c-btn--arrowSolid;
        &::after {
          right: unset;
          left: 10%;
          transform: translateY(-50%) rotate(180deg);
        }
      } 
    }
  }

  &--icon {
    svg,
    .c-btn_icon {
      display: inline-block;
      vertical-align: middle;
      margin-right: .5em;
      width: 18px;
      height: 22px;
      transition: all .3s;
    }

    i {
      margin-right: .5em;
      font-size: inherit;
    }
  }
}
</style>


## ボタンの土台（Plain）

<button type="button" class="c-btn">Button</button>

```html
<button type="button" class="c-btn">Button</button>
```


## テーマ色（Theme Color）

<button type="button" class="c-btn c-btn--primary">Button</button>

```html
<button type="button" class="c-btn c-btn--primary">Button</button>
```


## アウトライン（Outline）

<button type="button" class="c-btn c-btn--primaryOutline">Button</button>

```html
<button type="button" class="c-btn c-btn--primaryOutline">Button</button>
```


## ホバー：透過（Hover: Opacity）

<button type="button" class="c-btn c-btn--primary c-btn--hoverOpa">Button</button>

```html
<button type="button" class="c-btn c-btn--primary c-btn--hoverOpa">Button</button>
```


## ホバー：暗くなる（Hover: Darken）

<button type="button" class="c-btn c-btn--primary c-btn--hoverDarken">Button</button>

```html
<button type="button" class="c-btn c-btn--primary c-btn--hoverDarken">Button</button>
```


## ホバー：明るくなる（Hover: Lighten）

<button type="button" class="c-btn c-btn--primary c-btn--hoverLighten">Button</button>

```html
<button type="button" class="c-btn c-btn--primary c-btn--hoverLighten">Button</button>
```


## ホバー：逆転（Hover: Reverse）

<button type="button" class="c-btn c-btn--primary c-btn--hoverRe">Button</button>

```html
<button type="button" class="c-btn c-btn--primary c-btn--hoverRe">Button</button>
```


## 矢印：ライン（Arrow Line）

<button type="button" class="c-btn c-btn--primary c-btn--arrowLineRight">Button</button>

<button type="button" class="c-btn c-btn--primary c-btn--arrowLineUp">Button</button>

<button type="button" class="c-btn c-btn--primary c-btn--arrowLineDown">Button</button>

<button type="button" class="c-btn c-btn--primary c-btn--arrowLineLeft">Button</button>

```html
<button type="button" class="c-btn c-btn--primary c-btn--arrowLineRight">Button</button>
<button type="button" class="c-btn c-btn--primary c-btn--arrowLineUp">Button</button>
<button type="button" class="c-btn c-btn--primary c-btn--arrowLineDown">Button</button>
<button type="button" class="c-btn c-btn--primary c-btn--arrowLineLeft">Button</button>
```

**Hover Example：**  
<button type="button" class="c-btn c-btn--primary c-btn--arrowLineRight c-btn--hoverRe">Button</button>

```html
<button type="button" class="c-btn c-btn--primary c-btn--arrowLineRight c-btn--hoverRe">Button</button>
```


## 矢印：Solid（Arrow Solid）

<button type="button" class="c-btn c-btn--primary c-btn--arrowSolidRight">Button</button>  
   
<button type="button" class="c-btn c-btn--primary c-btn--arrowSolidUp">Button</button>  

<button type="button" class="c-btn c-btn--primary c-btn--arrowSolidDown">Button</button>  

<button type="button" class="c-btn c-btn--primary c-btn--arrowSolidLeft">Button</button>  

```html
<button type="button" class="c-btn c-btn--primary c-btn--arrowSolidRight">Button</button>
<button type="button" class="c-btn c-btn--primary c-btn--arrowSolidUp">Button</button>  
<button type="button" class="c-btn c-btn--primary c-btn--arrowSolidDown">Button</button>  
<button type="button" class="c-btn c-btn--primary c-btn--arrowSolidLeft">Button</button>  
```

**Hover Example：**  
<button type="button" class="c-btn c-btn--primary c-btn--arrowSolidRight c-btn--hoverRe">Button</button>

```html
<button type="button" class="c-btn c-btn--primary c-btn--arrowSolidRight c-btn--hoverRe">Button</button>
```


## アイコン付き：SVG（Icon SVG）

<button type="button" class="c-btn c-btn--primary c-btn--icon">
  <svg class="c-btn_icon" xmlns="http://www.w3.org/2000/svg" width="17.189" height="21.126" viewBox="0 0 17.189 21.126"><g id="PDFアイコン" transform="translate(-47.706)" stroke="none"><path id="Path_4149" data-name="Path 4149" d="M61.351,0H53.788L53.4.384,48.09,5.7l-.384.384v11.5a3.548,3.548,0,0,0,3.544,3.544h10.1A3.548,3.548,0,0,0,64.9,17.582V3.544A3.548,3.548,0,0,0,61.351,0Zm2.232,17.582a2.232,2.232,0,0,1-2.232,2.232H51.25a2.232,2.232,0,0,1-2.232-2.232V6.626h3.454a1.86,1.86,0,0,0,1.86-1.86V1.312h7.019a2.232,2.232,0,0,1,2.232,2.232Z"></path><path id="Path_4150" data-name="Path 4150" d="M136.268,252.785H135.09a.337.337,0,0,0-.358.364v3.043a.412.412,0,1,0,.823,0v-.925a.03.03,0,0,1,.034-.034h.678a1.229,1.229,0,1,0,0-2.449Zm-.051,1.737h-.628a.03.03,0,0,1-.034-.033v-.959a.03.03,0,0,1,.034-.034h.628a.514.514,0,1,1,0,1.026Z" transform="translate(-83.435 -242.355)"></path><path id="Path_4151" data-name="Path 4151" d="M220.9,252.785H220a.337.337,0,0,0-.358.364v3.088a.332.332,0,0,0,.358.359h.9c.812,0,1.317-.258,1.519-.88a4.738,4.738,0,0,0,0-2.051C222.215,253.043,221.71,252.785,220.9,252.785Zm.729,2.645c-.1.3-.37.432-.751.432h-.381a.03.03,0,0,1-.034-.034v-2.275a.03.03,0,0,1,.034-.034h.381c.382,0,.656.129.751.432a4.126,4.126,0,0,1,0,1.48Z" transform="translate(-164.837 -242.355)"></path><path id="Path_4152" data-name="Path 4152" d="M309.863,252.785h-1.849a.337.337,0,0,0-.359.364v3.043a.413.413,0,1,0,.824,0v-1.087a.029.029,0,0,1,.033-.033h1.076a.354.354,0,1,0,0-.706h-1.076a.03.03,0,0,1-.033-.034v-.8a.03.03,0,0,1,.033-.034h1.351a.357.357,0,1,0,0-.712Z" transform="translate(-249.223 -242.355)"></path></g></svg> 
  ダウンロード
</button>

```html
<button type="button" class="c-btn c-btn--primary c-btn--icon">
  <svg class="c-btn_icon" xmlns="http://www.w3.org/2000/svg" width="17.189" height="21.126" viewBox="0 0 17.189 21.126"><g id="PDFアイコン" transform="translate(-47.706)" stroke="none"><path id="Path_4149" data-name="Path 4149" d="M61.351,0H53.788L53.4.384,48.09,5.7l-.384.384v11.5a3.548,3.548,0,0,0,3.544,3.544h10.1A3.548,3.548,0,0,0,64.9,17.582V3.544A3.548,3.548,0,0,0,61.351,0Zm2.232,17.582a2.232,2.232,0,0,1-2.232,2.232H51.25a2.232,2.232,0,0,1-2.232-2.232V6.626h3.454a1.86,1.86,0,0,0,1.86-1.86V1.312h7.019a2.232,2.232,0,0,1,2.232,2.232Z"></path><path id="Path_4150" data-name="Path 4150" d="M136.268,252.785H135.09a.337.337,0,0,0-.358.364v3.043a.412.412,0,1,0,.823,0v-.925a.03.03,0,0,1,.034-.034h.678a1.229,1.229,0,1,0,0-2.449Zm-.051,1.737h-.628a.03.03,0,0,1-.034-.033v-.959a.03.03,0,0,1,.034-.034h.628a.514.514,0,1,1,0,1.026Z" transform="translate(-83.435 -242.355)"></path><path id="Path_4151" data-name="Path 4151" d="M220.9,252.785H220a.337.337,0,0,0-.358.364v3.088a.332.332,0,0,0,.358.359h.9c.812,0,1.317-.258,1.519-.88a4.738,4.738,0,0,0,0-2.051C222.215,253.043,221.71,252.785,220.9,252.785Zm.729,2.645c-.1.3-.37.432-.751.432h-.381a.03.03,0,0,1-.034-.034v-2.275a.03.03,0,0,1,.034-.034h.381c.382,0,.656.129.751.432a4.126,4.126,0,0,1,0,1.48Z" transform="translate(-164.837 -242.355)"></path><path id="Path_4152" data-name="Path 4152" d="M309.863,252.785h-1.849a.337.337,0,0,0-.359.364v3.043a.413.413,0,1,0,.824,0v-1.087a.029.029,0,0,1,.033-.033h1.076a.354.354,0,1,0,0-.706h-1.076a.03.03,0,0,1-.033-.034v-.8a.03.03,0,0,1,.033-.034h1.351a.357.357,0,1,0,0-.712Z" transform="translate(-249.223 -242.355)"></path></g></svg> 
  ダウンロード
</button>
```

**Hover Example：**  
<button type="button" class="c-btn c-btn--primary c-btn--icon c-btn--hoverRe">
  <svg class="c-btn_icon" xmlns="http://www.w3.org/2000/svg" width="17.189" height="21.126" viewBox="0 0 17.189 21.126"><g id="PDFアイコン" transform="translate(-47.706)" stroke="none"><path id="Path_4149" data-name="Path 4149" d="M61.351,0H53.788L53.4.384,48.09,5.7l-.384.384v11.5a3.548,3.548,0,0,0,3.544,3.544h10.1A3.548,3.548,0,0,0,64.9,17.582V3.544A3.548,3.548,0,0,0,61.351,0Zm2.232,17.582a2.232,2.232,0,0,1-2.232,2.232H51.25a2.232,2.232,0,0,1-2.232-2.232V6.626h3.454a1.86,1.86,0,0,0,1.86-1.86V1.312h7.019a2.232,2.232,0,0,1,2.232,2.232Z"></path><path id="Path_4150" data-name="Path 4150" d="M136.268,252.785H135.09a.337.337,0,0,0-.358.364v3.043a.412.412,0,1,0,.823,0v-.925a.03.03,0,0,1,.034-.034h.678a1.229,1.229,0,1,0,0-2.449Zm-.051,1.737h-.628a.03.03,0,0,1-.034-.033v-.959a.03.03,0,0,1,.034-.034h.628a.514.514,0,1,1,0,1.026Z" transform="translate(-83.435 -242.355)"></path><path id="Path_4151" data-name="Path 4151" d="M220.9,252.785H220a.337.337,0,0,0-.358.364v3.088a.332.332,0,0,0,.358.359h.9c.812,0,1.317-.258,1.519-.88a4.738,4.738,0,0,0,0-2.051C222.215,253.043,221.71,252.785,220.9,252.785Zm.729,2.645c-.1.3-.37.432-.751.432h-.381a.03.03,0,0,1-.034-.034v-2.275a.03.03,0,0,1,.034-.034h.381c.382,0,.656.129.751.432a4.126,4.126,0,0,1,0,1.48Z" transform="translate(-164.837 -242.355)"></path><path id="Path_4152" data-name="Path 4152" d="M309.863,252.785h-1.849a.337.337,0,0,0-.359.364v3.043a.413.413,0,1,0,.824,0v-1.087a.029.029,0,0,1,.033-.033h1.076a.354.354,0,1,0,0-.706h-1.076a.03.03,0,0,1-.033-.034v-.8a.03.03,0,0,1,.033-.034h1.351a.357.357,0,1,0,0-.712Z" transform="translate(-249.223 -242.355)"></path></g></svg> 
  ダウンロード
</button>

```html
<button type="button" class="c-btn c-btn--primary c-btn--icon c-btn--hoverRe">
  <svg class="c-btn_icon" xmlns="http://www.w3.org/2000/svg" width="17.189" height="21.126" viewBox="0 0 17.189 21.126"><g id="PDFアイコン" transform="translate(-47.706)" stroke="none"><path id="Path_4149" data-name="Path 4149" d="M61.351,0H53.788L53.4.384,48.09,5.7l-.384.384v11.5a3.548,3.548,0,0,0,3.544,3.544h10.1A3.548,3.548,0,0,0,64.9,17.582V3.544A3.548,3.548,0,0,0,61.351,0Zm2.232,17.582a2.232,2.232,0,0,1-2.232,2.232H51.25a2.232,2.232,0,0,1-2.232-2.232V6.626h3.454a1.86,1.86,0,0,0,1.86-1.86V1.312h7.019a2.232,2.232,0,0,1,2.232,2.232Z"></path><path id="Path_4150" data-name="Path 4150" d="M136.268,252.785H135.09a.337.337,0,0,0-.358.364v3.043a.412.412,0,1,0,.823,0v-.925a.03.03,0,0,1,.034-.034h.678a1.229,1.229,0,1,0,0-2.449Zm-.051,1.737h-.628a.03.03,0,0,1-.034-.033v-.959a.03.03,0,0,1,.034-.034h.628a.514.514,0,1,1,0,1.026Z" transform="translate(-83.435 -242.355)"></path><path id="Path_4151" data-name="Path 4151" d="M220.9,252.785H220a.337.337,0,0,0-.358.364v3.088a.332.332,0,0,0,.358.359h.9c.812,0,1.317-.258,1.519-.88a4.738,4.738,0,0,0,0-2.051C222.215,253.043,221.71,252.785,220.9,252.785Zm.729,2.645c-.1.3-.37.432-.751.432h-.381a.03.03,0,0,1-.034-.034v-2.275a.03.03,0,0,1,.034-.034h.381c.382,0,.656.129.751.432a4.126,4.126,0,0,1,0,1.48Z" transform="translate(-164.837 -242.355)"></path><path id="Path_4152" data-name="Path 4152" d="M309.863,252.785h-1.849a.337.337,0,0,0-.359.364v3.043a.413.413,0,1,0,.824,0v-1.087a.029.029,0,0,1,.033-.033h1.076a.354.354,0,1,0,0-.706h-1.076a.03.03,0,0,1-.033-.034v-.8a.03.03,0,0,1,.033-.034h1.351a.357.357,0,1,0,0-.712Z" transform="translate(-249.223 -242.355)"></path></g></svg> 
  ダウンロード
</button>
```


## アイコン付き：Fontawesome（Icon Fontawesome）

<button type="button" class="c-btn c-btn--primary c-btn--icon">
  <i class="fab fa-apple"></i>fontawesome 5.15.1
</button>

```html
<button type="button" class="c-btn c-btn--primary c-btn--icon">
  <i class="fab fa-apple"></i>fontawesome 5.15.1
</button>
```

**Hover Example：**  
<button type="button" class="c-btn c-btn--primary c-btn--icon c-btn--hoverRe">
  <i class="fab fa-apple"></i>fontawesome 5.15.1
</button>

```html
<button type="button" class="c-btn c-btn--primary c-btn--icon c-btn--hoverRe">
  <i class="fab fa-apple"></i>fontawesome 5.15.1
</button>
```


## 角丸（Rounded）

<button type="button" class="c-btn c-btn--primary c-btn--rounded">Button</button>

```html
<button type="button" class="c-btn c-btn--primary c-btn--rounded">Button</button>
```


