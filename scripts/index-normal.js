
const TEST = {
    title: "2-й уровень — Базовый",
    "color" : "#4a6fa5",
    Sections: [
        {
            "title": "Алгоритм фонетического (звуко-буквенного) разбора слова",
            body: [
                {
                    title: "Что такое фонетический разбор?",
                    body: "Фонетический разбор — это анализ звукового состава слова. Мы изучаем, какие звуки произносятся, сколько в слове слогов, где стоит ударение."
                },
                {
                    title: "Порядок разбора:",
                    body: "Поставить ударение\nРазделить слово на слоги\nЗаписать транскрипцию (как слово звучит)\nДать характеристику каждому звуку\nПодсчитать количество букв и звуков",
                }
            ],
            example: "мо-ло-ко́ [малако́] — 3 слога, ударение на последний слог",
            tests: [
                {
                    question: 'Выполни алгоритм для слова "земля". Ответы напиши через запятую.\nВведи:\nБукв: __\nЗвуков: __\nТранскрипция: [________]',
                    answer: "5, 5, [з'имл'а]",
                    rightAnswer: '5, 5, [з’имл’а]'
                },
                {
                    question: 'Выполни алгоритм для слова "ёжик". Ответы напиши через запятую.\nБукв: __\nЗвуков: __\nТранскрипция: [________]',
                    answer: "4, 5, [й'ожык]",
                    rightAnswer: '4, 5, [й’ожык]'
                },
                {
                    question: 'Выполни алгоритм для слова "вьюга". Ответы напиши через запятую.\nБукв: __\nЗвуков: __\nТранскрипция: [________]',
                    answer: "5, 5, [в'й'уга]",
                    rightAnswer: "5, 5, [в'й'уга]"
                }
            ]
        },
        {
            "title": "Гласные звуки",
            body: [
                {
                    title: "Что такое гласные звуки?",
                    body: "Гласные звуки — это звуки речи, которые произносятся с открытым ртом и без преград для воздуха.\n\nВ русском языке гласных звуков 6: [а], [э], [ы], [и], [о], [у]."
                },
                {
                    title: "Ударные и безударные гласные",
                    body: "Гласные звуки могут быть ударными и безударными. Ударные гласные произносятся с большей силой и выделяются в слове, а безударные — с меньшей силой и не выделяются."
                },
                {
                    title: "Ударение",
                    body: "Ударение может падать на любой слог в слове, и это влияет на произношение гласных звуков. Например, в слове «молоко́» ударение падает на последний слог, и гласный звук [о] в этом слоге будет ударным, а остальные гласные будут безударными."
                }
            ],
            tests: [
                {
                    question: 'Выпиши все безударные гласные из слова яблоки через запятую:',
                    answer: 'о, и',
                    rightAnswer: 'о, и'
                },
                {
                    question: 'Найди слово, в котором все гласные звуки ударные (в начальной форме):',
                    options: ['берёза', 'дом', 'учитель', 'окно'],
                    answer: 1,
                    rightAnswer: 'дом'
                },
                {
                    question: 'В каком слове два безударных гласных звука?',
                    options: ['голова', 'слон', 'стена'],
                    answer: 0,
                    rightAnswer: 'голова'
                },
                {
                    question: 'В каком слове ударение падает на [а]?',
                    options: ['алфавит', 'магазин', 'карта'],
                    answer: 2,
                    rightAnswer: 'карта'
                }
            ]
        },
        {
            "title": "Согласные звуки",
            body: [
                {
                    title: "Что такое согласные звуки?",
                    body: "Согласные звуки - это звуки речи, которые произносятся с помощью преград для воздуха.\n\nВ русском языке согласных звуков 21: [б], [в], [г], [д], [ж], [з], [й], [к], [л], [м], [н], [п], [р], [с], [т], [ф], [х], [ц], [ч], [ш], [щ]."
                },
                {
                    title: "Характеристика согласных звуков",
                    body: "Согласные звуки могут быть твердыми и мягкими, звонкими и глухими, парными и непарными. Твердые согласные произносятся с напряжением языка, а мягкие — с его расслаблением. Звонкие согласные звучат с вибрацией голосовых связок, а глухие — без неё. Парные согласные имеют пару по твердости или звонкости, а непарные не имеют пары."
                },
                {
                    title: "Примеры характеристики согласных звуков",
                    body: "Например, в слове «лес» согласный звук [л] — твердый, звонкий и непарный; [с] — твердый, глухой и парный (пара [з]). В слове «мяч» согласный звук [м] — твердый, звонкий и непарный; [ч] — мягкий, глухой и парный (пара [ж])."
                }
            ],
            tests: [
                {
                    question: 'В каких словах все согласные глухие?',
                    options: ['кот', 'дом', 'шум', 'суп'],
                    answer: [0, 3],
                    rightAnswer: 'кот, суп'
                },
                {
                    question: 'Найди слово, в котором есть непарный твердый согласный звук:',
                    options: ['шина', 'машина', 'чаща', 'цирк'],
                    answer: [0, 1, 3],
                    rightAnswer: 'шина, машина, цирк'
                },
                {
                    question: 'Выпиши из слова "ручка" все звонкие согласные звуки:',
                    answer: '[р]',
                    rightAnswer: '[р]'
                },
                {
                    question: 'В каких словах все согласные мягкие?',
                    options: ['тень', 'лес', 'пить', 'тишь'],
                    answer: [0,2],
                    rightAnswer: 'тень, пить'
                }
            ]
        },
        {
            "title": "Транскрипция",
            body: [
                {
                    title: "Что такое транскрипция?",
                    body: "Транскрипция — это запись звуков речи с помощью специальных символов. В русском языке транскрипция показывает правильное произношение слова."
                },
                {
                    title: "Как записывать транскрипцию?",
                    body: "Транскрипция всегда оформляется в квадратных скобках — [ ]:\n\nПримеры:\nкино́ — [к’ино́];\nзда́ние — [зда́н’ийэ];\nснега́ — [сн’ига́]."
                },
                {
                    title: "Обозначение мягкости и ударения в транскрипции",
                    body: "Мягкость звука обозначается знаком «‘». Ударный звук обозначается знаком ударения — « ́»\n\nПример: [шко́ла]\n\nПричём в двусложных (слова состоящие из двух и более слов) словах оно двойное: \n\nПример: трёхэтажный — [тр’о́хэта́жный] ."
                },
            ],
            tests: [
                {
                    question: 'Запиши транскрипцию слова "вьюга":',
                    answer: "[в'й'уга]",
                    rightAnswer: '[в’й’уга]'
                },

                //////////////////////////////////////////
                {
                    question: 'Соедини слово с транскрипцией и запиши ответ следующим образом (цифра-буква):\n\nСлово\t\t\tТранскрипция\n1) ёж\t\t\tА) [й’эл’]\n2) ель\t\t\tБ) [й’ула]\n3) юла\t\t\tВ) [й’ама]\n4) яма\t\t\tГ) [й’ош]\n\nПример: 1А, 2Б, 3В, 4Г',
                    answer: '1Г, 2А, 3Б, 4В',
                    rightAnswer: '1Г, 2А, 3Б, 4В'
                },
                {
                    question: 'Запиши транскрипцию слова "съел":',
                    answer: "[сй'эл]",
                    rightAnswer: '[сй’эл]'
                },
                {
                    question: 'В каком слове транскрипция [руч’ка]?',
                    options: ['ручка', 'рука', 'речка'],
                    answer: 0,
                    rightAnswer: 'ручка'
                }
            ]
        },
        {
            "title": "Йотированные гласные звуки",
            body: [
                {
                    title: "Что такое йотированные гласные?",
                    body: "Йотированные гласные в русском языке называют буквы Е, Ё, Ю, Я, которые в некоторых случаях обозначают два звука: гласный и согласный [й’]. Название связано с тем, что в звуковом составе этих букв есть звук [й’], который на греческом языке произносится как [й’от]."
                },
                {
                    title: "Примеры йотированных гласных",
                    body: "Например:\n\n\nяма – [й’а́ма] (3 буквы, 4 звука)\nбоец — [бай’э́ц] (4 буквы, 5 звуков)\nвьюга – [вй’у́га] (5 букв, 5 звуков) – колличество букв и звуков совпадает, несмотря на то, что буква ю обозначает два звука [й’] и [у], потому что буква ь не обозначает звука."
                },
                {
                    title: "Мягкость звуков",
                    body: "Когда йотированные гласные находяться после согласной, то придают им мягкость и записываются как [э], [о], [у], [а].\nПримеры:\nлес – [л’э́с]\nмёд – [м’о́т]\nлюк – [л’у́к]\nмяч – [м’а́ч’]"
                }
            ],
            tests: [
                {
                    question: 'В каком слове буква "е" обозначает один звук?',
                    options: ['енот', 'пена', 'подъезд'],
                    answer: 1,
                    rightAnswer: 'пена'
                },
                {
                    question: 'В каком слове буква "я" стоит после гласной и дает два звука?',
                    options: ['маяк', 'мяч', 'яма'],
                    answer: 0,
                    rightAnswer: 'маяк'
                },
                {
                    question: 'Найди слово, где буква "ё" дает два звука:',
                    options: ['мёд', 'ёлка', 'тётя'],
                    answer: 1,
                    rightAnswer: 'ёлка'
                },
                {
                    question: 'В каком слове буква "ю" обозначает два звука?',
                    options: ['люк', 'юла', 'клюв'],
                    answer: 1,
                    rightAnswer: 'юла'
                }
            ]
        },
        {
            "title": "Несовпадение количества букв и звуков",
            body: [
                {
                    title: "Когда количество букв и звуков не совпадает?",
                    body: "В русском языке есть несколько случаев, когда количество звуков и букв не совпадает."
                },
                {
                    body: "Букв больше чем звуков, когда в слове есть ь и ъ, которые не обозначают звука.\n\nПримеры:\nлень – [л’э́н’]\nпень – [п’э́н’]\n"
                },
                {
                    body: "Когда йотированные гласные е, ё, ю, я дают два звука. Это мы разбирали в предыдущей теме.\n\nВспомним на примерах:\nяма – [й’а́ма] (3 буквы, 4 звука)\nбоец — [бай’э́ц] (4 буквы, 5 звуков)\nвьюга – [вй’у́га] (5 букв, 5 звуков) – колличество букв и звуков совпадает, несмотря на то, что буква ю обозначает два звука [й’] и [у], потому что буква ь не обозначает звука."
                }
            ],
            tests: [
                //////////////////////////////////
                {
                    question: 'Выполни разбор слова "солнце". Ответы напиши через запятую.\nБукв: __\nЗвуков: __\nПричина расхождения: ________',
                    answer: ['6,5,непроизносимаясогласнаял', '6,5,буквалнеобозначаетзвук', '6,5,буквалнепроизносится', '6,5,непроизносимаял'],
                    rightAnswer: '6, 5, непроизносимая согласная л'
                },
                {
                    question: 'Найди слово, в котором звуков меньше, чем букв:',
                    options: ['яблоко', 'пень', 'ель', 'лес'],
                    answer: 1,
                    rightAnswer: 'пень'
                    
                },
                {
                    question: 'Выполни разбор слова "лестница". Ответы напиши через запятую.\nБукв: __\nЗвуков: __\nПричина: ________',
                    answer: ['8,7,непроизносимаясогласнаят', '8,7,букватнеобозначаетзвук', '8,7,букватнепроизносится', '8,7,непроизносимаят'],
                    rightAnswer: '8, 7, непроизносимая согласная т'
                    
                },
                {
                    question: 'Найди слово, где звуков больше, чем букв:',
                    options: ['конь', 'ёлка', 'стол', 'дверь'],
                    answer: 1,
                    rightAnswer: 'ёлка'
                },
                {
                    question: 'Выполни разбор слова "чувство". Ответы напиши через запятую.\nБукв: __\nЗвуков: __\nПричина: ________',
                    answer: ['7,6,непроизносимаясогласнаяв', '7,6,буквавнеобозначаетзвук', '7,6,буквавнепроизносится', '7,6,непроизносимаяв'],
                    rightAnswer: '7, 6, непроизносимая согласная в'
                },
            ]

        }
    ]
}

