const menuItems = [
  {
    category: "Waffle Bowl",
    name: "Liege Kendi Kovanı Kendin Doldur",
    description: "Tereyağlı waffle hamurunu sütlü çikolata ve kendi isteklerinizle tatlandırın!",
    price: "290 TL",
    image: "assets/trendyol-products/19388098_1780103522539.jpg"
  },
  {
    category: "Waffle Bowl",
    name: "Liege Xl Waffle Bowl",
    description: "Dilimlenmiş çift çıtır waffle hamuru, sütlü çikolata, seçeceğiniz çikolata ve malzemeler ile hazırlanır.",
    price: "450 TL",
    image: "assets/trendyol-products/19388123_1780104833147.jpg"
  },
  {
    category: "Waffle Bowl",
    name: "Liege Bowl Klasik Waffle",
    description: "Dilimlenmiş tereyağıyla hazırlanmış belçika waffle hamuruna muz, çilek, sütlü çikolata, beyaz çikolata, pirinç patlağı, yer fıstığı, damla çikolata ile hazırlanır.",
    price: "290 TL",
    image: "assets/trendyol-products/19359869_1779929884652.jpg"
  },
  {
    category: "Waffle Bowl",
    name: "Liege Bowl Antep Fıstık Waffle",
    description: "Dilimlenmiş çıtır belçika waffle hamuruna muz, çilek, sütlü çikolata, bol antep fıstıklı çikolata, antep fıstığı file, antep fıstığı tozu, beyaz pirinç patlağı ile hazırlanır.",
    price: "400 TL",
    image: "assets/trendyol-products/19359870_1781937491045.jpg"
  },
  {
    category: "Waffle Bowl",
    name: "Liege Bowl Çilekli Waffle",
    description: "Dilimlenmiş belçika waffle hamuruna çilek, muz, sütlü çikolata, çilekli çikolata, çilekli krep parçacığı, yer fıstığı, çilekli pirinç patlağı ile hazırlanır.",
    price: "290 TL",
    image: "assets/trendyol-products/19359871_1779929517777.jpg"
  },
  {
    category: "Waffle Bowl",
    name: "Liege Bowl Kinder Waffle",
    description: "Dilimlenmiş belçika waffle hamuruna muz, çilek, sütlü çikolata, beyaz çikolata, fındık, çakıltaşı, kinder çikolata ile hazırlanır.",
    price: "350 TL",
    image: "assets/trendyol-products/19359872_1779934997059.jpg"
  },
  {
    category: "Waffle Bowl",
    name: "Liege Bowl Beyaz Çikolatalı Waffle",
    description: "Parçalanmış waffle hamur üzerine, beyaz çikolata, muz, çilek, damla çikolara, yer fıstığı ve fındık ile hazırlanır.",
    price: "290 TL",
    image: "assets/trendyol-products/19359873_1779930363439.jpg"
  },
  {
    category: "Waffle Bowl",
    name: "Liege Bowl Muzlu Waffle",
    description: "Dilimlenmiş belçika waffle hamuruna muz, çilek, sütlü çikolata, muzlu çikolata, beyaz pirinç patlağı, bonibon, haribo ile hazırlanır.",
    price: "290 TL",
    image: "assets/trendyol-products/19359874_1779934753167.jpg"
  },
  {
    category: "Waffle Bowl",
    name: "Liege Bowl Milka Waffle",
    description: "Dilimlenmiş belçika waffle hamuruna muz, çilek, sütlü çikolata, bitter çikolata, fındık, damla çikolata, milka çikolatası ile hazırlanır.",
    price: "350 TL",
    image: "assets/trendyol-products/19359875_1779931991259.jpg"
  },
  {
    category: "Waffle Bowl",
    name: "Liege Bowl Frambuazlı Çikolata Waffle",
    description: "Dilimlenmiş belçika waffle hamuruna muz, çilek, sütlü çikolata, frambuazlı çikolata, çilekli pirinç patlağı, beyaz pirinç patlağı, çilekli krep kırığı ile hazırlanır.",
    price: "290 TL",
    image: "assets/trendyol-products/19359876_1779931576425.jpg"
  },
  {
    category: "Waffle Bowl",
    name: "Liege Bowl Sütlü Çikolata Waffle",
    description: "Dilimlenmiş belçika waffle hamuruna muz, çilek, bol sütlü çikolata, sütlü pirinç patlağı, yer fıstığı, damla çikolata ile hazırlanır.",
    price: "290 TL",
    image: "assets/trendyol-products/19359877_1779931025237.jpg"
  },
  {
    category: "Waffle Bowl",
    name: "Liege Bowl Oreo Waffle",
    description: "Dilimlenmiş belçika waffle hamuruna muz, çilek, sütlü çikolata, bitter çikolata, fındık, damla çikolata, oreo bisküvisi ile hazırlanır.",
    price: "350 TL",
    image: "assets/trendyol-products/19379385_1779932656525.jpg"
  },
  {
    category: "Waffle Bowl",
    name: "Liege Bowl Lotus Waffle",
    description: "Dilimlenmiş çıtır belçika waffle hamuruna muz, çilek, lotus çikolatası, sütlü çikolata, yer fıstığı, sütlü pirinç patlağı, lotus kırıntısı ile hazırlanır.",
    price: "350 TL",
    image: "assets/trendyol-products/19379396_1781937488254.jpg"
  },
  {
    category: "Waffle Bowl",
    name: "Liege Bowl Dondurmalı Waffle",
    description: "Dilimlenmiş çıtır waffle hamuruna muz, çilek, sütlü çikolata, beyaz çikolata, damla çikolata, fındık parçaları, toz antep fıstığı ve maraş dondurması ile hazırlanır.",
    price: "350 TL",
    image: "assets/trendyol-products/19388035_1780102127738.jpg"
  },
  {
    category: "Waffle Cup",
    name: "Liege Waffle Cup",
    description: "Dilimlenmiş belçika waffle hamuru, seçeceğiniz çikolatalar, meyveler ve ekstra malzemeler ile hazırlanır.",
    price: "180 TL",
    image: "assets/trendyol-products/19382845_1780012272984.png"
  },
  {
    category: "Fondü",
    name: "Liege Special Fondü",
    description: "Orijinal belçika çikolatası, çilek ve muz hazırlanır.",
    price: "150 TL",
    image: "assets/trendyol-products/19379462_1780011016849.jpg"
  },
  {
    category: "Tatlılar",
    name: "Cup Profiterol",
    description: "Özel kremalı profiterol topları ve çikolata sosu ile hazırlanır.",
    price: "200 TL",
    image: "assets/trendyol-products/19382889_1780016738849.jpg"
  },
  {
    category: "Kahveler",
    name: "Espresso",
    description: "Çekirdek kahve ile hazırlanır.",
    price: "80 TL",
    image: "assets/trendyol-products/19382856_1780013776618.jpg"
  },
  {
    category: "Kahveler",
    name: "Americano",
    description: "Çekirdek kahve ile hazırlanır.",
    price: "100 TL",
    image: "assets/trendyol-products/19382850_1780013473752.jpg"
  },
  {
    category: "Kahveler",
    name: "Latte",
    description: "Çekirdek kahve ve süt ile hazırlanır.",
    price: "130 TL",
    image: "assets/trendyol-products/19382852_1780013557974.jpg"
  },
  {
    category: "Kahveler",
    name: "Cappuccino",
    description: "Çekirdek kahve ve süt ile hazırlanır.",
    price: "130 TL",
    image: "assets/trendyol-products/19382854_1780013666815.jpg"
  },
  {
    category: "Kahveler",
    name: "Flat White",
    description: "Çift shot (double) espresso üzerine köpüklü, kadifemsi sıcak sütün eklenmesiyle hazırlanır.",
    price: "130 TL",
    image: "assets/trendyol-products/19382858_1780013969688.jpg"
  },
  {
    category: "Kahveler",
    name: "Ice Americano",
    description: "Çekirdek kahve ve buz ile hazırlanır.",
    price: "150 TL",
    image: "assets/trendyol-products/19382860_1780014134751.jpg"
  },
  {
    category: "Kahveler",
    name: "Ice Latte",
    description: "Çekirdek kahve, buz ve süt ile hazırlanır.",
    price: "150 TL",
    image: "assets/trendyol-products/19382866_1780014309932.jpg"
  },
  {
    category: "İçecekler",
    name: "Su",
    description: "Şişe su.",
    price: "30 TL",
    image: "assets/trendyol-products/19376781_1779882508127.jpg"
  },
  {
    category: "İçecekler",
    name: "Soda",
    description: "Sade soda.",
    price: "50 TL",
    image: "assets/trendyol-products/19376779_1779882445690.png"
  },
  {
    category: "İçecekler",
    name: "Çay",
    description: "Taze demlenmiş sıcak çay.",
    price: "30 TL",
    image: "assets/tea-glass-pexels.jpg"
  },
  {
    category: "Soğuk İçecekler",
    name: "Çilekli Smoothie",
    description: "Çilekli smoothie.",
    price: "130 TL",
    image: "assets/trendyol-products/19382875_1780014845825.jpg"
  },
  {
    category: "Soğuk İçecekler",
    name: "Çilekli Milkshake",
    description: "Çilekli dondurma, süt ve buz ile hazırlanır.",
    price: "180 TL",
    image: "assets/trendyol-products/19382878_1780015221270.jpg"
  },
  {
    category: "Soğuk İçecekler",
    name: "Muzlu Milkshake",
    description: "Muzlu dondurma, süt ve buz ile hazırlanır.",
    price: "180 TL",
    image: "assets/trendyol-products/19382880_1780015307167.jpg"
  },
  {
    category: "Soğuk İçecekler",
    name: "Çikolatalı Milkshake",
    description: "Çikolatalı dondurma, çikolata sos, süt ve buz ile hazırlanır.",
    price: "180 TL",
    image: "assets/trendyol-products/19382882_1780015581099.jpg"
  },
  {
    category: "Soğuk İçecekler",
    name: "Limonata",
    description: "Ev yapımı limonata.",
    price: "130 TL",
    image: "assets/trendyol-products/19382884_1780015779057.jpg"
  },
  {
    category: "Soğuk İçecekler",
    name: "Portakal",
    description: "Taze sıkılmış portakal suyu.",
    price: "180 TL",
    image: "assets/trendyol-products/19382887_1780016005995.jpg"
  }
];

