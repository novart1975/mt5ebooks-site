// =========================================
// 1. PRODUCT DATA
// =========================================
const productsData = [
    {
        id: 1,
        title: "مجموعة نوفا UI",
        category: "واجهات UI",
        price: 79,
        rating: 4.9,
        desc: "نظام تصميم متكامل مع 300+ مكون تفاعلي للويب",
        icon: "🎨",
        popular: 95
    },
    {
        id: 2,
        title: "دليل التصميم 2025",
        category: "كتب إلكترونية",
        price: 49,
        rating: 4.8,
        desc: "دليل شامل لأحدث اتجاهات التصميم الرقمي",
        icon: "📚",
        popular: 88
    },
    {
        id: 3,
        title: "قوالب التسويق الاحترافية",
        category: "قوالب",
        price: 39,
        rating: 4.7,
        desc: "20 قالب تسويقي جاهز للتعديل مع جميع التنسيقات",
        icon: "📊",
        popular: 82
    },
    {
        id: 4,
        title: "دورة تطوير الواجهات",
        category: "دورات",
        price: 149,
        rating: 4.9,
        desc: "دورة متكاملة من الصفر إلى الاحتراف في تصميم الواجهات",
        icon: "🎓",
        popular: 97
    },
    {
        id: 5,
        title: "أدوات التحليل الذكية",
        category: "برمجيات",
        price: 199,
        rating: 4.6,
        desc: "مجموعة أدوات لتحليل البيانات واتخاذ القرارات الذكية",
        icon: "📈",
        popular: 75
    },
    {
        id: 6,
        title: "أيقونات احترافية 2000+",
        category: "أصول تصميم",
        price: 59,
        rating: 4.8,
        desc: "مجموعة ضخمة من الأيقونات بجودة عالية لجميع المشاريع",
        icon: "🖼️",
        popular: 90
    },
    {
        id: 7,
        title: "قالب المتجر الإلكتروني",
        category: "قوالب",
        price: 89,
        rating: 4.7,
        desc: "قالب متكامل للمتاجر الإلكترونية مع لوحة تحكم",
        icon: "🛒",
        popular: 85
    },
    {
        id: 8,
        title: "دورة البرمجة للمبتدئين",
        category: "دورات",
        price: 129,
        rating: 4.9,
        desc: "دورة شاملة لتعلم البرمجة من الصفر إلى الاحتراف",
        icon: "💻",
        popular: 92
    },
    {
        id: 9,
        title: "مجموعة أدوات المصمم",
        category: "أصول تصميم",
        price: 69,
        rating: 4.6,
        desc: "كل ما يحتاجه المصمم من أدوات وقوالب احترافية",
        icon: "✏️",
        popular: 78
    }
];

// =========================================
// 2. CATEGORIES DATA
// =========================================
const categoriesData = [
    { name: "واجهات UI", icon: "🎨" },
    { name: "كتب إلكترونية", icon: "📚" },
    { name: "قوالب", icon: "📊" },
    { name: "دورات", icon: "🎓" },
    { name: "برمجيات", icon: "💻" },
    { name: "أصول تصميم", icon: "🖼️" }
];

// =========================================
// 3. RENDER FUNCTIONS
// =========================================
function renderProducts(products) {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    grid.innerHTML = products.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-icon">${product.icon}</div>
            <div class="product-category">${product.category}</div>
            <div class="product-title">${product.title}</div>
            <div class="product-desc">${product.desc}</div>
            <div class="product-meta">
                <span class="product-price">$${product.price}</span>
                <span class="product-rating">★ ${product.rating}</span>
            </div>
            <div class="product-actions">
                <button class="btn-buy" data-id="${product.id}">اشتري الآن</button>
                <button class="btn-fav" data-id="${product.id}">♡</button>
            </div>
        </div>
    `).join('');

    // Add event listeners to buy buttons
    document.querySelectorAll('.btn-buy').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = this.dataset.id;
            const product = products.find(p => p.id == id);
            if (product) {
                alert(`تم إضافة "${product.title}" إلى سلة التسوق!`);
            }
        });
    });

    // Add event listeners to favorite buttons
    document.querySelectorAll('.btn-fav').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            this.textContent = this.textContent === '♡' ? '♥' : '♡';
            this.style.color = this.textContent === '♥' ? 'var(--accent-blue)' : '';
        });
    });
}

function renderCategories(categories) {
    const grid = document.getElementById('categoryGrid');
    if (!grid) return;

    grid.innerHTML = categories.map(category => `
        <div class="category-card" data-category="${category.name}">
            <span class="category-icon">${category.icon}</span>
            <div class="category-name">${category.name}</div>
        </div>
    `).join('');

    // Add click event to filter by category
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            const filterSelect = document.getElementById('categoryFilter');
            if (filterSelect) {
                filterSelect.value = category;
                filterSelect.dispatchEvent(new Event('change'));
            }
            // Scroll to discovery section
            document.getElementById('discovery').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function renderDiscoveryResults(products) {
    const container = document.getElementById('discoveryResults');
    if (!container) return;

    if (products.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">لا توجد منتجات مطابقة للبحث</p>`;
        return;
    }

    container.innerHTML = products.map(product => `
        <div class="discovery-card" data-id="${product.id}">
            <div class="product-icon">${product.icon}</div>
            <div class="product-category">${product.category}</div>
            <div class="product-title">${product.title}</div>
            <div class="product-meta">
                <span class="product-price">$${product.price}</span>
                <span class="product-rating">★ ${product.rating}</span>
            </div>
        </div>
    `).join('');

    // Add click to show product details
    document.querySelectorAll('.discovery-card').forEach(card => {
        card.addEventListener('click', function() {
            const id = this.dataset.id;
            const product = products.find(p => p.id == id);
            if (product) {
                alert(`📦 ${product.title}\n📂 ${product.category}\n💰 $${product.price}\n⭐ ${product.rating}\n📝 ${product.desc}`);
            }
        });
    });
}

