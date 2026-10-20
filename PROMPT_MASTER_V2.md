Выбор стиля **«Аудио-телеметрия и психологическая лаборатория» (Dark Audio Console / Neuro-Acoustic Lab)** — это идеальное попадание.

Для стартапа, который подается на грант в компанию уровня ElevenLabs, этот стиль работает лучше всего по одной фундаментальной причине: **он говорит на языке инженеров и ученых, а не маркетологов**. Инженеры ElevenLabs ежедневно смотрят на спектрограммы, графики задержек (TTFA), дисперсию основного тона ($F_0$) и частоту дискретизации. Когда они увидят сайт, оформленный как консоль точного акустического прибора, их реакцией будет: *«Эти ребята понимают физику звука и то, как работает наш API»*.

Ниже подробно расписано, как устроен этот стиль, чем заменить сгенерированные картинки и как составить точный промпт для сборки сайта в Cursor, v0 или Lovable.

---

### 1. Визуальный код стиля (Visual DNA)

Концепция: **терминал оператора биоакустического анализа и стресс-тестирования**.

* **Философия сетки:** Модульная приборная панель (HUD / Dashboard). Никаких парящих «пузырей» и размытых градиентов. Четкие блоки, разделенные тонкими рамками в 1 пиксель (1px solid border), с микро-засечками по углам или легкой координатной сеткой на фоне.


* **Цветовая палитра:**
* **Базовый фон:** Глубокий матовый цвет экранов измерительных приборов `#090B0E` (не чистый черный, а глубокий графитово-угольный оттенок).
* **Поверхности карточек (Panels):** `#0E1217` с жесткой тонкой границей `#1C2430`.
* **Фосфорный луч (Основной сигнал / Голос пользователя):** Электро-голубой `#00E5FF` или холодный бирюзовый `#00F5A0` — цвет луча осциллографа.
* **Сигнал стресса (Давление оппонента / Тремор связок):** Неоново-красный / кармин `#FF2A55` (индикатор зафиксированного срыва голоса или атаки манипулятора).
* **Сигнал удержания границы (Уверенность / Успех):** Фосфорный зеленый `#00FF66`.
* **Служебный текст и метки:** Приглушенный стальной монохром `#64748B`.


* **Типографика:**
* **Заголовки и UI:** Монохромный, высокотехнологичный гротеск (*Geist*, *Inter* или *PP Neue Montreal*).
* **Телеметрия, цифры, таймкоды и теги:** Строгий моноширинный шрифт (*JetBrains Mono* или *Space Mono*) с увеличенным трекингом для меток вроде `STATUS: ACTIVE [RECORDING]`.



---

### 2. Чем заменить сгенерированные картинки (Функциональный визуал)

Вместо абстрактных 3D-человечков и сфер сайт наполняется интерактивными интерфейсными блоками, которые работают на коде и данных:

#### А. Живой осциллограф на HTML5 Canvas (в первом экране)

В правом углу Hero-секции вместо картинки размещается тонкая, пульсирующая линия звуковой волны.

* В обычном состоянии она плавно колеблется с низкой амплитудой (режим ожидания).
* Рядом находится кнопка: `[ PLAY CONFRONTATION SAMPLE ]`.
* При нажатии включается реальный 10-секундный аудиосэмпл ElevenLabs (холодный голос босса), а волна мгновенно окрашивается в тревожный красный цвет `#FF2A55`, демонстрируя реальные всплески амплитуды и частоты.

#### Б. Виджет «Биоакустический полиграф» (Acoustic Telemetry Card)

Компактная карточка, показывающая, как система в реальном времени раскладывает голос человека на физические параметры:

| Параметр телеметрии | Текущее значение | Индикатор статуса |
| --- | --- | --- |
| **Fundamental Frequency ($F_0$)** | 138 Hz $\rightarrow$ 174 Hz | `[PITCH_SPIKE: DETECTED]` |
| **Vocal Jitter ( связочный микротремор)** | 4.82% (Норма < 1.04%) | `[TREMOR: HIGH / FREEZE]` |
| **Hesitation Gap (пауза ступора)** | 1,240 ms | `[PRESSURE_VULNERABILITY]` |
| **Boundary Stability Index** | 42 / 100 | `[ESCALATE_OPPONENT_ATTACK]` |

