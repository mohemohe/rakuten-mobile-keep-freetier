# rakuten-mobile-keep-freetier

[![](https://i.imgur.com/zrKO84G.png)](https://i.imgur.com/zrKO84G.png)

楽天モバイル等の回線に月1回 SMSを送信して契約解除されないようにするやつ

## 概要

AWSのSNSを使って、指定した電話番号に対して月1回ダミーのSMSを送信します。

Lambdaは無料枠の範囲内に対応しています。  
SNSは通知1回あたり $0.07451 かかります（2021/06/03現在）。

この方法で本当に契約解除されないかは未知数なので、もし解除予告が来たとしても知りません。

## デプロイ

```sh
yarn
yarn build
sam deploy -g --stack-name rakuten-mobile-keep-freetier
```
