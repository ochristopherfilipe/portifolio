/* ============================================
   CHRISTOPHER SANTOS — PORTFOLIO (Switch Style)
   main.js
   ============================================ */

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
const CONTACT_WHATSAPP = '+55 92 99996-1672';
const CONTACT_WHATSAPP_URL = 'https://wa.me/5592999961672';
const CONTACT_LOCATION = {
  'pt-BR': 'Brasil',
  en: 'Brazil',
};
const RESUME_PDF_PATH = 'assets/docs/CV-Christopher.pdf';
const RESUME_DOC_URL = 'https://docs.google.com/document/d/10CDIZJin1Cjrg7aGPwgd82yYZYFJnbCBA0NP17tvTzA/edit?usp=sharing';
const LANGUAGE_STORAGE_KEY = 'portfolio-language';
const PROFILE_IMAGE_PATH = 'assets/images/perfil.png?v=20260324-1';
const ABOUT_IMAGE_PATH = 'assets/images/sobre-mim.png';
const CONTACT_IMAGE_PATH = 'assets/images/contato.png';
const AB_TESTING_CARD_IMAGE = 'assets/images/teste-a-b.png?v=20260328-1';
const SAGUI_CARD_IMAGE = 'assets/images/sagui.png';
const VIRTUAL_INSTRUMENT_CARD_IMAGE = 'assets/images/instrumento-cv.png?v=20260324-1';
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
const ABOUT_STORY = {
  'pt-BR': `
    <div class="about-story">
      <p class="about-story__lead">Como <strong>Analista de Dados</strong> sou capaz de transformar informações em <strong>insights valiosos</strong>.</p>
      <p>Minha jornada profissional é guiada pela <strong>exploração de dados</strong>, criação de <strong>visualizações impactantes</strong> e <strong>resolução de problemas complexos</strong>. Busco desvendar <strong>padrões ocultos</strong> nos dados, contando <strong>histórias convincentes</strong> por meio de análises.</p>
      <p>Meu portfólio inclui projetos de Dados desde <strong>previsões de tendências</strong> até a <strong>segmentação de clientes</strong>, além de <strong>dashboards</strong> e <strong>análises em SQL</strong> para simplificar informações complexas.</p>
      <p>Possuo habilidades em <strong>manipulação de dados com Python</strong>, <strong>análise estatística</strong>, <strong>modelagem</strong>, <strong>visualização de dados</strong>, <strong>SQL</strong>, <strong>limpeza</strong> e <strong>preparação de dados</strong>.</p>
    </div>
  `,
  en: `
    <div class="about-story">
      <p class="about-story__lead">As a <strong>Data Analyst</strong>, I can turn information into <strong>valuable insights</strong>.</p>
      <p>My professional journey is guided by <strong>data exploration</strong>, the creation of <strong>impactful visualizations</strong>, and the <strong>solution of complex problems</strong>. I strive to uncover <strong>hidden patterns</strong> in data and tell <strong>compelling stories</strong> through analysis.</p>
      <p>My portfolio includes data projects ranging from <strong>trend forecasting</strong> to <strong>customer segmentation</strong>, along with <strong>dashboards</strong> and <strong>SQL analysis</strong> to simplify complex information.</p>
      <p>I have skills in <strong>data manipulation with Python</strong>, <strong>statistical analysis</strong>, <strong>modeling</strong>, <strong>data visualization</strong>, <strong>SQL</strong>, <strong>cleaning</strong>, and <strong>data preparation</strong>.</p>
    </div>
  `,
};

