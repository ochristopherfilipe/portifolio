/* ============================================
   CHRISTOPHER SANTOS — PORTFOLIO (Landing Page)
   main.js — All data preserved, new rendering
   ============================================ */

/* ===================================================================
   CONSTANTS (ALL PRESERVED FROM ORIGINAL)
   =================================================================== */

const GITHUB_PROFILE_URL = 'https://github.com/ochristopherfilipe';
const AB_TESTING_REPO_URL = 'https://github.com/ochristopherfilipe/teste-A-B';
const CHURN_NOTEBOOK_URL = 'https://github.com/ochristopherfilipe/chance-de-cancelamento';
const SAGUI_TRANSLATOR_REPO_URL = 'https://github.com/ochristopherfilipe/tradutor-sagui-humano';
const VIRTUAL_INSTRUMENT_REPO_URL = 'https://github.com/ochristopherfilipe/virtual-instrument-cv';
const MANAUS_MOTORS_REPO_URL = 'https://github.com/ochristopherfilipe/filiais-manaus-car';
const FINTECH_SQL_REPO_URL = 'https://github.com/ochristopherfilipe/fintech-analytics-portfolio';
const ESTUDAE_REPO_URL = 'https://github.com/ochristopherfilipe/estudae';
const LINKEDIN_PROFILE_URL = 'https://www.linkedin.com/in/christopherfilipe';
const CONTACT_EMAIL = 'ochristopherfilipe@gmail.com';
const CONTACT_WHATSAPP = '+55 47 99728-7223';
const CONTACT_WHATSAPP_URL = 'https://wa.me/5547997287223';
const CONTACT_LOCATION = {
  'pt-BR': 'Brasil',
  en: 'Brazil',
};
const RESUME_PDF_PATH = 'assets/docs/CV-Christopher.pdf';
const RESUME_DOC_URL = 'https://docs.google.com/document/d/e/2PACX-1vSIcU_nHm5l1rDQJQQQYlEhA5BBLg7eA23e85hgKdQKudJZzsOEML7LzfoxGupsGvybM7r79YYU71L7/pub';
const LANGUAGE_STORAGE_KEY = 'portfolio-language';
const PROFILE_IMAGE_PATH = 'assets/images/perfil.png?v=20260324-1';
const ABOUT_IMAGE_PATH = 'assets/images/sobre-mim.png?v=20260811';
const CONTACT_IMAGE_PATH = 'assets/images/contato.png?v=20260811';
const AB_TESTING_CARD_IMAGE = 'assets/images/teste-a-b.png?v=20260811';
const SAGUI_CARD_IMAGE = 'assets/images/sagui.png?v=20260811';
const VIRTUAL_INSTRUMENT_CARD_IMAGE = 'assets/images/instrumento-cv.png?v=20260811';

/* ===================================================================
   SVG ICONS (kept + new)
   =================================================================== */

const WHATSAPP_ICON = `
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path fill="currentColor" d="M19.05 4.94A9.77 9.77 0 0 0 12.09 2c-5.44 0-9.86 4.42-9.86 9.86 0 1.74.46 3.44 1.32 4.94L2 22l5.37-1.41a9.86 9.86 0 0 0 4.72 1.21h.01c5.44 0 9.86-4.42 9.86-9.86 0-2.63-1.02-5.1-2.91-7m-6.96 15.19h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.19.84.85-3.11-.2-.32a8.16 8.16 0 0 1-1.26-4.36c0-4.5 3.66-8.17 8.17-8.17 2.18 0 4.24.85 5.78 2.39a8.12 8.12 0 0 1 2.39 5.79c0 4.5-3.67 8.17-8.17 8.17m4.48-6.12c-.25-.13-1.48-.73-1.7-.81-.23-.08-.39-.13-.56.12s-.65.81-.8.97c-.15.17-.29.19-.54.06a6.7 6.7 0 0 1-1.98-1.22 7.4 7.4 0 0 1-1.37-1.7c-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.47-.4-.41-.56-.42h-.47c-.17 0-.43.06-.65.31-.23.25-.86.84-.86 2.05 0 1.22.88 2.39 1 2.55.13.17 1.72 2.63 4.16 3.68.58.25 1.04.4 1.39.51.58.18 1.1.15 1.52.09.46-.07 1.48-.61 1.69-1.2.21-.59.21-1.1.15-1.21-.06-.1-.23-.17-.48-.29"/>
  </svg>
`;

const GITHUB_ICON = `
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.97.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.14 1.17a10.9 10.9 0 0 1 5.72 0c2.18-1.48 3.14-1.17 3.14-1.17.62 1.59.23 2.76.11 3.05.73.8 1.18 1.82 1.18 3.07 0 4.4-2.68 5.37-5.24 5.66.41.36.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.13 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5"/>
  </svg>
`;

/* Line-art SVG icons for services */
const SERVICE_ICONS = {
  datascience: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>`,
  dashboards: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`,
  automacao: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`,
  sistemas: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16,18 22,12 16,6"/><polyline points="8,6 2,12 8,18"/></svg>`,
};

/* Line-art SVG icons for process steps */
const PROCESS_ICONS = {
  discover: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
  analyze: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>`,
  model: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16,18 22,12 16,6"/><polyline points="8,6 2,12 8,18"/></svg>`,
  deliver: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 11 13"/><path d="M22 2l-7 20-4-9-9-4z"/></svg>`,
};

/* ===================================================================
   ABOUT STORY (PRESERVED FROM ORIGINAL)
   =================================================================== */

