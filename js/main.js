const WHATSAPP = 'https://wa.me/5571986762904';

const MENU = [
  {
    id: 'cocada',
    name: 'Cocada',
    portion: '27 g',
    group: 'Doces',
    varejo: 'R$ 7,00',
    atacado: 'R$ 5,00',
    lote: 52,
    loteUnit: 'pacote',
    desc: 'Doce de milho com coco ralado desidratado, manteiga e leite em pó.',
    photo: 'assets/instagram/cocada.jpg',
    photoAlt: 'Saco de pipoca cocada com o adesivo da Croc Croc.'
  },
  {
    id: 'chocolate',
    name: 'Chocolate caramelado',
    portion: '27 g',
    group: 'Doces',
    varejo: 'R$ 6,00',
    atacado: 'R$ 4,00',
    lote: 52,
    loteUnit: 'pacote',
    desc: 'Pipoca caramelada com chocolate em pó e leite em pó.',
    photo: 'assets/instagram/chocolate.jpg',
    photoAlt: 'Sacos de pipoca de chocolate com laço roxo e o cartão da Croc Croc.'
  },
  {
    id: 'cebola',
    name: 'Cebola',
    portion: '25 g',
    group: 'Salgadas',
    varejo: 'R$ 13,00',
    atacado: 'R$ 9,00',
    lote: 6,
    loteUnit: 'pacote',
    desc: 'Salgada, com manteiga, azeite doce e creme de cebola.',
    photo: 'assets/instagram/cebola.png',
    photoAlt: 'Sacos de pipoca clara com laço vermelho e o adesivo da Croc Croc.'
  },
  {
    id: 'ninho',
    name: 'Leite Ninho',
    portion: '100 g',
    group: 'Doces',
    varejo: 'R$ 26,00',
    atacado: 'R$ 17,00',
    lote: 1,
    loteUnit: 'pacote',
    desc: 'Pipoca coberta com chocolate fracionado e leite em pó.',
    photo: 'assets/instagram/ninho.png',
    photoAlt: 'Sacos de pipoca branca com o adesivo Leite Ninho da Croc Croc.'
  },
  {
    id: 'meio-amargo',
    name: 'Meio amargo',
    portion: '100 g',
    group: 'Doces',
    varejo: 'R$ 26,00',
    atacado: 'R$ 18,00',
    lote: 1,
    loteUnit: 'pacote',
    desc: 'Chocolate fracionado, leite em pó e chocolate em pó.',
    photo: 'assets/instagram/meio-amargo.png',
    photoAlt: 'Pipoca coberta com chocolate em pó, aberta e com o recheio branco à mostra.'
  },
  {
    id: 'trufadas',
    name: 'Trufadas',
    portion: '100 g',
    group: 'Doces',
    varejo: 'R$ 37,00',
    atacado: 'R$ 25,00',
    lote: 1,
    loteUnit: 'pacote',
    desc: 'Cada pipoca sai do banho de chocolate, uma a uma.',
    photo: 'assets/instagram/trufadas.png',
    photoAlt: 'Bandeja com pipocas trufadas brancas e de chocolate e o adesivo da Croc Croc.'
  },
  {
    id: 'prestigio',
    name: 'Trufadas Prestígio',
    portion: '100 g',
    group: 'Doces',
    varejo: 'R$ 47,00',
    atacado: 'R$ 31,00',
    lote: 1,
    loteUnit: 'pacote',
    desc: 'Banho de chocolate e, em seguida, coco ralado desidratado.',
    photo: 'assets/instagram/prestigio.jpg',
    photoAlt: 'Pipoca coberta de chocolate com coco ralado, ao lado do cartão da Croc Croc.'
  },
  {
    id: 'barrinha',
    name: 'Barrinha de chocolate',
    portion: '1 un.',
    group: 'Pra levar',
    varejo: 'R$ 2,50',
    atacado: 'R$ 1,50',
    lote: 12,
    loteUnit: 'unidade',
    desc: 'Barrinha de pipoca com chocolate fracionado.',
    photo: 'assets/instagram/barrinha.png',
    photoAlt: 'Barrinha de pipoca coberta de chocolate, com o cartão da Croc Croc ao fundo.'
  },
  {
    id: 'pirulito-cobertura',
    name: 'Pirulito com cobertura',
    portion: '1 un.',
    group: 'Pra levar',
    varejo: 'R$ 13,00',
    atacado: 'R$ 9,00',
    lote: 8,
    loteUnit: 'unidade',
    desc: 'No palito, com laço e cobertura de chocolate fracionado.',
    photo: 'assets/instagram/pirulitos.jpg',
    photoAlt: 'Pirulito de chocolate branco e ao leite com riscos de chocolate.'
  },
  {
    id: 'pirulito-simples',
    name: 'Pirulito simples',
    portion: '1 un.',
    group: 'Pra levar',
    varejo: 'R$ 6,00',
    atacado: 'R$ 4,00',
    lote: 8,
    loteUnit: 'unidade',
    desc: 'No palito, com laço e chocolate em pó.',
    photo: 'assets/instagram/pirulitos-embalados.jpg',
    photoAlt: 'Pirulitos embalados com laço e o selo da Croc Croc.'
  }
];

