const WHATSAPP = 'https://wa.me/5571986762904';

const MENU = [
  {
    id: 'cebola',
    name: 'Cebola',
    portion: '25 g',
    atacadoGrams: 150,
    group: 'Salgadas',
    varejo: 'R$ 10,00',
    receita: 6,
    atacado: 'R$ 9,00',
    lote: 1,
    loteUnit: 'pacote',
    desc: 'Salgada, com manteiga, azeite doce e creme de cebola.',
    photo: 'assets/instagram/cebola.png',
    photoAlt: 'Pacote de pipoca de cebola com o adesivo da Croc Croc, chapéu de palha e flores de papel.'
  },
  {
    id: 'ninho',
    name: 'Leite Ninho',
    portion: '100 g',
    varejoGrams: 30,
    group: 'Doces',
    varejo: 'R$ 26,00',
    receita: 1,
    atacado: 'R$ 23,00',
    lote: 1,
    loteUnit: 'pacote',
    desc: 'Pipoca caramelada coberta com chocolate branco e finalizada com leite em pó.',
    photo: 'assets/instagram/ninho.png',
    photoAlt: 'Sacos de pipoca branca com o adesivo Leite Ninho da Croc Croc.'
  },
  {
    id: 'meio-amargo',
    name: 'Meio amargo',
    portion: '100 g',
    varejoGrams: 30,
    group: 'Doces',
    varejo: 'R$ 26,00',
    receita: 1,
    atacado: 'R$ 23,00',
    lote: 1,
    loteUnit: 'pacote',
    desc: 'Pipoca caramelada coberta com chocolate meio amargo, finalizada com leite em pó e chocolate em pó.',
    photo: 'assets/instagram/meio-amargo.png',
    photoAlt: 'Pipoca coberta com chocolate em pó, aberta e com o recheio branco à mostra.'
  },
  {
    id: 'choquito',
    name: 'Choquito',
    portion: '100 g',
    varejoGrams: 30,
    group: 'Doces',
    varejo: 'R$ 29,00',
    receita: 1,
    atacado: 'R$ 26,00',
    lote: 1,
    loteUnit: 'pacote',
    desc: 'Pipoca caramelada coberta com chocolate meio amargo e flocos de arroz.',
    photo: 'assets/instagram/choquito.jpg',
    photoAlt: 'Choquito de chocolate com flocos, ao lado do cartão da Croc Croc.'
  },
  {
    id: 'trufadas',
    name: 'Trufadas',
    portion: '100 g',
    varejoGrams: 30,
    group: 'Doces',
    varejo: 'R$ 37,00',
    receita: 1,
    atacado: 'R$ 33,00',
    lote: 1,
    loteUnit: 'pacote',
    desc: 'Pipoca caramelada, cuidadosamente banhada no chocolate.',
    photo: 'assets/instagram/trufadas.png',
    photoAlt: 'Pipocas trufadas de chocolate em uma taça de vidro, ao lado de uma barra de chocolate.'
  },
  {
    id: 'prestigio',
    name: 'Trufadas Prestígio',
    portion: '100 g',
    varejoGrams: 30,
    group: 'Doces',
    varejo: 'R$ 38,00',
    receita: 1,
    atacado: 'R$ 34,00',
    lote: 1,
    loteUnit: 'pacote',
    desc: 'Pipoca caramelada banhada no chocolate meio amargo, finalizada com coco ralado desidratado.',
    photo: 'assets/instagram/prestigio.jpg',
    photoAlt: 'Pipoca coberta de chocolate com coco ralado desidratado, ao lado do cartão da Croc Croc.'
  },
  {
    id: 'barrinha',
    name: 'Barrinha de chocolate',
    portion: '1 un.',
    group: 'Pra levar',
    varejo: 'R$ 2,50',
    receita: 12,
    atacado: 'R$ 2,00',
    lote: 1,
    loteUnit: 'unidade',
    desc: 'Pipoca caramelada levemente triturada, banhada em chocolate branco ou meio amargo.',
    photo: 'assets/instagram/barrinha.png',
    photoAlt: 'Barrinha de pipoca coberta de chocolate, com o cartão da Croc Croc ao fundo.'
  },
  {
    id: 'pirulito-cobertura',
    name: 'Pirulito com cobertura',
    portion: '1 un.',
    group: 'Pra levar',
    varejo: 'R$ 13,00',
    receita: 8,
    atacado: 'R$ 12,00',
    lote: 1,
    loteUnit: 'unidade',
    desc: 'Pipoca caramelada de chocolate em formato de pirulito, banhada no chocolate, com saquinho plástico e fita de cetim.',
    photo: 'assets/instagram/pirulitos.jpg',
    photoAlt: 'Pirulito de chocolate branco e ao leite com riscos de chocolate.'
  },
  {
    id: 'pirulito-simples',
    name: 'Pirulito simples',
    portion: '1 un.',
    group: 'Pra levar',
    varejo: 'R$ 6,00',
    receita: 8,
    atacado: 'R$ 5,00',
    lote: 1,
    loteUnit: 'unidade',
    desc: 'Pipoca caramelada de chocolate em formato de pirulito, com saquinho plástico e fita de cetim.',
    photo: 'assets/instagram/pirulito-simples.jpg',
    photoAlt: 'Pirulito de pipoca no saquinho plástico, com laço vermelho e o adesivo da Croc Croc.'
  },
  {
    id: 'caramelada-cocada',
    name: 'Pipoca caramelada de cocada',
    portion: '200 g',
    group: 'Doces',
    varejo: 'R$ 42,00',
    receita: 1,
    atacado: 'R$ 38,00',
    festaMin: 8,
    lote: 1,
    loteUnit: 'pacote',
    calcPortion: 27,
    festa: { varejo: 'R$ 5,00', atacado: 'R$ 4,00' },
    desc: 'Preparada com côco ralado e finalizada com leite em pó.',
    photo: 'assets/instagram/caramelada-cocada.jpg',
    photoAlt: 'Pote de pipoca caramelada de cocada, com o cartão da Croc Croc ao fundo.'
  },
  {
    id: 'caramelada-cocada-colorida',
    name: 'Pipoca caramelada de cocada colorida',
    portion: '200 g',
    group: 'Doces',
    varejo: 'R$ 42,00',
    receita: 1,
    atacado: 'R$ 38,00',
    festaMin: 8,
    lote: 1,
    loteUnit: 'pacote',
    calcPortion: 27,
    festa: { varejo: 'R$ 5,00', atacado: 'R$ 4,00' },
    desc: 'Com côco ralado, corante e finalizada com leite em pó.',
    photo: 'assets/instagram/caramelada-cocada-colorida.jpg',
    photoAlt: 'Sacos de pipoca caramelada de cocada colorida, com laços e pipoca rosa, azul e amarela.'
  },
  {
    id: 'caramelada-churros',
    name: 'Pipoca caramelada de churros',
    portion: '200 g',
    group: 'Doces',
    varejo: 'R$ 45,00',
    receita: 1,
    atacado: 'R$ 41,00',
    festaMin: 8,
    lote: 1,
    loteUnit: 'pacote',
    calcPortion: 27,
    festa: { varejo: 'R$ 6,00', atacado: 'R$ 5,00' },
    desc: 'Com canela em pó, finalizada com leite em pó e canela em pó.',
    photo: 'assets/instagram/caramelada-churros.jpg',
    photoAlt: 'Saco de pipoca caramelada de churros com laço verde e o adesivo da Croc Croc.'
  },
  {
    id: 'caramelada-chocolate',
    name: 'Pipoca caramelada de chocolate',
    portion: '200 g',
    group: 'Doces',
    varejo: 'R$ 43,00',
    receita: 1,
    atacado: 'R$ 39,00',
    festaMin: 8,
    lote: 1,
    loteUnit: 'pacote',
    calcPortion: 27,
    festa: { varejo: 'R$ 5,00', atacado: 'R$ 4,00' },
    desc: 'Preparada com chocolate em pó e leite em pó.',
    photo: 'assets/instagram/caramelada-chocolate.jpg',
    photoAlt: 'Saco de pipoca caramelada de chocolate com laço vermelho e o adesivo da Croc Croc.'
  },
  {
    id: 'caramelada-limao',
    name: 'Pipoca caramelada de limão',
    portion: '200 g',
    group: 'Doces',
    varejo: 'R$ 38,00',
    receita: 1,
    atacado: 'R$ 34,00',
    festaMin: 8,
    lote: 1,
    loteUnit: 'pacote',
    calcPortion: 27,
    festa: { varejo: 'R$ 5,00', atacado: 'R$ 4,00' },
    desc: 'Com raspas de limão e finalizada com leite em pó.',
    photo: 'assets/instagram/caramelada-limao.jpg',
    photoAlt: 'Pipoca caramelada de limão verde-água, com fatias de limão e o cartão da Croc Croc.'
  },
  {
    id: 'caramelada-amendoim',
    name: 'Pipoca caramelada de amendoim',
    portion: '200 g',
    group: 'Doces',
    varejo: 'R$ 42,00',
    receita: 1,
    atacado: 'R$ 38,00',
    festaMin: 8,
    lote: 1,
    loteUnit: 'pacote',
    calcPortion: 27,
    festa: { varejo: 'R$ 5,00', atacado: 'R$ 4,00' },
    desc: 'Preparada com amendoim torrado e triturado.',
    photo: 'assets/instagram/caramelada-amendoim.jpg',
    photoAlt: 'Sacos de pipoca caramelada de amendoim com laço xadrez e o adesivo da Croc Croc.'
  },
  {
    id: 'caramelada-ninho',
    name: 'Pipoca caramelada de Leite Ninho',
    portion: '200 g',
    group: 'Doces',
    varejo: 'R$ 41,00',
    receita: 1,
    atacado: 'R$ 37,00',
    festaMin: 8,
    lote: 1,
    loteUnit: 'pacote',
    calcPortion: 27,
    festa: { varejo: 'R$ 6,00', atacado: 'R$ 5,00' },
    desc: 'Preparada e finalizada com leite em pó.',
    photo: 'assets/instagram/caramelada-ninho.jpg',
    photoAlt: 'Pipoca caramelada de Leite Ninho em um prato, com leite em pó ao lado e o cartão da Croc Croc.'
  }
];