const ABOUT_STORY = {
  'pt-BR': `
    <div class="about-story">
      <p class="about-story__lead"><strong>Programador e Analista de Dados</strong> com mais de 5 anos resolvendo problemas reais com código, dados e automação. Construo sistemas completos do zero — desde a análise exploratória até o deploy em produção.</p>
      <p>No dia a dia, trabalho com Python, SQL, PostgreSQL, Power BI, sistemas em nuvem e engenharia moderna de IA. Tenho experiência prática com pipelines de dados, dashboards executivos, APIs REST (FastAPI/Django), automações com N8N e soluções de IA com LLMs, RAG e LangChain.</p>
      
      <div class="about-highlights">
        <h4 class="about-highlights__title">Resultados de Impacto Entregues:</h4>
        <ul class="about-highlights__list">
          <li><strong>Identifiquei inconsistências de R$ 20M</strong> em dados de estoque.</li>
          <li><strong>Reduzi R$ 300 mil em custos operacionais</strong> e logística otimizando planejamentos com Python e análise de dados.</li>
          <li><strong>Construí um CRM completo</strong> com Python, PHP, PostgreSQL e IA integrada para gestão de +2.000 pessoas.</li>
          <li><strong>Automatizei processos operacionais</strong> que consumiam horas manuais, cortando 60% do tempo de execução.</li>
        </ul>
      </div>

      <p>Também construo ferramentas do zero quando não encontro o que preciso. Quer gerar insights estratégicos com dados? Vamos conversar!</p>
    </div>
  `,
  en: `
    <div class="about-story">
      <p class="about-story__lead"><strong>Programmer and Data Analyst</strong> with 5+ years of experience solving real-world business problems using code, data, and automation. I build complete end-to-end systems — from exploratory analysis to production deployment.</p>
      <p>Daily stack includes Python, SQL, PostgreSQL, Power BI, cloud infrastructure, and modern AI engineering. Hands-on experience with data pipelines, executive dashboards, REST APIs (FastAPI/Django), workflow automations (N8N), and AI solutions powered by LLMs, RAG, and LangChain.</p>
      
      <div class="about-highlights">
        <h4 class="about-highlights__title">Key Delivered Results:</h4>
        <ul class="about-highlights__list">
          <li><strong>Identified $4M+ (R$ 20M)</strong> in inventory data discrepancies.</li>
          <li><strong>Saved $60k+ (R$ 300k)</strong> in operational and logistics costs by optimizing planning with Python and analytics.</li>
          <li><strong>Built a full-stack custom CRM</strong> using Python, PHP, PostgreSQL, and integrated AI to manage 2,000+ people.</li>
          <li><strong>Automated repetitive manual workflows</strong>, reducing operational execution time by 60%.</li>
        </ul>
      </div>

      <p>I also build custom tools from scratch whenever off-the-shelf software falls short. Looking to unlock data-driven insights? Let's connect!</p>
    </div>
  `,
};

/* ===================================================================
   UI TEXT (EXTENDED — original keys preserved + new landing page keys)
   =================================================================== */

const UI_TEXT = {
  'pt-BR': {
    // Original keys (preserved for modal compatibility)
    pageTitle: 'Christopher Santos | Portfólio',
    metaDescription: 'Portfólio de Christopher Santos — Ciência de Dados, Dashboards, SQL, Automação, IA e Sistemas.',
    disclaimer: 'Todos os dados usados são exclusivamente para fins de demonstração, garantindo total privacidade e conformidade ética.',
    projectAction: 'Ver projeto',
    linkSoon: 'Link em breve',
    contactCategory: 'Contato',
    contactTitle: 'Entre em contato',
    emailLabel: 'E-mail',
    locationLabel: 'Localização',
    contactWhatsApp: 'WhatsApp',
    contactQuickHeading: 'Meus contatos',
    contactIntro: 'Fale comigo pelos canais abaixo.',
    contactGitHubAction: 'Abrir GitHub',
    contactWhatsAppAction: 'Abrir WhatsApp',
    aboutCategory: 'Sobre',
    aboutDescription: ABOUT_STORY['pt-BR'],
    aboutTags: ['Python', 'SQL', 'PostgreSQL', 'Power BI', 'AWS', 'LangChain', 'Databricks', 'Microsoft Fabric'],
    aboutAction: 'GitHub',
    resumeCategory: 'Currículo',
    resumeDescription: 'Escolha como deseja acessar o currículo:<br><br><strong>Baixar PDF</strong> para salvar uma cópia no dispositivo, ou <strong>abrir online</strong> para visualizar a versão no Google Docs.',
    resumeTags: ['Python', 'Dashboards', 'SQL', 'JavaScript', 'Machine Learning', 'Automação', 'IA'],
    resumeDownload: 'Baixar PDF',
    resumeOnline: 'Abrir online',

    // New landing page keys
    navRole: 'ANALISTA DE DADOS',
    navProjects: 'Projetos',
    navServices: 'Serviços',
    navAbout: 'Sobre',
    navContact: 'Contato',
    navTalk: 'Vamos Conversar',
    heroEyebrow: 'CIÊNCIA DE DADOS & ANALYTICS',
    heroTitle: 'Transformo dados em <em>insights</em> que impulsionam decisões inteligentes.',
    heroSubtitle: 'Analista de Dados com experiência em Python, SQL, Machine Learning e visualização de dados. Criando soluções baseadas em dados para problemas complexos.',
    heroCTAProjects: 'Ver Projetos',
    heroCTAContact: 'Vamos Conversar',
    projectsEyebrow: 'PROJETOS SELECIONADOS',
    projectsTitle: 'Projetos em Destaque',
    filterAll: 'Todos',
    servicesEyebrow: 'O QUE EU FAÇO',
    servicesTitle: 'Serviços',
    aboutEyebrow: 'SOBRE MIM',
    aboutResumeLabel: 'Currículo',
    processEyebrow: 'MEU PROCESSO',
    processTitle: 'Como Eu Trabalho',
    contactEyebrow: 'VAMOS CRIAR ALGO JUNTOS',
    contactHeading: 'Tem um projeto em mente?<br>Adoraria conversar.',
    contactCTA: 'Vamos Conversar',
    contactEmailLabel: 'Email',
    contactLocationLabel: 'Localização',
    contactLocationValue: 'Brasil',
    footerRole: 'ANALISTA DE DADOS',
    footerNavHeading: 'NAVEGAÇÃO',
    footerSocialHeading: 'REDES',
    footerRights: '© 2024 Christopher Santos. Todos os direitos reservados.',
  },
  en: {
    // Original keys (preserved for modal compatibility)
    pageTitle: 'Christopher Santos | Portfolio',
    metaDescription: 'Christopher Santos portfolio — Data Science, Dashboards, SQL, Automation, AI and Systems.',
    disclaimer: 'All data used is strictly for demonstration purposes, ensuring privacy and ethical compliance.',
    projectAction: 'View project',
    linkSoon: 'Link soon',
    contactCategory: 'Contact',
    contactTitle: 'Get in touch',
    emailLabel: 'Email',
    locationLabel: 'Location',
    contactWhatsApp: 'WhatsApp',
    contactQuickHeading: 'My contacts',
    contactIntro: 'Reach me through the channels below.',
    contactGitHubAction: 'Open GitHub',
    contactWhatsAppAction: 'Open WhatsApp',
    aboutCategory: 'About',
    aboutDescription: ABOUT_STORY.en,
    aboutTags: ['Python', 'Dashboards', 'SQL', 'JavaScript', 'Machine Learning', 'Automation'],
    aboutAction: 'GitHub',
    resumeCategory: 'Resume',
    resumeDescription: "Choose how you'd like to access the resume:<br><br><strong>Download the PDF</strong> to save a local copy, or <strong>open it online</strong> to view the Google Docs version.",
    resumeTags: ['Python', 'Dashboards', 'SQL', 'JavaScript', 'Machine Learning', 'Automation', 'AI'],
    resumeDownload: 'Download PDF',
    resumeOnline: 'Open online',

    // New landing page keys
    navRole: 'DATA ANALYST',
    navProjects: 'Projects',
    navServices: 'Services',
    navAbout: 'About',
    navContact: 'Contact',
    navTalk: "Let's Talk",
    heroEyebrow: 'DATA SCIENCE & ANALYTICS',
    heroTitle: 'I transform data into <em>insights</em> that drive intelligent decisions.',
    heroSubtitle: 'Data Analyst experienced in Python, SQL, Machine Learning and data visualization. Creating data-driven solutions for complex problems.',
    heroCTAProjects: 'View Projects',
    heroCTAContact: "Let's Talk",
    projectsEyebrow: 'SELECTED WORK',
    projectsTitle: 'Featured Projects',
    filterAll: 'All',
    servicesEyebrow: 'WHAT I DO',
    servicesTitle: 'Services',
    aboutEyebrow: 'ABOUT ME',
    aboutResumeLabel: 'Resume',
    processEyebrow: 'MY PROCESS',
    processTitle: 'How I Work',
    contactEyebrow: "LET'S CREATE SOMETHING GREAT",
    contactHeading: "Have a project in mind?<br>I'd love to hear about it.",
    contactCTA: "Let's Talk",
    contactEmailLabel: 'Email',
    contactLocationLabel: 'Location',
    contactLocationValue: 'Brazil',
    footerRole: 'DATA ANALYST',
    footerNavHeading: 'NAVIGATION',
    footerSocialHeading: 'FOLLOW',
    footerRights: '© 2024 Christopher Santos. All rights reserved.',
  },
};

