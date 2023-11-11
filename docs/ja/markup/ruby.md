# HTML でふりがなを付ける（ruby）

`<ruby>`タグを使ってふりがなをつけます：  

<ruby>
  <rb>台湾</rb>
  <rp>（</rp>　 <!-- 未対応ブラウザで表示される -->
  <rt>たいわん</rt>
  <rp>）</rp> <!-- 未対応ブラウザで表示される -->
</ruby>

```html
<ruby>
  <rb>台湾</rb>
  <rp>（</rp>
  <rt>たいわん</rt>
  <rp>）</rp>
</ruby>
```

`<ruby>`：親要素  
`<rb>`：対象テキスト  
`<rt>`：ふりがな  
`<rp>`：未対応のブラウザで表示されます

未対応のブラウザではこのように表示されます：  
台湾（たいわん）


## CSSを使ってデザインを調整する

バランスが悪かったので、CSSを使って調整します。  
rt は非表示にして、擬似要素でふりがなを表示させます：

<style scope>
[data-ruby] {
  position: relative;
}
[data-ruby]::before {
    content: attr(data-ruby);
    position: absolute;
    top: -2em;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 0.5em;
}
/* 以下追加 */
rb + rt {
  display: none;
}
</style>

<ruby data-ruby="たいわん">
  <rb>台湾</rb>
  <rt>たいわん</rt>
</ruby>

```html
<ruby data-ruby="たいわん">
  <rb>台湾</rb>
  <rt>たいわん</rt>
</ruby>
```

```css
[data-ruby] {
  position: relative;
}
[data-ruby]::before {
  content: attr(data-ruby);
  position: absolute;
  top: -2em;
  left: 0;
  right: 0;
  margin: auto;
  font-size: 0.5em;
}

rt {
  display: none;
}
```

---

**参考サイト**  
[ruby - ルビ](https://www.tohoho-web.com/html/ruby.htm)  
[CSSでデザイン調整可能なルビ](https://qiita.com/myzkyy/items/5f735808b45ba8dbf588)