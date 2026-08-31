export const profile = {
  name: "Андреев Сергей Андреевич",
  shortName: "Андреев Сергей",
  age: 27,
  birthday: "18 сентября 1998",
  role: "Fullstack-разработчик",
  specialization: "Программист, разработчик",
  salary: "180 000 ₽",
  salaryNote: "на руки",
  city: "Тольятти",
  citizenship: "Россия",
  relocation: ["Алматы","Астана","Баку","Воронеж","Екатеринбург","Казань","Краснодар","Минск","Москва","Нижний Новгород","Новосибирск","Пермь","Ростов-на-Дону","Самара","Санкт-Петербург","Саратов","Сочи","Ставрополь","Тбилиси","Тюмень","Уфа","Челябинск","Ярославль"],
  phone: "+7 (902) 184-41-90",
  email: "weap4@yandex.ru",
  telegram: "https://t.me/serchy_k",
  github: "https://github.com/Serchyk",
  employment: "полная занятость",
  format: "удалённо, гибрид",
  about: "Flutter-архитектор с 6-летним опытом проектирования высоконагруженных мобильных приложений с нуля. Специализируюсь на сложной клиент-серверной логике (REST/gRPC/WebSockets), управлении состоянием через BLoC/Riverpod и низкоуровневой оптимизации (60 FPS, Custom Paint, управление памятью). Руководил командами до 3 человек, выстраивал процессы, код-ревью и наставничество. 2 года коммерческого опыта бекенда на Go (микросервисы, PostgreSQL, NATS/Kafka, Docker).",
  aboutLong: "Ключевая экспертиза — интеграция нативного кода во Flutter: Platform Channels, Pigeon и dart:ffi (C/C++/Rust). Уверенно работаю с Isolates, кэшированием и адаптивом от Wear OS до планшетов. Владею полным циклом CI/CD (GitHub Actions, GitLab CI). Понимаю жизненный цикл продукта от и до — публиковал игры на Unity в RuStore и Яндекс.Игры.",
}

export type Experience = {
  company: string
  url?: string
  location?: string
  role: string
  period: string
  duration: string
  description: string
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    company: 'ООО "СКОЛОПЕНДРА"',
    url: "https://skolopendra.com",
    location: "",
    role: "Ведущий специалист по разработке мобильных решений",
    period: "Май 2020 — настоящее время",
    duration: "6 лет 4 месяца",
    description: "Разработка игр-приложений (C# / Flutter)",
    bullets: ["Написание и рефакторинг кода, оптимизация", "Разработка и поддержка клиентской части веб-приложений и мобильных приложений", "Формализация и алгоритмизация задач, управление командой разработчиков", "Разработка компьютерных и мобильных игр"]
  },
  {
    company: 'ООО "Robox"',
    url: "https://robox.solutions",
    location: "Москва",
    role: "Ведущий специалист Frontend",
    period: "Ноябрь 2025 — Июль 2026",
    duration: "9 месяцев",
    description: "Сервисы, облачное хранилище, Wear OS, AI-инструменты",
    bullets: ["Архитектура клиент-сервер для S3-хранилища, чанковая загрузка 5МБ с паузой/резюмом", "Токенизация с refresh без потери контекста", "Поддержка Wear OS и планшетов (1.4\"–12\"), превью медиа −40% за счет изолятов и Hive", "Ревью кода, интеграция модулей, контроль версий"]
  },
  {
    company: "Choise",
    role: "Инженер-программист",
    period: "Февраль 2019 — Март 2020",
    duration: "1 год 2 месяца",
    description: "Разработка и поддержка приложения. Kotlin",
    bullets: ["Клиентская часть веб-приложений и мобильных приложений", "Оптимизация, рефакторинг, реализация логики по ТЗ"]
  },
  {
    company: "Justmoby",
    location: "Тольятти",
    role: "Инженер-программист Android/Unity",
    period: "Апрель 2018 — Май 2019",
    duration: "1 год 2 месяца",
    description: "Разработка и поддержка игр и приложений компании",
    bullets: ["Android / Unity", "Контроль версий, анализ причин багов, оптимизация"]
  },
  {
    company: "Фриланс",
    location: "Самара",
    role: "Программист-разработчик",
    period: "Июнь 2017 — Март 2018",
    duration: "9 месяцев",
    description: "Unity 3D (C#): раннер тайм-киллер + медицинский симулятор (PC/Android)",
    bullets: []
  },
]

