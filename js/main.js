// ==================== 暗黑模式切换 ====================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// 检查本地存储的主题设置
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    html.setAttribute('data-theme', currentTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // 如果用户系统偏好是暗黑模式，自动启用
    html.setAttribute('data-theme', 'dark');
}

// 主题切换事件
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // 更新导航栏滚动效果
    updateNavbarScroll();
});

// 更新导航栏滚动效果（适配暗黑模式）
function updateNavbarScroll() {
    const isDark = html.getAttribute('data-theme') === 'dark';
    const bgColor = isDark ? 'rgba(26, 26, 26, 0.98)' : 'rgba(255, 255, 255, 0.98)';
    const bgFadeColor = isDark ? 'rgba(26, 26, 26, 0.95)' : 'rgba(255, 255, 255, 0.95)';

    if (window.scrollY > 100) {
        navbar.style.backgroundColor = bgColor;
    } else {
        navbar.style.backgroundColor = bgFadeColor;
    }
}

// ==================== 导航栏交互 ====================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// 滚动时导航栏效果
window.addEventListener('scroll', () => {
    updateNavbarScroll();
});

// 移动端菜单切换
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // 汉堡动画
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// 点击菜单项后关闭移动端菜单
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ==================== 菜单标签切换 ====================
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');

        // 移除所有活动状态
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        // 添加当前活动状态
        btn.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// ==================== 滚动动画 ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 观察所有卡片元素
document.querySelectorAll('.about-card, .menu-item, .service-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ==================== 平滑滚动增强 ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // 考虑导航栏高度
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== 页面加载动画 ====================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
        // 初始化导航栏颜色
        updateNavbarScroll();
    }, 100);
});

// ==================== Hero 轮播功能 ====================
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    // 移除所有活动状态
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // 添加当前活动状态
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
}

function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000); // 每5秒切换
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

// 点击圆点切换
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        stopSlideShow();
        showSlide(index);
        startSlideShow();
    });
});

// 鼠标悬停暂停轮播
const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroSection.addEventListener('mouseenter', stopSlideShow);
    heroSection.addEventListener('mouseleave', startSlideShow);
}

// 启动轮播
startSlideShow();

// ==================== 响应式处理 ====================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // 关闭移动端菜单（如果打开）
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }, 250);
});

// ==================== Console 欢迎消息 ====================
console.log('%c🔥 歡迎來到夯肉 HANGROU！', 'color: #D32F2F; font-size: 24px; font-weight: bold;');
console.log('%c日式炭火燒烤餐車包車服務', 'color: #FFA726; font-size: 16px;');
console.log('%c💡 提示：點擊右上角圖示可切換暗黑模式', 'color: #666; font-size: 12px;');