const UI_TEXT = {
  'pt-BR': {
    pageTitle: 'Christopher Santos | Portfólio',
    metaDescription: 'Portfólio de Christopher Santos — Ciência de Dados, Dashboards, SQL, Automação, IA e Sistemas.',
    dockAria: 'Categorias do portfólio',
    categorySuffix: 'PROJETOS',
    disclaimer: 'Todos os dados usados são exclusivamente para fins de demonstração, garantindo total privacidade e conformidade ética.',
    live: 'AO VIVO',
    footerGitHub: 'Ver GitHub',
    footerGitHubKey: '+',
    footerLanguage: 'Português/English',
    footerLanguageKey: '=',
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
    aboutTags: ['Python', 'Dashboards', 'SQL', 'JavaScript', 'Machine Learning', 'Automação'],
    aboutAction: 'GitHub',
    resumeCategory: 'Currículo',
    resumeDescription: 'Escolha como deseja acessar o currículo:<br><br><strong>Baixar PDF</strong> para salvar uma cópia no dispositivo, ou <strong>abrir online</strong> para visualizar a versão no Google Docs.',
    resumeTags: ['Python', 'Dashboards', 'SQL', 'JavaScript', 'Machine Learning', 'Automação', 'IA'],
    resumeDownload: 'Baixar PDF',
    resumeOnline: 'Abrir online',
  },
  en: {
    pageTitle: 'Christopher Santos | Portfolio',
    metaDescription: 'Christopher Santos portfolio — Data Science, Dashboards, SQL, Automation, AI and Systems.',
    dockAria: 'Portfolio categories',
    categorySuffix: 'PROJECTS',
    disclaimer: 'All data used is strictly for demonstration purposes, ensuring privacy and ethical compliance.',
    live: 'LIVE',
    footerGitHub: 'View GitHub',
    footerGitHubKey: '+',
    footerLanguage: 'Português/English',
    footerLanguageKey: '=',
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
  },
};

const CATEGORIES = [
  { id: 'home',        icon: 'assets/icons/home.png',                          label: { 'pt-BR': 'Home',               en: 'Home' } },
  { id: 'datascience', icon: 'assets/icons/graph.png',                         label: { 'pt-BR': 'Ciência de Dados',   en: 'Data Science' } },
  { id: 'dashboards',  icon: 'assets/images/dashboard.png',                     label: { 'pt-BR': 'Dashboards & SQL',   en: 'Dashboards & SQL' } },
  { id: 'automacao',   icon: 'assets/icons/robotic.png',                       label: { 'pt-BR': 'Automação e I.A.',   en: 'Automation & AI' } },
  { id: 'sistemas',    icon: 'assets/icons/cloud-server.png',                  label: { 'pt-BR': 'Sistemas',           en: 'Systems' } },
  { id: 'curriculo',   icon: 'assets/icons/docs.png',                          label: { 'pt-BR': 'Currículo',          en: 'Resume' } },
  { id: 'contato',     icon: 'assets/icons/text.png',                          label: { 'pt-BR': 'Contato',            en: 'Contact' } },
  { id: 'info',        icon: 'assets/icons/info.png',                          label: { 'pt-BR': 'Sobre',              en: 'About' } },
];