/* ===================================================================
   CATEGORIES (PRESERVED FROM ORIGINAL)
   =================================================================== */

const CATEGORIES = [
  { id: 'home',        icon: 'assets/icons/home.png',              label: { 'pt-BR': 'Home',               en: 'Home' } },
  { id: 'datascience', icon: 'assets/icons/graph.png',             label: { 'pt-BR': 'Ciência de Dados',   en: 'Data Science' } },
  { id: 'dashboards',  icon: 'assets/images/dashboard.png',        label: { 'pt-BR': 'Dashboards & SQL',   en: 'Dashboards & SQL' } },
  { id: 'automacao',   icon: 'assets/icons/robotic.png',           label: { 'pt-BR': 'Automação e I.A.',   en: 'Automation & AI' } },
  { id: 'sistemas',    icon: 'assets/icons/cloud-server.png',      label: { 'pt-BR': 'Sistemas',           en: 'Systems' } },
  { id: 'curriculo',   icon: 'assets/icons/docs.png',              label: { 'pt-BR': 'Currículo',          en: 'Resume' } },
  { id: 'contato',     icon: 'assets/icons/text.png',              label: { 'pt-BR': 'Contato',            en: 'Contact' } },
  { id: 'info',        icon: 'assets/icons/info.png',              label: { 'pt-BR': 'Sobre',              en: 'About' } },
];

/* ===================================================================
   PROJECTS (PRESERVED FROM ORIGINAL)
   =================================================================== */

