---
name: english-log
description: オンライン英会話の会話履歴から間違いや自然な言い回しを抽出し、data.js に追記して Git commit・push まで行うワークフロー。ユーザーが英会話の履歴・メモを貼ったときや「/english-log」で呼び出されたときに使う。
---

# English Log ワークフロー

オンライン英会話の履歴を受け取ってから、`data.js` の更新・公開（`git push`）までを以下の手順で実行します。

## 1. 会話履歴の解析と表現ペアの抽出

1. ユーザーから渡された会話履歴（`講師:` / `生徒:` など）を読む。
2. 音声認識の誤変換（固有名詞の綴り違いや聞き間違いなど）は除外し、**文法・前置詞・語彙・時制・冠詞・自然さ**の観点で学習価値のある改善ポイントを抽出する。
3. 既存の `data.js` を確認し、同一の表現ペアや `id` が重複しないようにする（初回サンプルデータが残っている場合は削除してよいか確認または差し替える）。

## 2. 日本語解説の作成と校閲（`/yomiyasu`）

1. 各エントリの `explanation` を日本語で簡潔に作成する（なぜ誤りか、どう使い分けるかを明記）。
2. `/yomiyasu` スキルの `yomiyasu_lint.py` 等を使って解説文の日本語表現を校閲し、不自然な点があれば整える（誤解を正す「AではなくB」の表現は意味を保つため残す）。

## 3. `data.js` への追記と構文チェック

1. `data.js` の `window.ENGLISH_ENTRIES` 配列の**先頭**（新しい日付順）にエントリを追加する。
   - `id`: `"YYYY-MM-DD-NN"`（同日内の連番）
   - `date`: レッスン日（指定がなければ当日）
   - `category`: `Grammar` / `Vocabulary` / `Naturalness` / `Preposition` / `Phrasal Verb` / `Pronunciation` / `Idioms`
   - `whatISaid` / `correction` / `explanation` / `examples`（2件程度）/ `tags`（英語小文字）/ `mastered: false`
2. 編集後、`node --check data.js` を実行して構文エラーがないことを確認する。
3. `index.html` のデザイン・スクリプトを変更する必要が生じた場合は、必ず `/modern-web-guidance` スキルを参照する。

## 4. Commit & Push

1. `git status` と `git diff` で変更内容を確認する。
2. 問題なければステージング・コミット・プッシュを実行する：
   ```sh
   git add data.js
   git commit -m "Add English expressions for YYYY-MM-DD"
   git push
   ```
   （※`AGENTS.md` や `index.html` も更新した場合は対象に含める）
3. 完了後、追加した表現の一覧（ID・カテゴリ・元の表現・自然な表現）と、コミット・プッシュ結果をユーザーに報告する。
