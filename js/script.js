// 專案資料
const projects = [
    {
        title: "營養師Line@互動管理系統",
        category: "管理系統",
        date: "2024",
        description: "協助營養師藉由Line官方帳號與個案進行互動，提供操作便利的飲食標注平台，協助個案了解三餐飲食的營養狀況，目前已與大型醫院體重管理中心簽約導入",
        features: [
            "Line@協同管理",
            "飲食報告生成",
            "提升使用者便利性",
            "客製化健康建議"
        ],
        images: [
            "templates/營養師管理系統/img1.png",
        ],
        
        // links: [
        //     {
        //         text: "了解更多",
        //         url: "#"
        //     },
        //     {
        //         text: "下載應用",
        //         url: "#"
        //     }
        // ]
    },
    {
        title: "HealthyLife",
        category: "管理系統",
        date: "2024",
        description: "HealthyLife DALY智能健康管理APP，導入創新的個人化DALY指數計算，不僅關注用戶當前的健康數據，還能預測健康狀況的發展趨勢。這個應用程序使用先進的人工智能算法來分析用戶的生活方式、飲食習慣和運動模式，從而提供個人化的健康建議和預防策略。",
        features: [
            "個人化DALY指數計算",
            "AI驅動的健康預測",
            "生活方式分析",
            "客製化健康建議",
            "運動追蹤與分析"
        ],
        images: [
            "templates/HealthyLife/img1.png",
            "templates/HealthyLife/img2.png",
        ],
        video: "https://www.youtube.com/embed/tkVHM2rVTbE",
        // links: [
        //     {
        //         text: "了解更多",
        //         url: "#"
        //     },
        //     {
        //         text: "下載應用",
        //         url: "#"
        //     }
        // ]
    },
    {
        title: "健康小管家",
        category: "管理系統",
        date: "2024",
        description: "健康小管家是一款專為提高慢性病患的藥物治療遵從性而設計的智能助手。透過先進的技術，自動識別和提取藥物資訊，簡化了服藥提醒的設定過程。為用戶提供藥物存量追蹤、健康諮詢，以及個性化的健康報告，強化用藥正確性與自我健康管理。",
        features: [
            "智能藥物識別",
            "自動服藥提醒",
            "存量管理追蹤",
            "個人化健康報告",
            "用藥諮詢服務"
        ],
        images: [
            "templates/健康小管家/img1.png",
        ],
        // links: [
        //     {
        //         text: "立即使用",
        //         url: "#"
        //     }
        // ]
    },
    {
        title: "美麗新生機",
        category: "管理系統",
        date: "2024",
        description: "美麗新生機智能婦癌衛教LineBot，為婦癌患者提供全方位的照護服務。結合AI技術與專業醫療知識，提供個人化的衛教資訊、症狀追蹤及心理支持，協助患者更好地管理自己的健康狀況。",
        features: [
            "個人化衛教資訊",
            "症狀智能追蹤",
            "心理健康支持",
            "醫療資源導航",
            "即時諮詢服務"
        ],
        images: [
            "templates/美麗新生機/img1.png",

        ],
        // links: [
        //     {
        //         text: "加入好友",
        //         url: "#"
        //     }
        // ]
    },
    {
        title: "SweetLine 妊娠護航Bot",
        category: "管理系統",
        date: "2024",
        description: "SweetLine是一款智慧孕婦健康管理 Linebot，提供全方位的孕期健康管理服務，包括智能健康管理、專業健康諮詢、情緒分析和社交分享等功能，幫助孕婦監測健康狀況，預防妊娠糖尿病、產前憂鬱症等疾病。",
        features: [
            "孕期健康追蹤",
            "智能營養建議",
            "情緒健康分析",
            "產檢行程管理",
            "緊急醫療協助"
        ],
        images: [
            "templates/SweetLine/img1.png",
            "templates/SweetLine/img2.png",
        ],
        // links: [
        //     {
        //         text: "開始使用",
        //         url: "#"
        //     }
        // ]
    },
    {
        title: "智慧飲食配",
        category: "健康飲食服務",
        date: "2024",
        description: "智慧飲食配服務從飲食調整著手，強化上班族們的健康福祉。藉由創新AI技術協助進行食品營養成分辨識，並提供個人化的營養餐點與外送服務，幫助用戶建立健康的飲食習慣。",
        features: [
            "AI營養分析",
            "個人化菜單推薦",
            "即時營養追蹤",
            "智能訂餐系統",
            "飲食報告生成"
        ],
        images: [
            "templates/智慧飲食配/img1.png",
            "templates/智慧飲食配/img2.png",
        ],
        // links: [
        //     {
        //         text: "立即訂餐",
        //         url: "#"
        //     },
        //     {
        //         text: "了解更多",
        //         url: "#"
        //     }
        // ]
    }
];

