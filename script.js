const services = [
    { name: "Tap & Valve Repair", price: "₹249", icon: "🚰", desc: "Fixing leaks and replacing parts." },
    { name: "Pipe Blockage Clear", price: "₹349", icon: "🔧", desc: "Advanced drain cleaning services." },
    { name: "Water Tank Setup", price: "₹599", icon: "🏗️", desc: "Connections and sanitization." },
    { name: "Complete Bath Fitting", price: "₹1299", icon: "🚿", desc: "Luxury fixtures installation." },
    { name: "Frozen Line Rescue", price: "₹699", icon: "❄️", desc: "Thermal thawing for winters." },
    { name: "Geyser Maintenance", price: "₹450", icon: "🔥", desc: "Scaling and heating checks." }
];

const expertPlumbers = [
    { name: "Abid Hussain", location: "Srinagar (Lal Chowk)", rating: 4.9, exp: "12 yrs", bio: "Senior repair specialist for pre-independence heritage plumbing.", avatar: "👨🏽‍🔧" },
    { name: "Rajinder Sharma", location: "Jammu (Gandhi Nagar)", rating: 4.8, exp: "15 yrs", bio: "Industrial installation expert for commercial buildings.", avatar: "👨🏼‍🔧" },
    { name: "Sajad Ahmed", location: "Anantnag", rating: 4.7, exp: "8 yrs", bio: "Master of winter shielding and thermal line thawing.", avatar: "👨🏾‍🔧" },
    { name: "Vikram Kohli", location: "Udhampur", rating: 4.9, exp: "10 yrs", bio: "Sanitaryware and luxury bathroom fitting professional.", avatar: "👨🏻‍🔧" },
    { name: "Bilal Lone", location: "Baramulla", rating: 4.6, exp: "6 yrs", bio: "Rapid response expert for urban residential leaks.", avatar: "👨🏽‍🔧" },
    { name: "Kuldeep Singh", location: "Kathua", rating: 4.8, exp: "14 yrs", bio: "Pump motor and borewell specialist.", avatar: "👨🏼‍🔧" },
    { name: "Nasir Dar", location: "Budgam", rating: 4.9, exp: "5 yrs", bio: "Drainage and waste-management design expert.", avatar: "👨🏾‍🔧" },
    { name: "Mohd. Shakeel", location: "Rajouri", rating: 4.7, exp: "9 yrs", bio: "Pipeline network designer for hilly terrains.", avatar: "👨🏽‍🔧" },
    { name: "Amit Gupta", location: "Jammu (Janipur)", rating: 4.8, exp: "11 yrs", bio: "Expert in modern shower systems and geysers.", avatar: "👨🏻‍🔧" },
    { name: "Irfan Ganai", location: "Srinagar (Hyderpora)", rating: 4.9, exp: "7 yrs", bio: "Residential maintenance and water purification setup.", avatar: "👨🏾‍🔧" }
];

const translations = {
    en: {
        heroTitle: "EXPERIENCE ELITE PLUMBING SERVICES",
        heroSub: "Trusted by 5,000+ households in Jammu & Srinagar. We guarantee a professional plumber at your doorstep with a 1-hour response promise.",
        bookLabel: "Instant Booking",
        callLabel: "Call Helpline",
        servicesHeading: "Our Dedicated Services",
        plumbersHeading: "OUR VERIFIED EXPERTS",
        lang: "EN"
    },
    hi: {
        heroTitle: "एलीट प्लंबिंग सेवाओं का अनुभव करें",
        heroSub: "जम्मू और श्रीनगर में 5,000+ परिवारों द्वारा विश्वसनीय। हम 1 घंटे में प्रतिक्रिया के वादे के साथ आपके दरवाजे पर पेशेवर प्लंबर की गारंटी देते हैं।",
        bookLabel: "तुरंत बुकिंग",
        callLabel: "हेल्पलाइन कॉल",
        servicesHeading: "हमारी समर्पित सेवाएँ",
        plumbersHeading: "हमारे सत्यापित विशेषज्ञ",
        lang: "HI"
    },
    ur: {
        heroTitle: "اعلیٰ معیار کی پلمبنگ سروسز کا تجربہ کریں",
        heroSub: "جموں اور سرینگر میں 5,000 سے زائد خاندانوں کا بھروسہ۔ ہم 1 گھنٹے کے اندر جوابی وعدے کے ساتھ آپ کی دہلیز پر پیشہ ور پلمبر کی ضمانت دیتے ہیں۔",
        bookLabel: "فوری بکنگ",
        callLabel: "ہیلپ لائن پر کال کریں۔",
        servicesHeading: "ہماری مخصوص خدمات",
        plumbersHeading: "ہمارے تصدیق شدہ ماہرین",
        lang: "UR"
    }
};