THEORY = [
    {
        title: "Алгоритм фонетического разбора. Понятие «фонетика».",
        body: [
            {
                paragraph: "Как правильно произносить слова и обозначать звуки на письме? Для этого в русском языке существуют такие слова как фонетика, графика и орфоэпия. Давайте знакомиться!"
            },
            {
                definition:{
                    term: "Фонетика",
                    description: "раздел науки о языке, изучающий звуки речи."
                }
            },
            {
                definition:{
                    term: "Графика",
                    description: "это раздел науки о языке, в котором изучаются начертания букв алфавита и их соотношение со звуками речи."
                }
            },
            {
                definition:{
                    term: "Орфоэпия",
                    description: "это раздел науки о языке, который изучает правильное произношение звуков и ударений в словах."
                }
            },
            {
                paragraph: "С основными понятиями разобрались. Перейдем к самому важному:"
            },
            {
                definition:{
                    term: "Фонетический разбор слова (звуко-буквенный разбор)",
                    description: "это анализ звукового состава слова, при котором определяется количество и характеристика всех звуков."
                }
            },
            {
                definition:{
                    term: "Ударение",
                    description: "это выделение голосом одного из слогов в слове. Такой слог называется ударным, все остальные слоги — безударными."
                }
            },
            {
                remember: "Помни: Слова состоят из слогов, слоги из букв, буквы из звуков."
            },
            /*
            Запиши слово.
            Поставь ударение.
            Раздели слово на слоги.
            Запиши транскрипцию слова в квадратных скобках.
            Охаррактеризуй каждый звук:
            гласный – ударный/безударный
            согласный – твердый/мягкий; 
                        звонкий/глухой; 
                        парный/непарный.
            Подсчитать колличество букв и звуков. 
            */
            {
                enumiration:{
                    title: "Чтобы разобрать слово применяй этот алгоритм:",
                    items: [
                        "Запиши слово.",
                        "Поставь ударение.",
                        "Раздели слово на слоги.",
                        "Запиши транскрипцию слова в квадратных скобках.",
                        {
                            title: "Охарактеризуй каждый звук:",
                            items: [
                                "- гласный – ударный/безударный",
                                "- согласный – твердый/мягкий; звонкий/глухой; парный/непарный."
                            ]
                        },
                        "Подсчитать количество букв и звуков."
                    ]
                }
            },
            /*
            Запишем пример:
            Шко́ла – 2 слога (шко – ла); ударение падает на первый слог – [шко́ла]
            ш — [ш] — согласный, парный глухой, непарный твёрдый;
            к — [к] — согласный, парный глухой, парный твёрдый;
            о — [о] — гласный, ударный;
            л — [л] — согласный, непарный звонкий, парный твёрдый;
            а — [а] — гласный, безударный.
            ___________________________________________________________
            5 букв, 5 звуков
            */
            {
                paragraph: "Запишем пример: Шко́ла – 2 слога (шко – ла);\nУдарение падает на первый слог – [шко́ла]\n\nш — [ш] — согласный, парный глухой, непарный твёрдый;\nк — [к] — согласный, парный глухой, парный твёрдый;\nо — [о] — гласный, ударный;\nл — [л] — согласный, непарный звонкий, парный твёрдый;\nа — [а] — гласный, безударный.\n___________________________________________________________\n\n5 букв, 5 звуков"
            }
        ]
    },
    {
        title: "Гласные и согласные звуки.",
        body: [
            {
                paragraph: "Мы уже знаем как делаеть звуко-буквенный разбо слова. Сегодня мы углубимся в эту тему и изучим гласные и согласные звуки."
            },
            {
                definition:{
                    term: "Звук",
                    description: "это минимальная, нечленимая единица звучащей речи. Фактически звук — то же, что и буква (или буквосочетание), но произносится вслух."
                }
            },
            {
                image: "./images/Sounds_and_letters_in_Russian.png"
            },
            {
                remember: "Помни: Буквы Ъ и Ь не имеют звука!"
            }
        ]
    },
    {
        title: "Транскрипция. Как записывать звуки.",
        body: [
            {
                paragraph: "Сегодня мы с вами научимся записывать все известные нам звуки в виде фонетической транскрипции. "
            },
            {
                definition:{
                    term: "Транскрипция",
                    description: "это передача на письме элементов звучащей речи (звуков) с помощью специальных знаков."
                }
            },
            {
                definition:{
                    term: "Фонетическая транскрипция",
                    description: "систематический способ записи устной речи с использованием специальных символов. Каждый символ обозначает определённый звук. Фундаментом этой системы служит Международный фонетический алфавит (IPA)."
                }
            },
            {
                enumiration:{
                    title: "Основные правила написания транскрипции: ",
                    items: [
                        "Транскрипция всегда оформляется в квадратных скобках — [ ]:\n\nПримеры:\nкино́ — [к’ино́];\nзда́ние — [зда́н’ийэ];\nснега́ — [сн’ига́].",
                        "Мягкость звука обозначается знаком «‘».",
                        "Ударный звук обозначается знаком ударения — « ́»\n\nПример: [шко́ла]\n\nПричём в двусложных (слова состоящие из двух и более слов) словах оно двойное: \n\nПример: трёхэтажный — [тр’о́хэта́жный] .",
                        "В транскрипции не участвуют буквы е, ё, ю, я, мягкий и твёрдый знаки. Если е, ё, ю, я встречаются в начале слова, после гласных, мягкого или твёрдого знака, они представляют из себя сочетание звуков: [ йэ], [ йо], [ йу], [ йа]:\n\nПримеры:\nежевика — [йэжэв’и́ка]\nльёт — [лйо́т]\nобъявление — [абйавл’э́н’ийэ].\nЕсли же стоят после согласных, то придают им мягкость и записываются как [э], [о], [у], [а].\nПримеры:\nмяч – [м’а́ч’]\nвереск – [в’э́р’эск]",
                        "В транскрипции не участвуют заглавные буквы:\n\nПример: Москва́ — [масква́]"

                    ]
                }
            }

        ]
    },
    {
        title: "Йотированные гласные (е, ё, ю, я). Какие буквы называются йотированными.",
        body: [
            {
                paragraph: "Йотированными гласными в русском языке называют буквы Е, Ё, Ю, Я, которые в некоторых случаях обозначают два звука: гласный и согласный [й’]. Название связано с тем, что в звуковом составе этих букв есть звук [й’], который на греческом языке произносится как [й’от]."
            },
            {
                enumiration:{
                    title: "Разберем две роли этих букв:",
                    items:[
                        "Обозначают два звука: Когда йотированные гласные находяться в начале слова, после гласной, после ь и ъ – [й’] и гласный звук.\n\nПримеры:\nяма – [й’а́ма]\nвьюга – [вй’у́га]\nбоец — [бай’э́ц]",
                        "Обозначают один звук и смягчают предыдущий согласный: Когда йотированные гласные находяться после согласной.\n\nПримеры:\nлес – [л’э́с]\nмёд – [м’о́т]\nлюк – [л’у́к]\nмяч – [м’а́ч’]"
                    ]
                }
            }
        ]
    },
    {
        title: "Слова, в которых колличество букв и звуков не совпадает.",
        body: [
            {
                paragraph: "В русском языке есть несколько случаев, когда колличество звуков и букв не совпадает."
            },
            {
                enumiration:{
                    title: "Расспотрим их по порядку.",
                    items:[
                        "Букв больше чем звуков, когда в слове есть ь и ъ , которые не обозначают звука.\n\nПримеры:\nлень – [л’э́н’]\nпень – [п’э́н’]\n",
                        "Когда йотированные гласные е, ё, ю, я дают два звука. Это мы разбирали в предыдущей теме.\n\nВспомним на примерах:\nяма – [й’а́ма] (3 буквы, 4 звука)\nбоец — [бай’э́ц] (4 буквы, 5 звуков)\nвьюга – [вй’у́га] (5 букв, 5 звуков) – колличество букв и звуков совпадает, несмотря на то, что буква ю обозначает два звука [й’] и [у], потому что буква ь не обозначает звука.",
                        "Когда есть непроизносимые согласные.* Непроизносимые согласные в корне слова — это такие согласные, которые не слышны при произношении, но сохраняются на письме. Чаще всего непроизносимыми бывают звуки [в], [л], [д] и [т]. Они могут встречаться в различных сочетаниях букв, например: здн, ндск, нтск, стл, стн, рдц, лнц.\n\nПримеры: \nчувство – [ч’у́ства]\nсолнце – [со́нц’э]\nлестница – [л’э́сниц’а] \nпоздний – [по́зн’ий’]",
                    ]
                }
            },
            {
                paragraph: "Для проверки непроизносимой согласной нужно подобрать такое проверочное слово, чтобы эта согласная звучала четко и не вызывала сомнений. Проверочным словом может быть однокоренное слово или измененная форма слова. Чаще всего непроизносимая согласная будет отчетливо слышна перед гласной (как в примерах выше) или в конце слова."
            },
            {
                paragraph: "Например: постный — слышим как [посный], но в проверочном слове пост буква т на конце произносится четко."
            },
            {
                paragraph: "К сожалению, есть некоторое количество слов с непроверяемыми непроизносимыми согласными, написание которых давно закрепилось в русском языке, однако проверочное слово подобрать невозможно. Это такие слова как, например, праздник, чувство, лестница. Их правописание нужно уточнять в орфографическом словаре и запоминать."
            },
            {
                paragraph: "Для удобства мы составили для вас словарик с наиболее часто встречающимися словами с непроизносимыми согласными и транскрипцией к ним:"
            },
            {
                image: "./images/Words_with_unpronounceable_consonants.png"
            }
        ]
    }
]