const PROJECTS = [
  {
    id: 100,
    category: 'home',
    title: {
      'pt-BR': 'Meu LinkedIn',
      en: 'My LinkedIn',
    },
    emoji: '👤',
    description: {
      'pt-BR': 'Clique para acessar meu perfil profissional no LinkedIn.',
      en: 'Click to open my professional LinkedIn profile.',
    },
    tags: {
      'pt-BR': ['LinkedIn', 'Networking', 'Contato'],
      en: ['LinkedIn', 'Networking', 'Contact'],
    },
    actionLabel: {
      'pt-BR': 'Abrir LinkedIn',
      en: 'Open LinkedIn',
    },
    link: LINKEDIN_PROFILE_URL,
    image: PROFILE_IMAGE_PATH,
    cardClickAction: 'link',
  },
  {
    id: 101,
    category: 'home',
    title: {
      'pt-BR': 'Sobre mim',
      en: 'About me',
    },
    emoji: '🧠',
    description: ABOUT_STORY,
    tags: {
      'pt-BR': ['Python', 'SQL', 'Dashboards', 'Visualização de Dados'],
      en: ['Python', 'SQL', 'Dashboards', 'Data Visualization'],
    },
    link: '#',
    image: ABOUT_IMAGE_PATH,
    richDescription: true,
    hideMissingLinkAction: true,
    modalVariant: 'about-story',
    modalCategoryOverride: {
      'pt-BR': 'Perfil',
      en: 'Profile',
    },
  },
  {
    id: 102,
    category: 'home',
    title: {
      'pt-BR': 'Mensagem',
      en: 'Message',
    },
    emoji: '🤝',
    description: {
      'pt-BR': 'SERÁ UM PRAZER <strong>TRABALHAR</strong><br>COM TODOS VOCÊS!',
      en: 'IT WILL BE A PLEASURE TO <strong>WORK</strong><br>WITH ALL OF YOU!',
    },
    tags: {
      'pt-BR': [],
      en: [],
    },
    link: '#',
    image: CONTACT_IMAGE_PATH,
    richDescription: true,
    hideMissingLinkAction: true,
    cardClickAction: 'contact',
  },
  {
    id: 13,
    category: 'datascience',
    title: {
      'pt-BR': 'Tradutor Sagui / Humano',
      en: 'Marmoset-to-Human Translator',
    },
    emoji: '🐵',
    description: {
      'pt-BR': 'Projeto de bioacústica computacional que classifica vocalizações de saguis, organiza padrões sonoros em mapas 3D e simula tradução em tempo real via arquivo WAV ou microfone, combinando super-features, LDA e SVM para interpretar famílias biológicas de chamadas.',
      en: 'Computational bioacoustics project that classifies marmoset vocalizations, organizes sound patterns in 3D maps, and simulates real-time translation from WAV uploads or microphone input, combining super-features, LDA, and SVM to interpret biological call families.',
    },
    tags: {
      'pt-BR': ['Python', 'Bioacústica', 'Librosa', 'SVM', 'Plotly'],
      en: ['Python', 'Bioacoustics', 'Librosa', 'SVM', 'Plotly'],
    },
    actionLabel: {
      'pt-BR': 'Ver repositório',
      en: 'View repository',
    },
    link: SAGUI_TRANSLATOR_REPO_URL,
    image: SAGUI_CARD_IMAGE,
  },
  {
    id: 2,
    category: 'datascience',
    title: {
      'pt-BR': 'Teste A/B em Marketing',
      en: 'Marketing A/B Test Analysis',
    },
    emoji: '🧪',
    description: {
      'pt-BR': 'Análise de teste A/B com 588 mil registros para comparar as taxas de conversão entre os grupos ad e psa, combinando exploração de dados, teste t, ANOVA e visualizações por dia, hora e intensidade de exposição aos anúncios.',
      en: 'A/B testing analysis over 588k records comparing conversion rates between the ad and psa groups, combining exploratory analysis, t-test, ANOVA, and visualizations by day, hour, and ad exposure intensity.',
    },
    tags: {
      'pt-BR': ['Python', 'Pandas', 'SciPy', 'Seaborn', 'Teste A/B'],
      en: ['Python', 'Pandas', 'SciPy', 'Seaborn', 'A/B Testing'],
    },
    actionLabel: {
      'pt-BR': 'Ver repositório',
      en: 'View repository',
    },
    link: AB_TESTING_REPO_URL,
    image: AB_TESTING_CARD_IMAGE,
  },
  {
    id: 3,
    category: 'datascience',
    title: {
      'pt-BR': 'Chance de Cancelamento',
      en: 'Customer Churn Risk',
    },
    emoji: '📉',
    description: {
      'pt-BR': 'Notebook em Python para estimar a chance de cancelamento de clientes com base em dados históricos, incluindo exploração de dados, preparação das variáveis, modelagem de classificação e avaliação dos resultados para apoiar ações de retenção.',
      en: 'Python notebook to estimate customer churn risk from historical data, including data exploration, feature preparation, classification modeling, and evaluation to support retention actions.',
    },
    tags: {
      'pt-BR': ['Python', 'Jupyter Notebook', 'Classificação', 'Análise de Dados'],
      en: ['Python', 'Jupyter Notebook', 'Classification', 'Data Analysis'],
    },
    actionLabel: {
      'pt-BR': 'Ver notebook',
      en: 'View notebook',
    },
    link: CHURN_NOTEBOOK_URL,
    image: 'assets/images/churn3.png?v=20260324-1',
  },
  {
    id: 15,
    category: 'dashboards',
    title: {
      'pt-BR': 'Fintech Analytics Portfolio - PostgreSQL',
      en: 'Fintech Analytics Portfolio - PostgreSQL',
    },
    emoji: '🗄️',
    description: {
      'pt-BR': 'Projeto de SQL analítico que simula a operação de uma fintech, com modelagem relacional, carga de dados fictícios e consultas para detecção de fraude, conciliação de saldo diário e identificação de churn em contas inativas.',
      en: 'Analytical SQL project that simulates a fintech operation, with relational modeling, fictional data loading, and queries for fraud detection, daily balance reconciliation, and churn identification in inactive accounts.',
    },
    tags: {
      'pt-BR': ['SQL', 'PostgreSQL', 'Fintech', 'CTEs', 'Window Functions'],
      en: ['SQL', 'PostgreSQL', 'Fintech', 'CTEs', 'Window Functions'],
    },
    actionLabel: {
      'pt-BR': 'Ver repositório',
      en: 'View repository',
    },
    link: FINTECH_SQL_REPO_URL,
    image: 'assets/images/sql.png',
  },
  {
    id: 14,
    category: 'dashboards',
    title: {
      'pt-BR': 'Manaus Motors - Analytics Dashboard',
      en: 'Manaus Motors - Analytics Dashboard',
    },
    emoji: '🏎️',
    description: {
      'pt-BR': 'Dashboard executivo desenvolvido em Streamlit para uma concessionária premium de Manaus, com visualização geoespacial em 3D, acompanhamento do mix de veículos elétricos e KPIs de receita, volume vendido e ROI em tempo real.',
      en: 'Executive dashboard built with Streamlit for a premium car dealership in Manaus, featuring 3D geospatial visualization, electric-vehicle mix tracking, and real-time revenue, sales volume, and ROI KPIs.',
    },
    tags: {
      'pt-BR': ['Dashboards', 'Streamlit', 'PyDeck', 'Plotly', 'Geoanálise'],
      en: ['Dashboards', 'Streamlit', 'PyDeck', 'Plotly', 'Geoanalytics'],
    },
    actionLabel: {
      'pt-BR': 'Ver repositório',
      en: 'View repository',
    },
    link: MANAUS_MOTORS_REPO_URL,
    image: 'assets/images/dash-car.png',
  },
  {
    id: 12,
    category: 'automacao',
    title: {
      'pt-BR': 'Virtual Instrument CV',
      en: 'Virtual Instrument CV',
    },
    emoji: '🎹',
    description: {
      'pt-BR': 'Instrumento musical touchless construído em Python que usa OpenCV, MediaPipe e DSP para reconhecer gestos das duas mãos pela webcam, converter acordes e controles expressivos em eventos MIDI e acionar sintetizadores em tempo real. O projeto combina filtragem 1-Euro, lógica geométrica invariável à rotação e um arpejador assíncrono para reduzir jitter e manter a resposta musical estável.',
      en: 'Touchless musical instrument built in Python that uses OpenCV, MediaPipe, and DSP to recognize two-hand gestures from the webcam, translate chords and expressive controls into MIDI events, and drive synthesizers in real time. The project combines 1-Euro filtering, rotation-invariant geometric logic, and an asynchronous arpeggiator to reduce jitter and keep the musical response stable.',
    },
    tags: {
      'pt-BR': ['Python', 'OpenCV', 'MediaPipe', 'MIDI', 'DSP'],
      en: ['Python', 'OpenCV', 'MediaPipe', 'MIDI', 'DSP'],
    },
    actionLabel: {
      'pt-BR': 'Ver repositório',
      en: 'View repository',
    },
    link: VIRTUAL_INSTRUMENT_REPO_URL,
    image: VIRTUAL_INSTRUMENT_CARD_IMAGE,
  },
  {
    id: 16,
    category: 'sistemas',
    title: {
      'pt-BR': 'Estudaê',
      en: 'Estudae',
    },
    emoji: '📚',
    description: {
      'pt-BR': 'Aplicação web para acompanhamento de estudos com organização de matérias e assuntos, cronômetro ativo, metas e histórico de sessões em um painel único.',
      en: 'Web app for study tracking with subjects and topics organization, active timer, goals, and session history in a single dashboard.',
    },
    tags: {
      'pt-BR': ['PHP', 'PostgreSQL', 'JavaScript', 'Cypress'],
      en: ['PHP', 'PostgreSQL', 'JavaScript', 'Cypress'],
    },
    actionLabel: {
      'pt-BR': 'Ver repositório',
      en: 'View repository',
    },
    link: ESTUDAE_REPO_URL,
    image: 'assets/images/estudae.png',
  },
];