let currentLang = localStorage.getItem('jalSevaLang') || 'en';

// Sticky Header Logic
window.addEventListener('scroll', () => {
    const header = document.getElementById('mainHeader');
    if (header && window.scrollY > 50) {
        header.classList.add('scrolled');
    } else if (header) {
        header.classList.remove('scrolled');
    }
});

function renderServices() {
    const grid = document.getElementById('serviceGrid');
    if (!grid) return;
    grid.innerHTML = '';
    services.forEach(s => {
        const card = document.createElement('div');
        card.className = 'service-card fade-in';
        card.innerHTML = `
            <div class="service-icon">${s.icon}</div>
            <h3 style="margin-bottom:10px;">${s.name}</h3>
            <p style="font-size:14px; color: var(--text-muted); margin-bottom:15px;">${s.desc}</p>
            <div style="font-weight: 800; font-size: 18px; color: var(--accent-saffron);">${s.price}</div>
        `;
        grid.appendChild(card);
    });
}

function renderExperts() {
    const list = document.getElementById('plumberList');
    if (!list) return;
    list.innerHTML = '';
    expertPlumbers.forEach(p => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.style.display = 'flex';
        card.style.gap = '20px';
        card.style.alignItems = 'center';
        card.innerHTML = `
            <div style="font-size: 50px; background: var(--bg-soft); width: 100px; height: 100px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">${p.avatar}</div>
            <div style="flex: 1;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                    <h3 style="margin-bottom: 0;">${p.name}</h3>
                    <span style="background: #E3F2FD; color: #1976D2; padding: 2px 10px; border-radius: 4px; font-size: 10px; font-weight: 800;">VERIFIED</span>
                </div>
                <div style="font-size: 13px; color: var(--accent-saffron); font-weight: 700; margin-bottom: 5px;">📍 ${p.location} | ⭐ ${p.rating} | 💼 ${p.exp}</div>
                <p style="font-size: 12px; color: var(--text-muted); line-height: 1.4;">${p.bio}</p>
                <div style="margin-top: 15px;">
                    <button class="btn-premium btn-primary" style="padding: 8px 15px; font-size: 10px;">Request Selection</button>
                    <button class="btn-premium" style="padding: 8px 15px; font-size: 10px; background: white; border: 1px solid #ddd; margin-left: 5px;">View Profile</button>
                </div>
            </div>
        `;
        list.appendChild(card);
    });
}

function updateLanguage() {
    const t = translations[currentLang];
    const safeSet = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = text;
    };

    safeSet('heroTitle', (currentLang === 'en') ? 'EXPERIENCE <span>ELITE</span> PLUMBING SERVICES' : t.heroTitle);
    safeSet('heroSub', t.heroSub);
    safeSet('bookLabel', t.bookLabel);
    safeSet('callLabel', t.callLabel);
    safeSet('servicesHeading', t.servicesHeading);
    safeSet('plumbersHeading', t.plumbersHeading);
    safeSet('langBtn', t.lang);

    document.body.dir = (currentLang === 'ur') ? 'rtl' : 'ltr';
    localStorage.setItem('jalSevaLang', currentLang);
}

document.getElementById('langBtn').addEventListener('click', () => {
    const langs = ['en', 'hi', 'ur'];
    let idx = langs.indexOf(currentLang);
    currentLang = langs[(idx + 1) % langs.length];
    updateLanguage();
});

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    renderExperts();
    updateLanguage();

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    const navOverlay = document.getElementById('navOverlay');

    if (menuToggle && mainNav && navOverlay) {
        const toggleMenu = () => {
            mainNav.classList.toggle('active');
            navOverlay.classList.toggle('active');
            menuToggle.innerHTML = mainNav.classList.contains('active') ? '✕' : '☰';
        };

        menuToggle.addEventListener('click', toggleMenu);
        navOverlay.addEventListener('click', toggleMenu);

        // Close menu on link click
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
    }
});
