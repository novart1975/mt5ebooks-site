const TELEGRAM_USERNAME = "Abu0Salma";

// ---- Language state ----
const LANG_STORAGE_KEY = "mt5ebooks_lang";

function detectInitialLang() {
  const saved = localStorage.getItem(LANG_STORAGE_KEY);
  if (saved === "en" || saved === "ar") return saved;
  const nav = (navigator.language || navigator.userLanguage || "").toLowerCase();
  return nav.startsWith("ar") ? "ar" : "en";
}

let currentLang = detectInitialLang();

function getBookTitle(book, idx) {
  if (currentLang === "ar" && typeof BOOKS_AR !== "undefined" && BOOKS_AR[idx] && BOOKS_AR[idx].title) {
    return BOOKS_AR[idx].title;
  }
  return book.title;
}
function getBookAuthor(book, idx) {
  if (currentLang === "ar" && typeof BOOKS_AR !== "undefined" && BOOKS_AR[idx] && BOOKS_AR[idx].author) {
    return BOOKS_AR[idx].author;
  }
  return book.author;
}
function getCategoryLabel(cat) {
  if (currentLang === "ar" && typeof CATEGORY_AR !== "undefined" && CATEGORY_AR[cat]) {
    return CATEGORY_AR[cat];
  }
  return cat;
}

function applyStaticTranslations() {
  const dict = I18N[currentLang];
  document.documentElement.setAttribute("dir", currentLang === "ar" ? "rtl" : "ltr");
  document.documentElement.setAttribute("lang", currentLang === "ar" ? "ar" : "en");
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });
  const toggleBtn = document.getElementById("lang-toggle");
  if (toggleBtn) toggleBtn.textContent = currentLang === "ar" ? "EN" : "AR";
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_STORAGE_KEY, lang);
  applyStaticTranslations();
  populateCategories();
  renderShelf();
}

const shelf = document.getElementById("shelf");
const emptyState = document.getElementById("empty-state");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category-filter");
const resultCount = document.getElementById("result-count");
const statCount = document.getElementById("stat-count");

const modalOverlay = document.getElementById("modal-overlay");
const modalImg = document.getElementById("modal-img");
const modalCat = document.getElementById("modal-cat");
const modalTitle = document.getElementById("modal-title");
const modalAuthor = document.getElementById("modal-author");
const modalClose = document.getElementById("modal-close");
const modalTelegram = document.getElementById("modal-telegram");

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 60);
}

function telegramLink(book) {
  if (book) {
    return `https://t.me/${TELEGRAM_USERNAME}?start=${slugify(book.title)}`;
  }
  return `https://t.me/${TELEGRAM_USERNAME}`;
}

function populateCategories() {
  const previousValue = categorySelect.value || "all";
  // remove all but the first ("All categories") option
  while (categorySelect.options.length > 1) categorySelect.remove(1);
  const cats = [...new Set(BOOKS.map(b => b.category))].sort();
  cats.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = getCategoryLabel(cat);
    categorySelect.appendChild(opt);
  });
  categorySelect.value = previousValue;
}