let currentLanguage = normalizeLanguage(window.localStorage.getItem(LANGUAGE_STORAGE_KEY));
let activeCategory = 'home';
let activeProjectIndex = 0;
let currentModal = null;

const $clock = document.getElementById('clock');
const $categoryTitle = document.getElementById('category-title');
const $carouselTrack = document.getElementById('carousel-track');
const $carouselDots = document.getElementById('carousel-dots');
const $dockBar = document.getElementById('dock-bar');
const $modalOverlay = document.getElementById('modal-overlay');
const $modalDialog = document.querySelector('.modal-dialog');
const $modalClose = document.getElementById('modal-close');
const $modalCategory = document.getElementById('modal-category');
const $modalTitle = document.getElementById('modal-title');
const $modalThumb = document.getElementById('modal-thumb');
const $modalDesc = document.getElementById('modal-description');
const $modalTags = document.getElementById('modal-tags');
const $modalActions = document.getElementById('modal-actions');
const $btnView = document.getElementById('btn-view-project');
const $btnDetails = document.getElementById('btn-open-details');
const $pageDescription = document.getElementById('page-description');
const $disclaimerText = document.getElementById('disclaimer-text');
const $liveLabel = document.getElementById('live-label');
const $btnViewLabel = document.getElementById('btn-view-project-label');
const $btnViewKey = document.getElementById('btn-view-project-key');
const $btnLanguageLabel = document.getElementById('btn-open-details-label');
const $btnLanguageKey = document.getElementById('btn-open-details-key');

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