// 初始化粒子背景
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#00F5FF'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00F5FF',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'window',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        }
    },
    retina_detect: true
});

// 拖曳功能
const carousel = document.querySelector('.project-grid');
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;
let dragStartTime = 0;
let dragDistance = 0;

// 防止圖片拖曳
carousel.querySelectorAll('img').forEach(img => {
    img.addEventListener('dragstart', (e) => e.preventDefault());
});

// 觸控事件
carousel.addEventListener('touchstart', touchStart);
carousel.addEventListener('touchend', touchEnd);
carousel.addEventListener('touchmove', touchMove);

// 滑鼠事件
carousel.addEventListener('mousedown', touchStart);
carousel.addEventListener('mouseup', touchEnd);
carousel.addEventListener('mouseleave', touchEnd);
carousel.addEventListener('mousemove', touchMove);

function touchStart(e) {
    isDragging = true;
    startPos = getPositionX(e);
    dragStartTime = Date.now();
    dragDistance = 0;
    
    animationID = requestAnimationFrame(animation);
    carousel.style.cursor = 'grabbing';
}

function touchMove(e) {
    if (!isDragging) return;
    
    const currentPosition = getPositionX(e);
    dragDistance = Math.abs(currentPosition - startPos);
    currentTranslate = prevTranslate + currentPosition - startPos;
}

function touchEnd(e) {
    isDragging = false;
    cancelAnimationFrame(animationID);
    
    const dragDuration = Date.now() - dragStartTime;
    
    // 如果拖曳距離小於10px且時間小於200ms，視為點擊
    if (dragDistance < 10 && dragDuration < 200) {
        // 檢查是否點擊到卡片
        const card = e.target.closest('.project-card');
        if (card) {
            // Get the index based on the projects array directly
            const cardTitle = card.querySelector('h3').textContent;
            const projectIndex = projects.findIndex(p => p.title === cardTitle);
            if (projectIndex !== -1) {
                openModal(projectIndex);
            }
        }
    }
    
    // 處理拖曳結束的邊界檢查
    const maxTranslate = 0;
    const minTranslate = -(carousel.scrollWidth - carousel.clientWidth);
    
    // Only apply boundary if scrollWidth is greater than clientWidth
    if (carousel.scrollWidth > carousel.clientWidth) {
        if (currentTranslate > maxTranslate) {
            currentTranslate = maxTranslate;
        }
        
        if (currentTranslate < minTranslate) {
            currentTranslate = minTranslate;
        }
    } else {
        // If content is smaller than carousel, reset translate to 0
        currentTranslate = 0;
    }
    
    prevTranslate = currentTranslate;
    carousel.style.cursor = 'grab';
}

// 移除舊的onclick屬性，並在拖曳事件處理器中判斷是否為點擊
document.querySelectorAll('.project-card').forEach((card) => {
    card.removeAttribute('onclick');
});


function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
}

function getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
}

function setSliderPosition() {
    carousel.style.transform = `translateX(${currentTranslate}px)`;
}

// 模態框功能
const modal = document.getElementById('projectModal');
const modalImage = document.getElementById('modalImage');
const modalVideo = document.getElementById('modalVideo');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
let currentProject = null;
let currentMediaIndex = 0;

function openModal(projectIndex) {
    currentProject = projects[projectIndex];
    
    // 更新模態框內容
    modalTitle.textContent = currentProject.title;
    document.querySelector('.project-category').textContent = currentProject.category;
    document.querySelector('.project-date').textContent = currentProject.date;
    modalDescription.textContent = currentProject.description;
    
    // 生成功能列表
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = currentProject.features.map(feature => 
        `<li>${feature}</li>`
    ).join('');
    
    // 生成縮圖
    const thumbnailsContainer = document.querySelector('.media-thumbnails');
    thumbnailsContainer.innerHTML = '';
    
    currentProject.images.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.classList.add('media-thumbnail');
        thumbnail.style.backgroundImage = `url(${image})`;
        if (index === 0) thumbnail.classList.add('active');
        thumbnail.addEventListener('click', () => switchMedia(index));
        thumbnailsContainer.appendChild(thumbnail);
    });
    
    // 如果有影片，添加影片縮圖
    if (currentProject.video) {
        const videoThumbnail = document.createElement('div');
        videoThumbnail.classList.add('media-thumbnail', 'video-thumbnail');
        videoThumbnail.innerHTML = '<i class="fas fa-play"></i>';
        videoThumbnail.addEventListener('click', () => switchMedia(currentProject.images.length));
        thumbnailsContainer.appendChild(videoThumbnail);
    }
    
    // 生成相關連結
    // const linksContainer = document.querySelector('.project-links');
    // linksContainer.innerHTML = currentProject.links.map(link => 
    //     `<a href="${link.url}" class="project-link-btn" target="_blank">${link.text}</a>`
    // ).join('');
    
    // 顯示首張圖片
    switchMedia(0);
    
    // 顯示模態框
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
}

