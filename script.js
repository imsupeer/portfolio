const t = {
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.title': "Hi, I'm Joseph Alexanndry",
    'hero.subtitle':
      'Backend-heavy full-stack developer based in Petrolina-PE, Brazil. ~2 years of experience building cloud-first apps with Python, Angular, and AWS (serverless, event-driven microservices).',
    'skills.title': 'Skills',
    'skills.badges.backend': 'Backend-first',
    'skills.badges.serverless': 'Serverless',
    'skills.badges.testing': 'Testing & CI/CD',
    'skills.python.desc': 'REST APIs, automation, testing, domain-driven backends.',
    'skills.angular.desc': 'Responsive UIs, reusable components, form flows, guards.',
    'skills.aws.desc': 'Lambda, API Gateway, DynamoDB, SQS/SNS, Cognito, S3, CloudFront.',
    'skills.method.title': 'Methodology & Engineering',
    'skills.method.desc': 'Hexagonal architecture, event-driven design, observability-first, automation.',
    'projects.title': 'Projects',
    'projects.pa.desc':
      'Multi-service platform for appointments and availability. Angular front-end with Python/AWS serverless back-end, DynamoDB data model, streams and event propagation.',
    'projects.ms.desc':
      'Hexagonal-architecture Lambdas with strict validators, IaC pipelines, and DynamoDB Streams → SQS fan-out for data change detection and propagation across services.',
    'contact.title': 'Contact',
    'footer.rights': 'All rights reserved.',
  },
  pt: {
    'nav.about': 'Sobre',
    'nav.skills': 'Skills',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    'hero.title': 'Olá, me chamo Joseph Alexanndry',
    'hero.subtitle':
      'Desenvolvedor full-stack com foco em backend, em Petrolina-PE, Brasil. ~2 anos criando apps cloud-first com Python, Angular e AWS (microserviços serverless e orientados a eventos).',
    'skills.title': 'Skills',
    'skills.badges.backend': 'Foco em Backend',
    'skills.badges.serverless': 'Serverless',
    'skills.badges.testing': 'Testes & CI/CD',
    'skills.python.desc': 'APIs REST, automação, testes, backends orientados a domínio.',
    'skills.angular.desc': 'UIs responsivas, componentes reutilizáveis, fluxos de formulários, guards.',
    'skills.aws.desc': 'Lambda, API Gateway, DynamoDB, SQS/SNS, Cognito, S3, CloudFront.',
    'skills.method.title': 'Metodologia & Engenharia',
    'skills.method.desc': 'Arquitetura hexagonal, design orientado a eventos, observabilidade e automação.',
    'projects.title': 'Projetos',
    'projects.pa.desc':
      'Plataforma multi-serviços para agendamentos e disponibilidade. Front-end Angular com back-end serverless em Python/AWS, modelo de dados no DynamoDB, streams e propagação de eventos.',
    'projects.ms.desc':
      'Lambdas em arquitetura hexagonal com validadores rígidos, pipelines de IaC e DynamoDB Streams → SQS para detecção e propagação de mudanças entre serviços.',
    'contact.title': 'Contato',
    'footer.rights': 'Todos os direitos reservados.',
  },
};

(function () {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const root = document.documentElement;
  const saved = localStorage.getItem('lang') || (navigator.language || 'en').toLowerCase().startsWith('pt') ? 'pt' : 'en';
  applyLang(saved);

  const enBtn = document.querySelector('[data-lang-btn="en"]');
  const ptBtn = document.querySelector('[data-lang-btn="pt"]');

  if (enBtn) enBtn.addEventListener('click', () => applyLang('en'));
  if (ptBtn) ptBtn.addEventListener('click', () => applyLang('pt'));

  function applyLang(lang) {
    const dict = t[lang] || t.en;
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);
    Object.keys(dict).forEach((k) => {
      const node = document.querySelector(`[data-i18n="${k}"]`);
      if (node) node.textContent = dict[k];
    });
    const buttons = document.querySelectorAll('[data-lang-btn]');
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.langBtn === lang)));
    localStorage.setItem('lang', lang);
  }
})();
