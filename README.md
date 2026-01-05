# Movie Search App

TMDB API を使用した映画検索アプリです。
映画の検索、詳細表示、予告編（YouTube）、キャスト情報を確認できます。

## --公開 URL--

https://movie-search-app-rose-eta.vercel.app/

## --使用技術--

- React
- TypeScript
- Vite
- TMDB API
- CSS（Grid / Flexbox）

## --主な機能--

- 映画検索
- 人気映画一覧表示
- 映画詳細ページ
  - ポスター表示
  - あらすじ・評価・公開日
  - 予告編（YouTube）
  - キャスト一覧

## --工夫した点--

- Grid / Flexbox を使って PC / スマホ対応のレイアウトを実装
- 予告編が存在しない場合の分岐処理
- API レスポンスを TypeScript の型で管理

## --環境変数(TMDB API)--

- 本アプリでは　 TMDB-API 　を使用しています。
  ローカル環境で動作させる場合は、以下の環境変数を設定してください。

```env
VITE_TMDB_TOKEN=××××××
```