export type Project = {
  title: string
  subtitle: string
  links?: string[]
  role: string
  stack: string[]
  highlights: string[]
  result?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: "Cloud Storage & Wear OS",
    subtitle: "Облачное файловое хранилище",
    links: ["https://robox.solutions/gadgets.html","https://pro.robox.solutions/","https://cloux.robox.solutions/storage?sellers"],
    role: "Ведущий Flutter-разработчик / Архитектор",
    stack: ["Flutter","Dart","S3","Hive","Isolates","Wear OS"],
    highlights: ["Чанковая загрузка 5 МБ с паузой/возобновлением","Refresh token без вылетов","Адаптив 1.4\"–12\" (Wear OS/планшеты)"],
    result: "Превью медиа −40%, пагинация в изолятах",
    featured: true,
  },
  {
    title: "Универсальный VPN-клиент",
    subtitle: "Flutter + Native FFI (OpenVPN, WireGuard, IKEv2)",
    role: "Mobile Tech Lead (2–3 devs)",
    stack: ["Flutter","FFI","C/C++","EventChannel","Isolates"],
    highlights: ["Единый Dart API поверх 3 протоколов","Async-обертка dart:ffi, вынос в Isolates","Graceful shutdown + автопереподключение <300мс"],
    result: "Стабильно на 2 ГБ RAM",
    featured: true,
  },
  {
    title: "Feelnet",
    subtitle: "Dating App (аналог Tinder)",
    links: ["https://feelnet.space"],
    role: "Senior Flutter Developer",
    stack: ["Flutter","Firestore","WebSockets","FCM","Animations"],
    highlights: ["Match-making с геоприоритетом (1.2с → 0.3с)","Real-time чат + локальная очередь","60 FPS на Snapdragon 6xx (const/repaintBoundary)"],
    result: "5 000 свайпов/мин пик",
  },
  {
    title: "Бекенд на Go",
    subtitle: "Микросервисная архитектура",
    role: "Backend Go (2 года)",
    stack: ["Go","Gin","gRPC","PostgreSQL","Redis","NATS","Docker"],
    highlights: ["Auth сервис 50k DAU (JWT + Redis)","Event-driven на NATS","gRPC между сервисами −30% задержек"],
    result: "10 000 RPS, p95 <50мс",
  },
  {
    title: "Unity во Flutter",
    subtitle: "3D-рендеринг (Texture Widget)",
    links: ["https://revol.life"],
    role: "Flutter R&D / Тимлид Unity (2 devs)",
    stack: ["Flutter","Unity","TextureView","Dart↔C#"],
    highlights: ["Встраивание Unity сцены в Flutter","Двусторонняя связь Dart↔C#","Пулинг объектов Unity"],
    result: "RAM −25%, запуск на 3 ГБ без крашей",
  },
  {
    title: "КПРФ ID",
    subtitle: "Партийное приложение",
    links: ["https://play.google.com/store/apps/details?id=ru.kprf.id"],
    role: "Ведущий Flutter-разработчик",
    stack: ["Flutter","Clean Architecture","go_router","Dio/Retrofit","Firebase"],
    highlights: ["Auth phone/SMS/JWT, профиль, лента с фильтром","Календарь событий (QR, участники)","Обращения с файлами, Remote Config, Theming"],
  },
  {
    title: "Robokot (AlexCat)",
    subtitle: "IoT Companion App для умной игрушки",
    role: "Middle+ Flutter (Skolopendra)",
    stack: ["Flutter","GetX","WebSocket","Dio","audioplayers","wifi_scan"],
    highlights: ["Мультиплекс WebSocket (UUID v4, RESTORE_SESSION 10с)","SoftAP 192.168.4.22/config, WiFi 2.4GHz","Видеоняня TypedData + audioplayers BytesSource"],
  },
  {
    title: "SREDA",
    subtitle: "Corporate Jira-агрегатор / Тайм-трекер",
    links: ["https://www.skolopendra.com"],
    role: "Senior Flutter Developer",
    stack: ["Flutter","GetIt","MobX","Dio","Hive","Clean Architecture"],
    highlights: ["Календарь 2016 ячеек (5-мин сетка), drag&drop, кластеризация","Workflow Jira Sprint/Backlog, пагинация","6 платформ, 39 эндпоинтов, 60 FPS при 100+ событиях"],
  },
]