function updateClock() {
  const now = new Date();
  const locale = currentLanguage === 'pt-BR' ? 'pt-BR' : 'en-US';
  $clock.textContent = now.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit', hour12: false });
}

function renderDock() {
  $dockBar.innerHTML = CATEGORIES.map(category => {
    const label = getLocalized(category.label);
    const isActive = category.id === activeCategory;
    const hasPersistentLabel = ['curriculo', 'contato', 'info'].includes(category.id);

    return `
      <div class="dock-item ${isActive ? 'active' : ''} ${hasPersistentLabel ? 'dock-item--with-caption' : ''}">
        <span class="dock-item__title">${label}</span>
        <button
          class="dock-icon ${isActive ? 'active' : ''}"
          data-category="${category.id}"
          aria-label="${label}"
          title="${label}"
        ><img src="${category.icon}" alt="${label}"></button>
      </div>
    `;
  }).join('');

  $dockBar.querySelectorAll('.dock-icon').forEach(button => {
    button.addEventListener('click', () => {
      const { category: categoryId } = button.dataset;

      if (categoryId === 'contato') {
        openContactModal();
        return;
      }

      if (categoryId === 'curriculo') {
        openResumeModal();
        return;
      }

      if (categoryId === 'info') {
        openAboutModal();
        return;
      }

      activeCategory = categoryId;
      activeProjectIndex = 0;
      renderDock();
      renderCarousel();
    });
  });
}

function getFilteredProjects() {
  return PROJECTS.filter(project => project.category === activeCategory);
}

function renderCarousel() {
  const text = getText();
  const projects = getFilteredProjects();
  const activeCategoryData = CATEGORIES.find(category => category.id === activeCategory);
  const categoryLabel = activeCategoryData ? getLocalized(activeCategoryData.label) : '';

  activeProjectIndex = Math.min(activeProjectIndex, Math.max(projects.length - 1, 0));
  $categoryTitle.textContent = `${categoryLabel.toUpperCase()} ${text.categorySuffix}`;

  $carouselTrack.innerHTML = projects.map((project, index) => {
    const title = getLocalized(project.title);
    const thumbClass = project.image
      ? 'project-card__thumb project-card__thumb--image'
      : 'project-card__thumb project-card__thumb--placeholder';
    const thumbStyle = project.image
      ? `style="background-image: url('${project.image}');"`
      : '';
    const cardDelay = index * 70;

    return `
      <div class="project-card ${index === activeProjectIndex ? 'active' : ''}" data-index="${index}" style="--card-enter-delay: ${cardDelay}ms;">
        <div class="${thumbClass}" ${thumbStyle}>
          ${project.image
            ? ''
            : `<span class="placeholder-icon">${project.emoji}</span>`
          }
        </div>
        <span class="project-card__sr-only">${title}</span>
      </div>
    `;
  }).join('');

  $carouselDots.innerHTML = projects.map((_, index) => `
    <span class="carousel-dot ${index === activeProjectIndex ? 'active' : ''}"></span>
  `).join('');

  $carouselTrack.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const nextIndex = Number.parseInt(card.dataset.index, 10);
      const project = projects[nextIndex];
      handleProjectInteraction(project, nextIndex);
    });
  });

  requestAnimationFrame(() => {
    const activeCard = $carouselTrack.querySelector('.project-card.active');
    if (activeCard) {
      activeCard.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  });
}