const PROJECTS = [
  {
    id: 100,
    category: 'home',
    title: { 'pt-BR': 'Meu LinkedIn', en: 'My LinkedIn' },
    emoji: '👤',
    description: {
      'pt-BR': 'Clique para acessar meu perfil profissional no LinkedIn.',
      en: 'Click to open my professional LinkedIn profile.',
    },
    tags: { 'pt-BR': ['LinkedIn', 'Networking', 'Contato'], en: ['LinkedIn', 'Networking', 'Contact'] },
    actionLabel: { 'pt-BR': 'Abrir LinkedIn', en: 'Open LinkedIn' },
    link: LINKEDIN_PROFILE_URL,
    image: PROFILE_IMAGE_PATH,
    cardClickAction: 'link',
  },
  {
    id: 101,
    category: 'home',
    title: { 'pt-BR': 'Sobre mim', en: 'About me' },
    emoji: '🧠',
    description: ABOUT_STORY,
    tags: { 'pt-BR': ['Python', 'SQL', 'Dashboards', 'Visualização de Dados'], en: ['Python', 'SQL', 'Dashboards', 'Data Visualization'] },
    link: '#',
    image: ABOUT_IMAGE_PATH,
    richDescription: true,
    hideMissingLinkAction: true,
    modalVariant: 'about-story',
    modalCategoryOverride: { 'pt-BR': 'Perfil', en: 'Profile' },
  },
  {
    id: 102,
    category: 'home',
    title: { 'pt-BR': 'Mensagem', en: 'Message' },
    emoji: '🤝',
    description: {
      'pt-BR': 'SERÁ UM PRAZER <strong>TRABALHAR</strong><br>COM TODOS VOCÊS!',
      en: 'IT WILL BE A PLEASURE TO <strong>WORK</strong><br>WITH ALL OF YOU!',
    },
    tags: { 'pt-BR': [], en: [] },
    link: '#',
    image: CONTACT_IMAGE_PATH,
    richDescription: true,
    hideMissingLinkAction: true,
    cardClickAction: 'contact',
  },
  {
    id: 13,
    category: 'datascience',
    title: { 'pt-BR': 'Tradutor Sagui / Humano', en: 'Marmoset-to-Human Translator' },
    emoji: '🐵',
    description: {
      'pt-BR': 'Projeto de bioacústica computacional que classifica vocalizações de saguis, organiza padrões sonoros em mapas 3D e simula tradução em tempo real via arquivo WAV ou microfone, combinando super-features, LDA e SVM para interpretar famílias biológicas de chamadas.',
      en: 'Computational bioacoustics project that classifies marmoset vocalizations, organizes sound patterns in 3D maps, and simulates real-time translation from WAV uploads or microphone input, combining super-features, LDA, and SVM to interpret biological call families.',
    },
    tags: { 'pt-BR': ['Python', 'Bioacústica', 'Librosa', 'SVM', 'Plotly'], en: ['Python', 'Bioacoustics', 'Librosa', 'SVM', 'Plotly'] },
    actionLabel: { 'pt-BR': 'Ver repositório', en: 'View repository' },
    link: SAGUI_TRANSLATOR_REPO_URL,
    image: SAGUI_CARD_IMAGE,
  },
  {
    id: 2,
    category: 'datascience',
    title: { 'pt-BR': 'Teste A/B em Marketing', en: 'Marketing A/B Test Analysis' },
    emoji: '🧪',
    description: {
      'pt-BR': 'Análise de teste A/B com 588 mil registros para comparar as taxas de conversão entre os grupos ad e psa, combinando exploração de dados, teste t, ANOVA e visualizações por dia, hora e intensidade de exposição aos anúncios.',
      en: 'A/B testing analysis over 588k records comparing conversion rates between the ad and psa groups, combining exploratory analysis, t-test, ANOVA, and visualizations by day, hour, and ad exposure intensity.',
    },
    tags: { 'pt-BR': ['Python', 'Pandas', 'SciPy', 'Seaborn', 'Teste A/B'], en: ['Python', 'Pandas', 'SciPy', 'Seaborn', 'A/B Testing'] },
    actionLabel: { 'pt-BR': 'Ver repositório', en: 'View repository' },
    link: AB_TESTING_REPO_URL,
    image: AB_TESTING_CARD_IMAGE,
  },
  {
    id: 3,
    category: 'datascience',
    title: { 'pt-BR': 'Chance de Cancelamento', en: 'Customer Churn Risk' },
    emoji: '📉',
    description: {
      'pt-BR': 'Notebook em Python para estimar a chance de cancelamento de clientes com base em dados históricos, incluindo exploração de dados, preparação das variáveis, modelagem de classificação e avaliação dos resultados para apoiar ações de retenção.',
      en: 'Python notebook to estimate customer churn risk from historical data, including data exploration, feature preparation, classification modeling, and evaluation to support retention actions.',
    },
    tags: { 'pt-BR': ['Python', 'Jupyter Notebook', 'Classificação', 'Análise de Dados'], en: ['Python', 'Jupyter Notebook', 'Classification', 'Data Analysis'] },
    actionLabel: { 'pt-BR': 'Ver notebook', en: 'View notebook' },
    link: CHURN_NOTEBOOK_URL,
    image: 'assets/images/churn3.png?v=20260811',
  },
  {
    id: 15,
    category: 'dashboards',
    title: { 'pt-BR': 'Fintech Analytics Portfolio - PostgreSQL', en: 'Fintech Analytics Portfolio - PostgreSQL' },
    emoji: '🗄️',
    description: {
      'pt-BR': 'Projeto de SQL analítico que simula a operação de uma fintech, com modelagem relacional, carga de dados fictícios e consultas para detecção de fraude, conciliação de saldo diário e identificação de churn em contas inativas.',
      en: 'Analytical SQL project that simulates a fintech operation, with relational modeling, fictional data loading, and queries for fraud detection, daily balance reconciliation, and churn identification in inactive accounts.',
    },
    tags: { 'pt-BR': ['SQL', 'PostgreSQL', 'Fintech', 'CTEs', 'Window Functions'], en: ['SQL', 'PostgreSQL', 'Fintech', 'CTEs', 'Window Functions'] },
    actionLabel: { 'pt-BR': 'Ver repositório', en: 'View repository' },
    link: FINTECH_SQL_REPO_URL,
    image: 'assets/images/sql.png?v=20260811',
  },
  {
    id: 14,
    category: 'dashboards',
    title: { 'pt-BR': 'Manaus Motors - Analytics Dashboard', en: 'Manaus Motors - Analytics Dashboard' },
    emoji: '🏎️',
    description: {
      'pt-BR': 'Dashboard executivo desenvolvido em Streamlit para uma concessionária premium de Manaus, com visualização geoespacial em 3D, acompanhamento do mix de veículos elétricos e KPIs de receita, volume vendido e ROI em tempo real.',
      en: 'Executive dashboard built with Streamlit for a premium car dealership in Manaus, featuring 3D geospatial visualization, electric-vehicle mix tracking, and real-time revenue, sales volume, and ROI KPIs.',
    },
    tags: { 'pt-BR': ['Dashboards', 'Streamlit', 'PyDeck', 'Plotly', 'Geoanálise'], en: ['Dashboards', 'Streamlit', 'PyDeck', 'Plotly', 'Geoanalytics'] },
    actionLabel: { 'pt-BR': 'Ver repositório', en: 'View repository' },
    link: MANAUS_MOTORS_REPO_URL,
    image: 'assets/images/dash-car.png?v=20260811',
  },
  {
    id: 12,
    category: 'automacao',
    title: { 'pt-BR': 'Virtual Instrument CV', en: 'Virtual Instrument CV' },
    emoji: '🎹',
    description: {
      'pt-BR': 'Instrumento musical touchless construído em Python que usa OpenCV, MediaPipe e DSP para reconhecer gestos das duas mãos pela webcam, converter acordes e controles expressivos em eventos MIDI e acionar sintetizadores em tempo real. O projeto combina filtragem 1-Euro, lógica geométrica invariável à rotação e um arpejador assíncrono para reduzir jitter e manter a resposta musical estável.',
      en: 'Touchless musical instrument built in Python that uses OpenCV, MediaPipe, and DSP to recognize two-hand gestures from the webcam, translate chords and expressive controls into MIDI events, and drive synthesizers in real time. The project combines 1-Euro filtering, rotation-invariant geometric logic, and an asynchronous arpeggiator to reduce jitter and keep the musical response stable.',
    },
    tags: { 'pt-BR': ['Python', 'OpenCV', 'MediaPipe', 'MIDI', 'DSP'], en: ['Python', 'OpenCV', 'MediaPipe', 'MIDI', 'DSP'] },
    actionLabel: { 'pt-BR': 'Ver repositório', en: 'View repository' },
    link: VIRTUAL_INSTRUMENT_REPO_URL,
    image: VIRTUAL_INSTRUMENT_CARD_IMAGE,
  },
  {
    id: 16,
    category: 'sistemas',
    title: { 'pt-BR': 'Estudaê', en: 'Estudae' },
    emoji: '📚',
    description: {
      'pt-BR': 'Aplicação web para acompanhamento de estudos com organização de matérias e assuntos, cronômetro ativo, metas e histórico de sessões em um painel único.',
      en: 'Web app for study tracking with subjects and topics organization, active timer, goals, and session history in a single dashboard.',
    },
    tags: { 'pt-BR': ['PHP', 'PostgreSQL', 'JavaScript', 'Cypress'], en: ['PHP', 'PostgreSQL', 'JavaScript', 'Cypress'] },
    actionLabel: { 'pt-BR': 'Ver repositório', en: 'View repository' },
    link: ESTUDAE_REPO_URL,
    image: 'assets/images/estudae.png?v=20260811',
  },
];