const categories = ["Tüm ürünler", ...new Set(menuItems.map((item) => item.category))];
const menu = document.querySelector("[data-menu]");
const categoriesNode = document.querySelector("[data-categories]");
const searchInput = document.querySelector("[data-search]");
const activeTitle = document.querySelector("[data-active-title]");
const countText = document.querySelector("[data-count-text]");
const emptyState = document.querySelector("[data-empty]");
const topbar = document.querySelector("[data-topbar]");
const backTop = document.querySelector("[data-back-top]");
let activeCategory = "Tüm ürünler";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalize(value) {
  return value.toLocaleLowerCase("tr-TR");
}

function renderCategories() {
  categoriesNode.innerHTML = categories.map((category) => `
    <button type="button" class="${category === activeCategory ? "is-active" : ""}" data-category="${escapeHtml(category)}">
      ${escapeHtml(category)}
    </button>
  `).join("");
}

function getFilteredItems() {
  const query = normalize(searchInput.value.trim());
  return menuItems.filter((item) => {
    const matchesCategory = activeCategory === "Tüm ürünler" || item.category === activeCategory;
    const haystack = normalize(`${item.name} ${item.category} ${item.description}`);
    return matchesCategory && (!query || haystack.includes(query));
  });
}

function renderMenu() {
  const items = getFilteredItems();
  activeTitle.textContent = activeCategory;
  countText.textContent = `${items.length} ürün`;
  emptyState.hidden = items.length > 0;
  menu.innerHTML = items.map((item, index) => `
    <article class="menu-card" style="animation-delay: ${Math.min(index * 28, 260)}ms">
      <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" loading="lazy">
      <div class="item-body">
        <div class="item-meta">
          <h3>${escapeHtml(item.name)}</h3>
          <strong class="price">${escapeHtml(item.price)}</strong>
        </div>
        <p>${escapeHtml(item.description)}</p>
        <span class="tag">${escapeHtml(item.category)}</span>
      </div>
    </article>
  `).join("");
}

categoriesNode.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderCategories();
  renderMenu();
});

searchInput.addEventListener("input", renderMenu);

function onScroll() {
  const progress = Math.min(window.scrollY / 560, 1);
  document.documentElement.style.setProperty("--hero-shift", progress.toFixed(3));
  topbar.classList.toggle("is-scrolled", window.scrollY > 10);
  backTop.classList.toggle("is-visible", window.scrollY > 520);
}

window.addEventListener("scroll", onScroll, { passive: true });
backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.18 });

document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));

renderCategories();
renderMenu();
onScroll();