// =========================================
// 4. SEARCH & FILTER
// =========================================
function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    const sortFilter = document.getElementById('sortFilter').value;

    let filtered = productsData.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchTerm) || 
                             product.desc.toLowerCase().includes(searchTerm);
        const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });

    // Sort
    switch(sortFilter) {
        case 'popular':
            filtered.sort((a, b) => b.popular - a.popular);
            break;
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        default:
            break;
    }

    renderDiscoveryResults(filtered);
}

// =========================================
// 5. NAVIGATION - LIQUID GLASS PILL
// =========================================
function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const activePill = document.getElementById('activePill');
    const nav = document.getElementById('nav');
    const glare = document.getElementById('glare');

    if (!navButtons.length || !activePill) return;

    function updatePill(btn, smooth = true) {
        if (!btn) return;
        
        if (!smooth) {
            activePill.style.transition = 'none';
        } else {
            activePill.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.2, 0.64, 1), width 0.5s cubic-bezier(0.34, 1.2, 0.64, 1), background 0.5s ease, box-shadow 0.5s ease';
        }
        
        const navItems = btn.parentElement;
        const btnRect = btn.getBoundingClientRect();
        const containerRect = navItems.getBoundingClientRect();
        
        activePill.style.width = btn.offsetWidth + 'px';
        
        // RTL support
        if (document.documentElement.dir === 'rtl') {
            const rightPos = containerRect.width - btn.offsetLeft - btn.offsetWidth;
            activePill.style.transform = `translateX(${rightPos}px)`;
        } else {
            activePill.style.transform = `translateX(${btn.offsetLeft}px)`;
        }
        
        // Force reflow
        if (!smooth) {
            void activePill.offsetWidth;
        }
    }

    // Set initial position
    const initialActive = document.querySelector('.nav-btn.active');
    if (initialActive) {
        setTimeout(() => {
            updatePill(initialActive, false);
        }, 50);
    }

    // Handle click
    navButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            navButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            updatePill(this);
            
            // Scroll to target section
            const target = this.dataset.target;
            if (target) {
                const section = document.getElementById(target);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Handle resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const active = document.querySelector('.nav-btn.active');
            if (active) updatePill(active, false);
        }, 100);
    });

    // Glare effect
    if (nav && glare) {
        nav.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            glare.style.setProperty('--x', x + 'px');
            glare.style.setProperty('--y', y + 'px');
        });

        // Touch support
        nav.addEventListener('touchmove', function(e) {
            const touch = e.touches[0];
            if (touch) {
                const rect = this.getBoundingClientRect();
                const x = touch.clientX - rect.left;
                const y = touch.clientY - rect.top;
                glare.style.setProperty('--x', x + 'px');
                glare.style.setProperty('--y', y + 'px');
            }
        }, { passive: true });
    }
}

// =========================================
// 6. THEME SWITCH
// =========================================
function setupTheme() {
    const themeBtn = document.getElementById('themeBtn');
    if (!themeBtn) return;

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    themeBtn.addEventListener('click', function() {
        const root = document.documentElement;
        const isDark = root.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        root.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update pill position after theme change
        setTimeout(() => {
            const active = document.querySelector('.nav-btn.active');
            const activePill = document.getElementById('activePill');
            if (active && activePill) {
                const navItems = active.parentElement;
                const containerRect = navItems.getBoundingClientRect();
                activePill.style.width = active.offsetWidth + 'px';
                if (document.documentElement.dir === 'rtl') {
                    const rightPos = containerRect.width - active.offsetLeft - active.offsetWidth;
                    activePill.style.transform = `translateX(${rightPos}px)`;
                } else {
                    activePill.style.transform = `translateX(${active.offsetLeft}px)`;
                }
            }
        }, 100);
    });
}

// =========================================
// 7. INITIALIZATION
// =========================================
document.addEventListener('DOMContentLoaded', function() {
    // Render products
    renderProducts(productsData);
    
    // Render categories
    renderCategories(categoriesData);
    
    // Render discovery results (initial)
    renderDiscoveryResults(productsData);
    
    // Setup navigation
    setupNavigation();
    
    // Setup theme
    setupTheme();
    
    // Setup search and filter
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
    }
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterProducts);
    }
    if (sortFilter) {
        sortFilter.addEventListener('change', filterProducts);
    }
    if (searchBtn) {
        searchBtn.addEventListener('click', filterProducts);
    }
    
    // Handle Enter key on search
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                filterProducts();
            }
        });
    }
});

// =========================================
// 8. ERROR HANDLING
// =========================================
// Global error handler for any runtime errors
window.addEventListener('error', function(e) {
    console.warn('Runtime error caught:', e.message);
});

// Handle any uncaught promise rejections
window.addEventListener('unhandledrejection', function(e) {
    console.warn('Unhandled promise rejection:', e.reason);
});