/* ===================================================================
   NEW DATA — SERVICES & PROCESS
   =================================================================== */

const SERVICES = [
  {
    id: 'datascience',
    icon: SERVICE_ICONS.datascience,
    title: { 'pt-BR': 'Ciência de Dados', en: 'Data Science' },
    description: {
      'pt-BR': 'Análise exploratória, modelagem preditiva e descoberta de padrões ocultos nos dados para gerar valor.',
      en: 'Exploratory analysis, predictive modeling and hidden pattern discovery in data to generate value.',
    },
  },
  {
    id: 'dashboards',
    icon: SERVICE_ICONS.dashboards,
    title: { 'pt-BR': 'Dashboards & SQL', en: 'Dashboards & SQL' },
    description: {
      'pt-BR': 'Dashboards interativos e consultas analíticas avançadas para visualização e tomada de decisão baseada em dados.',
      en: 'Interactive dashboards and advanced analytical queries for data visualization and data-driven decision making.',
    },
  },
  {
    id: 'automacao',
    icon: SERVICE_ICONS.automacao,
    title: { 'pt-BR': 'Automação e I.A.', en: 'Automation & AI' },
    description: {
      'pt-BR': 'Computer vision, machine learning e automação inteligente de processos com Python.',
      en: 'Computer vision, machine learning and intelligent process automation with Python.',
    },
  },
  {
    id: 'sistemas',
    icon: SERVICE_ICONS.sistemas,
    title: { 'pt-BR': 'Sistemas', en: 'Systems' },
    description: {
      'pt-BR': 'Desenvolvimento web full-stack, arquitetura de banco de dados e aplicações robustas e escaláveis.',
      en: 'Full-stack web development, database architecture and robust, scalable applications.',
    },
  },
];

const PROCESS_STEPS = [
  {
    number: '01',
    iconKey: 'discover',
    title: { 'pt-BR': 'Descobrir', en: 'Discover' },
    description: {
      'pt-BR': 'Entendo os dados, objetivos e desafios do projeto.',
      en: 'I understand the data, objectives and project challenges.',
    },
  },
  {
    number: '02',
    iconKey: 'analyze',
    title: { 'pt-BR': 'Analisar', en: 'Analyze' },
    description: {
      'pt-BR': 'Exploro, limpo e preparo os dados para análise profunda.',
      en: 'I explore, clean and prepare data for deep analysis.',
    },
  },
  {
    number: '03',
    iconKey: 'model',
    title: { 'pt-BR': 'Desenvolver', en: 'Develop' },
    description: {
      'pt-BR': 'Aplico técnicas estatísticas, ML e código limpo.',
      en: 'I apply statistical techniques, ML and clean code.',
    },
  },
  {
    number: '04',
    iconKey: 'deliver',
    title: { 'pt-BR': 'Entregar', en: 'Deliver' },
    description: {
      'pt-BR': 'Apresento dashboards, relatórios e insights acionáveis.',
      en: 'I deliver dashboards, reports and actionable insights.',
    },
  },
];

/* ===================================================================
   STATE
   =================================================================== */

let currentLanguage = normalizeLanguage(window.localStorage.getItem(LANGUAGE_STORAGE_KEY));
let activeFilter = 'all';
let currentModal = null;

/* ===================================================================
   DOM REFERENCES
   =================================================================== */

// Navbar
const $navbar = document.getElementById('navbar');
const $navbarNav = document.getElementById('navbar-nav');
const $navbarRole = document.getElementById('navbar-role');
const $btnLanguage = document.getElementById('btn-language');
const $btnLanguageMobile = document.getElementById('btn-language-mobile');
const $btnTalkLabel = document.getElementById('btn-talk-label');
const $hamburger = document.getElementById('hamburger');
const $mobileMenu = document.getElementById('mobile-menu');
const $mobileNav = document.getElementById('mobile-nav');

// Hero
const $heroEyebrow = document.getElementById('hero-eyebrow');
const $heroTitle = document.getElementById('hero-title');
const $heroSubtitle = document.getElementById('hero-subtitle');
const $heroCTAProjects = document.getElementById('hero-cta-projects');
const $heroCTAContact = document.getElementById('hero-cta-contact');

// Projects
const $projectsEyebrow = document.getElementById('projects-eyebrow');
const $projectsTitle = document.getElementById('projects-title');
const $projectsFilters = document.getElementById('projects-filters');
const $projectsGrid = document.getElementById('projects-grid');

// Services
const $servicesEyebrow = document.getElementById('services-eyebrow');
const $servicesTitle = document.getElementById('services-title');
const $servicesGrid = document.getElementById('services-grid');

// About
const $aboutEyebrow = document.getElementById('about-eyebrow');
const $aboutTitle = document.getElementById('about-title');
const $aboutText = document.getElementById('about-text');
const $aboutTags = document.getElementById('about-tags');
const $aboutGithub = document.getElementById('about-github');
const $aboutGithubLabel = document.getElementById('about-github-label');
const $aboutResume = document.getElementById('about-resume');
const $aboutResumeLabel = document.getElementById('about-resume-label');

// Process
const $processEyebrow = document.getElementById('process-eyebrow');
const $processTitle = document.getElementById('process-title');
const $processGrid = document.getElementById('process-grid');

// Contact
const $contactEyebrow = document.getElementById('contact-eyebrow');
const $contactHeading = document.getElementById('contact-heading');
const $contactCTA = document.getElementById('contact-cta');
const $contactCTALabel = document.getElementById('contact-cta-label');
const $contactEmailLabel = document.getElementById('contact-email-label');
const $contactLocationLabel = document.getElementById('contact-location-label');
const $contactLocation = document.getElementById('contact-location');

