# WordPress - 投稿の新規追加ボタンを非表示する

### やりたいこと
もし公開された投稿が1つある場合、「新規追加」ボタンを非表示にし、まだ投稿がない場合は、「新規追加」を有効にしたいです。

### 方法
今回は post type は product にしているので、ご自身の post type に書き替えてください。  
`wp_count_posts( 'product' )->publish` を使用してアクティブな/公開された投稿の数を確認し、条件文で新規追加機能を 無効/有効 に切り替えます。　 

functions.php:  
```php
function disable_create_newpost() {
  global $wp_post_types;
  if(wp_count_posts( 'product' )->publish > 0){
     $wp_post_types['product']->cap->create_posts = 'do_not_allow';
  }
}
add_action('init','disable_create_newpost');
```