function switchMedia(index) {
    currentMediaIndex = index;
    const thumbnails = document.querySelectorAll('.media-thumbnail');
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    
    // Ensure the thumbnail exists before trying to add 'active'
    if (thumbnails[index]) {
        thumbnails[index].classList.add('active');
    }
    
    const isVideo = index === currentProject.images.length;
    modalImage.style.display = isVideo ? 'none' : 'block';
    modalVideo.style.display = isVideo ? 'block' : 'none';
    
    if (isVideo) {
        modalVideo.src = currentProject.video;
    } else {
        modalImage.src = currentProject.images[index];
    }
}

// 關閉模態框
document.querySelector('.modal-close').addEventListener('click', () => {
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
        if (modalVideo.src) modalVideo.src = '';
    }, 300);
    document.body.style.overflow = '';
});

// 點擊外部關閉模態框
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        document.querySelector('.modal-close').click();
    }
});

// 3D 卡片效果
VanillaTilt.init(document.querySelectorAll(".project-card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5
});

// 滾動動畫 (舊的，現在主要由 GSAP 管理)
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.section, .timeline-item, .project-card, .product-card').forEach(elem => {
    // 排除 vision 區塊，因為它的動畫由 GSAP 處理
    if (!elem.classList.contains('vision-text-area') && !elem.closest('#vision')) {
        elem.style.opacity = "0";
        elem.style.transform = "translateY(30px)";
        observer.observe(elem);
    }
});

// 平滑滾動
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = e.target;
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const spinner = submitBtn.querySelector('.loading-spinner');

    // 顯示加載狀態
    submitBtn.disabled = true;
    btnText.classList.add('hidden');
    spinner.classList.remove('hidden');

    try {
        const formData = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value
        };

        // 將請求發送到 Cloudflare Worker 路由
        // 這裡的 '/submit' 會自動解析為 healthymind-tech.com/submit (如果路由設定正確)
        const response = await fetch('/submit', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const result = await response.json();

        // 檢查回應狀態碼
        if (!response.ok) {
            // 如果回應狀態碼不是 2xx，則拋出錯誤
            throw new Error(result.error || `HTTP 錯誤：${response.status}`);
        }

        // 顯示成功訊息
        showNotification('訊息已成功送出！', 'success');
        form.reset();
    } catch (error) {
        // 顯示錯誤訊息
        showNotification('送出訊息失敗，請稍後再試。', 'error');
        console.error('表單提交錯誤:', error); // 記錄實際錯誤
    } finally {
        // 恢復按鈕狀態
        submitBtn.disabled = false;
        btnText.classList.remove('hidden');
        spinner.classList.add('hidden');
    }
});

// 通知功能
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    // 3秒後移除通知
    setTimeout(() => {
        notification.remove();
    }, 3000);
}