// Footer
const $footerRole = document.getElementById('footer-role');
const $footerNavHeading = document.getElementById('footer-nav-heading');
const $footerSocialHeading = document.getElementById('footer-social-heading');
const $footerNavLinks = document.getElementById('footer-nav-links');
const $footerRights = document.getElementById('footer-rights');
const $disclaimerText = document.getElementById('disclaimer-text');

// Modal
const $modalOverlay = document.getElementById('modal-overlay');
const $modalDialog = document.querySelector('.modal-dialog');
const $modalClose = document.getElementById('modal-close');
const $modalCategory = document.getElementById('modal-category');
const $modalTitle = document.getElementById('modal-title');
const $modalThumb = document.getElementById('modal-thumb');
const $modalDesc = document.getElementById('modal-description');
const $modalTags = document.getElementById('modal-tags');
const $modalActions = document.getElementById('modal-actions');

// Meta
const $pageDescription = document.getElementById('page-description');

/* ===================================================================
   HELPER FUNCTIONS (PRESERVED)
   =================================================================== */

function normalizeLanguage(language) {
  return language === 'en' ? 'en' : 'pt-BR';
}

function getText() {
  return UI_TEXT[currentLanguage];
}

function getLocalized(value) {
  if (value && typeof value === 'object' && !Array.isArray(value) && ('pt-BR' in value || 'en' in value)) {
    return value[currentLanguage] || value['pt-BR'] || value.en;
  }
  return value;
}

function getProjectById(projectId) {
  return PROJECTS.find(project => project.id === projectId);
}

/* ===================================================================
   MODAL HELPERS (PRESERVED)
   =================================================================== */

function setModalThumbContent(content) {
  $modalThumb.classList.remove('modal-thumb--hidden');
  $modalThumb.innerHTML = content;
}

function hideModalThumb() {
  $modalThumb.classList.add('modal-thumb--hidden');
  $modalThumb.innerHTML = '';
}

function setModalThumbVariant(variant = 'default') {
  $modalThumb.classList.toggle('modal-thumb--project', variant === 'project');
}

function setModalVariant(variant = 'default') {
  $modalDialog.classList.toggle('modal-dialog--about-story', variant === 'about-story');
}

function setModalLayoutVariant(variant = 'default') {
  $modalDialog.classList.toggle('modal-dialog--project', variant === 'project');
  $modalDialog.classList.toggle('modal-dialog--contact', variant === 'contact');
}

/* ===================================================================
   RENDERING — NAVBAR
   =================================================================== */

function renderNavLinks() {
  const text = getText();
  const navItems = [
    { href: '#projects', label: text.navProjects },
    { href: '#services', label: text.navServices },
    { href: '#about', label: text.navAbout },
    { href: '#contact', label: text.navContact },
  ];

  $navbarNav.innerHTML = navItems.map(item =>
    `<a href="${item.href}" class="navbar__link">${item.label}</a>`
  ).join('');

  $mobileNav.innerHTML = navItems.map(item =>
    `<a href="${item.href}" class="mobile-menu__link">${item.label}</a>`
  ).join('');

  // Close mobile menu on link click
  $mobileNav.querySelectorAll('.mobile-menu__link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

function renderFooterNav() {
  const text = getText();
  const navItems = [
    { href: '#projects', label: text.navProjects },
    { href: '#services', label: text.navServices },
    { href: '#about', label: text.navAbout },
    { href: '#contact', label: text.navContact },
  ];

  $footerNavLinks.innerHTML = navItems.map(item =>
    `<a href="${item.href}">${item.label}</a>`
  ).join('');
}

/* ===================================================================
   RENDERING — HERO
   =================================================================== */

function renderHero() {
  const text = getText();
  $heroEyebrow.textContent = text.heroEyebrow;
  $heroTitle.innerHTML = text.heroTitle;
  $heroSubtitle.textContent = text.heroSubtitle;
  $heroCTAProjects.querySelector('span:first-child').textContent = text.heroCTAProjects;
  $heroCTAContact.querySelector('span:first-child').textContent = text.heroCTAContact;
}

/* ===================================================================
   RENDERING — PROJECTS
   =================================================================== */

function getDisplayProjects() {
  // Exclude 'home' category (LinkedIn, About, Message are now in dedicated sections)
  const allProjects = PROJECTS.filter(p => p.category !== 'home');
  if (activeFilter === 'all') return allProjects;
  return allProjects.filter(p => p.category === activeFilter);
}

function renderProjectFilters() {
  const text = getText();
  const filterCategories = CATEGORIES.filter(c =>
    !['home', 'curriculo', 'contato', 'info'].includes(c.id)
  );

  const filters = [
    { id: 'all', label: text.filterAll },
    ...filterCategories.map(c => ({ id: c.id, label: getLocalized(c.label) })),
  ];

  $projectsFilters.innerHTML = filters.map(f =>
    `<button class="filter-btn ${f.id === activeFilter ? 'active' : ''}" data-filter="${f.id}">${f.label}</button>`
  ).join('');

  $projectsFilters.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.filter;
      renderProjectFilters();
      renderProjectCards();
    });
  });
}

function renderProjectCards() {
  const projects = getDisplayProjects();

  $projectsGrid.innerHTML = projects.map((project, index) => {
    const title = getLocalized(project.title);
    const category = CATEGORIES.find(c => c.id === project.category);
    const categoryLabel = category ? getLocalized(category.label) : '';

    return `
      <article class="project-card project-card--animate" data-project-id="${project.id}" style="animation-delay: ${index * 80}ms">
        <div class="project-card__image">
          ${project.image
            ? `<img src="${project.image}" alt="${title}" loading="lazy">`
            : `<span class="project-card__emoji">${project.emoji}</span>`
          }
        </div>
        <div class="project-card__body">
          <span class="project-card__category">${categoryLabel}</span>
          <h3 class="project-card__title">${title}</h3>
        </div>
      </article>
    `;
  }).join('');

  // Click listeners
  $projectsGrid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const projectId = parseInt(card.dataset.projectId, 10);
      const project = getProjectById(projectId);
      if (project) openProjectModal(project);
    });
  });
}

/* ===================================================================
   RENDERING — SERVICES
   =================================================================== */