const GROUPS = ['Todas', 'Doces', 'Salgadas', 'Pra levar'];

const menuState = {
  tier: 'varejo',
  group: 'Todas'
};

function formatMoney(value) {
  const [reais, cents] = value.toFixed(2).split('.');
  const grouped = reais.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `R$ ${grouped},${cents}`;
}

function varejoUnitPrice(item) {
  const grams = Number(String(item.portion).match(/(\d+)/)?.[1]);
  if (!item.varejoGrams || !grams) return item.varejo;
  const value = Math.round(moneyValue(item.varejo) * item.varejoGrams / grams * 100) / 100;
  return formatMoney(value);
}

function atacadoBundlePrice(item) {
  const grams = Number(String(item.portion).match(/(\d+)/)?.[1]);
  if (!item.atacadoGrams || !grams) return item.atacado;
  const value = Math.round(moneyValue(item.atacado) * item.atacadoGrams / grams * 100) / 100;
  return formatMoney(value);
}

function unitRecipe(item) {
  return item.portion.includes('un.') && item.receita > 1;
}

function unitRecipePrice(item) {
  const value = Math.round(moneyValue(item.atacado) * item.receita * 100) / 100;
  return formatMoney(value);
}

function shownPortion(item) {
  if (menuState.tier === 'varejo' && item.varejoGrams) return `${item.varejoGrams} g`;
  if (menuState.tier === 'atacado' && item.atacadoGrams) return `${item.atacadoGrams} g`;
  if (menuState.tier === 'atacado' && unitRecipe(item)) return `${item.receita} un.`;
  return menuState.tier === 'varejo' && item.festa ? '27 g' : item.portion;
}

