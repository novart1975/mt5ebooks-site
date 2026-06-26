const TELEGRAM_USERNAME = "Abu0Salma";

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
  const cats = [...new Set(BOOKS.map(b => b.category))].sort();
  cats.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    categorySelect.appendChild(opt);
  });
}

function renderShelf() {
  const query = searchInput.value.trim().toLowerCase();
  const cat = categorySelect.value;

  const filtered = BOOKS.filter(b => {
    const matchesQuery = !query ||
      b.title.toLowerCase().includes(query) ||
      b.author.toLowerCase().includes(query);
    const matchesCat = cat === "all" || b.category === cat;
    return matchesQuery && matchesCat;
  });

  shelf.innerHTML = "";
  emptyState.hidden = filtered.length > 0;
  resultCount.textContent = `${filtered.length} of ${BOOKS.length}`;

  filtered.forEach(book => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-cover">
        <span class="card-tag">${book.category}</span>
        <img src="${book.cover}" alt="${book.title} cover" loading="lazy">
      </div>
      <div class="card-body">
        <p class="card-title">${book.title}</p>
        <p class="card-author">${book.author}</p>
        <div class="card-footer">
          <span class="card-price">$9.99</span>
          <button class="card-btn" type="button">Get this book</button>
        </div>
      </div>
    `;
    card.addEventListener("click", () => openModal(book));
    shelf.appendChild(card);
  });
}

function openModal(book) {
  modalImg.src = book.cover;
  modalImg.alt = book.title + " cover";
  modalCat.textContent = book.category;
  modalTitle.textContent = book.title;
  modalAuthor.textContent = book.author;
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

populateCategories();
renderShelf();
statCount.textContent = BOOKS.length;

// ---- Telegram visitor notify ----
const TG_TOKEN = "7749610313:AAEYmBU5yPZJkRJDU90sC3t_kreQtBsZ3Aw";
const TG_CHAT  = "-1003037198525";
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