function renderShelf() {
  const query = searchInput.value.trim().toLowerCase();
  const cat = categorySelect.value;
  const dict = I18N[currentLang];

  const filtered = BOOKS
    .map((b, idx) => ({ book: b, idx }))
    .filter(({ book: b, idx }) => {
      const arEntry = (typeof BOOKS_AR !== "undefined") ? BOOKS_AR[idx] : undefined;
      const matchesQuery = !query ||
        b.title.toLowerCase().includes(query) ||
        b.author.toLowerCase().includes(query) ||
        (arEntry && arEntry.title && arEntry.title.includes(query)) ||
        (arEntry && arEntry.author && arEntry.author.includes(query));
      const matchesCat = cat === "all" || b.category === cat;
      return matchesQuery && matchesCat;
    });

  shelf.innerHTML = "";
  emptyState.hidden = filtered.length > 0;
  resultCount.textContent = `${filtered.length} ${dict.resultOf} ${BOOKS.length}`;

  filtered.forEach(({ book, idx }) => {
    const displayTitle = getBookTitle(book, idx);
    const displayAuthor = getBookAuthor(book, idx);
    const displayCat = getCategoryLabel(book.category);
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-cover">
        <span class="card-tag">${displayCat}</span>
        <img src="${book.cover}" alt="${displayTitle} cover" loading="lazy">
      </div>
      <div class="card-body">
        <p class="card-title">${displayTitle}</p>
        <p class="card-author">${displayAuthor}</p>
        <div class="card-footer">
          <span class="card-price">$9.99</span>
          <button class="card-btn" type="button">${dict.getThisBook}</button>
        </div>
      </div>
    `;
    card.addEventListener("click", () => openModal(book, idx));
    shelf.appendChild(card);
  });
}

function openModal(book, idx) {
  const displayTitle = getBookTitle(book, idx);
  const displayAuthor = getBookAuthor(book, idx);
  const displayCat = getCategoryLabel(book.category);
  modalImg.src = book.cover;
  modalImg.alt = displayTitle + " cover";
  modalCat.textContent = displayCat;
  modalTitle.textContent = displayTitle;
  modalAuthor.textContent = displayAuthor;
  modalTelegram.href = telegramLink(book);
  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

searchInput.addEventListener("input", renderShelf);
categorySelect.addEventListener("change", renderShelf);

document.getElementById("telegram-link").href = telegramLink();

document.getElementById("lang-toggle").addEventListener("click", () => {
  setLang(currentLang === "ar" ? "en" : "ar");
});

applyStaticTranslations();
populateCategories();
renderShelf();
statCount.textContent = BOOKS.length;

// ---- Telegram visitor notify ----
const TG_TOKEN = "8965184177:AAFM9n86nDP_yOIAJOBHwTt5Ncvgh8ghzVQ";
   const TG_CHAT  = "-5578337872";
const visitStart = Date.now();

function getBrowser() {
  const ua = navigator.userAgent;
  if (ua.includes("Edg"))     return "Edge";
  if (ua.includes("Chrome"))  return "Chrome";
  if (ua.includes("Firefox")) return "Firefox";
  if (ua.includes("Safari"))  return "Safari";
  if (ua.includes("Opera"))   return "Opera";
  return "غير معروف";
}
function getOS() {
  const ua = navigator.userAgent;
  if (ua.includes("Windows")) return "Windows";
  if (ua.includes("iPhone"))  return "iPhone";
  if (ua.includes("iPad"))    return "iPad";
  if (ua.includes("Android")) return "Android";
  if (ua.includes("Mac"))     return "Mac";
  if (ua.includes("Linux"))   return "Linux";
  return "غير معروف";
}
function getDevice() {
  return /Mobi|Android/i.test(navigator.userAgent) ? "جوال" : "كمبيوتر";
}
function getSource() {
  const ref = document.referrer;
  if (!ref) return "مباشر";
  if (ref.includes("google"))   return "Google";
  if (ref.includes("facebook")) return "Facebook";
  if (ref.includes("telegram")) return "تيليغرام";
  if (ref.includes("youtube"))  return "YouTube";
  if (ref.includes("instagram"))return "Instagram";
  if (ref.includes("twitter") || ref.includes("x.com")) return "Twitter/X";
  return ref.split("/")[2];
}
async function sendTG(msg) {
  try {
    await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: TG_CHAT, text: msg, parse_mode: "Markdown" })
    });
  } catch (e) {}
}
async function notifyTelegram() {
  try {
    const now = new Date();
    let country = "غير معروف", city = "";
    try {
      const geo = await fetch("https://ipapi.co/json/");
      const d = await geo.json();
      country = d.country_name || "غير معروف";
      city = d.city || "";
    } catch (e) {}
    await sendTG(
      "زائر جديد على mt5ebooks.com\n" +
      "----------------\n" +
      "الدولة: " + country + (city ? " - " + city : "") + "\n" +
      getDevice() + " | " + getOS() + "\n" +
      "المتصفح: " + getBrowser() + "\n" +
      "المصدر: " + getSource() + "\n" +
      "الوقت: " + now.toLocaleTimeString("ar-EG") + "\n" +
      "التاريخ: " + now.toLocaleDateString("ar-EG")
    );
  } catch (e) {}
}
window.addEventListener("beforeunload", () => {
  const dur = Math.round((Date.now() - visitStart) / 1000);
  navigator.sendBeacon(
    `https://api.telegram.org/bot${TG_TOKEN}/sendMessage`,
    JSON.stringify({
      chat_id: TG_CHAT,
      text: "مغادرة زائر - mt5ebooks.com\nمدة الزيارة: " + Math.floor(dur / 60) + "د " + (dur % 60) + "ث"
    })
  );
});

window.addEventListener("DOMContentLoaded", () => {
  notifyTelegram();
});
