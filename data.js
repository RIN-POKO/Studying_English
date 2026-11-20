// オンライン英会話で間違えた英語表現・学んだ表現のデータ
// 新しい表現を追加する場合は、配列の先頭（最新順）にオブジェクトを追加してください。
window.ENGLISH_ENTRIES = [
  {
    id: "2026-11-20-10",
    date: "2026-11-20",
    category: "Preposition",
    whatISaid: "When I go to Seattle, I buy coffee beans for my souvenir.",
    correction: "When I go to Seattle, I buy coffee beans as a souvenir.",
    explanation:
      "「お土産として」と言うときは、前置詞「for」ではなく「as（〜として）」を使い、「as a souvenir」または「as souvenirs」と表現します。",
    examples: [
      "I bought some local snacks as souvenirs for my coworkers.",
      "She brought back a mug from Seattle as a souvenir."
    ],
    tags: ["travel", "preposition", "souvenir"],
    mastered: false
  },
  {
    id: "2026-11-20-09",
    date: "2026-11-20",
    category: "Grammar",
    whatISaid: "The leaves color turn to be orange.",
    correction: "The leaves turn orange.",
    explanation:
      "「（色が）〜に変わる」と言うときは「turn + 形容詞（色）」の形をそのまま使い、「to be」や「color」を間に入れる必要はありません。",
    examples: [
      "The leaves turn red and yellow in autumn.",
      "His face turned bright red."
    ],
    tags: ["nature", "verb", "color"],
    mastered: false
  },
  {
    id: "2026-11-20-08",
    date: "2026-11-20",
    category: "Naturalness",
    whatISaid: "I prefer going to sea to mountain.",
    correction: "I prefer going to the beach over the mountains.",
    explanation:
      "ビーチと山を比べるときは「sea」より「the beach」と言うのが自然です。また、「prefer A to B」や「prefer A over B」の形を使うときは比較する名詞の冠詞（the）を落とさないようにします。",
    examples: [
      "I prefer the beach to the mountains.",
      "Do you prefer staying indoors over going out?"
    ],
    tags: ["travel", "preference", "article"],
    mastered: false
  },
  {
    id: "2026-11-20-07",
    date: "2026-11-20",
    category: "Grammar",
    whatISaid: "I like to go to Finland to see Aurora.",
    correction: "I'd like to go to Finland to see the aurora.",
    explanation:
      "「〜したい」という願望を表すときは「I like to」ではなく「I'd like to（I would like to）」を使います。「I like to」は「普段〜するのが好き」という習慣の意味になります。また、オーロラは「the aurora」または「the Northern Lights」のように「the」を付けます。",
    examples: [
      "I'd like to visit Finland someday to see the Northern Lights.",
      "Where would you like to go on your next vacation?"
    ],
    tags: ["travel", "desire", "article"],
    mastered: false
  },
  {
    id: "2026-11-20-06",
    date: "2026-11-20",
    category: "Vocabulary",
    whatISaid: "I want to order a different menu depending on my feeling.",
    correction: "I like to order something different depending on my mood.",
    explanation:
      "英語の「menu」は料理や飲み物の一覧表全体を指す言葉で、個別の注文品には使いません。1つひとつの注文品を指すときは「item」「drink」「order」、あるいは「something different（いつもと違うもの）」のように表現します。",
    examples: [
      "I don't have a go-to order at Starbucks; it depends on my mood.",
      "I usually try a new seasonal item on the menu."
    ],
    tags: ["cafe", "vocabulary", "conversation"],
    mastered: false
  },
  {
    id: "2026-11-20-05",
    date: "2026-11-20",
    category: "Preposition",
    whatISaid: "Staying at Seattle is the longest vacation.",
    correction: "Staying in Seattle was my longest vacation.",
    explanation:
      "都市名のように広い場所を表すときは、前置詞は「at」ではなく「in」を使います。また、過去の旅行の話なので時制は過去形（was）にします。",
    examples: [
      "I stayed in Seattle for two weeks.",
      "Living in Tokyo is very convenient."
    ],
    tags: ["travel", "preposition", "tense"],
    mastered: false
  },
  {
    id: "2026-11-20-04",
    date: "2026-11-20",
    category: "Grammar",
    whatISaid: "I've been there to meet my sister.",
    correction: "I went there to visit my sister.",
    explanation:
      "特定の過去の旅行について話すときは、現在完了の「have been」ではなく過去形の「went」を使います。また、すでに知っている家族や友人に会いにいく場合は「meet」より「visit」が自然です。",
    examples: [
      "I went to Seattle last summer to visit my sister.",
      "I'm planning to visit my friend in Osaka next month."
    ],
    tags: ["travel", "tense", "vocabulary"],
    mastered: false
  },
  {
    id: "2026-11-20-03",
    date: "2026-11-20",
    category: "Grammar",
    whatISaid: "Japan's summer has so humid.",
    correction: "Summer in Japan is very humid.",
    explanation:
      "「humid（蒸し暑い）」は形容詞なので「has」ではなく be動詞（is）と組み合わせて使います。名詞の「humidity（湿度）」を使う場合は「It has low humidity.」のように言えます。",
    examples: [
      "It's very humid in Tokyo during July.",
      "Singapore is hot, though some places feel less humid indoors."
    ],
    tags: ["weather", "grammar", "adjective"],
    mastered: false
  },
  {
    id: "2026-11-20-02",
    date: "2026-11-20",
    category: "Grammar",
    whatISaid: "when I was an university student",
    correction: "when I was a university student",
    explanation:
      "「university」は文字では母音の u で始まりますが、発音が子音の /j/（ユ）で始まるため、冠詞は「an」ではなく「a」を使います。",
    examples: [
      "I visited Cebu when I was a university student.",
      "She wants to study at a university in the US."
    ],
    tags: ["article", "pronunciation", "grammar"],
    mastered: false
  },
  {
    id: "2026-11-20-01",
    date: "2026-11-20",
    category: "Vocabulary",
    whatISaid: "I'm good because today is Friday, so tomorrow is holiday.",
    correction: "I'm good because today is Friday, and tomorrow is the weekend.",
    explanation:
      "英語の「holiday」は祝日や長期休暇を指すことが多く、通常の土日を指す場合は「the weekend」や「a day off」を使います。",
    examples: [
      "I'm so glad tomorrow is the weekend.",
      "I have a day off tomorrow, so I'm going out with friends."
    ],
    tags: ["daily", "vocabulary", "conversation"],
    mastered: false
  }
];
