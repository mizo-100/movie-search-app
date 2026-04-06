# Movie Search App

TMDB API を使用したシンプルで使いやすい映画検索アプリです。
人気映画のチェックから、詳細なキャスト情報の確認、予告編の視聴までスムーズに行えます。文字化けなどの都合で、us使用にしています。

## --公開 URL--

[https://movie-search-app-rose-eta.vercel.app/](https://movie-search-app-rose-eta.vercel.app/)

## --使用技術--

- Frontend: React (Vite), TypeScript
- Styling: CSS (Grid / Flexbox / Responsive Design)
- API: TMDB API (Movie Data, Cast, Videos)
- Deployment: Vercel

## --主な機能--

- 映画検索: リアルタイム（または検索ボタン）でのキーワード検索
- 人気映画一覧: 今話題の映画をグリッド形式で表示
- 詳細ページ: ポスター表示・あらすじ・評価・公開日の確認
- 予告編再生: YouTube API と連携した予告編視聴
- キャスト紹介: 主要キャストの顔写真と役名をリスト表示

## --工夫した点--

- レスポンシブ対応: CSS Grid を活用し、PCから iPhone SE 等の小型デバイスまで崩れないレイアウトを実現。
- 型安全な開発: API レスポンスやコンポーネントの Props を TypeScript で定義し、バグの少ない開発を徹底。
- 効率的なデータ取得: `Promise.all` を使用し、詳細・キャスト・動画の情報を並列で取得して表示速度を高速化。
- ユーザー体験(UX): 予告編や画像がない場合のエラーハンドリングを実装し、画面が不自然に崩れないよう配慮。

## --環境変数(TMDB API)--

- 本アプリでは TMDB-API を使用しています。
  ローカル環境で動作させる場合は、以下の環境変数を設定してください。

```env
VITE_TMDB_TOKEN=あなたのTMDBトークン