let testData = [];
let selectedSection = 0;
let selectedPopupSection = 0;
let sections = []
let popupSections = []
let isNextSection = false;

let headerTitle = document.getElementById("header-title");
let sectionList = document.getElementById("section-list");
let testContainer = document.getElementById("test-container");
let testHeader = document.getElementById("test-header");
let testHeaderTheory = document.getElementById("test-header-theory");
let testTheory = document.getElementById("test-theory");
let testExample = document.getElementById("test-example");
let testExampleContainer = document.getElementById("test-example-container");
let testQuestions = document.getElementById("test-questions");
let buttonNext = document.getElementById("button-next");
let body = document.body;

let popup = document.getElementById("popup");
let popupTheory = document.getElementById("popup-theory");
let popupTitle = document.getElementById("popup-title");
let popupContent = document.getElementById("popup-content");
let popupAside = document.getElementById("popup-aside");


//Проверка ответов и переход к следующему разделу
let nextSection = (e) => {
    if(!isNextSection){
        let allCorrect = true;
        testData.forEach((test, index) => {
            test.hintElement.classList.remove("wrong");
            test.hintElement.classList.remove("correct");
            if(test.userAnswer == undefined){
                test.hintElement.innerHTML = `Пожалуйста, ответьте на все вопросы перед переходом к следующему разделу.`;
                test.hintElement.classList.add("wrong");
                allCorrect = false;
                return
            }
            if(test.userAnswer == test.answer){
                test.hintElement.innerHTML = `✓ Правильно!`;
                test.hintElement.classList.add("correct");
            }
            else{
                if(test.answer instanceof Array && test.userAnswer instanceof Array){
                    let sortedUserAnswer = [...test.userAnswer].sort().toString();
                    let sortedAnswer = [...test.answer].sort().toString();
                    if(sortedUserAnswer == sortedAnswer){
                        test.hintElement.innerHTML = `✓ Правильно!`;
                        test.hintElement.classList.add("correct");
                    }
                    else{
                        test.hintElement.innerHTML = `✗ Неправильно! Поробуй ещё раз. Правильный ответ: ${test.rightAnswer}`;
                        test.hintElement.classList.add("wrong");
                        allCorrect = false;
                    }
                }
                else if(test.answer instanceof Array && typeof test.userAnswer == "string"){
                    let normailizedUserAnswer = test.userAnswer.replace(/\s/g, '').toLowerCase();
                    let isCorrect = test.answer.some(answer => {
                        let normailizedAnswer = answer.replace(/\s/g, '').toLowerCase();
                        return normailizedAnswer == normailizedUserAnswer;
                    })
                    if(isCorrect){
                        test.hintElement.innerHTML = `✓ Правильно!`;
                        test.hintElement.classList.add("correct");
                    }
                    else{
                        test.hintElement.innerHTML = `✗ Неправильно! Поробуй ещё раз. Правильный ответ: ${test.rightAnswer}`;
                        test.hintElement.classList.add("wrong");
                        allCorrect = false;
                    }
                }
                else if(typeof test.answer == "string" && typeof test.userAnswer == "string"){
                    let normailizedUserAnswer = test.userAnswer.replace(/\s/g, '').toLowerCase();
                    let normailizedAnswer = test.answer.replace(/\s/g, '').toLowerCase();
                    if(normailizedAnswer == normailizedUserAnswer){
                        test.hintElement.innerHTML = `✓ Правильно!`;
                        test.hintElement.classList.add("correct");
                    }
                    else{
                        test.hintElement.innerHTML = `✗ Неправильно! Поробуй ещё раз. Правильный ответ: ${test.rightAnswer}`;
                        test.hintElement.classList.add("wrong");
                        allCorrect = false;
                    }
                }
                else{
                    test.hintElement.innerHTML = `✗ Неправильно! Поробуй ещё раз. Правильный ответ: ${test.rightAnswer}`;
                    test.hintElement.classList.add("wrong");
                    allCorrect = false;
                }
            }
            


        })
        if(!allCorrect){
            testData[0].hintElement.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
            return
        }
        let positionList = [
            { x: window.innerWidth * 0.50, y: window.innerHeight * 0.60 },
            { x: window.innerWidth * 0.25, y: window.innerHeight * 0.40 },
            { x: window.innerWidth * 0.75, y: window.innerHeight * 0.30 },
            { x: window.innerWidth * 0.60, y: window.innerHeight * 0.50 },
            { x: window.innerWidth * 0.40, y: window.innerHeight * 0.25 },
            { x: window.innerWidth * 0.30, y: window.innerHeight * 0.75 },
        ];
        for(let i = 0; i < positionList.length; i++) {
            setTimeout(() => 
                confetti({
                    position: positionList[i],
                    count: 150,			// Number of particles
                    size: 1.5,			// Size of the particles
                    velocity: 200,		// Initial particle velocity
                    fade: true	 
                }), i * 150);
        }
        if(selectedSection < TEST.Sections.length - 1){
            buttonNext.textContent = "Следующий раздел";
            buttonNext.style.transform = "scale(1.1)";
        }
        else{
            buttonNext.textContent = "На главную";
            buttonNext.style.transform = "scale(1.1)";
        }
        isNextSection = true;
        
        return;
    }


    if(selectedSection < TEST.Sections.length - 1){
        selectedSection++;
        initTest(TEST.Sections[selectedSection]);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    else{
        window.location.href = "./index.html";
    }
    
    
}

const initTest = (section) =>{
    testData = [];
    isNextSection = false;
    buttonNext.textContent = "Проверить";
    buttonNext.style.transform = "scale(1)";
    testHeader.innerHTML = ``
    testTheory.innerHTML = ``
    testExample.innerHTML = ``
    testQuestions.innerHTML = ``

    sections.forEach((section, index) => {
        if(index == selectedSection){
            section.classList.add("selected");
            console.log(section);
            
        }
        else{
            section.classList.remove("selected");
        }
    })
    
    testHeader.textContent = section.title; //Алгоритм фонетического разбора
    
    section.body.forEach(block => {
        let h3 = document.createElement("h3");
        h3.textContent = block.title;
        testTheory.appendChild(h3);

        if(block.body){
            block.body.split("\n").forEach(paragraph => {
                let p = document.createElement("p");
                p.textContent = paragraph;
                testTheory.appendChild(p);
            });
        }
    })
    if(section.example){
        testExample.textContent = section.example;
    }
    else{
        testExampleContainer.style.display = "none";
    }

    for (let i = 0; i < section.tests.length; i++) {

        let testDataItem = {
            options: [],
        };

        let testItem = document.createElement("li");
        testItem.classList.add("test-item");
        
        //Заголовок: Задание №
        let span = document.createElement("span");
        span.textContent = `Задание ${i + 1}`;
        testItem.appendChild(span);

        //Вопрос
        let question = document.createElement("p");
        question.textContent = section.tests[i].question;
        testItem.appendChild(question);

        //Кнопки
        let buttonsLayout = document.createElement("div");
        buttonsLayout.classList.add("buttons-layout");

        //Варианты ответа
        if(section.tests[i].options){
            let optionsList = document.createElement("ul");
            optionsList.classList.add("options-list");

            for (let j = 0; j < section.tests[i].options.length; j++) {
                let optionItem = document.createElement("li");
                let label = document.createElement("label");
                let radioBtn = document.createElement("input");
                radioBtn.type = Array.isArray(section.tests[i].answer) ? "checkbox" : "radio";
                radioBtn.name = `question-${i}`;

                testDataItem.options.push(radioBtn);
                

                label.appendChild(radioBtn);
                let awnserText = document.createElement("span");
                awnserText.textContent = section.tests[i].options[j];
                label.appendChild(awnserText);

                if(Array.isArray(section.tests[i].answer)){
                    radioBtn.onchange = () => {
                        let selectedOptions = testDataItem.options.filter(option => option.checked).map(option => testDataItem.options.indexOf(option));
                        testDataItem.userAnswer = selectedOptions;
                        console.log(testDataItem);
                        
                    }
                }
                else{
                    radioBtn.onchange = () => {
                        testDataItem.userAnswer = j;
                    }
                }

                optionItem.appendChild(label);

                optionsList.appendChild(optionItem);
            }
            testItem.appendChild(optionsList);

        }
        //Ответ письменный
        else{
            let input = document.createElement("input");
            input.type = "text";
            input.placeholder = "Введите ответ";
            testDataItem.options.push(input)
            testItem.appendChild(input);
            
            input.oninput = () => {
                testDataItem.userAnswer = input.value;
            }

        }

        //Подсказка
        let hint = document.createElement("span");
        hint.classList.add("hint");
        hint.innerHTML = ``;
        testItem.appendChild(hint);
        testDataItem.hintElement = hint;
        testDataItem.answer = section.tests[i].answer;
        testDataItem.rightAnswer = section.tests[i].rightAnswer;
        

        testData.push(testDataItem);
        testItem.appendChild(buttonsLayout);
        
        testQuestions.appendChild(testItem);

    }

    console.log(testData);
    
}

let initPopupTheory = (section) => {
    popupContent.innerHTML = "";

    popupSections.forEach((section, index) => {
        if(index == selectedPopupSection){
            section.classList.add("selected");
        }
        else{
            section.classList.remove("selected");
        }
    })

    if(section.title){
        let h3 = document.createElement("h3");
        h3.textContent = section.title;
        popupContent.appendChild(h3);
    }

    if(section.body){
        section.body.forEach(block => {
            if(block.paragraph){
                let p = document.createElement("p");
                p.textContent = block.paragraph;
                popupContent.appendChild(p);
            }
            else if(block.definition){
                let defContainer = document.createElement("div");
                defContainer.classList.add("definition-container");
                defContainer.innerHTML = `<b>${block.definition.term} — </b> ${block.definition.description}`;
                popupContent.appendChild(defContainer);
            }
            else if(block.image){
                let img = document.createElement("img");
                img.src = block.image;
                img.style.maxWidth = "100%";
                popupContent.appendChild(img);
            }
            else if(block.enumiration){
                let enumContainer = document.createElement("div");
                enumContainer.classList.add("enumiration-container");
                let title = document.createElement("h4");
                title.textContent = block.enumiration.title;
                enumContainer.appendChild(title);
                let list = document.createElement("ul");
                list.classList.add("enumiration-list");
                block.enumiration.items.forEach((item, index) => {
                    let listItem = document.createElement("li");
                    if(typeof item === "string"){
                        listItem.textContent = `${index + 1}. ` + item;
                    }
                    else if(typeof item === "object"){
                        let subTitle = document.createElement("span");
                        listItem.classList.add("enumiration-subtitle");
                        subTitle.textContent = `${index + 1}. ` +  item.title;
                        listItem.appendChild(subTitle);
                        let subList = document.createElement("ul");
                        item.items.forEach(subItem => {
                            let subListItem = document.createElement("li");
                            subListItem.textContent = subItem;
                            subList.appendChild(subListItem);
                        });
                        listItem.appendChild(subList);
                    }
                    list.appendChild(listItem);
                });
                enumContainer.appendChild(list);
                popupContent.appendChild(enumContainer);
            }
            else if(block.remember){
                let remember = document.createElement("p");
                remember.classList.add("remember");
                remember.textContent = block.remember;
                popupContent.appendChild(remember);
            }
        })
    }
}






headerTitle.textContent = TEST.title;
body.style.cssText = `--bg-color: ${TEST.color};`;
TEST.Sections.forEach((section, index) => {
    let sectionItem = document.createElement("li");
    sectionItem.classList.add("section-item");
    

    let title = document.createElement("button");
    title.textContent = section.title;
    sectionItem.appendChild(title);
    title.onclick = () => {
        if(selectedSection == index)return
        selectedSection = index;
        initTest(section);
    }

    sectionList.appendChild(sectionItem);
    sections.push(sectionItem)
})

THEORY.forEach((section, index) => {
    let sectionItem = document.createElement("li");
    sectionItem.classList.add("popup-section-item");
    let title = document.createElement("button");
    title.textContent = section.title;
    sectionItem.appendChild(title);
    title.onclick = () => {
        if(selectedPopupSection == index)return
        selectedPopupSection = index;
        initPopupTheory(section);
    }
    popupTheory.querySelector("#popup-close").onclick = () => {
        body.style.overflow = "auto";
        popup.classList.remove("show");
    }
    popupAside.appendChild(sectionItem);
    popupSections.push(sectionItem);
})

testHeaderTheory.onclick = (e) => {
    console.log(popupTheory);
    body.style.overflow = "hidden";
    
    window.scrollTo({
        top: window.scrollY,
        // behavior: "smooth"
    });

    popup.classList.add("show");
    initPopupTheory(THEORY[selectedSection]);
};

initTest(TEST.Sections[0]);


