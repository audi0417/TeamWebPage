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
let velocity = 0;
let lastX = 0;
let momentumID;

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
    if(e.type === 'touchstart') {
        // 防止觸控時頁面滾動
        document.body.style.overflow = 'hidden';
    }
    
    isDragging = true;
    startPos = getPositionX(e);
    dragStartTime = Date.now();
    dragDistance = 0;
    
    animationID = requestAnimationFrame(animation);
    carousel.style.cursor = 'grabbing';
    carousel.style.transition = 'none';
}

function touchMove(e) {
    if (!isDragging) return;
    
    if(e.type === 'touchmove') {
        e.preventDefault();
    }
    
    const currentPosition = getPositionX(e);
    const deltaX = currentPosition - lastX;
    lastX = currentPosition;
    
    velocity = deltaX * (deltaX < 0 ? 2.8 : 2.5);
    dragDistance = Math.abs(currentPosition - startPos);
    
    const containerWidth = carousel.parentElement.offsetWidth;
    const metrics = getCardMetrics();
    if(metrics) {
        const centerOffset = (containerWidth - metrics.width) / 2;
        const maxTranslate = centerOffset;
        const minTranslate = -(carousel.scrollWidth - containerWidth + centerOffset);
        
        const proposedTranslate = prevTranslate + currentPosition - startPos;
        
        if(proposedTranslate > maxTranslate) {
            currentTranslate = maxTranslate + (proposedTranslate - maxTranslate) * 0.3;
        } else if(proposedTranslate < minTranslate) {
            currentTranslate = minTranslate + (proposedTranslate - minTranslate) * 0.3;
        } else {
            currentTranslate = proposedTranslate;
        }
    }
}

function touchEnd(e) {
    isDragging = false;
    cancelAnimationFrame(animationID);
    
    // 恢復頁面滾動
    document.body.style.overflow = '';
    
    const dragDuration = Date.now() - dragStartTime;
    
    // 如果拖曳距離小於10px且時間小於200ms，視為點擊
    if (dragDistance < 10 && dragDuration < 200) {
        const card = e.target.closest('.project-card');
        if (card) {
            const index = Array.from(card.parentElement.children).indexOf(card);
            openModal(index);
        }
    } else {
        // 根據速度決定是否啟動慣性或直接對齊
        if(Math.abs(velocity) > 1) {
            beginMomentumTracking();
        } else {
            snapToNearestCard();
        }
    }
    
    carousel.style.cursor = 'grab';
}

function snapToNearestCard() {
    const metrics = getCardMetrics();
    if(!metrics) return;
    
    const { totalWidth, centerOffset } = metrics;
    
    // 調整snap位置計算
    const currentOffset = -currentTranslate; // 轉換為正值來簡化計算
    const cardIndex = Math.round(currentOffset / totalWidth);
    const targetOffset = cardIndex * totalWidth;
    
    // 計算最終位置，包含中心點偏移
    currentTranslate = -(targetOffset - centerOffset);
    
    // 確保邊界檢查
    const maxTranslate = centerOffset;
    const minTranslate = -(carousel.scrollWidth - metrics.containerWidth + centerOffset);
    
    currentTranslate = Math.max(Math.min(currentTranslate, maxTranslate), minTranslate);
    prevTranslate = currentTranslate;
    
    // 使用更平滑的動畫
    carousel.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    setSliderPosition();
    
    setTimeout(() => {
        carousel.style.transition = 'none';
    }, 300);
}
// 更新CSS確保容器正確定位
function updateCarouselStyles() {
    const metrics = getCardMetrics();
    if(!metrics) return;
    
    // 確保容器有正確的padding來輔助定位
    carousel.parentElement.style.paddingLeft = `${metrics.centerOffset}px`;
    carousel.parentElement.style.paddingRight = `${metrics.centerOffset}px`;
}

// 在初始化和視窗調整時更新樣式
updateCarouselStyles();
window.addEventListener('resize', updateCarouselStyles);
function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
    // 使用transform3d提升性能
    carousel.style.transform = `translate3d(${currentTranslate}px, 0, 0)`;
}

function getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
}

// 慣性滾動相關
function beginMomentumTracking() {
    cancelMomentumTracking();
    momentumID = requestAnimationFrame(momentumLoop);
}

function cancelMomentumTracking() {
    cancelAnimationFrame(momentumID);
}

function momentumLoop() {
    velocity *= 0.92;
    currentTranslate += velocity;
    
    const containerWidth = carousel.parentElement.offsetWidth;
    const metrics = getCardMetrics();
    if(metrics) {
        const centerOffset = (containerWidth - metrics.width) / 2;
        const maxTranslate = centerOffset;
        const minTranslate = -(carousel.scrollWidth - containerWidth + centerOffset);
        
        if (currentTranslate > maxTranslate) {
            currentTranslate = maxTranslate;
            velocity = 0;
        } else if (currentTranslate < minTranslate) {
            currentTranslate = minTranslate;
            velocity = 0;
        }
    }
    
    setSliderPosition();
    
    if (Math.abs(velocity) > 0.5) {
        momentumID = requestAnimationFrame(momentumLoop);
    } else {
        prevTranslate = currentTranslate;
        snapToNearestCard();
    }
    
    prevTranslate = currentTranslate;
    carousel.style.cursor = 'grab';
}

// 修改卡片點擊事件處理
document.querySelectorAll('.project-card').forEach(card => {
    card.removeAttribute('onclick');
});

// 視窗調整時重置位置
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // 確保不超出邊界
        const maxTranslate = 0;
        const minTranslate = -(carousel.scrollWidth - carousel.clientWidth);
        
        if(currentTranslate < minTranslate) {
            currentTranslate = minTranslate;
            prevTranslate = currentTranslate;
            setSliderPosition();
        }
    }, 100);
});
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
    thumbnails[index].classList.add('active');
    
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

// 滾動動畫
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

document.querySelectorAll('.section, .timeline-item, .project-card').forEach(elem => {
    elem.style.opacity = "0";
    elem.style.transform = "translateY(30px)";
    observer.observe(elem);
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

        const response = await fetch('/.netlify/functions/submitForm', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const result = await response.json();

        if (!response.ok) throw new Error(result.error);

        // 顯示成功訊息
        showNotification('訊息已成功送出！', 'success');
        form.reset();
    } catch (error) {
        // 顯示錯誤訊息
        showNotification('送出訊息失敗，請稍後再試。', 'error');
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