Любой технический специалист ElevenLabs, увидев эту таблицу, поймет: фаундеры не просто прикрутили чат-бота, они анализируют **физиологические биомаркеры стресса**.

#### В. Терминал диалога «Oitu Terminal»

Центральный блок страницы оформлен как лог перепалки в реальном времени с таймингами задержки:

[00:02.14] OPPONENT_SYS (Eleven_v4_Turbo):
[scoffs] "Ты почему заикаешься? В субботу в 9:00 жду отчет на столе."
>> TTFA: 412ms | PROSODY_TAG: [scoffs] | TONE: COLD_AUTHORITARIAN

[00:04.80] USER_IN (Mic Input / Telegram Voice Note):
"Нет, Артем. В выходные я недоступен. Займусь отчетом в понедельник."
>> STT_LATENCY: 94ms | PARSED_WORDS: 10

[00:05.10] NOMIGEN_DSP_ENGINE:
>> Jitter: 0.81% (Grounded) | Hesitation: 280ms (Assertive)
>> STATE: BOUNDARY_HELD -> DE-ESCALATE_ATTACK

#### Г. Инженерная матрица мультиязычной маршрутизации (Global Routing Table)

Вместо картинок с флагами стран размещается таблица маршрутизации ElevenLabs:

* `ROUTE: DE-DE` | `LATENCY: 410ms` | `STYLE: Hierarchy & Contract Rigidity` | `STATUS: OPERATIONAL`
* `ROUTE: ES-ES` | `LATENCY: 385ms` | `STYLE: Relational Guilt & Loyalty Traps` | `STATUS: OPERATIONAL`
* `ROUTE: HU-HU` | `LATENCY: 430ms` | `STYLE: Bureaucratic Dominance` | `STATUS: OPERATIONAL`
* `ROUTE: FI-FI` | `LATENCY: 440ms` | `STYLE: Passive-Aggressive Consensus` | `STATUS: OPERATIONAL`

---

### 3. Готовый промпт для генерации сайта в Cursor / v0 / Lovable

Скопируйте этот промпт целиком в веб-генератор (v0.dev, Lovable.dev, Bolt.new) или в Cursor AI, чтобы получить чистый, высокотехнологичный код без генеративного мусора:

Build a dark-mode, high-tech engineering landing page for "Nomigen" (the parent Voice AI Simulation & Behavioral Telemetry platform) and its flagship product "Oitu" (@oitubot on Telegram - an AI voice gym for high-stakes conversations and boundary-setting).

DESIGN LANGUAGE & PHILOSOPHY:

* Theme: "Dark Audio Console / Neuro-Acoustic Lab". Think iZotope RX meets Palantir and ElevenLabs Developer Console.
* Zero AI-generated illustration images. Zero blurry gradients. Zero cartoon graphics. The design must feel like a precision scientific software tool for audio analysis.
* Visual elements must consist entirely of: 1px geometric borders, grid coordinates, real-time Canvas audio waveforms, data telemetry HUDs, monospace logs, and LED-style status indicators.

COLOR SYSTEM:

* Console Canvas Background: #090B0E
* Panel / Card Surface: #0E1217 with crisp border: 1px solid #1C2430
* Primary Signal (Oscilloscope Beam): #00E5FF (Electric Cyan)
* Stress / Hostility / Tremor Alert: #FF2A55 (Laser Crimson)
* Assertiveness / Boundary Held: #00FF66 (Phosphor Green)
* Warning / Hesitation: #FFB800 (Amber)
* Text Primary: #F1F5F9 (Crisp White)
* Text Secondary / Technical Labels: #64748B (Slate Gray)
* Fonts: Sans-serif (Inter or Geist) for headlines; Monospace (JetBrains Mono) for all metrics, latencies, and logs.

