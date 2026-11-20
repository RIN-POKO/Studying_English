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
  },
  {
    id: "2026-11-02-10",
    date: "2026-11-02",
    category: "Vocabulary",
    whatISaid: "I think technology makes discrimination splitting.",
    correction: "I think technology makes discrimination spread.",
    explanation:
      "「広がる・拡散する」は「split（分裂する・割れる）」ではなく「spread」を使います。また、「make + 目的語 + 動詞の原形」の形をとるため、「splitting」ではなく原形の「spread」にします。",
    examples: [
      "Social media can make misinformation spread very quickly.",
      "Technology has accelerated the spread of both knowledge and prejudice."
    ],
    tags: ["vocabulary", "grammar", "technology"],
    mastered: false
  },
  {
    id: "2026-11-02-09",
    date: "2026-11-02",
    category: "Naturalness",
    whatISaid: "I try to do no discrimination.",
    correction: "I try not to discriminate against others.",
    explanation:
      "「差別する」は「do discrimination」ではなく、動詞の「discriminate（against 〜）」を使います。「〜しないように心がける」は「try not to + 動詞の原形」で表すと自然です。",
    examples: [
      "We should try not to judge people before getting to know them.",
      "Companies must not discriminate against applicants based on age."
    ],
    tags: ["verb", "discussion", "social"],
    mastered: false
  },
  {
    id: "2026-11-02-08",
    date: "2026-11-02",
    category: "Grammar",
    whatISaid: "I think prejudice is the same meaning as stereotype.",
    correction: "I think prejudice has the same meaning as stereotype.",
    explanation:
      "「AはBと同じ意味だ」と言うとき、「A is the same meaning as B」だと「A＝意味」になってしまいます。意味を「持っている」と考えて「A has the same meaning as B」とするか、動詞を使って「A means the same thing as B」と表現します。",
    examples: [
      "Does this word have the same meaning as the one we learned yesterday?",
      "In this context, 'prejudice' and 'bias' mean almost the same thing."
    ],
    tags: ["grammar", "vocabulary", "discussion"],
    mastered: false
  },
  {
    id: "2026-11-02-07",
    date: "2026-11-02",
    category: "Vocabulary",
    whatISaid: "I went to high school which is not smart.",
    correction: "I didn't go to a prestigious high school.",
    explanation:
      "「smart」は主に人の知性に対して使う形容詞で、学校に対して「進学校・名門校」と言うときは「prestigious（名門の）」「top」「good」などを使います。また、「high school」は具体的な1つの学校を指すため、冠詞「a」が必要です。",
    examples: [
      "He graduated from a prestigious university in Tokyo.",
      "She didn't go to a top high school, but she worked hard and succeeded."
    ],
    tags: ["vocabulary", "education", "article"],
    mastered: false
  },
  {
    id: "2026-11-02-06",
    date: "2026-11-02",
    category: "Preposition",
    whatISaid: "When I applied job interview, I couldn't get the chance to be interviewed.",
    correction: "When I applied for a job, I didn't get a chance to be interviewed.",
    explanation:
      "「〜に応募する」と言うときは、他動詞のように直接名詞を置かず、「apply for + 名詞」と前置詞「for」を付けます。また、「面接に応募する」のではなく「仕事（求人）に応募する」ので、「apply for a job」や「apply for a position」と言うのが自然です。",
    examples: [
      "I applied for several jobs after graduating from university.",
      "She applied for a marketing position at a global company."
    ],
    tags: ["preposition", "job", "business"],
    mastered: false
  },
  {
    id: "2026-11-02-05",
    date: "2026-11-02",
    category: "Naturalness",
    whatISaid: "People in Japan have the same nationality, same religion, and same color of skins.",
    correction: "People in Japan share the same nationality, religion, and skin color.",
    explanation:
      "「肌の色」は「color of skins」ではなく「skin color（不可算）」と言うのが自然です。また、「同じ〜を持っている」と言うときは「share the same A, B, and C」のように「the same」を1回にまとめるとすっきりします。",
    examples: [
      "People should not be judged by their skin color or nationality.",
      "We share the same goal and values."
    ],
    tags: ["naturalness", "vocabulary", "discussion"],
    mastered: false
  },
  {
    id: "2026-11-02-04",
    date: "2026-11-02",
    category: "Grammar",
    whatISaid: "In Japan, other discrimination hardly occurred.",
    correction: "In Japan, other forms of discrimination rarely happen.",
    explanation:
      "日本の現状という一般的な事実を述べているため、過去形（occurred）ではなく現在形（happen / occur）を使います。また、「他の種類の差別」と言うときは「other forms of discrimination」や「other types of discrimination」と表現すると自然です。",
    examples: [
      "Other forms of discrimination rarely happen in this community.",
      "Such misunderstandings hardly ever occur when people communicate openly."
    ],
    tags: ["tense", "grammar", "discussion"],
    mastered: false
  },
  {
    id: "2026-11-02-03",
    date: "2026-11-02",
    category: "Grammar",
    whatISaid: "Everyone may be able to discrimination because we don't know everything.",
    correction: "Anyone might discriminate against others because we don't know everything.",
    explanation:
      "「discrimination」は名詞なので、「to」の後ろには動詞の「discriminate（差別する）」を使います（通常「discriminate against + 人」の形をとります）。また、「〜してしまうかもしれない」という可能性を表すときは、「be able to（〜する能力がある）」ではなく「might」や「can」を使います。",
    examples: [
      "Anyone can unintentionally discriminate against others out of ignorance.",
      "We might hurt someone's feelings without realizing it."
    ],
    tags: ["grammar", "verb", "discussion"],
    mastered: false
  },
  {
    id: "2026-11-02-02",
    date: "2026-11-02",
    category: "Grammar",
    whatISaid: "Almost doctors are men and almost women are good at cooking.",
    correction: "Most doctors are men, and most women are good at cooking.",
    explanation:
      "「almost」は副詞なので、「almost + 名詞」の形では使えません。「ほとんどの〜」と名詞に直接つなげるときは「most + 名詞」または「almost all + 名詞」を使います。",
    examples: [
      "Most people in my office commute by train.",
      "Almost all students passed the final exam."
    ],
    tags: ["grammar", "quantifier", "conversation"],
    mastered: false
  },
  {
    id: "2026-11-02-01",
    date: "2026-11-02",
    category: "Grammar",
    whatISaid: "In Japan this week, tomorrow is national holiday.",
    correction: "Tomorrow is a national holiday in Japan.",
    explanation:
      "「holiday」や「national holiday」は可算名詞なので、単数で使うときは冠詞「a」が必要です。また、「this week」と「tomorrow」を重ねるより、「Tomorrow is a national holiday in Japan.」のようにシンプルに言うと自然です。",
    examples: [
      "Next Monday is a national holiday in Japan.",
      "Do you have any plans for the national holiday tomorrow?"
    ],
    tags: ["article", "daily", "conversation"],
    mastered: false
  },
  {
    id: "2026-10-22-10",
    date: "2026-10-22",
    category: "Grammar",
    whatISaid: "Leave the food is a bad manner in Japan.",
    correction: "Leaving food on your plate is bad manners in Japan.",
    explanation:
      "動詞「leave」を主語にするときは動名詞「Leaving」にします。また、「礼儀作法・マナー」という意味では通常複数形の「bad manners」を使い、冠詞の「a」は付けません。",
    examples: [
      "It is considered bad manners to talk with your mouth full.",
      "Leaving food on your plate is frowned upon in many cultures."
    ],
    tags: ["grammar", "gerund", "culture"],
    mastered: false
  },
  {
    id: "2026-10-22-09",
    date: "2026-10-22",
    category: "Naturalness",
    whatISaid: "Explains feeling makes me relax.",
    correction: "Sharing my feelings makes me feel relaxed.",
    explanation:
      "文の主語に動詞を置くときは動名詞（-ing）にします。また、気持ちを打ち明けるときは「explain（説明する）」より「share（共有する）」や「express（表現する）」が自然です。感情を表す「relaxed」と組み合わせて「makes me feel relaxed」または「helps me relax」と表現します。",
    examples: [
      "Sharing my feelings with a close friend always helps me relax.",
      "Expressing your emotions honestly can reduce stress."
    ],
    tags: ["naturalness", "gerund", "conversation"],
    mastered: false
  },
  {
    id: "2026-10-22-08",
    date: "2026-10-22",
    category: "Grammar",
    whatISaid: "When I annoyed, I talk to my friends or family.",
    correction: "When I get annoyed, I talk to my friends or family.",
    explanation:
      "「annoy」は「（人を）イライラさせる」という他動詞なので、「自分がイライラする」と言うときは「be annoyed」または「get annoyed」のように受動態（形容詞的用法）にします。「When I annoyed」だと「私が誰かをイライラさせたとき」という意味になってしまいます。",
    examples: [
      "When I get annoyed, I usually go for a walk to cool down.",
      "She was annoyed by the loud noise outside."
    ],
    tags: ["grammar", "emotion", "conversation"],
    mastered: false
  },
  {
    id: "2026-10-22-07",
    date: "2026-10-22",
    category: "Naturalness",
    whatISaid: "Waiting for the restaurant to eat.",
    correction: "Waiting for your food at a restaurant.",
    explanation:
      "「waiting for the restaurant」だと「レストランそのものを待っている」という意味になります。レストランで料理や順番を待つことを指す場合は、「waiting for your food at a restaurant」や「waiting for your order」と表現します。",
    examples: [
      "Waiting for your order when you are starving can be frustrating.",
      "People often get impatient while waiting for their food at a busy restaurant."
    ],
    tags: ["naturalness", "restaurant", "daily"],
    mastered: false
  },
  {
    id: "2026-10-22-06",
    date: "2026-10-22",
    category: "Preposition",
    whatISaid: "I usually listen Hatsune Miku Vocaloid.",
    correction: "I usually listen to Hatsune Miku and Vocaloid music.",
    explanation:
      "「listen」は自動詞なので、後ろに聴く対象を置くときは必ず前置詞「to」が必要です（「listen to + 名詞」）。",
    examples: [
      "I like to listen to music while commuting.",
      "What kind of music do you usually listen to?"
    ],
    tags: ["preposition", "music", "daily"],
    mastered: false
  },
  {
    id: "2026-10-22-05",
    date: "2026-10-22",
    category: "Grammar",
    whatISaid: "It tastes like Japanese, so I can enjoy to taste that food.",
    correction: "It tastes similar to Japanese food, so I really enjoy eating it.",
    explanation:
      "「enjoy」の後ろに動詞を続けるときは、不定詞（to 〜）ではなく動名詞（-ing）を使います。また、「tastes like Japanese」だけでは「日本語／日本人のような味がする」と聞こえるため、「similar to Japanese food（日本食に似ている）」のように「food」を補います。",
    examples: [
      "This dish tastes similar to Japanese curry.",
      "I really enjoy trying local food when I travel abroad."
    ],
    tags: ["grammar", "gerund", "food"],
    mastered: false
  },
  {
    id: "2026-10-22-04",
    date: "2026-10-22",
    category: "Grammar",
    whatISaid: "I enjoy and go travel with my friends.",
    correction: "I enjoy traveling with my friends.",
    explanation:
      "「〜することを楽しむ」と言うときは「enjoy + 動名詞（-ing）」の形を使います。「enjoy and go travel」のように動詞を「and」で並べることはできません。",
    examples: [
      "I enjoy traveling to new countries with my friends.",
      "Do you enjoy traveling alone or in a group?"
    ],
    tags: ["grammar", "gerund", "travel"],
    mastered: false
  },
  {
    id: "2026-10-22-03",
    date: "2026-10-22",
    category: "Preposition",
    whatISaid: "Yes, so I do watch in a weekday.",
    correction: "Yes, I usually watch it on weekdays.",
    explanation:
      "曜日や「平日（weekdays）」「週末（weekends）」など特定の日を表すときは、前置詞「in」ではなく「on」を使います。また、習慣として平日に見る場合は複数形の「on weekdays」が自然です。",
    examples: [
      "I'm too busy to cook on weekdays.",
      "She usually goes to the gym on weekdays after work."
    ],
    tags: ["preposition", "daily", "time"],
    mastered: false
  },
  {
    id: "2026-10-22-02",
    date: "2026-10-22",
    category: "Grammar",
    whatISaid: "Because it makes me fun to watch anime.",
    correction: "Because watching anime is fun.",
    explanation:
      "「fun」は楽しいという性質を表す言葉であり、「happy」や「excited」のような人の感情を表す形容詞ではないため、「make me fun」という形にはできません。「〜するのは楽しい」と言うときは「Watching anime is fun.」や「It is fun to watch anime.」と表現します。",
    examples: [
      "It is fun to watch anime after work.",
      "Playing board games with friends is always fun."
    ],
    tags: ["grammar", "adjective", "conversation"],
    mastered: false
  },
  {
    id: "2026-10-22-01",
    date: "2026-10-22",
    category: "Vocabulary",
    whatISaid: "I don't know what to progress this material.",
    correction: "I don't know how to proceed with this material.",
    explanation:
      "「どのように〜するか」は「what to」ではなく「how to」を使います。また、「progress」は「前進する・進歩する」という自動詞なので、「教材を進める」と言うときは「proceed with 〜」や「go through 〜」を使います。",
    examples: [
      "Could you tell me how to proceed with this task?",
      "Let's go through the material step by step."
    ],
    tags: ["vocabulary", "grammar", "lesson"],
    mastered: false
  }
];
