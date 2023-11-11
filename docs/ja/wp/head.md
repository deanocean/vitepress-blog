# WordPress - headタグの中身のサンプルコード

仕事でも使う WordPress の head タグの中身を用意しました。  
ご参考に使ってください。

```php
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">

<!-- ページのタイプによって違う内容を設定する -->
<?php 
if(is_home() || is_front_page()):
  $title = get_bloginfo( 'name' );
  $description = get_bloginfo( 'description' );
  $url = get_home_url();
elseif(is_page()):
  $title = get_the_title()." | ".get_bloginfo( 'name' );
  $description = get_the_title()."のページです。".get_bloginfo( 'description' );
  $url = get_page_link();
elseif(is_single()):
  $title = get_the_title()." | ".get_bloginfo( 'name' );
  $description = get_the_title()."のページです。".get_bloginfo( 'description' );
  $url = get_permalink();
elseif(is_archive()):
  $title = trim(wp_title('', false)." | ".get_bloginfo( 'name' ));
  $description = trim(wp_title('', false))."のページです。".get_bloginfo( 'description' );
  $url = home_url($_SERVER['REQUEST_URI']);
endif; 
?>

<title><?php echo $title; ?></title>
<meta name="description" content="<?php echo $description; ?>">

<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
<meta name="format-detection" content="telephone=no">

<!-- ※ OGP 基本設定 -->
<meta property="og:type" content="website" />
<meta property="og:title" content="<?php echo $title; ?>" />
<!--20文字以内が好ましい-->

<meta property="og:description" content="<?php echo $description; ?>" />
<!--最適文字数 80~90-->

<meta property="og:url" content="<?php echo $url; ?>" />
<meta property="og:site_name" content="<?php echo $title; ?>" />
<meta property="og:locale" content="ja_JP" />
<meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/assets/img/common/ogp.jpg" />
<!-- end ※ OGP 基本設定 -->

<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/assets/img/favicon.png" />

<!-- web fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Poppins:wght@500;600&display=swap" rel="stylesheet">

<!-- CSS -->
<link href="<?php echo get_template_directory_uri(); ?>/assets/css/style.css" rel="stylesheet">

<!-- Javascript -->
<script src="<?php echo get_template_directory_uri(); ?>/assets/js/script.js" defer></script>
  
<?php wp_head(); ?>

</head>
<body>

<?php get_template_part( 'inc/nav' ); ?>
```