function shownPrice(item) {
  if (menuState.tier === 'varejo' && item.varejoGrams) return varejoUnitPrice(item);
  if (menuState.tier === 'varejo' && item.festa) return item.festa.varejo;
  if (menuState.tier === 'atacado' && item.atacadoGrams) return atacadoBundlePrice(item);
  if (menuState.tier === 'atacado' && unitRecipe(item)) return unitRecipePrice(item);
  if (menuState.tier === 'atacado') return item.atacado;
  return item.varejo;
}

function priceMarkup(item) {
  const tier = menuState.tier === 'atacado' ? 'Atacado' : 'Varejo';
  const unitLine = menuState.tier === 'atacado' && unitRecipe(item)
    ? `<span class="menu-card__bundle">1 un. ${item.atacado}</span>`
    : '';
  return `<span class="menu-card__tier">${tier}</span>${shownPrice(item)}${unitLine}`;
}

function orderPriceText(item) {
  return menuState.tier === 'atacado' ? `atacado ${shownPrice(item)}` : `varejo ${shownPrice(item)}`;
}

function whatsappLink(item) {
  const text = `Olá! Quero encomendar ${item.name} (${shownPortion(item)}), preço de ${orderPriceText(item)}.`;
  return `${WHATSAPP}?text=${encodeURIComponent(text)}`;
}

