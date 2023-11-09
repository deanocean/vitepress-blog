# Movable Type 勉強マニュアル


::: info 目次
[[toc]]
:::

## 前書き

Movable Type に関しての情報はネット上少なくて、  
筆者も MT について全く知らない状態から、ネットで調べながら知識を身につけてきました。

この記事は MT の初心者に向けて、MT の知識をまとめました。    
これを読んで全体像を掴んでもらって、勉強時間の短縮に役に立てれば幸いです。



## 公式チュートリアル

公式が提供されている学習教材です。  
これを軸に勉強してください。

[トフでもできる！？テーマ開発講座](https://developer.movabletype.net/themeguide/)  
> テーマの学習＆開発ガイドです。  
MTタグ、テンプレート、カスタムフィールド等も習得できます。MovableType.netが使われますが、ソフトウェア版とは大体共通なので、参考にできます。  
※管理画面のUIやカスタムフィールドの書き方等はソフトウェア版と違いがあるので要注意。


[トフでもできるコンテンツタイプ](https://www.movabletype.jp/developers/contentstypeguide/)
> ソフトウェア版を使ったコンテンツタイプのチュートリアルです。


::: tip ソフトウェア版は個人無償版があるので、練習用として使ってください。
[Movable Type 個人無償版ダウンロード](https://www.sixapart.jp/inquiry/movabletype/personal_download.html)
:::

::: warning もっと知る
[Movable Type 公式マニュアル](https://www.movabletype.jp/documentation/)

[MovableType.net活用ブログ](https://movabletype.net/blog/)
:::


## 基本概念

### Movable Type の特徴

特徴やWordPressとの違いを知っておきます。

::: warning 参考サイト
[Movable Typeとは](https://speever.jp/useful/dictionary/gloassary-movable-type/)

[Movable Type（ムーバブルタイプ）とは？CMSとしての特徴やWordPressとの違いを紹介](https://www.sungrove.co.jp/movable-type/)
:::


### テーマ

 テーマディレクトリに配置されるファイルについてざっくり説明します。

`theme.yaml`  
テーマの設定情報になります。  

`thumbnail.png（thumbnail_medium.png、thumbnail_small.png）`  
テーマのサムネイル画像になります。サムネイルサイズは3種類になります。  

`templates/`  
適用するテンプレートを格納するディレクトリになります。（テンプレートの拡張子は、mtml）

`alt-tmpl/`  
テーマを適用することで利用中のサイトの管理画面をカスタマイズすることができます。

`static/`  
テーマのデザインで利用する画像/CSS/JSなどのファイルを格納するディレクトリ（適用時に自動的にtheme_staticへコピーします。


::: warning テーマについて深く知りたい場合、以下の参考サイトを読んでください。

テーマの概要
https://www.movabletype.jp/documentation/mt7/designers-guide/manage-theme/overview/

テーマの構造
https://www.movabletype.jp/documentation/developer/theme/index.html

テーマを作成する 
https://www.movabletype.jp/documentation/mt7/designers-guide/manage-theme/make-theme/

標準のテーマ エレメント 
https://www.movabletype.jp/documentation/developer/theme/core_elements.html
:::



### 記事 と ウェブページ 

**記事**は、WordPress の「投稿」に似たものです ウェブページ**は、WordPress の定ページ」に似たものです。


### テンプレート

テンプレートは、ページごとのデザイン、アーカイブページ、共通パーツ（モジュール）などを作成・管理します。  
管理画面の「デザイン」→「テンプレート」に管理されています。

- **インデックス・テンプレート**  
index.html、news.htmlなど１つのサイトに１つにしかないぺージのテンプレート。
- **アーカイブ・テンプレート**  
記事、ウェブページなど、管理画面から投稿すると増えていくぺージのテンプレート。
- **システムテンプレート**  
システム上必要なページのテンプレート。
- **モジュール**  
`テンプレート・モジュール`ともいいます。`ヘッダー`や`ナビゲーション`などをパーツのようにして、テンプレートの中で呼び出してつかいまわします。
- **ウィジェット**  
サイドバーなどで利用するコンテンツを細かく部品化し、管理画面上でドラッグ・アンド・ドロップして管理できるものです。

::: warning もっと詳しく

[テンプレートの種類と役割 ](https://www.movabletype.jp/documentation/mt6/design/templates/template-types.html)
:::



### MTタグ

MTタグには大きく３つの種類があり、ファンクションタグ、ブロックタグ、コンディショナルタグと分類されます。

#### ファンクションタグ、ブロックタグ
例えば、ページ名やページのアドレスを取得したい場合は、まずブロックタグ`<mt:Pages></mt:Pages>`で囲みます。その内側で、ファンクションタグ`<$mt:PageTitle$>`を使うと、ウェブページのタイトルが取得できるようになります。

例：
```html
<mt:Pages>
  <ul>
    <li>
      <a href="<$mt:PagePermalink$>">
        <$mt:PageTitle$>
      </a>
    </li>
  </ul>
</mt:Pages>
```

ファンクションタグは上の例で`<$mt:PagePermalink$>`、`<$mt:PageTitle$>`の様なタグを指します。そのタグ一つで値（結果）を返してくれます。

ブロックタグは上の例で `<mt:Pages>` の様に開始・終了タグがあるものを指します。


#### コンディショナルタグ

コンディショナルタグは、プログラミングに近いものを実現できます。
タグ例：`<mt:if>`、`<mt:Else>`、`<mt:ElseIf>`、`<mt:SetVar>`

例：
```html
<mt:SetVar name="love" value="polar bear">

<mt:If name="love" eq="elephant">
  <p>私はゾウを愛しています</p>
<mt:ElseIf name="love" eq="polar bear">
  <p>私はゾウより、シロクマを愛しています</p>
<mt:Else>
  <p>私はゾウもシロクマも愛していないのです</p>
</mt:If>
```

::: warning もっと詳しく

[テンプレートタグの種類と働き](https://www.movabletype.jp/documentation/designer/template-tags.html)

[MTIf](https://www.movabletype.jp/documentation/appendices/tags/if.html)

[MTSetVar](https://www.movabletype.jp/documentation/appendices/tags/setvar.html)
:::

::: warning よく使うMTタグの使用例まとめ

[【MT】よく使うMovableTypeのタグまとめ](https://qiita.com/4cres/items/f2ea369ebfe111a8ed00)

[【知識ゼロから始めるMovable Type】テンプレートタグ](https://www.qam-web.com/?p=12700)
:::



### カスタムフィールド

カスタムフィールドは記事、ウェブページ、ブログ、アイテム、カテゴリ、フォルダといったシステムオブジェクトに、「テキスト」「URL」「ドロップボタン」などさまざまなタイプのフィールドを追加できる機能です。


カスタムフィールドの画像のURLを取得例：
```html
<mt:If tag="cf_img">
  <mt:cf_imgAsset>
    <img src="<mt:AssetURL>">
  </mt:cf_imgAsset>
</mt:If>
```

::: warning 参考サイト

[【MovableType】カスタムフィールドでアップした画像（アセット）を出力する方法](https://qiita.com/hacchi56/items/7f53b96ebe6863e67272)

[Movable Typeのカスタムフィールドを使ってみる](https://cly7796.net/blog/cms/try-using-movable-type-custom-fields/)
:::



### コンテンツタイプ

> コンテンツタイプは「記事」「ウェブページ」に加えて、新しいコンテンツの投稿形式です。WordPressでいうと、「Custom Post Type UI(CPT UI)」に似たような機能です。コンテンツタイプを作成したら、コンテンツデータからデータを入力していきます。




::: warning 参考サイト

[Movable Typeのコンテンツタイプを使ってみる](https://cly7796.net/blog/cms/try-using-movable-type-content-type/)

[コンテンツタイプ逆引き辞典](https://www.movabletype.jp/documentation/dict/)
:::


### タグ

タグとは各コンテンツ（ブログの記事、ウェブページ）に付与することができるキーワードです。
類似したものにカテゴリがありますが、一般的にコンテンツ一つにつき一つのカテゴリを設定できるのに対し、タグは複数設定することができます。


::: warning 参考サイト

[Movable Type 7 ウェブページにタグを付けて一覧表示する](https://www.webolve.com/make/cms/mt_page_tag_list/)

[MovableType 7 でタグの確認と @ 付きタグの使い方](https://www.webolve.com/make/cms/mt_page_tag_check/)
:::



### MTブロックエディタ 

MTBlockEditorという公式が開発したプラグインです。

MTブロックエディタでは、独自のブロックをカスタムブロックとして作成できます。 それら複数のブロックを組み合わせてプリセットとして登録し、同じフォーマットのコンテンツ作成を容易にします。 また、これまでのブロックエディタと異なり、コンテンツタイプだけでなく、従来の記事やウェブページでも利用可能です。
 ※WordPressのGutenbergのような投稿者がより編集しやすいためのプラグインなので、案件によって必須ではあせん。**

::: warning 参考サイト

[ダウンロードページ](https://github.com/movabletype/mt-plugin-MTBlockEditor)

[公式マニュアル](https://www.movabletype.jp/documentation/mt7/admin-guide/manage-site/mt-blockeditor/)



[新しいブロックエディタプラグインを正式公開](https://www.movabletype.jp/blog/block_editor_release.html)

[ブロックエディタ | MovableType.net活用ブログ](https://movabletype.net/blog/blockeditor/)

[Movable Type.netのカスタムブロックでよくある目次とページ内リンクを設定してみた](https://www.nomad-creator.com/blog/2020/12/)movable-typenet.html

[MovableType.netで複数の入力項目を持ったブロックを作る（2020年12月時点）](https://qiita.com/webbingstudio@github/items/)86c22161f5342559eaa6

[MTBlockEditorBlocks](https://www.movabletype.jp/documentation/appendices/tags/mtblockeditorblocks.html)
:::

#### カスタムスクリプト

::: warning 参考サイト

[【カスタムブロック：初心者向け】カスタムスクリプトを理解しよう！〜第1回：カスタムスクリプトってなに？〜](https://movabletype.net/blog/)2022/04/about-customscript01.html

[MovableType7ブロック・エディタの【カスタムスクリプト】が、なんでもできそうでスゴかった](https://www.chaordic.co.jp/memorandum/)chaordicdesign/47/

[カスタムスクリプトの仕様](https://movabletype.net/support/customblock/customscript.html)
:::


---

## 404ページの作り方
[](https://cly7796.net/blog/cms/set-404-pages-with-movable-type/)

Movable Typeの管理画面で `デザイン` > `テンプレート` を選択して、`インデックステンプレート`で404ページを作成します。
出力ファイル名を「404.html」にして保存・再構築を行ってください。

続けて`.htaccess`に記述を追加するようにして下さい。
```
ErrorDocument 404 /404.html
```
「/404.html」の部分を先ほど作成した404ページのルートパスに適宜変更してください。




---

## Xserver にインストールする手順

:::info
1. データアップロード
1. パーミッション変更
1. データベース設定
1. mt-configファイル設定
1. MTをインストール
:::

### 1. データアップロード
ドメイン直下にmtディレクトリを作成し、mtのシステムファイルをアップロードします。  
(命名はmtじゃなくても大丈夫です。)

### 2. パーミッション変更
mtディレクトリ内にある「.cgi」ファイルのパーミッションを「700」か「705」に変更します。FileZillaなら右クリックして「ファイルのパーミッション」から変更できます。

### 3. データベース設定
従来のやり方と一緒ですので、省略します。

### 4. mt-configファイル設定
「mt-config.cgi」をmtディレクトリに作成し、下の内容をコピペして自分の環境に合わせて変更します。
「mt-config.cgi-original」といったテンプレートファイルがある場合、内容を変更した上でファイル名を「mt-config.cgi」と変更して使ってもいいです。

※ バージョンによっては、MTの管理画面で初期インストール画面から、DBの情報を記入できます。記入したら、自動的にmt-config.cgiを作成してくれます。
```
CGIPath http://ドメイン名/mt/
StaticWebPath http://ドメイン名/mt/mt-static
ObjectDriver DBI::mysql
Database (A)
DBUser (B)
DBPassword (C)
DBHost (D)
```

### 5.MTをインストール

URLから管理画面へアクセスしてインストール作業を行います。


::: warning 参考サイト
 ↓主にこのサイトを参考にしています。  
[Movable Typeをエックスサーバーに手動インストールするのは簡単](https://bokunomad.com/2017/04/movabletype_install_manual/)

[公式の導入ガイド](https://www.movabletype.jp/documentation/mt7/installation/)
:::


---

## サイトの移行（エクスポート & インポート）
 ※下記の方法は、「記事のエクスポート/インポートとテーマ（テンプレート）の移行」の例です。他の方法で移行場合、参考サイトの「Q.別のサーバーへ移行したい」を読んでください。**

### 移行する項目

- **テーマ**  
テーマでエクスポートできるコンテンツ：
(ファイル（静的アセット）、カスタムフィールド、カテゴリ、カテゴリセット、コンテンツタイプ、テンプレートセット)
「ツール」→「テーマのエクスポート」

- **静的アセット（css、js、img）**  
「アセット」はテーマと一緒にエクスポートできます。
移行方法：`テーマのエクスポート`の`オプション`の`ファイル`の`詳細`にアセットに該当するディレクトリを記述します。例：`common`
すると、`common`がエクスポートされたデータの`blog_static`フォルダに入ります。そして、インポート先でテーマが適用されたとき`common`フォルダも該当サイトに配置されます。

- **記事**  
「記事」→「エクスポート」

- **アップロードされたアセット**  
FTPでエクスポート元からアセットが入ったフォルダをダウンロードします。インポート先に手動でアップロードします。
（インポートされた記事は、本文にアップロードされた画像が絶対パスの場合があるので、記事に画像のリンク切れが発生した場合、手動でリンクを修正しないといけない。）

- **カスタムフィールドの内容**  
カスタムフィールドの内容は入力し直し、アセットはアップロードし直す必要があります。

- **ウェブページ**  
「ウェブページ」と「コンテンツデータ」は手動で移行

- **コンテンツデータ**  
「ウェブページ」と「コンテンツデータ」は手動で移行

- **カスタムブロック**  
「MTブロックエディタ」→「カスタムブロック」→「書き出す」





※「サイトのエクスポート」で書き出しされたデータは、インポート先のMTが同じバージョンじゃないとインポートできないです。
※「ウェブページ」と「コンテンツデータ」は、現時点（2022.09）ではエクスポートできません。


:::info
テーマのデザインで利用する画像ファイルなどを、(THEME_HOME)/staticディレクトリに含めることができます。このディレクトリがテーマに含まれていると、Movable Type は自動的にこのディレクトリの内容を(SUPPORT_DIRECTORY)/theme_static/MY_THEME ディレクトリにコピーします。
:::

::: warning 参考サイト
[テーマをエクスポートする ](https://www.movabletype.jp/documentation/mt7/designers-guide/manage-theme/export-theme/)

[テーマをインストールする](https://www.movabletype.jp/documentation/mt7/designers-guide/manage-theme/install/)

[記事のエクスポートとインポート](https://www.movabletype.jp/documentation/mt7/users-guide/manage-content/manage-entries/)export-import/

[オリジナルのテーマを作成、エクスポートする ](https://www.movabletype.jp/documentation/mt5/design/themes/create.html)

[カスタムブロックの書き出しと読み込み ](https://www.movabletype.jp/documentation/mt7/admin-guide/manage-site/mt-blockeditor/)namage-customblock/export-import-customblock/

[完成したサイトを「テーマ」として保存しよう！](https://gihyo.jp/design/serial/01/mtcorp_cms/0006)

[Q.別のサーバーへ移行したい](https://www.movabletype.jp/faq/server-migration.html)
:::






## その他


### テーマに下記のエラーメッセージが出たとき
```
custom_fieldsの適用中にエラーが発生しました: 
このブログのカスタムフィールド と出力ファイル名「xxx」が衝突しています。
```
 解決策
>これはすでにブログ（ウェブサイト）に存在するカスタムフィールドを、追加しようとした時に起きるエラーで、一度ウェブサイト内のカスタムフィールドをすべて削除していただければ発生しません。
https://communities.movabletype.jp/2010/09/movable-type-5-sbc.html



### ページネーションを複数のインデックステンプレートに実装するときにエラーが出た
 解決策
ページネーションをインデックステンプレートに実装したい場合、`main_index`ページのみに限定されていますので、複数のインデックステンプレートに実装することはできません。

>現在のページ送り機能はセキュリティ的な観点から、標準のメインページ（main_index） のみに限定しています。任意のテンプレートを動的にロードできると、公開を意図していないテンプレートが指定されないようにという措置です。
もう少し汎用的にページ送りを利用できるように、今後検討させていただきたいと思います。  
https://communities.movabletype.jp/2010/11/post-209.html



### テンプレートごとに表示させる内容を変えたい
 解決策
【MovableType】テンプレートごとに表示させる内容を変える
https://qiita.com/hacchi56/items/d26c740aea1f89e4f245

【Movable Type】テンプレートの種類や特定のページで出力する内容を変更する方法
https://tadabi.tokyo/2021/mt-variable/


### 関連記事へのリンクを表示したい
 解決策
[MTカスタマイズ Tips]ブログ記事に関連する記事リストを表示する
https://bashalog.c-brains.jp/10/10/26-161346.php


### たまに見かける「ブログ」という言い回しは何？

これはMT6までのものです。MT7では、**「ウェブサイト」と「ブログ」は、「サイト」という名称で統一されます。**

参考サイト：Movable Type ７にアップグレードしたほうが良い？
https://blog.arkw.co.jp/2018/06/movable-type-7.html