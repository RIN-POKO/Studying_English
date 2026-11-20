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
    id: "2026-10-29-10",
    date: "2026-10-29",
    category: "Vocabulary",
    whatISaid: "My dormitory is close to university, so it is easy to go university every time to study.",
    correction: "My dormitory was close to the university, so it was easy to go to campus anytime to study.",
    explanation:
      "「いつでも（好きなときに）」と言うときは「every time（〜するたびに毎回）」ではなく「anytime」を使います。また、「大学に行く」は前置詞「to」を付けて「go to the university」や「go to campus」とし、過去の話なので時制を過去形にします。",
    examples: [
      "Because the library is open 24 hours, students can study there anytime.",
      "Every time I visit my hometown, I meet up with old friends."
    ],
    tags: ["vocabulary", "preposition", "university"],
    mastered: false
  },
  {
    id: "2026-10-29-09",
    date: "2026-10-29",
    category: "Grammar",
    whatISaid: "When I was a university student, I don't have time to enjoy your life.",
    correction: "When I was a university student, I didn't have time to enjoy my life.",
    explanation:
      "大学時代の過去の話なので「don't have」ではなく過去形の「didn't have」にします。また、主語が「I（私）」なので「your life」ではなく「my life」で統一します。",
    examples: [
      "When I was in college, I didn't have much time to travel.",
      "I'm trying to enjoy my life more outside of work."
    ],
    tags: ["grammar", "tense", "university"],
    mastered: false
  },
  {
    id: "2026-10-29-08",
    date: "2026-10-29",
    category: "Grammar",
    whatISaid: "Local people easy to work at Toyota.",
    correction: "It's easy for local people to work at Toyota.",
    explanation:
      "「easy」や「difficult」は人を主語にして「Local people are easy to 〜」と言うと「地元の人は扱いやすい」という意味になります。「地元の人にとって〜しやすい」と言うときは「It is easy for local people to 〜」の構文を使います。",
    examples: [
      "It's easy for local residents to commute to the headquarters.",
      "It was difficult for me to get used to living alone at first."
    ],
    tags: ["grammar", "work", "conversation"],
    mastered: false
  },
  {
    id: "2026-10-29-07",
    date: "2026-10-29",
    category: "Vocabulary",
    whatISaid: "Yes, headquarter is located in my hometown.",
    correction: "Yes, the headquarters is located in my hometown.",
    explanation:
      "「本社・本部」を表す「headquarters」は、単数の会社の本社を指す場合でも常に語尾に「s」が付きます。また、特定の会社の本社を指すので定冠詞「the」や所有格（Toyota's）を付けます。",
    examples: [
      "The company's headquarters is located in Aichi Prefecture.",
      "I visited our Tokyo headquarters for a meeting last week."
    ],
    tags: ["vocabulary", "business", "article"],
    mastered: false
  },
  {
    id: "2026-10-29-06",
    date: "2026-10-29",
    category: "Grammar",
    whatISaid: "She studied English and she go abroad a lot. Now she work at Seattle airport.",
    correction: "She studied English and went abroad a lot. Now she works at Seattle's airport.",
    explanation:
      "過去の出来事（海外へよく行った）には過去形「went abroad」を、現在の事実（主語が she）には三単現の「s」を付けて「works」を使います。時制と主語に合わせた動詞の変化に注意しましょう。",
    examples: [
      "My sister studied hard and now she works at an international airport.",
      "He went abroad several times when he was in college."
    ],
    tags: ["grammar", "tense", "family"],
    mastered: false
  },
  {
    id: "2026-10-29-05",
    date: "2026-10-29",
    category: "Preposition",
    whatISaid: "My siblings have the same choice like me.",
    correction: "My siblings made the same choice as me.",
    explanation:
      "「〜と同じ（選択・もの）」と言うときは「the same ... like 〜」ではなく、「the same ... as 〜」と前置詞「as」を使います。また、「選択をする」は「have a choice」より「make a choice」が自然です。",
    examples: [
      "He made the same career choice as his father.",
      "We ordered the same dish as last time."
    ],
    tags: ["preposition", "collocation", "family"],
    mastered: false
  },
  {
    id: "2026-10-29-04",
    date: "2026-10-29",
    category: "Grammar",
    whatISaid: "After graduate high school, most people work.",
    correction: "After graduating from high school, most people start working.",
    explanation:
      "前置詞「after」の後ろに動詞を置くときは動名詞（graduating）にします。また、「graduate」は自動詞なので、学校名を続けるときは必ず前置詞「from」を付けて「graduate from high school」と言います。",
    examples: [
      "After graduating from university, I started working as an engineer.",
      "What do you want to do after you graduate from high school?"
    ],
    tags: ["grammar", "preposition", "education"],
    mastered: false
  },
  {
    id: "2026-10-29-03",
    date: "2026-10-29",
    category: "Vocabulary",
    whatISaid: "We don't have deadline, so it's not pleasure.",
    correction: "We don't have strict deadlines, so there's no pressure.",
    explanation:
      "「プレッシャー（重圧）」は「pleasure（喜び・楽しみ）」ではなく「pressure」です。発音と綴りの混同に気をつけましょう。また、「プレッシャーがない」は「it's not pressure」ではなく「there's no pressure」や「it's not stressful」と表現します。",
    examples: [
      "Without strict deadlines, there is much less pressure at work.",
      "It was a pleasure meeting you today."
    ],
    tags: ["vocabulary", "pronunciation", "work"],
    mastered: false
  },
  {
    id: "2026-10-29-02",
    date: "2026-10-29",
    category: "Phrasal Verb",
    whatISaid: "It is easy to eat out restaurants.",
    correction: "It is easy to eat out at restaurants.",
    explanation:
      "「eat out（外食する）」は目的語をとらない自動詞句なので、後ろに「restaurants」を直接置けません。場所を付け加える場合は「eat out at restaurants」のように前置詞「at」を入れるか、単に「eat out」だけで表します。",
    examples: [
      "Living in Tokyo makes it easy to eat out at various restaurants.",
      "We usually eat out on Friday nights."
    ],
    tags: ["phrasal-verb", "preposition", "daily"],
    mastered: false
  },
  {
    id: "2026-10-29-01",
    date: "2026-10-29",
    category: "Preposition",
    whatISaid: "It is easy to keep balance, career and daily life.",
    correction: "It is easy to keep a balance between my career and daily life.",
    explanation:
      "「AとBのバランスを保つ」と言うときは、可算名詞「balance」に冠詞「a」を付け、前置詞「between」を使って「keep a balance between A and B」と表現します。",
    examples: [
      "Working remotely helps me keep a good balance between work and personal life.",
      "It's important to maintain a healthy work-life balance."
    ],
    tags: ["preposition", "work", "lifestyle"],
    mastered: false
  },
  {
    id: "2026-10-28-10",
    date: "2026-10-28",
    category: "Grammar",
    whatISaid: "He taught how making things is fun.",
    correction: "He taught me to enjoy making things.",
    explanation:
      "「（人）に〜することを教える」と言うときは、「teach + 人 + to + 動詞の原形」の形をとります。「teach」の後ろに「me（誰に）」を補い、「to enjoy」のように不定詞を続けると自然です。",
    examples: [
      "My father taught me to appreciate the process of creating something.",
      "She taught her students to think critically."
    ],
    tags: ["grammar", "verb", "education"],
    mastered: false
  },
  {
    id: "2026-10-28-09",
    date: "2026-10-28",
    category: "Vocabulary",
    whatISaid: "I chose a software engineer as a job.",
    correction: "I chose software engineering as my career.",
    explanation:
      "職種や分野そのものを「キャリアとして選んだ」と言うときは、人を表す「a software engineer」ではなく分野を表す「software engineering」を使います。また、「as a job」より「as my career」と言うと将来の道を選んだニュアンスが自然に伝わります。",
    examples: [
      "She chose graphic design as her career.",
      "I decided to pursue software engineering after university."
    ],
    tags: ["vocabulary", "career", "work"],
    mastered: false
  },
  {
    id: "2026-10-28-08",
    date: "2026-10-28",
    category: "Grammar",
    whatISaid: "Maybe I'm not. I'm inspired by my parents.",
    correction: "Maybe not, but I was inspired by my parents.",
    explanation:
      "相手の質問に対して「たぶんそうではない」と短く返すときは「Maybe I'm not.」ではなく「Maybe not.」と言います。また、子どもの頃に受けた影響の話なので、現在形（I'm inspired）ではなく過去形（I was inspired）にします。",
    examples: [
      "Did you have a favorite teacher? — Maybe not, but my parents inspired me.",
      "I was deeply inspired by his dedication."
    ],
    tags: ["grammar", "tense", "conversation"],
    mastered: false
  },
  {
    id: "2026-10-28-07",
    date: "2026-10-28",
    category: "Preposition",
    whatISaid: "Yes, I went kindergarten.",
    correction: "Yes, I went to kindergarten.",
    explanation:
      "「go」は自動詞なので、行き先や通った学校を後ろに置くときは前置詞「to」が必要です（「go to kindergarten」）。前置詞なしで言う場合は他動詞の「attend」を使い、「I attended kindergarten.」とします。",
    examples: [
      "Did you go to kindergarten in your hometown?",
      "Both of my siblings attended the same elementary school."
    ],
    tags: ["preposition", "education", "daily"],
    mastered: false
  },
  {
    id: "2026-10-28-06",
    date: "2026-10-28",
    category: "Vocabulary",
    whatISaid: "Some children cannot go kindergarten, even if their family can pay money.",
    correction: "Some children cannot attend kindergarten, even if their family can afford it.",
    explanation:
      "「（経済的に）費用を払う余裕がある」と言うときは、「can pay money」より「can afford it」または「can afford to pay for kindergarten」が自然です。また、「幼稚園に通う」は「go to kindergarten」または「attend kindergarten」とします。",
    examples: [
      "Even if families can afford private school, there may not be enough spots.",
      "I couldn't afford to buy a car when I was a student."
    ],
    tags: ["vocabulary", "education", "social"],
    mastered: false
  },
  {
    id: "2026-10-28-05",
    date: "2026-10-28",
    category: "Grammar",
    whatISaid: "In Philippines, do you have to pay money to go to school?",
    correction: "In the Philippines, do you have to pay to go to school?",
    explanation:
      "「Philippines（フィリピン）」のように複数形の国名には定冠詞「the」を付けて「the Philippines」とします（「the United States」などと同様です）。また、「お金を払う」は文脈から明らかなので「pay」だけで十分伝わります。",
    examples: [
      "Public schools in the Philippines are free through high school.",
      "Have you ever traveled to the Philippines or the United States?"
    ],
    tags: ["grammar", "article", "geography"],
    mastered: false
  },
  {
    id: "2026-10-28-04",
    date: "2026-10-28",
    category: "Vocabulary",
    whatISaid: "We can study language, scientific things, and societies.",
    correction: "We can study languages, science, and social studies.",
    explanation:
      "学校の教科名として言うときは、「scientific things」ではなく「science（理科・科学）」、「societies」ではなく「social studies（社会科）」を使います。",
    examples: [
      "My favorite subjects in high school were science and social studies.",
      "Students learn foreign languages as well as practical life skills."
    ],
    tags: ["vocabulary", "education", "school"],
    mastered: false
  },
  {
    id: "2026-10-28-03",
    date: "2026-10-28",
    category: "Grammar",
    whatISaid: "Regardless of where you live and how much your family have money.",
    correction: "Regardless of where they live or how much their family earns.",
    explanation:
      "「どれくらいのお金」と言うときは「how much money your family has」のように「how much + 名詞」の語順にします。また、家庭の収入について述べるときは「have money」より「how much their family earns（どれくらい稼いでいるか）」と表現すると自然です。",
    examples: [
      "Everyone deserves a good education regardless of how much their family earns.",
      "I don't know how much money we need for the trip."
    ],
    tags: ["grammar", "word-order", "vocabulary"],
    mastered: false
  },
  {
    id: "2026-10-28-02",
    date: "2026-10-28",
    category: "Preposition",
    whatISaid: "Can be educated until high school for free.",
    correction: "Students can receive a free education through high school.",
    explanation:
      "「高校まで（高校卒業まで含めて）」と言うときは、「until high school（高校に入るまで、と解釈されやすい）」ではなく「through high school」を使います。また、「教育を受ける」は受動態「be educated」より「receive an education」が自然で、主語（Students）も忘れずに補います。",
    examples: [
      "In Japan, students can receive a free education through high school.",
      "The library is open Monday through Friday."
    ],
    tags: ["preposition", "education", "naturalness"],
    mastered: false
  },
  {
    id: "2026-10-28-01",
    date: "2026-10-28",
    category: "Naturalness",
    whatISaid: "Today is not off.",
    correction: "Today is not my day off.",
    explanation:
      "「今日は休みではない」と言うとき、「today」を主語にして「today is not off」とは言いません。「Today is not my day off.」または「I'm working today.」「I have work today.」と表現します。",
    examples: [
      "Tomorrow is my day off, so I'm going to a museum.",
      "Is today your day off, or are you working?"
    ],
    tags: ["naturalness", "work", "daily"],
    mastered: false
  },
  {
    id: "2026-10-27-10",
    date: "2026-10-27",
    category: "Naturalness",
    whatISaid: "It is difficult to monitor our children do SNS by parents.",
    correction: "It is difficult for parents to monitor how their children use social media.",
    explanation:
      "SNSを「使う」ときは「do SNS」ではなく「use social media」と言います。また、「親が〜するのは難しい」と行動の主体を示すときは、文末に「by parents」を置くのではなく「It is difficult for parents to 〜」の形にします。",
    examples: [
      "It is hard for parents to monitor what their kids watch online.",
      "Many parents worry about how their children use social media."
    ],
    tags: ["naturalness", "family", "technology"],
    mastered: false
  },
  {
    id: "2026-10-27-09",
    date: "2026-10-27",
    category: "Grammar",
    whatISaid: "One of the important role is support our dreams.",
    correction: "One of the important roles is to support our dreams.",
    explanation:
      "「〜のうちの1つ」を表すときは「one of the + 複数名詞」になるため、「role」ではなく「roles」にします。また、be動詞（is）の後ろに動詞を置くときは「to support」または「supporting」の形にします。",
    examples: [
      "One of the main goals is to improve our communication skills.",
      "One of a parent's most important roles is to guide their children."
    ],
    tags: ["grammar", "plural", "family"],
    mastered: false
  },
  {
    id: "2026-10-27-08",
    date: "2026-10-27",
    category: "Grammar",
    whatISaid: "I want to do it, but I have so concerned.",
    correction: "I want to do it, but I have a lot of concerns.",
    explanation:
      "「concerned」は形容詞なので「have」の後ろには置けません。「心配・懸念がある」と言うときは名詞の複数形を使って「I have a lot of concerns.」とするか、be動詞を使って「I'm very concerned (about it).」と表現します。",
    examples: [
      "I have some concerns about the cost of raising children.",
      "Many young people are concerned about their financial future."
    ],
    tags: ["grammar", "vocabulary", "conversation"],
    mastered: false
  },
  {
    id: "2026-10-27-07",
    date: "2026-10-27",
    category: "Vocabulary",
    whatISaid: "In Japan these days, raising fee is increasing.",
    correction: "In Japan these days, the cost of raising children is increasing.",
    explanation:
      "「子育てにかかる費用・養育費」は「raising fee」とは言わず、「the cost of raising children」や「child-rearing costs」と表現します。「fee」は授業料や入場料・手数料など特定のサービスに対する料金を指します。",
    examples: [
      "The cost of raising children has been increasing in Japan.",
      "High living costs make it harder for young couples to start a family."
    ],
    tags: ["vocabulary", "family", "social"],
    mastered: false
  },
  {
    id: "2026-10-27-06",
    date: "2026-10-27",
    category: "Grammar",
    whatISaid: "I wanted to go study abroad, and they paid fee.",
    correction: "I wanted to study abroad, and they paid for the expenses.",
    explanation:
      "「fee」は可算名詞なので単数無冠詞では使えません。留学の費用全般を指すときは「the expenses」や「the costs」を使い、「paid for the expenses（費用を負担してくれた）」のように表現します。授業料を指す場合は「tuition」を使います。",
    examples: [
      "My parents paid for all my living expenses while I was abroad.",
      "She worked part-time to pay her own tuition."
    ],
    tags: ["grammar", "vocabulary", "education"],
    mastered: false
  },
  {
    id: "2026-10-27-05",
    date: "2026-10-27",
    category: "Grammar",
    whatISaid: "When I was a child, I usually be scolded by my father.",
    correction: "When I was a child, I was often scolded by my father.",
    explanation:
      "子どもの頃の過去の話なので、be動詞の原形「be」ではなく過去形「was」を使います。また、頻度を表す副詞（often / usually）はbe動詞の後ろに置きます。",
    examples: [
      "I was often scolded by my parents for staying up too late.",
      "He used to get scolded by his teacher for forgetting his homework."
    ],
    tags: ["grammar", "tense", "passive"],
    mastered: false
  },
  {
    id: "2026-10-27-04",
    date: "2026-10-27",
    category: "Grammar",
    whatISaid: "I call with my family every day.",
    correction: "I call my family every day.",
    explanation:
      "「（人に）電話をかける」という意味の「call」は他動詞なので、前置詞「with」は不要で直接目的語をとります。「talk with 〜」や「chat with 〜」と混同しないように注意しましょう。",
    examples: [
      "I call my parents every Sunday to catch up.",
      "Please call me when you arrive at the station."
    ],
    tags: ["grammar", "verb", "family"],
    mastered: false
  },
  {
    id: "2026-10-27-03",
    date: "2026-10-27",
    category: "Phrasal Verb",
    whatISaid: "I usually eat out breakfast with my family in holiday.",
    correction: "I usually go out for breakfast with my family on holidays.",
    explanation:
      "「eat out」は「外食する」という自動詞句なので、後ろに直接「breakfast」を続けることはできません。「朝ごはんを外で食べる」は「go out for breakfast」または「eat breakfast out」と言います。また、「休日に」は「on holidays」と前置詞「on」を使います。",
    examples: [
      "We often go out for dinner on weekends.",
      "In Nagoya, many people go out for breakfast at local cafes."
    ],
    tags: ["phrasal-verb", "preposition", "daily"],
    mastered: false
  },
  {
    id: "2026-10-27-02",
    date: "2026-10-27",
    category: "Preposition",
    whatISaid: "If I have bad concerning things, I usually ask advice for my family.",
    correction: "If I have any concerns, I usually ask my family for advice.",
    explanation:
      "「（人）にアドバイスを求める」は「ask advice for 〜」ではなく「ask + 人 + for advice」または「ask advice from + 人」と表現します。また、「心配事」は「bad concerning things」より名詞の「concerns」や「worries」を使うとすっきりします。",
    examples: [
      "Whenever I have a problem, I ask my friends for advice.",
      "You can always ask your mentor for advice about your career."
    ],
    tags: ["preposition", "vocabulary", "conversation"],
    mastered: false
  },
  {
    id: "2026-10-27-01",
    date: "2026-10-27",
    category: "Phrasal Verb",
    whatISaid: "We can cheer up each other.",
    correction: "We can cheer each other up.",
    explanation:
      "「cheer up（元気づける）」のような他動詞句で、目的語が「each other」や代名詞（me, you, them など）のときは、動詞と副詞の間に目的語を挟んで「cheer each other up」とするのが自然です。",
    examples: [
      "Good friends always cheer each other up during tough times.",
      "I bought her favorite dessert to cheer her up."
    ],
    tags: ["phrasal-verb", "family", "conversation"],
    mastered: false
  },
  {
    id: "2026-10-26-10",
    date: "2026-10-26",
    category: "Naturalness",
    whatISaid: "I make my rule long time I use SNS.",
    correction: "I set a time limit for using social media.",
    explanation:
      "「使用時間のルールを作る（時間を制限する）」と言うときは「set a time limit for 〜」や「limit my screen time on 〜」と表現すると自然です。また、英語では和製英語の「SNS」よりも「social media」が一般的に使われます。",
    examples: [
      "I try to limit my screen time on social media before bed.",
      "She set a strict time limit for playing video games."
    ],
    tags: ["naturalness", "vocabulary", "lifestyle"],
    mastered: false
  },
  {
    id: "2026-10-26-09",
    date: "2026-10-26",
    category: "Grammar",
    whatISaid: "I do not distract when I'm in working room.",
    correction: "I don't get distracted when I'm in my workspace.",
    explanation:
      "「distract」は「（人の）気を散らす」という他動詞なので、「気が散らない」と言うときは「I don't get distracted」のように受動態にします。また、仕事用の部屋は「working room」ではなく「workspace」や「home office」と言うのが自然です。",
    examples: [
      "I easily get distracted when there is noise around me.",
      "Having a dedicated workspace helps me stay focused."
    ],
    tags: ["grammar", "work", "vocabulary"],
    mastered: false
  },
  {
    id: "2026-10-26-08",
    date: "2026-10-26",
    category: "Grammar",
    whatISaid: "It is good effect for me.",
    correction: "It has a good effect on me.",
    explanation:
      "「effect（効果）」は名詞なので、「It is good effect」ではなく「It has a good effect on me.」のように動詞「have」と前置詞「on」を組み合わせて使います。形容詞を使って「It is very effective for me.」と言うこともできます。",
    examples: [
      "Taking a short walk has a positive effect on my mood.",
      "Separating work and living spaces is very effective for me."
    ],
    tags: ["grammar", "preposition", "conversation"],
    mastered: false
  },
  {
    id: "2026-10-26-07",
    date: "2026-10-26",
    category: "Grammar",
    whatISaid: "We are difficult to calm down alone now.",
    correction: "It's difficult for us to unwind on our own now.",
    explanation:
      "「difficult」や「easy」などの形容詞は、人を主語にして「We are difficult to 〜」と言うと「私たちは扱いにくい人だ」という意味になります。「私たちが〜するのは難しい」と言うときは「It is difficult for us to 〜」の形を使います。また、仕事後にリラックスする意味では「unwind」も自然です。",
    examples: [
      "It is difficult for me to separate work from my private life.",
      "It's hard to unwind when you keep checking work emails."
    ],
    tags: ["grammar", "lifestyle", "conversation"],
    mastered: false
  },
  {
    id: "2026-10-26-06",
    date: "2026-10-26",
    category: "Grammar",
    whatISaid: "I can communicate remote using smartphone and PC.",
    correction: "I can communicate remotely using a smartphone and a PC.",
    explanation:
      "動詞の「communicate」を修飾するときは形容詞の「remote」ではなく副詞の「remotely」を使います。また、「smartphone」「PC」などの可算名詞を単数で使うときは冠詞「a」を付けます。",
    examples: [
      "Our team collaborates remotely from different cities.",
      "You can join the meeting using a smartphone or a laptop."
    ],
    tags: ["grammar", "adverb", "work"],
    mastered: false
  },
  {
    id: "2026-10-26-05",
    date: "2026-10-26",
    category: "Preposition",
    whatISaid: "Sometimes I go back my parents' house and I work from there.",
    correction: "Sometimes I go back to my parents' house and work from there.",
    explanation:
      "「go back」は自動詞なので、後ろに場所の名詞を置くときは前置詞「to」が必要です（「go back to + 場所」）。なお、「home」は副詞として使うため「go back home」のように「to」は不要になります。",
    examples: [
      "I'm planning to go back to my hometown next month.",
      "After finishing my errands, I went back to the office."
    ],
    tags: ["preposition", "daily", "conversation"],
    mastered: false
  },
  {
    id: "2026-10-26-04",
    date: "2026-10-26",
    category: "Vocabulary",
    whatISaid: "I like working from home because I can work from everywhere.",
    correction: "I like working from home because I can work from anywhere.",
    explanation:
      "「（場所に縛られず）どこからでも働ける」と言うときは、「everywhere（文字通りすべての場所）」ではなく「anywhere（どこでも好きな場所）」を使うのが自然です。",
    examples: [
      "With a laptop and Wi-Fi, you can work from anywhere.",
      "I tried to find my keys, and I looked everywhere."
    ],
    tags: ["vocabulary", "work", "remote"],
    mastered: false
  },
  {
    id: "2026-10-26-03",
    date: "2026-10-26",
    category: "Grammar",
    whatISaid: "My co-worker work from home too.",
    correction: "My coworkers work from home too.",
    explanation:
      "同僚たち全般を指すときは複数形の「coworkers」にします。特定の1人の同僚を指す場合は「My coworker works from home」のように動詞に三単現の「-s」が必要です。",
    examples: [
      "Most of my coworkers work from home.",
      "My coworker lives near the office."
    ],
    tags: ["grammar", "plural", "work"],
    mastered: false
  },
  {
    id: "2026-10-26-02",
    date: "2026-10-26",
    category: "Grammar",
    whatISaid: "I want to work at office, not in my house.",
    correction: "I want to work at the office rather than from home.",
    explanation:
      "「オフィスで働く」と言うときは冠詞「the」を付けて「at the office」または「in the office」とします。また、「自宅で働く」は「in my house」より「from home」と言うのが一般的です。",
    examples: [
      "I prefer working at the office rather than working from home.",
      "Is anyone at the office today?"
    ],
    tags: ["article", "work", "daily"],
    mastered: false
  },
  {
    id: "2026-10-26-01",
    date: "2026-10-26",
    category: "Vocabulary",
    whatISaid: "I think it is not healthy style because I have no to do exercise.",
    correction: "I don't think it's a healthy lifestyle because I don't exercise.",
    explanation:
      "「生活スタイル」は「style」だけでなく「lifestyle（可算名詞）」を使います。また、「運動をする時間や習慣がない」と言うときは「have no to do exercise」ではなく、「I don't exercise」や「I don't have time to exercise」のように表現します。",
    examples: [
      "I want to adopt a healthier lifestyle by exercising regularly.",
      "I don't have enough time to exercise on weekdays."
    ],
    tags: ["vocabulary", "lifestyle", "health"],
    mastered: false
  },
  {
    id: "2026-10-23-10",
    date: "2026-10-23",
    category: "Grammar",
    whatISaid: "My biggest fail is failing studying abroad program.",
    correction: "My biggest failure was not getting into a study abroad program.",
    explanation:
      "名詞の「失敗」は動詞の「fail」ではなく「failure」を使います。また、「留学プログラム」は「studying abroad program」ではなく「a study abroad program」のように名詞の「study」を修飾語として使います。過去の出来事なので時制も過去形（was）にします。",
    examples: [
      "Not getting into the study abroad program was a turning point for me.",
      "Every failure teaches us an important lesson."
    ],
    tags: ["grammar", "vocabulary", "education"],
    mastered: false
  },
  {
    id: "2026-10-23-09",
    date: "2026-10-23",
    category: "Vocabulary",
    whatISaid: "I don't think that failure is pessimistic things.",
    correction: "I don't think failure is a negative thing.",
    explanation:
      "「pessimistic（悲観的な）」は主に人や態度に対して使う形容詞です。物事に対して「悪いこと・ネガティブなこと」と言うときは「negative」を使います。また、主語が単数の「failure」なので、「things」ではなく「a negative thing」と単数で揃えます。",
    examples: [
      "Failure is not necessarily a negative thing if you learn from it.",
      "Try not to be too pessimistic about the future."
    ],
    tags: ["vocabulary", "grammar", "discussion"],
    mastered: false
  },
  {
    id: "2026-10-23-08",
    date: "2026-10-23",
    category: "Grammar",
    whatISaid: "Makes people happy makes me happy.",
    correction: "Making people happy makes me happy.",
    explanation:
      "「〜すること」と動詞を文の主語にするときは、現在形（Makes）ではなく動名詞（Making）を使います。",
    examples: [
      "Making others smile makes me feel fulfilled.",
      "Cooking for my family makes me happy."
    ],
    tags: ["grammar", "gerund", "conversation"],
    mastered: false
  },
  {
    id: "2026-10-23-07",
    date: "2026-10-23",
    category: "Grammar",
    whatISaid: "My passion is makes people happy by making something.",
    correction: "My passion is making people happy by creating things.",
    explanation:
      "be動詞（is）の後ろに動詞の現在形（makes）を続けることはできません。「私の情熱は〜することです」と補語にするときは動名詞（making）または不定詞（to make）を使います。",
    examples: [
      "My passion is helping others learn new skills.",
      "Her passion is creating handmade accessories."
    ],
    tags: ["grammar", "gerund", "discussion"],
    mastered: false
  },
  {
    id: "2026-10-23-06",
    date: "2026-10-23",
    category: "Vocabulary",
    whatISaid: "I want to make my family happy by my cuisine.",
    correction: "I want to make my family happy with my cooking.",
    explanation:
      "家庭料理や手料理を指すときは、「cuisine（特定の国・地域の料理様式、例：Japanese cuisine）」ではなく「cooking」や「food」「dishes」を使うのが自然です。また、手段を表す前置詞は「with」が適しています。",
    examples: [
      "I love making my friends happy with my cooking.",
      "French cuisine is famous around the world."
    ],
    tags: ["vocabulary", "cooking", "preposition"],
    mastered: false
  },
  {
    id: "2026-10-23-05",
    date: "2026-10-23",
    category: "Grammar",
    whatISaid: "Cooking is taught by my mother.",
    correction: "My mother taught me how to cook.",
    explanation:
      "過去に母から教わったことなので、現在形の受動態（is taught）ではなく過去形を使います。また、「誰が誰に教えたか」を伝えるときは受動態より「My mother taught me how to cook.」と能動態にする方が自然です。",
    examples: [
      "My father taught me how to build plastic models.",
      "I learned how to knit from my mother when I was young."
    ],
    tags: ["grammar", "tense", "conversation"],
    mastered: false
  },
  {
    id: "2026-10-23-04",
    date: "2026-10-23",
    category: "Vocabulary",
    whatISaid: "Yes, I like handcraft.",
    correction: "Yes, I like arts and crafts.",
    explanation:
      "趣味としての「手芸・ハンドメイド・工作」の総称には、単数の「handcraft」より複数形の「crafts」や「arts and crafts」がよく使われます。",
    examples: [
      "I enjoy doing arts and crafts in my free time.",
      "She sells her handmade crafts online."
    ],
    tags: ["vocabulary", "hobby", "conversation"],
    mastered: false
  },
  {
    id: "2026-10-23-03",
    date: "2026-10-23",
    category: "Naturalness",
    whatISaid: "After looking at the art, I would hard working.",
    correction: "After looking at art, I feel motivated to work harder.",
    explanation:
      "「hard-working（勤勉な）」は形容詞なので「would」の後ろにそのまま置けません。「頑張ろうという気持ちになる」と言いたいときは「feel motivated to work harder」や「It motivates me to work harder.」と表現すると自然です。",
    examples: [
      "Visiting an art museum always motivates me to work harder.",
      "After taking a short break, I felt motivated to study again."
    ],
    tags: ["naturalness", "vocabulary", "hobby"],
    mastered: false
  },
  {
    id: "2026-10-23-02",
    date: "2026-10-23",
    category: "Vocabulary",
    whatISaid: "If the artist holds the exhibit, I want to go there.",
    correction: "If the artist holds an exhibition, I want to go.",
    explanation:
      "「exhibit」は主に「展示品（個々の作品）」を指し、「展覧会・展示会（イベント全体）」を表すときは「exhibition」を使います。「go there」は文脈から場所が明らかな場合は「go」だけで自然です。",
    examples: [
      "My favorite artist is holding an exhibition in Tokyo next month.",
      "There were many rare exhibits at the museum."
    ],
    tags: ["vocabulary", "art", "hobby"],
    mastered: false
  },
  {
    id: "2026-10-23-01",
    date: "2026-10-23",
    category: "Vocabulary",
    whatISaid: "I like to go to the museum and watch the art.",
    correction: "I like to go to the museum and look at art.",
    explanation:
      "「watch」は映画やスポーツなど動きのあるものを注視するときに使い、絵画や彫刻など静止しているものを見るときは「look at」や「view」を使います。また、一般的な芸術・美術は不可算名詞なので「the art」ではなく「art」とします。",
    examples: [
      "I love spending my weekends looking at modern art.",
      "We went to the museum to view the new collection."
    ],
    tags: ["vocabulary", "art", "hobby"],
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