function renderMenu() {
  const grid = document.getElementById('menu-grid');
  if (!grid) return;

  const items = MENU.filter((item) => menuState.group === 'Todas' || item.group === menuState.group);
  grid.innerHTML = items.map((item, index) => `
    <article class="menu-card reveal visible" style="transition-delay: ${(index % 3) * 0.08}s" aria-labelledby="item-${item.id}">
      ${item.photo ? `<img class="menu-card__photo" src="${item.photo}" alt="${item.photoAlt}">` : ''}
      <p class="menu-card__group">${item.group}</p>
      <h3 class="menu-card__name" id="item-${item.id}">${item.name}</h3>
      <p class="menu-card__desc">${item.desc}</p>
      <p class="menu-card__portion">${shownPortion(item)}</p>
      <div class="menu-card__footer">
        <p class="menu-card__price">
          ${priceMarkup(item)}
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

function portionGrams(item) {
  if (item.varejoGrams && calcState.tier === 'varejo') return item.varejoGrams;
  if (item.atacadoGrams && calcState.tier === 'atacado') return item.atacadoGrams;
  if (item.calcPortion) return item.calcPortion;
  const match = item.portion.match(/(\d+)\s*g/);
  return match ? Number(match[1]) : null;
}

function calcPortionLabel(item) {
  const grams = portionGrams(item);
  if (grams) return `${grams} g`;
  if (calcState.tier === 'atacado' && unitRecipe(item)) return `${item.receita} un.`;
  return item.portion;
}

function packCount(item, amount) {
  const grams = portionGrams(item);
  return grams ? amount / grams : amount;
}

function bandFor(item, packs) {
  const varejoText = item.festa
    ? item.festa.varejo
    : (calcState.tier !== 'atacado' && item.varejoGrams ? varejoUnitPrice(item) : item.varejo);
  if (calcState.tier !== 'atacado') return { text: varejoText, price: moneyValue(varejoText), name: 'varejo' };
  if (item.atacadoGrams) {
    const text = atacadoBundlePrice(item);
    if (Math.floor(packs) >= 1) return { text, price: moneyValue(text), name: 'atacado' };
    return { text: item.varejo, price: moneyValue(item.varejo), name: 'varejo', below: 1 };
  }
  const whole = Math.floor(packs);
  const recipe = item.festa ? item.festaMin : item.receita;
  const atacadoText = item.festa ? item.festa.atacado : item.atacado;
  if (whole >= recipe) return { text: atacadoText, price: moneyValue(atacadoText), name: 'atacado' };
  return { text: varejoText, price: moneyValue(varejoText), name: 'varejo', below: recipe };
}

function calcPriceText(item) {
  const amount = portionGrams(item) ? calcState.grams : calcState.units;
  return bandFor(item, packCount(item, amount)).text;
}

function moneyValue(text) {
  return Number(String(text).replace(/[^\d,]/g, '').replace(',', '.'));
}

const calcState = {
  id: MENU[0].id,
  tier: 'varejo',
  grams: Number(String(MENU[0].portion).match(/(\d+)/)?.[1]) || 100,
  units: 1
};

function calcItem() {
  return MENU.find((item) => item.id === calcState.id) || MENU[0];
}

function calcTotal(item, amount) {
  const band = bandFor(item, packCount(item, amount));
  const retail = item.portion.match(/(\d+)\s*g/);
  const grams = band.name === 'varejo' && item.atacadoGrams && calcState.tier === 'atacado' && retail
    ? Number(retail[1])
    : portionGrams(item);
  if (!grams) return Math.round(band.price * amount * 100) / 100;
  if (amount % grams === 0) return band.price * (amount / grams);
  return Math.round((band.price / grams) * amount * 100) / 100;
}

function calcPresets(item) {
  const grams = portionGrams(item);
  if (grams) {
    const recipe = item.atacadoGrams && calcState.tier === 'atacado'
      ? grams
      : (item.festa ? item.festaMin * grams : item.receita * grams);
    return [...new Set([grams, recipe, 250, 500])].sort((a, b) => a - b);
  }
  return [...new Set([1, item.receita])].sort((a, b) => a - b);
}

function renderCalcFlavors() {
  const host = document.getElementById('calc-flavors');
  if (!host) return;

  host.innerHTML = MENU.map((item) => `
    <button type="button" class="calc__flavor${item.id === calcState.id ? ' is-active' : ''}" role="radio" aria-checked="${item.id === calcState.id}" data-flavor="${item.id}">
      ${item.photo ? `<img src="${item.photo}" alt="">` : ''}
      <span>
        <span class="calc__flavor-name">${item.name}</span>
        <span class="calc__flavor-meta">${item.group} · ${calcPortionLabel(item)}</span>
      </span>
    </button>
  `).join('');
}

function syncCalcControls() {
  const item = calcItem();
  const grams = portionGrams(item);
  const amountInput = document.getElementById('calc-amount');
  const range = document.getElementById('calc-range');
  const label = document.getElementById('calc-amount-label');
  const unit = document.getElementById('calc-unit');
  const presets = document.getElementById('calc-presets');
  if (!amountInput || !range || !label || !unit || !presets) return;

  const max = grams ? 1000 : 100;
  const amount = grams ? calcState.grams : calcState.units;
  label.textContent = grams ? 'Gramas' : 'Unidades';
  unit.textContent = grams ? 'g' : 'un.';
  amountInput.min = '1';
  amountInput.max = String(max);
  amountInput.value = String(amount);
  range.min = '1';
  range.max = String(max);
  range.value = String(amount);
  range.setAttribute('aria-label', grams ? 'Gramas' : 'Unidades');

  const current = Number(amount);
  presets.innerHTML = calcPresets(item).map((value) => `
    <button type="button" class="calc__preset${value === current ? ' is-active' : ''}" data-preset="${value}">
      ${grams ? `${value} g` : `${value} un.`}
    </button>
  `).join('');
}

function readCalcAmount() {
  const input = document.getElementById('calc-amount');
  const item = calcItem();
  const max = portionGrams(item) ? 1000 : 100;
  const raw = input.value.trim();
  if (!raw) return null;
  const value = Number(raw);
  if (!Number.isInteger(value) || value < 1 || value > max) return null;
  return value;
}

function updateCalc() {
  const item = calcItem();
  const grams = portionGrams(item);
  const amount = readCalcAmount();
  const group = document.getElementById('calc-group');
  const name = document.getElementById('calc-name');
  const ref = document.getElementById('calc-ref');
  const priceEl = document.getElementById('calc-price-value');
  const order = document.getElementById('calc-order');
  const presets = document.getElementById('calc-presets');
  if (!priceEl || !order) return;

  const band = bandFor(item, amount === null ? 0 : packCount(item, amount));
  const unitWord = item.portion.includes('un')
    ? (band.below === 1 ? 'unidade' : 'unidades')
    : (band.below === 1 ? 'pacote' : 'pacotes');
  const belowNote = !band.below
    ? ''
    : item.atacadoGrams
      ? ` O atacado começa em ${item.atacadoGrams} g.`
      : ` O atacado começa em ${band.below} ${unitWord}.`;
  group.textContent = item.group;
  name.textContent = item.name;
  document.getElementById('calc-tier-label').textContent = calcState.tier === 'atacado' ? 'Atacado' : 'Varejo';
  const packLabel = band.name === 'varejo' && item.atacadoGrams && calcState.tier === 'atacado'
    ? item.portion
    : calcPortionLabel(item);
  ref.textContent = grams
    ? `O pacote de ${packLabel} sai a ${band.text} no ${band.name}.${belowNote} O valor acompanha os gramas.`
    : unitRecipe(item) && band.name === 'atacado'
      ? `As ${item.receita} unidades saem a ${unitRecipePrice(item)} no atacado. Cada unidade sai a ${item.atacado}.`
      : `Cada unidade sai a ${band.text} no ${band.name}.${belowNote}`;

  presets?.querySelectorAll('[data-preset]').forEach((button) => {
    button.classList.toggle('is-active', Number(button.dataset.preset) === amount);
  });

  if (amount === null) {
    priceEl.textContent = '—';
    order.removeAttribute('href');
    order.setAttribute('aria-disabled', 'true');
    order.tabIndex = -1;
    order.classList.add('is-disabled');
    return;
  }

  if (grams) calcState.grams = amount;
  else calcState.units = amount;

  const priceLabel = formatMoney(calcTotal(item, amount));
  priceEl.textContent = priceLabel;

  const qty = grams
    ? `${amount} g de ${item.name}`
    : `${amount} ${amount === 1 ? 'unidade' : 'unidades'} de ${item.name}`;
  const text = `Olá! Quero encomendar ${qty}. Preço de ${band.name}: ${priceLabel}.`;
  order.href = `${WHATSAPP}?text=${encodeURIComponent(text)}`;
  order.setAttribute('aria-disabled', 'false');
  order.tabIndex = 0;
  order.classList.remove('is-disabled');
}

function initCalculator() {
  const host = document.getElementById('calc-flavors');
  const amountInput = document.getElementById('calc-amount');
  const range = document.getElementById('calc-range');
  const order = document.getElementById('calc-order');
  if (!host || !amountInput || !range || !order) return;

  const setAmount = (value) => {
    const item = calcItem();
    const max = portionGrams(item) ? 1000 : 100;
    const next = Math.min(max, Math.max(1, Math.round(value)));
    amountInput.value = String(next);
    range.value = String(next);
    updateCalc();
  };

  renderCalcFlavors();
  syncCalcControls();

  document.querySelectorAll('[data-calc-tier]').forEach((button) => {
    button.addEventListener('click', () => {
      calcState.tier = button.dataset.calcTier;
      document.querySelectorAll('[data-calc-tier]').forEach((other) => {
        const active = other === button;
        other.classList.toggle('is-active', active);
        other.setAttribute('aria-pressed', String(active));
      });
      const current = calcItem();
      if (current.varejoGrams || current.atacadoGrams) {
        const pack = Number(String(current.portion).match(/(\d+)/)?.[1]);
        calcState.grams = calcState.tier === 'varejo'
          ? (current.varejoGrams || pack || calcState.grams)
          : (current.atacadoGrams || pack || calcState.grams);
      } else if (unitRecipe(current)) {
        calcState.units = calcState.tier === 'atacado' ? current.receita : 1;
      }
      renderCalcFlavors();
      syncCalcControls();
      updateCalc();
    });
  });

  host.addEventListener('click', (event) => {
    const button = event.target.closest('[data-flavor]');
    if (!button) return;
    calcState.id = button.dataset.flavor;
    const picked = calcItem();
    if (calcState.tier === 'varejo' && picked.varejoGrams) calcState.grams = picked.varejoGrams;
    else if (calcState.tier === 'atacado' && picked.atacadoGrams) calcState.grams = picked.atacadoGrams;
    else if (unitRecipe(picked)) calcState.units = calcState.tier === 'atacado' ? picked.receita : 1;
    else if (picked.calcPortion) calcState.grams = picked.calcPortion;
    host.querySelectorAll('[data-flavor]').forEach((other) => {
      const active = other === button;
      other.classList.toggle('is-active', active);
      other.setAttribute('aria-checked', String(active));
    });
    syncCalcControls();
    updateCalc();
  });

  document.getElementById('calc-presets')?.addEventListener('click', (event) => {
    const button = event.target.closest('[data-preset]');
    if (!button) return;
    setAmount(Number(button.dataset.preset));
  });

  amountInput.addEventListener('input', () => {
    const value = Number(amountInput.value);
    if (Number.isInteger(value)) {
      const min = Number(range.min);
      const max = Number(range.max);
      range.value = String(Math.min(max, Math.max(min, value)));
    }
    updateCalc();
  });

  range.addEventListener('input', () => {
    amountInput.value = range.value;
    updateCalc();
  });

  document.getElementById('calc-minus')?.addEventListener('click', () => {
    setAmount((Number(amountInput.value) || 1) - 1);
  });

  document.getElementById('calc-plus')?.addEventListener('click', () => {
    setAmount((Number(amountInput.value) || 0) + 1);
  });

  order.addEventListener('click', (event) => {
    if (order.getAttribute('aria-disabled') === 'true') event.preventDefault();
  });

  updateCalc();
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

function initGallery() {
  const dialog = document.getElementById('photo-modal');
  const image = dialog?.querySelector('img');
  if (!dialog || !image) return;

  document.querySelectorAll('.gallery .shot').forEach((shot) => {
    const source = shot.querySelector('img');
    if (source?.alt) shot.setAttribute('aria-label', source.alt);
    shot.addEventListener('click', () => {
      if (!source) return;
      image.alt = source.alt;
      image.onload = () => fitPhoto(image);
      image.src = source.currentSrc || source.src;
      if (image.complete) fitPhoto(image);
      dialog.showModal();
    });
  });

  dialog.addEventListener('click', (event) => {
    if (event.target === image) return;
    dialog.close();
  });

  dialog.addEventListener('close', () => {
    image.onload = null;
    image.removeAttribute('src');
    image.alt = '';
    image.style.width = '';
    image.style.height = '';
  });
}

function fitPhoto(image) {
  if (!image.naturalWidth) return;
  const maxW = window.innerWidth - 42;
  const maxH = window.innerHeight - 52;
  const scale = Math.min(maxW / image.naturalWidth, maxH / image.naturalHeight, 1);
  image.style.width = `${Math.round(image.naturalWidth * scale)}px`;
  image.style.height = `${Math.round(image.naturalHeight * scale)}px`;
}

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

initHeader();
initTierToggle();
renderFilters();
renderMenu();
initCalculator();
initReveal();
initParallax();
initGallery();