// 部落格文章載入功能
async function loadBlogPosts() {
    const blogPostsGrid = document.getElementById('blogPostsGrid');
    const blogUrl = 'https://healthymind-tech.com/blog'; // 部落格網域
    
    try {
        // 嘗試從部落格網站載入 JSON feed
        let posts = [];
        
        try {
            const response = await fetch(`${blogUrl}/index.json`);
            if (response.ok) {
                const data = await response.json();
                posts = data.posts || [];
            }
        } catch (fetchError) {
            console.log('無法從部落格網站載入，使用預設文章');
        }
        
        // 如果無法載入或沒有文章，使用預設文章
        if (posts.length === 0) {
            posts = [
                {
                    title: "歡迎來到療心智能的部落格！",
                    date: "2025-07-08",
                    excerpt: "歡迎來到療心智能的部落格！我們將在這裡分享最新的健康科技資訊、AI應用案例和技術解析。",
                    link: `${blogUrl}/hello-world/`,
                    tags: ["部落格", "宣告"]
                },
                {
                    title: "探索AI在健康管理中的應用",
                    date: "2025-07-07",
                    excerpt: "人工智能技術正在彼底改變健康管理的面貌，從病情預測到個人化治療方案。",
                    link: `${blogUrl}/ai-health-applications/`,
                    tags: ["AI", "健康管理", "技術"]
                },
                {
                    title: "智能藥物管理系統的設計思維",
                    date: "2025-07-06",
                    excerpt: "療心智能團隊分享在開發「健康小管家」時的設計理念和技術挑戰。",
                    link: `${blog}/smart-medication-system/`,
                    tags: ["藥物管理", "系統設計", "智能化"]
                }
            ];
        }
        
        // 清除載入骨架屏
        blogPostsGrid.innerHTML = '';
        
        // 只顯示前3篇文章
        const displayPosts = posts.slice(0, 3);
        
        // 生成文章卡片
        displayPosts.forEach(post => {
            const postCard = document.createElement('div');
            postCard.className = 'blog-post-card';
            postCard.innerHTML = `
                <h3>${post.title}</h3>
                <div class="blog-post-date">${formatDate(post.date)}</div>
                <p class="blog-post-excerpt">${post.excerpt}</p>
                <div class="blog-post-tags">
                    ${post.tags.map(tag => `<span class="blog-post-tag">${tag}</span>`).join('')}
                </div>
            `;
            
            // 添加點擊事件
            postCard.addEventListener('click', () => {
                window.open(post.link, '_blank');
            });
            
            blogPostsGrid.appendChild(postCard);
        });
        
    } catch (error) {
        console.error('載入部落格文章失敗:', error);
        // 顯示錯誤訊息
        blogPostsGrid.innerHTML = `
            <div class="blog-post-card">
                <h3>無法載入文章</h3>
                <p>請直接造訪我們的部落格查看最新文章。</p>
                <div class="blog-post-tags">
                    <span class="blog-post-tag">錯誤</span>
                </div>
            </div>
        `;
    }
}

// 日期格式化功能
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-TW', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// GSAP 滾動觸發打字特效
document.addEventListener('DOMContentLoaded', () => {
    // 載入部落格文章
    loadBlogPosts();
    // 註冊 GSAP 插件
    gsap.registerPlugin(ScrollTrigger);

    // 將目標文字分為兩行
    const targetTextLine1 = "深耕健康促進與預防醫學";
    const targetTextLine2 = "共創智慧科技未來";
    const animatedTextContainer = document.getElementById('visionTypingText');
    const revealableTextElement = document.querySelector('.revealable-text');

    // 清空現有內容，並為每個字元（包括空格）創建 span，並處理換行
    animatedTextContainer.innerHTML = '';
    
    // 處理第一行文字
    targetTextLine1.split('').forEach(char => {
        const span = document.createElement('span');
        span.classList.add('revealable-text__letter');
        if (char === ' ') {
            span.innerHTML = '&nbsp;';
        } else {
            span.textContent = char;
        }
        animatedTextContainer.appendChild(span);
    });

    // 添加換行符號
    animatedTextContainer.appendChild(document.createElement('br'));

    // 處理第二行文字
    targetTextLine2.split('').forEach(char => {
        const span = document.createElement('span');
        span.classList.add('revealable-text__letter');
        if (char === ' ') {
            span.innerHTML = '&nbsp;';
        } else {
            span.textContent = char;
        }
        animatedTextContainer.appendChild(span);
    });


    const letters = animatedTextContainer.querySelectorAll('.revealable-text__letter');

    // 創建 GSAP 時間軸
    const typingTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: revealableTextElement, // 觸發器為整個 revealable-text 容器
            start: "top 80%", // **調整這裡：讓動畫在觸發器頂部到達視窗高度的 80% 時開始**
            end: "bottom 75%", // 當觸發器底部到達視窗中心時結束
            scrub: true, // 將動畫綁定到滾動，實現平滑的滾動控制
            // markers: true, // 僅供調試使用，顯示 ScrollTrigger 標記
            toggleActions: "play none none reverse" // 滾動進入時播放，滾動離開時反向播放
        }
    });

    // 將動畫添加到時間軸
    typingTimeline.fromTo(letters, {
        clipPath: "inset(0% 100% 0% 0%)" // 初始狀態：從右側完全剪裁，即隱藏
    }, {
        clipPath: "inset(0% 0% 0% 0%)", // 結束狀態：完全顯示
        stagger: 0.05, // 每個字母之間延遲 0.05 秒顯示
        duration: 0.1, // 每個字母顯示的持續時間
        ease: "none" // 線性動畫，沒有加速或減速
    });
});