const GROUPS = ['Todas', 'Doces', 'Salgadas', 'Pra levar'];

const menuState = {
  tier: 'varejo',
  group: 'Todas'
};

function loteCount(item) {
  const word = item.lote === 1 ? item.loteUnit : `${item.loteUnit}s`;
  return `${item.lote} ${word}`;
}

function formatMoney(value) {
  const [reais, cents] = value.toFixed(2).split('.');
  const grouped = reais.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `R$ ${grouped},${cents}`;
}

function lotePrice(item) {
  const unit = Number(item.atacado.replace(/[^\d,]/g, '').replace(',', '.'));
  return formatMoney(unit * item.lote);
}

function shownPrice(item) {
  return menuState.tier === 'atacado' ? lotePrice(item) : item.varejo;
}

function whatsappLink(item) {
  const tierLabel = menuState.tier === 'varejo' ? 'varejo' : 'atacado';
  const lote = menuState.tier === 'atacado' ? `, lote de ${loteCount(item)}` : '';
  const text = `Olá! Quero encomendar ${item.name} (${item.portion}), preço de ${tierLabel} ${shownPrice(item)}${lote}.`;
  return `${WHATSAPP}?text=${encodeURIComponent(text)}`;
}

function renderMenu() {
  const grid = document.getElementById('menu-grid');
  if (!grid) return;

  const items = MENU.filter((item) => menuState.group === 'Todas' || item.group === menuState.group);
  const tierLabel = menuState.tier === 'varejo' ? 'Varejo' : 'Atacado';

  grid.innerHTML = items.map((item, index) => `
    <article class="menu-card reveal visible" style="transition-delay: ${(index % 3) * 0.08}s" aria-labelledby="item-${item.id}">
      ${item.photo ? `<img class="menu-card__photo" src="${item.photo}" alt="${item.photoAlt}">` : ''}
      <p class="menu-card__group">${item.group}</p>
      <h3 class="menu-card__name" id="item-${item.id}">${item.name}</h3>
      <p class="menu-card__desc">${item.desc}</p>
      <p class="menu-card__portion">${item.portion}</p>
      <div class="menu-card__footer">
        <p class="menu-card__price">
          <span class="menu-card__tier">${tierLabel}</span>
          ${shownPrice(item)}
          ${menuState.tier === 'atacado' ? `<span class="menu-card__lote">lote de ${loteCount(item)}</span>` : ''}
        </p>
        <a class="menu-card__order" href="${whatsappLink(item)}" target="_blank" rel="noopener noreferrer">Pedir</a>
      </div>
    </article>
  `).join('');
}

function renderFilters() {
  const groupHost = document.getElementById('menu-groups');
  if (!groupHost) return;

  groupHost.innerHTML = GROUPS.map((group) => `
    <button type="button" class="chip${group === menuState.group ? ' is-active' : ''}" data-group="${group}" aria-pressed="${group === menuState.group}">
      ${group}
    </button>
  `).join('');

  groupHost.querySelectorAll('[data-group]').forEach((button) => {
    button.addEventListener('click', () => {
      menuState.group = button.dataset.group;
      renderFilters();
      renderMenu();
    });
  });
}

function initTierToggle() {
  const buttons = document.querySelectorAll('[data-tier]');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      menuState.tier = button.dataset.tier;
      buttons.forEach((other) => {
        const active = other === button;
        other.classList.toggle('is-active', active);
        other.setAttribute('aria-pressed', String(active));
      });
      renderMenu();
    });
  });
}

function initHeader() {
  const header = document.querySelector('.header');
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  const closeMenu = () => {
    links?.classList.remove('open');
    toggle?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  };

  toggle?.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('nav-open', open);
  });

  links?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && links?.classList.contains('open')) {
      closeMenu();
      toggle?.focus();
    }
  });
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal:not(.visible)').forEach((el) => observer.observe(el));
}

function initParallax() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  const layers = [...document.querySelectorAll('[data-parallax]')];
  const hero = document.querySelector('.hero');
  const badge = document.querySelector('.badge');
  let frame = 0;

  const update = () => {
    const scroll = window.scrollY;
    layers.forEach((layer) => {
      const speed = Number(layer.dataset.parallax) || 0;
      const parent = layer.offsetParent || document.body;
      const start = parent.getBoundingClientRect().top + scroll;
      const shift = (scroll - start) * speed;
      layer.style.transform = `translate3d(0, ${shift}px, 0)`;
    });
    frame = 0;
  };

  window.addEventListener('scroll', () => {
    if (frame) return;
    frame = requestAnimationFrame(update);
  }, { passive: true });

  update();

  if (hero && badge && window.matchMedia('(pointer: fine)').matches) {
    hero.addEventListener('mousemove', (event) => {
      const bounds = hero.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 18;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 14;
      badge.style.translate = `${x}px ${y}px`;
    });
    hero.addEventListener('mouseleave', () => {
      badge.style.translate = '0 0';
    });
  }
}

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

initHeader();
initTierToggle();
renderFilters();
renderMenu();
initReveal();
initParallax();