export const petProjects: Project[] = [
  { title: "RealTimeTranslator", subtitle: "Локальный перевод речи (Rust, eframe/egui, 6 crates)", role: "Pet • Rust", stack: ["Rust","Whisper","NLLB","TTS","WASAPI","egui"], highlights: ["Микрофон/системный звук → ASR → перевод → TTS офлайн","Многопоточный аудио-пайплайн, ONNX/llama.cpp"] },
  { title: "RP Chat", subtitle: "Ролевой чат с ИИ-персонажами (Rust + egui)", role: "Pet • Rust", stack: ["Rust","SQLite","llama.cpp","SD.cpp","egui"], highlights: ["Скачка GGUF моделей в 1 клик, офлайн","Генерация изображений из диалога, GPU CUDA/Vulkan"] },
  { title: "VideoDubber", subtitle: "Офлайн дубляж видео (Python + Rust)", role: "Pet • Fullstack", stack: ["Python","FastAPI","FFmpeg","Whisper","NLLB","Rust/egui"], highlights: ["Пайплайн FFmpeg → Whisper → NLLB → Piper/Coqui → MP4","REST + WebSocket прогресс, менеджер моделей"] },
  { title: "Unit Economics Calculator", subtitle: "Расчет юнит-экономики WB/Ozon", links: ["https://github.com/Serchyk/unit-calculator"], role: "Fullstack", stack: ["NestJS","PostgreSQL","SvelteKit","Tailwind"], highlights: ["Парсинг по ссылке, маржа с комиссией/логистикой","История, Excel экспорт, SVG график"] },
  { title: "WB Tracker", subtitle: "Telegram-бот мониторинга цен", links: ["https://github.com/Serchyk/wb-tracker"], role: "Bot", stack: ["Bun","Elysia","Drizzle","grammY","cheerio"], highlights: ["Проверка каждые 30 мин, обход антибота 3 ступени","JWT admin API + Swagger, инлайн-кнопки"] },
  { title: "TON Wallet", subtitle: "Мини-кошелек TON Testnet", links: ["https://github.com/Serchyk/sergey-ton-wallet"], role: "Fullstack", stack: ["NestJS","Prisma","Kafka","Flutter Web","TON V4"], highlights: ["V4 мнемоника 24 слова, idempotency","Outbox + Toncenter/Chainstack"] },
  { title: "AuctionHub", subtitle: "Платформа онлайн-аукционов (Go + React + Telegram)", links: ["https://github.com/Serchyk/AuctionHub"], role: "Architect", stack: ["Go","Gin","React","Vite","grammY","Docker"], highlights: ["3 типа аукционов (fixed/dutch/english), резервы баланса","WebSocket live ставки, Swagger, CI"] },
  { title: "ResumeApp", subtitle: "Цифровая визитка (NestJS + Flutter Web)", links: ["https://github.com/Serchyk/ResumeApp"], role: "Fullstack", stack: ["NestJS","GraphQL","Prisma","Flutter Web"], highlights: ["Apollo Sandbox, сидинг, Docker Compose + nginx"] },
]

export const skills = {
  groups: [
    { name: "Flutter / Dart", items: ["BLoC","Riverpod","GetIt","Isolates","Async/Await","Custom Paint","Animations","Wear OS","Tablets"], color: "violet" },
    { name: "Нативная интеграция", items: ["Platform Channels","Pigeon","JNI (Android)","Objective-C/Swift","FFI C/C++/Rust","Texture Widget"], color: "fuchsia" },
    { name: "Сети и данные", items: ["REST","gRPC","WebSockets","SQLite","Hive","SharedPreferences","Firebase Auth/Firestore","WebRTC/SIP"], color: "blue" },
    { name: "Backend Go (2 года)", items: ["Gin","Echo","gRPC","PostgreSQL","Redis","NATS/Kafka","Docker","Kubernetes базово","CI/CD"], color: "emerald" },
    { name: "AI / Mobile", items: ["TFLite/ONNX","Ollama (локальные LLM)","OpenCV"], color: "amber" },
    { name: "Процессы", items: ["Team Lead до 3 чел","Code Review","Agile/Scrum","Спринты","Наставничество"], color: "cyan" },
    { name: "Дополнительно", items: ["C#","Kotlin","Java","Python","Golang","React Native","TypeScript","JavaScript","Git","Unity"], color: "zinc" },
  ] as const
}

export const education = [
  { year: "2018", place: "Тольяттинский Индустриально-Педагогический Колледж", spec: "Компьютерные системы и комплексы", type: "Среднее специальное" },
  { year: "2016", place: "Тольяттинский Индустриально-Педагогический Колледж", spec: "Графический дизайн", type: "Повышение квалификации, курсы" },
]