function renderServices() {
  $servicesGrid.innerHTML = SERVICES.map((service, index) => {
    const title = getLocalized(service.title);
    const description = getLocalized(service.description);

    return `
      <div class="service-card reveal" style="transition-delay: ${index * 100}ms">
        <div class="service-card__icon">${service.icon}</div>
        <h3 class="service-card__title">${title}</h3>
        <p class="service-card__description">${description}</p>
      </div>
    `;
  }).join('');
}

/* ===================================================================
   RENDERING — ABOUT
   =================================================================== */

function renderAbout() {
  const text = getText();
  $aboutText.innerHTML = text.aboutDescription;
  $aboutTags.innerHTML = text.aboutTags.map(tag =>
    `<span class="about-tag">${tag}</span>`
  ).join('');
  $aboutGithub.href = GITHUB_PROFILE_URL;
  $aboutGithubLabel.textContent = text.aboutAction;
  $aboutResumeLabel.textContent = text.aboutResumeLabel;
}

/* ===================================================================
   RENDERING — PROCESS
   =================================================================== */

function renderProcess() {
  $processGrid.innerHTML = PROCESS_STEPS.map((step, index) => {
    const title = getLocalized(step.title);
    const description = getLocalized(step.description);
    const icon = PROCESS_ICONS[step.iconKey] || '';

    return `
      <div class="process-step reveal" style="transition-delay: ${index * 120}ms">
        <div class="process-step__number">${step.number}</div>
        <div class="process-step__icon">${icon}</div>
        <h3 class="process-step__title">${title}</h3>
        <p class="process-step__description">${description}</p>
      </div>
    `;
  }).join('');
}

/* ===================================================================
   MODAL FUNCTIONS (PRESERVED + ADAPTED)
   =================================================================== */