function handleProjectInteraction(project, projectIndex = activeProjectIndex) {
  if (!project) {
    return;
  }

  activeProjectIndex = projectIndex;
  renderCarousel();

  if (project.cardClickAction === 'link' && project.link && project.link !== '#') {
    window.open(project.link, '_blank', 'noopener,noreferrer');
    return;
  }

  if (project.cardClickAction === 'contact') {
    openContactModal();
    return;
  }

  openProjectModal(project);
}

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
      <div class="modal-thumb__backdrop" style="background-image: url('${project.image}');" aria-hidden="true"></div>
      <img class="modal-thumb__art" src="${project.image}" alt="${projectTitle}">
    `);
  } else {
    setModalThumbContent(`<span class="placeholder-icon">${project.emoji}</span>`);
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
  $modalDesc.innerHTML = '';
  $modalTags.innerHTML = '';
  $modalActions.innerHTML = `
    <a class="modal-btn modal-btn--primary" href="${RESUME_PDF_PATH}" download="CV-Christopher.pdf">${text.resumeDownload}</a>
    <a class="modal-btn modal-btn--secondary" href="${RESUME_DOC_URL}" target="_blank" rel="noreferrer">${text.resumeOnline}</a>
  `;

  $modalOverlay.classList.add('open');
}

function rerenderOpenModal() {
  if (!currentModal || !$modalOverlay.classList.contains('open')) {
    return;
  }

  if (currentModal.type === 'project') {
    const project = getProjectById(currentModal.projectId);
    if (project) {
      openProjectModal(project);
    }
    return;
  }

  if (currentModal.type === 'contact') {
    openContactModal();
    return;
  }

  if (currentModal.type === 'about') {
    openAboutModal();
    return;
  }

  if (currentModal.type === 'resume') {
    openResumeModal();
  }
}

function closeModal() {
  currentModal = null;
  $modalOverlay.classList.remove('open');
}

function applyLanguage() {
  const text = getText();

  document.documentElement.lang = currentLanguage;
  document.title = text.pageTitle;

  if ($pageDescription) {
    $pageDescription.setAttribute('content', text.metaDescription);
  }

  $dockBar.setAttribute('aria-label', text.dockAria);
  $disclaimerText.textContent = text.disclaimer;
  if ($liveLabel) {
    $liveLabel.textContent = text.live;
  }
  $btnViewLabel.textContent = text.footerGitHub;
  $btnViewKey.textContent = text.footerGitHubKey;
  $btnLanguageLabel.textContent = text.footerLanguage;
  $btnLanguageKey.textContent = text.footerLanguageKey;

  updateClock();
  renderDock();
  renderCarousel();
  rerenderOpenModal();
}

function toggleLanguage() {
  currentLanguage = currentLanguage === 'pt-BR' ? 'en' : 'pt-BR';
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
  applyLanguage();
}

$modalClose.addEventListener('click', closeModal);
$modalOverlay.addEventListener('click', event => {
  if (event.target === $modalOverlay) {
    closeModal();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

$btnView.addEventListener('click', () => {
  window.open(GITHUB_PROFILE_URL, '_blank', 'noopener,noreferrer');
});

$btnDetails.addEventListener('click', toggleLanguage);

document.addEventListener('keydown', event => {
  if ($modalOverlay.classList.contains('open')) {
    return;
  }

  const projects = getFilteredProjects();

  if (event.key === 'ArrowRight') {
    activeProjectIndex = Math.min(activeProjectIndex + 1, projects.length - 1);
    renderCarousel();
  }

  if (event.key === 'ArrowLeft') {
    activeProjectIndex = Math.max(activeProjectIndex - 1, 0);
    renderCarousel();
  }

  if (event.key === 'Enter' && projects[activeProjectIndex]) {
    const selectedProject = projects[activeProjectIndex];
    handleProjectInteraction(selectedProject, activeProjectIndex);
  }
});

applyLanguage();
setInterval(updateClock, 30000);
