# Studying English（オンライン英会話 復習ノート）

オンライン英会話で間違えた英語表現や講師から教わった自然な言い回しを記録し、`index.html`（GitHub Pages 等）で復習・公開するためのプロジェクトです。

## 主な機能

- 自分の表現、自然な表現、解説、タグ、カテゴリで検索や絞り込みができます。
- 「答えを隠す (テスト)」モードで自然な表現をぼかし、クリックまたはボタン操作で答えを確認できます。
- 「未習得 / 習得済み」の状態をブラウザの `localStorage` に保存できます。
- OS の外観設定に合わせてライトモード・ダークモードが自動で切り替わります。

## ファイル構成

- `index.html`: 復習用 Web ページの本体
- `data.js`: 英語表現データ（`window.ENGLISH_ENTRIES` 配列）
- `AGENTS.md`: AI エージェント向けの運用ルール
- `.agents/skills/english-log/SKILL.md`: 会話履歴の解析から `data.js` 追記・公開までのワークフロー（`/english-log`）

## 使い方

### スキルのインストール（初回・別環境）

このリポジトリでは、日本語校閲に `yomiyasu`、HTML/CSS 実装に `modern-web-guidance` を利用します。外部スキル本体は `.gitignore` で除外しているため、別環境では以下のコマンドで `skills-lock.json` からインストールしてください。

```sh
npx skills experimental_install
```

個別にインストールする場合は以下を実行します。

```sh
npx skills add nanaism/yomiyasu -a antigravity -y
npx skills add GoogleChrome/modern-web-guidance -a antigravity -y
```

### ローカルで確認する

`index.html` をブラウザで直接開くだけで動作します（外部サーバーやビルド手順は不要です）。

### 英会話の記録を追加する

AI エージェントにオンライン英会話の会話履歴やメモを渡すと、`/english-log` ワークフローに沿って以下の手順で更新されます。

1. 会話履歴から誤った表現と自然な表現のペアを抽出する
2. 日本語解説を作成し、`/yomiyasu` で校閲する
3. `data.js` の先頭に追記し、`node --check data.js` で構文を確認する
4. 変更を `git commit`・`git push` する

### GitHub Pages で公開する

1. GitHub リポジトリの「Settings > Pages」を開きます。
2. Build and deployment の Source で「Deploy from a branch」を選択します。
3. Branch に `main`、フォルダに `/ (root)` を指定して保存します。
