# Movie Search App

TMDB APIを使用した映画検索アプリです。
映画の検索、詳細表示、予告編（YouTube）、キャスト情報を確認できます。

## デモURL
https://movie-search-app-rose-eta.vercel.app

## 使用技術

- React
- TypeScript
- Vite
- TMDB API
- CSS（Grid / Flexbox）

## 主な機能

- 映画検索
- 人気映画一覧表示
- 映画詳細ページ
  - ポスター表示
  - あらすじ・評価・公開日
  - 予告編（YouTube）
  - キャスト一覧

## 工夫した点

- Grid / Flexboxを使ってPC / スマホ対応のレイアウトを実装
- 予告編が存在しない場合の分岐処理
- APIレスポンスをTypeScriptの型で管理

## 今後の改善案

- ページネーション対応
- お気に入り機能の追加
- UIデザインの改善

## 環境変数（TMDB API）

本アプリではTMDB APIを使用しています。  
ローカル環境で動作させる場合は、以下の環境変数を設定してください。

```env
VITE_TMDB_API_KEY=xxxxxxx
