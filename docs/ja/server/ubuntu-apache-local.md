# UbuntuでApacheサーバーをローカルで構築する手順

サーバーについての知識を勉強するために、Ubuntuでローカルサーバーを構築してみたので、手順を記載します。

**目次：**
[[toc]]

## Apache のインストール

Ubuntuのインストール可能なパッケージの「一覧」を更新する。  
`sudo apt-get update`

Apacheをインストールする  
`sudo apt-get install apache2`

Apacheがインストールされたかを確認する  
`sudo systemctl status apache2`

Apacheのパーミッションを変更（ファイルを作成できないとき）  
`sudo chmod -R 777 /var/www`


## HTML ファイルを用意し、静的ページを閲覧できるようにする

### Ubuntuのターミナルから作成する方法
htmlファイルを作成  
`echo "test" > /var/www/html/test.html`

viエディターを使ってファイルを編集する  
`vi /var/www/html/test.html`

### ローカルからファイルをUbuntuに転送する方法
ubuntuにファイルを転送したいとき、ローカルのパソコンのターミナルで下記を実行する  
`scp /path/to/local/file username@your_ubuntu_ip:/path/to/remote/directory`


## ブラウザで閲覧する

ブラウザ（Firefox）をインストール  
```
sudo apt-get update
sudo apt-get install firefox
```

UbuntuのホストのIPアドレスを調べる  
`hostname -I`

ブラウザで下記URLからWebページを確認  
`ipアドレス/test.html`


## ubuntuを終了させる

`sudo shutdown -h now`


## 更にphpファイルを閲覧できるようにする

### php, mysql, phpMyAdmin をインストールする

MySQL、PHP をインストールする
```
sudo apt update
sudo apt install mysql-server php libapache2-mod-php php-mysql
```

phpMyAdminをインストールする  
`sudo apt install phpmyadmin`

### phpMyAdmin のアクセス権限を設定する

次に以下のコマンドを実行します。  
`sudo vi /etc/apache2/conf-available/phpmyadmin.conf`  
以下の内容をコピペし、`/etc/apache2/conf-available/phpmyadmin.conf`ファイルを作成する。
```
Include /etc/phpmyadmin/apache.conf

<Directory /usr/share/phpmyadmin>
Order deny,allow
</Directory>
```
（この設定だと、「phpMyAdminのページに全員アクセス可能」という設定になる）

### サイトの有効化とApacheの再起動
```
$ sudo a2enconf phpmyadmin.conf
$ sudo service apache2 restart // or: sudo systemctl restart apache2
```

### 下記URLにアクセスすると、phpMyAdminのページが開ける。
`http://サーバのIP/phpmyadmin/`  
ユーザー：`phpmyadmin`  
パスワード：`先ほど設定したパスワード`  

### phpMyAdminからデータベースを作成できるように設定する
以下のコマンドでログイン。  
`$ sudo mysql -u root -p`

phpmyadminに特権を付与するコマンドを入れます。  
WITH GRANT OPTIONは継承を可能にするオプションです。  
`mysql> GRANT ALL PRIVILEGES ON *.* TO 'phpmyadmin'@'localhost' WITH GRANT OPTION;`

設定を反映させます。  
`mysql> FLUSH PRIVILEGES;`

（管理画面から新しいテーブルを作成できるようになる）

### php と mysql との接続ができるかを確認

test.php を作成して、`sudo vi /var/www/html/test.php`、以下の内容を書く
```php=
<?php
$conn = mysqli_connect("localhost", "phpmyadmin_user", "password", "test_db");
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM test_table";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        echo "id: " . $row["id"]. " - Name: " . $row["name"]. " - Email: " . $row["email"]. "<br>";
    }
} else {
    echo "0 results";
}

mysqli_close($conn);
?>
```

ブラウザで下記URLからWebページを確認  
`ipアドレス/test.php`