LAYOUT STRUCTURE:

1. TOP TELEMETRY BAR & NAV:
* Left: "NOMIGEN // SYSTEMS" with a green blinking status dot: `SYS_STATUS: ONLINE [LATENCY: 410ms]`.
* Center links: `[Architecture]`, `[Acoustic_DSP]`, `[Oitu_Simulator]`, `[Global_Routing]`.
* Right: Badge `BUILT_WITH_ELEVENLABS` and a high-contrast button: `LAUNCH @oitubot ->` linking to [https://t.me/oitubot](https://t.me/oitubot).


2. HERO SECTION (SPLIT CONSOLE):
* Left Side (Value Proposition):
* Micro-tag: `PROJECT: OITU // VOICE_GYM_V1.0`
* Headline: "You Can't Train Boundary-Setting in Silence. Inoculate Your Voice Under Real Adrenaline."
* Body: "Text chatbots give you minutes to formulate polite excuses. In real confrontations, adrenaline freezes your vocal cords. Nomigen powers Oitu — a neuro-acoustic simulator that attacks with realistic vocal hostility, interrupts your excuses, and measures vocal tremor in real time."
* CTAs: Primary button `[START SESSION ON TELEGRAM -> @oitubot]` + Secondary ghost button `[READ ARCHITECTURE SPEC]`.


* Right Side (Live Signal Analyzer):
* A real HTML5 Canvas element rendering an animated oscilloscope soundwave.
* Audio toggle card: "SAMPLE 01: Hostile Leadership Attack". When played, wave turns #FF2A55, with live audio output from ElevenLabs.




3. BIO-ACOUSTIC TELEMETRY ENGINE (HOW WE DETECT WEAKNESS):
* Grid showing that Nomigen evaluates physical sound, not just text:
* Card 1: `VOCAL_JITTER_ANALYSIS` -> Detects vocal cord tremor caused by cortisol/adrenaline.
* Card 2: `HESITATION_LATENCY` -> Measures the milliseconds between an opponent's attack and user response.
* Card 3: `UPTALK_DETECTION` -> Flags rising inflection at sentence ends that turns a boundary into a plea.
* Card 4: `ACOUSTIC_PROSODY_ADAPTATION` -> Feeds telemetry into ElevenLabs v4 Turbo to trigger dynamic interruption tags (`[coldly]`, `[scoffs]`).




4. INTERACTIVE SIMULATION LOG (OITU RUNTIME TERMINAL):
* Monospace terminal window styled like a Linux/IDE debug log.
* Shows a realistic multi-turn confrontation between a toxic executive and a user, displaying exact timestamps, STT latencies, prosody injection tags, and score outcomes.


5. GLOBAL LINGUISTIC ROUTING (70+ LANGUAGES):
* Clean data table showing language, latency, and psychological manipulation archetype for DACH (German), Southern Europe (Spanish), Nordics (Finnish), and Central Europe (Hungarian).


6. ELEVENLABS GRANT APPLICANT BANNER:
* A dedicated technical transparency card:
"Built on ElevenLabs Conversational Infrastructure. Nomigen uses ElevenLabs low-latency voice models and dynamic emotional inline tags to replace passive roleplays with visceral vocal inoculation."


7. FOOTER:
* Minimalist copyright: "NOMIGEN SYSTEMS INC. // ALL RIGHTS RESERVED."
* Contact: founder@nomigen.com
* Direct link: t.me/oitubot



---

### Почему это сработает

1. **Никакого «душка дешевого ИИ»:** На сайте нет ни одной картинки, сделанной в Midjourney. Все визуалы — это графики, данные, логи и холст осциллографа.


2. **Ощущение дорогого софта:** Дизайн выглядит как интерфейс закрытого лабораторного инструмента, за которым чувствуется серьезная инженерная база.


3. **Прямой фокус на бота:** На фоне строгой технической панели яркая кнопка `LAUNCH @oitubot` привлекает внимание, обеспечивая высокую конверсию переходов в Telegram.