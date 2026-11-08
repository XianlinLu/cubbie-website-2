# Cubbie デスクトップサイト

**[公開サイトを開く](https://cubbie-desktop-xianlin.videotuor-1490.chatgpt.site/)**

**XianlinLu（Arianna Xianlin Lu）** が開発・管理する、Next.js、React、TypeScript を使用した Cubbie のデスクトップ向けフロントエンドです。

## 開発内容と独自の貢献

プロジェクト固有のコンポーネント構成、Cubbie コンテンツの統合、デスクトップ操作、キーボード対応の曜日タブと FAQ、アニメーション統合、コンテンツ検証、静的配信の設定を紹介します。

独自の貢献とは、このプロジェクト固有のコードと開発作業を指します。Cubbie のブランド、提供された文章、第三者のイラスト、外部ライブラリの所有権を主張するものではありません。[出典と権利情報](docs/ATTRIBUTION.md) および [LICENSE](LICENSE) を参照してください。

## ローカル実行

Node.js 24 以降が必要です。

```sh
npm ci
npm run dev
```

http://localhost:3000 を開いてください。`npm run build` は `out/` に静的サイトを出力します。バックエンドや秘密の環境変数は不要です。

## 検証

```sh
npm run check
npm run verify:content
```

コンテンツ検証には Python 3 が必要です。非表示の曜日タブと FAQ を含む文章を確認します。`/_qa/desktop.html` でデスクトップ幅を確認できます。

## 編集箇所

- ページ構成：`src/app/page.tsx`
- コンテンツとコンポーネント：`src/components/cubbie/`
- 共通スタイル：`src/app/globals.css`
- 画像・アニメーション・フォント：`public/cubbie/`
- 検証用文章：`docs/copy-inventory.json`

## 配信と範囲

既存のデスクトップ画面と素材を維持します。外部機能やログインへのリンクは Cubbie に移動します。このデモは実際のアカウント接続、メール送信、課題提出を行いません。

静的ホストで `out/` を配信できます。GitHub のプロジェクトサブパスには `NEXT_PUBLIC_BASE_PATH=/cubbie-website-2 npm run build` を使用してください。

[English](README.md) · [简体中文](README.zh-CN.md)