function openProjectModal(project) {
  const text = getText();
  const categoryData = CATEGORIES.find(category => category.id === project.category);
  const projectTitle = getLocalized(project.title);
  const projectDescription = getLocalized(project.description);
  const projectTags = getLocalized(project.tags);
  const actionLabel = project.actionLabel ? getLocalized(project.actionLabel) : text.projectAction;
  const modalCategory = project.modalCategoryOverride
    ? getLocalized(project.modalCategoryOverride)
    : (categoryData ? getLocalized(categoryData.label) : '');
  const modalVariant = project.modalVariant || 'default';

  currentModal = { type: 'project', projectId: project.id };
  setModalVariant(modalVariant);
  setModalLayoutVariant('project');
  setModalThumbVariant('project');
  $modalCategory.textContent = modalCategory;
  $modalTitle.textContent = projectTitle;

  if (modalVariant === 'about-story') {
    hideModalThumb();
  } else if (project.image) {
    setModalThumbContent(`
      <img class="modal-thumb__art" src="${project.image}" alt="${projectTitle}">
    `);
  } else {
    setModalThumbContent(`<span class="project-card__emoji" style="font-size:3rem;display:block;text-align:center;padding:40px">${project.emoji}</span>`);
  }

  if (project.richDescription) {
    $modalDesc.innerHTML = projectDescription;
  } else {
    $modalDesc.textContent = projectDescription;
  }

  $modalTags.innerHTML = projectTags.map(tag => `<span class="modal-tag">${tag}</span>`).join('');

  if (project.link && project.link !== '#') {
    $modalActions.innerHTML = `
      <a class="modal-btn modal-btn--primary" href="${project.link}" target="_blank" rel="noreferrer">${actionLabel}</a>
    `;
  } else if (project.hideMissingLinkAction) {
    $modalActions.innerHTML = '';
  } else {
    $modalActions.innerHTML = `
      <span class="modal-btn modal-btn--secondary" style="opacity:.5;cursor:default">${text.linkSoon}</span>
    `;
  }

  $modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openContactModal() {
  const text = getText();

  currentModal = { type: 'contact' };
  setModalVariant();
  setModalLayoutVariant('contact');
  setModalThumbVariant();
  $modalCategory.textContent = text.contactCategory;
  $modalTitle.textContent = text.contactTitle;
  setModalThumbContent(`<div class="modal-thumb__fill" style="background-image: url('${CONTACT_IMAGE_PATH}');" role="img" aria-label="${text.contactTitle}"></div>`);
  $modalDesc.innerHTML = `
    <div class="contact-panel">
      <section class="contact-section contact-section--quick">
        <div class="contact-section__header">
          <span class="contact-section__eyebrow">${text.contactQuickHeading}</span>
          <p class="contact-panel__intro">${text.contactIntro}</p>
        </div>
        <div class="contact-info-list">
          <div class="contact-info-item">
            <div class="contact-info-main">
              <strong>${text.emailLabel}</strong>
              <span>${CONTACT_EMAIL}</span>
            </div>
          </div>
          <div class="contact-info-item">
            <div class="contact-info-main">
              <strong>WhatsApp</strong>
              <span>${CONTACT_WHATSAPP}</span>
            </div>
            <a class="contact-info-action" href="${CONTACT_WHATSAPP_URL}" target="_blank" rel="noreferrer" aria-label="${text.contactWhatsAppAction}" title="${text.contactWhatsAppAction}">
              ${WHATSAPP_ICON}
            </a>
          </div>
          <div class="contact-info-item">
            <div class="contact-info-main">
              <strong>GitHub</strong>
              <span>@ochristopherfilipe</span>
            </div>
            <a class="contact-info-action" href="${GITHUB_PROFILE_URL}" target="_blank" rel="noreferrer" aria-label="${text.contactGitHubAction}" title="${text.contactGitHubAction}">
              ${GITHUB_ICON}
            </a>
          </div>
          <div class="contact-info-item contact-info-item--simple">
            <div class="contact-info-main">
              <span>${getLocalized(CONTACT_LOCATION)}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
  $modalTags.innerHTML = '';
  $modalActions.innerHTML = '';
  $modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openAboutModal() {
  const text = getText();

  currentModal = { type: 'about' };
  setModalVariant('about-story');
  setModalLayoutVariant();
  setModalThumbVariant();
  $modalCategory.textContent = text.aboutCategory;
  $modalTitle.textContent = 'Christopher Santos';
  setModalThumbContent(`<div class="modal-thumb__fill" style="background-image: url('${ABOUT_IMAGE_PATH}');" role="img" aria-label="${text.aboutCategory}"></div>`);
  $modalDesc.innerHTML = text.aboutDescription;
  $modalTags.innerHTML = text.aboutTags.map(tag => `<span class="modal-tag">${tag}</span>`).join('');
  $modalActions.innerHTML = `
    <a class="modal-btn modal-btn--primary" href="${GITHUB_PROFILE_URL}" target="_blank" rel="noreferrer">${text.aboutAction}</a>
  `;

  $modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openResumeModal() {
  const text = getText();

  currentModal = { type: 'resume' };
  setModalVariant();
  setModalLayoutVariant();
  setModalThumbVariant();
  $modalCategory.textContent = text.resumeCategory;
  $modalTitle.textContent = 'Christopher Santos';
  hideModalThumb();
  $modalDesc.innerHTML = text.resumeDescription || '';
  $modalTags.innerHTML = '';
  $modalActions.innerHTML = `
    <a class="modal-btn modal-btn--primary" href="${RESUME_PDF_PATH}" download="CV-Christopher.pdf">${text.resumeDownload}</a>
    <a class="modal-btn modal-btn--secondary" href="${RESUME_DOC_URL}" target="_blank" rel="noreferrer">${text.resumeOnline}</a>
  `;

  $modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function rerenderOpenModal() {
  if (!currentModal || !$modalOverlay.classList.contains('open')) return;

  if (currentModal.type === 'project') {
    const project = getProjectById(currentModal.projectId);
    if (project) openProjectModal(project);
    return;
  }
  if (currentModal.type === 'contact') { openContactModal(); return; }
  if (currentModal.type === 'about') { openAboutModal(); return; }
  if (currentModal.type === 'resume') { openResumeModal(); }
}

function closeModal() {
  currentModal = null;
  $modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

/* ===================================================================
   SCROLL & ANIMATIONS
   =================================================================== */

function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function handleNavbarScroll() {
  const scrolled = window.scrollY > 60;
  $navbar.classList.toggle('navbar--scrolled', scrolled);
}

/* ===================================================================
   MOBILE MENU
   =================================================================== */

function toggleMobileMenu() {
  const isOpen = $mobileMenu.classList.toggle('mobile-menu--open');
  $hamburger.classList.toggle('hamburger--open', isOpen);
  $hamburger.setAttribute('aria-expanded', String(isOpen));
  $mobileMenu.setAttribute('aria-hidden', String(!isOpen));

  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

function closeMobileMenu() {
  $mobileMenu.classList.remove('mobile-menu--open');
  $hamburger.classList.remove('hamburger--open');
  $hamburger.setAttribute('aria-expanded', 'false');
  $mobileMenu.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ===================================================================
   LANGUAGE
   =================================================================== */

function applyLanguage() {
  const text = getText();

  // Meta
  document.documentElement.lang = currentLanguage;
  document.title = text.pageTitle;
  if ($pageDescription) $pageDescription.setAttribute('content', text.metaDescription);

  // Navbar
  $navbarRole.textContent = text.navRole;
  $btnTalkLabel.textContent = text.navTalk;

  // Hero
  renderHero();

  // Projects
  $projectsEyebrow.textContent = text.projectsEyebrow;
  $projectsTitle.textContent = text.projectsTitle;
  renderProjectFilters();
  renderProjectCards();

  // Services
  $servicesEyebrow.textContent = text.servicesEyebrow;
  $servicesTitle.textContent = text.servicesTitle;
  renderServices();

  // About
  $aboutEyebrow.textContent = text.aboutEyebrow;
  renderAbout();

  // Process
  $processEyebrow.textContent = text.processEyebrow;
  $processTitle.textContent = text.processTitle;
  renderProcess();

  // Contact section
  $contactEyebrow.textContent = text.contactEyebrow;
  $contactHeading.innerHTML = text.contactHeading;
  $contactCTALabel.textContent = text.contactCTA;
  $contactEmailLabel.textContent = text.contactEmailLabel;
  $contactLocationLabel.textContent = text.contactLocationLabel;
  $contactLocation.textContent = text.contactLocationValue;

  // Footer
  $footerRole.textContent = text.footerRole;
  $footerNavHeading.textContent = text.footerNavHeading;
  $footerSocialHeading.textContent = text.footerSocialHeading;
  $footerRights.textContent = text.footerRights;
  $disclaimerText.textContent = text.disclaimer;

  // Nav links (both desktop and mobile)
  renderNavLinks();
  renderFooterNav();

  // Re-render open modal if language changed
  rerenderOpenModal();

  // Re-initialize scroll animations for newly rendered elements
  initScrollAnimations();
}

function toggleLanguage() {
  currentLanguage = currentLanguage === 'pt-BR' ? 'en' : 'pt-BR';
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
  applyLanguage();
}

/* ===================================================================
   EVENT LISTENERS
   =================================================================== */

// Modal
$modalClose.addEventListener('click', closeModal);
$modalOverlay.addEventListener('click', event => {
  if (event.target === $modalOverlay) closeModal();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    if ($modalOverlay.classList.contains('open')) {
      closeModal();
    } else {
      closeMobileMenu();
    }
  }
});

// Language toggle
$btnLanguage.addEventListener('click', toggleLanguage);
$btnLanguageMobile.addEventListener('click', () => {
  toggleLanguage();
  closeMobileMenu();
});

// Mobile hamburger
$hamburger.addEventListener('click', toggleMobileMenu);

// Resume button (in about section)
$aboutResume.addEventListener('click', openResumeModal);

// Contact CTA scrolls to WhatsApp or opens WhatsApp
$contactCTA.addEventListener('click', (e) => {
  e.preventDefault();
  window.open(CONTACT_WHATSAPP_URL, '_blank', 'noopener,noreferrer');
});

// Navbar scroll behavior
window.addEventListener('scroll', handleNavbarScroll, { passive: true });

// Active navbar link highlight on scroll
function updateActiveNavLink() {
  const sections = ['projects', 'services', 'about', 'contact'];
  const scrollPos = window.scrollY + 150;

  let activeSection = '';
  for (const sectionId of sections) {
    const section = document.getElementById(sectionId);
    if (section && section.offsetTop <= scrollPos) {
      activeSection = sectionId;
    }
  }

  document.querySelectorAll('.navbar__link').forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('navbar__link--active', href === `#${activeSection}`);
  });
}

window.addEventListener('scroll', updateActiveNavLink, { passive: true });

/* ===================================================================
   INIT
   =================================================================== */

applyLanguage();
handleNavbarScroll();
updateActiveNavLink();
