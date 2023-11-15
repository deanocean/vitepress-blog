# 文字内にスポットライトが動くアニメーション

仕事でこのような動きを作ってほしいという依頼がありましたので、記録します。    
Codepenから似たような機能が見つかって、それを参考にしてカスタマイズしました。  
[Rainbow spotlight](https://codepen.io/TajShireen/pen/xxGPEEp)  

動きは横になる8を描くように設定しました。


## イメージ

<style lang="scss" scope>
  @keyframes swing{
    0%{
      background-position: -30% 130%;
    }
    30%{
      background-position: 100% -100%;
    }
    50%{
      background-position: 130% 150%;
    }
    80%{
      background-position: -10% -110%;
    }
    100%{
      background-position: -30% 130%;
    }
  }

  .display {
    background-color: #fff;
    line-height: 1;
    margin-top: 2rem;
    font-weight: bold;
    font-size: 6rem;
    width: fit-content;
    padding: .1em;
    box-shadow: 0 0 30px rgba(#000, .2);

    &::before {
      content: attr(data-text);
      position: absolute;
      -webkit-background-clip: text;
      background-size: 15rem 15rem;
      background-repeat: no-repeat;
      background-position: -30% 130%;
      color: transparent;
    }    

    &.is-yellow {
      &::before {
        background-image: radial-gradient(rgba(248, 245, 1, 80%), rgba(248, 245, 1, 0%) 80%);
        animation: swing 7s ease-in-out infinite alternate;
      }
    }
    
    &.is-blue {
      &::before {
        background-image: radial-gradient(rgba(95, 209, 211, 80%), rgba(95, 209, 211, 0%) 80%);
        animation: swing 8.5s ease-in-out infinite alternate-reverse;
      }
    }
  }
</style>

<div class="display is-yellow" data-text="一行目です">一行目です</div>
<div class="display is-blue" data-text="二行目です">二行目です</div>


## サンプルコード

### 説明
HTMLのdata属性を使って、テキストと同じような内容を書き込みます。  
これが擬似要素に使われて表示されて、テキストの上に重なるというイメージです。  
そして、CSSで`background`と`-webkit-background-clip`との組み合わせで、スポットライトを作ります。  
最後はアニメーションを作って、スポットライトを動かします。  

[Codepen](https://codepen.io/deanocean/pen/mdvBKaO)

### コード
```html
<div class="display is-yellow" data-text="一行目です">一行目です</div>
<div class="display is-blue" data-text="二行目です">二行目です</div>
```

```css
@keyframes swing{
  0%{
    background-position: -30% 130%;
  }
  30%{
    background-position: 100% -100%;
  }
  50%{
    background-position: 130% 150%;
  }
  80%{
    background-position: -10% -110%;
  }
  100%{
    background-position: -30% 130%;
  }
}

.display {
  font-size: 60px;
  font-weight: bold;
}

.display::before {
  content: attr(data-text);
  position: absolute;
  -webkit-background-clip: text;
  background-size: 150px 150px;
  background-repeat: no-repeat;
  background-position: -30% 130%;
  color: transparent;
}

.display.is-yellow::before {
  background-image: radial-gradient(rgba(248, 245, 1, 80%), rgba(248, 245, 1, 0%) 80%);
  animation: swing 7s ease-in-out infinite alternate;
}

.display.is-blue::before {
  background-image: radial-gradient(rgba(95, 209, 211, 80%), rgba(95, 209, 211, 0%) 80%);
  animation: swing 8.5s ease-in-out infinite alternate-reverse;
}
```