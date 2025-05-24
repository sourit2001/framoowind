/**
 * Framoo - 艺术边框素材库
 * 主JavaScript文件
 */

// 当前语言设置
let currentLanguage = 'zh-CN';
let translations = {};
let imagesData = [];

// 内置翻译数据
const translationsData = {
  'zh-CN': {
    "tagline": "艺术边框素材库",
    "search_placeholder": "搜索边框...",
    "all_categories": "所有分类",
    "category_vintage": "复古",
    "category_cute": "可爱",
    "category_modern": "现代",
    "category_elegant": "优雅",
    "category_borders": "边框",
    "no_results": "未找到匹配的图片",
    "error_loading_images": "加载图片时出错",
    "category": "分类",
    "dimensions": "尺寸",
    "description": "描述",
    "download": "下载",
    "language": "语言",
    "footer_text": "© 2025 Framoo 艺术边框素材库 - 简单、美观的边框下载平台",
    "modal_close": "关闭"
  },
  'zh-TW': {
    "tagline": "藝術邊框素材庫",
    "search_placeholder": "搜索邊框...",
    "all_categories": "所有分類",
    "category_vintage": "復古",
    "category_cute": "可愛",
    "category_modern": "現代",
    "category_elegant": "優雅",
    "category_borders": "邊框",
    "no_results": "未找到匹配的圖片",
    "error_loading_images": "載入圖片時出錯",
    "category": "分類",
    "dimensions": "尺寸",
    "description": "描述",
    "download": "下載",
    "language": "語言",
    "footer_text": "© 2025 Framoo 藝術邊框素材庫 - 簡單、美观的邊框下載平台",
    "modal_close": "關閉"
  },
  'en': {
    "tagline": "Artistic Frame Library",
    "search_placeholder": "Search frames...",
    "all_categories": "All Categories",
    "category_vintage": "Vintage",
    "category_cute": "Cute",
    "category_modern": "Modern",
    "category_elegant": "Elegant",
    "category_borders": "Borders",
    "no_results": "No matching frames found",
    "error_loading_images": "Error loading images",
    "category": "Category",
    "dimensions": "Dimensions",
    "description": "Description",
    "download": "Download",
    "language": "Language",
    "footer_text": "© 2025 Framoo - Simple, beautiful frame download platform",
    "modal_close": "Close"
  },
  'ko': {
    "tagline": "아트 프레임 라이브러리",
    "search_placeholder": "프레임 검색...",
    "all_categories": "모든 카테고리",
    "category_vintage": "빈티지",
    "category_cute": "귀여운",
    "category_modern": "모던",
    "category_elegant": "우아한",
    "category_borders": "테두리",
    "no_results": "일치하는 프레임을 찾을 수 없습니다",
    "error_loading_images": "이미지 로딩 오류",
    "category": "카테고리",
    "dimensions": "크기",
    "description": "설명",
    "download": "다운로드",
    "language": "언어",
    "footer_text": "© 2025 Framoo - 간단하고 아름다운 프레임 다운로드 플랫폼",
    "modal_close": "닫기"
  },
  'fr': {
    "tagline": "Bibliothèque de cadres artistiques",
    "search_placeholder": "Rechercher des cadres...",
    "all_categories": "Toutes les catégories",
    "category_vintage": "Vintage",
    "category_cute": "Mignon",
    "category_modern": "Moderne",
    "category_elegant": "Élégant",
    "category_borders": "Bordures",
    "no_results": "Aucun cadre correspondant trouvé",
    "error_loading_images": "Erreur lors du chargement des images",
    "category": "Catégorie",
    "dimensions": "Dimensions",
    "description": "Description",
    "download": "Télécharger",
    "language": "Langue",
    "footer_text": "© 2025 Framoo - Plateforme de téléchargement de cadres simple et belle",
    "modal_close": "Fermer"
  },
  'de': {
    "tagline": "Künstlerische Rahmen-Bibliothek",
    "search_placeholder": "Rahmen suchen...",
    "all_categories": "Alle Kategorien",
    "category_vintage": "Vintage",
    "category_cute": "Niedlich",
    "category_modern": "Modern",
    "category_elegant": "Elegant",
    "category_borders": "Rahmen",
    "no_results": "Keine passenden Rahmen gefunden",
    "error_loading_images": "Fehler beim Laden der Bilder",
    "category": "Kategorie",
    "dimensions": "Abmessungen",
    "description": "Beschreibung",
    "download": "Herunterladen",
    "language": "Sprache",
    "footer_text": "© 2025 Framoo - Einfache, schöne Rahmen-Download-Plattform",
    "modal_close": "Schließen"
  }
};

// 内置图片数据
const inlineImagesData = [
  {
    "id": "frame_001",
    "filename": "IMG_1096.JPG",
    "dimensions": {
      "width": 800,
      "height": 1000
    },
    "category": "borders",
    "tags": ["复古", "老式", "怀旧"],
    "description": {
      "zh-CN": "复古风格拍立得边框",
      "zh-TW": "復古風格拍立得邊框",
      "en": "Vintage polaroid frame"
    }
  },
  {
    "id": "frame_002",
    "filename": "IMG_1103.PNG",
    "dimensions": {
      "width": 800,
      "height": 1000
    },
    "category": "borders",
    "tags": ["可爱", "粉色", "花朵"],
    "description": {
      "zh-CN": "粉色花朵边框",
      "zh-TW": "粉色花朵邊框",
      "en": "Pink floral frame"
    }
  },
  {
    "id": "frame_003",
    "filename": "IMG_1108.PNG",
    "dimensions": {
      "width": 800,
      "height": 1000
    },
    "category": "borders",
    "tags": ["简约", "几何", "现代"],
    "description": {
      "zh-CN": "现代几何边框",
      "zh-TW": "現代幾何邊框",
      "en": "Modern geometric frame"
    }
  },
  {
    "id": "frame_004",
    "filename": "IMG_1141.PNG",
    "dimensions": {
      "width": 800,
      "height": 1000
    },
    "category": "cute",
    "tags": ["可爱", "粉色", "卡通"],
    "description": {
      "zh-CN": "可爱风格边框",
      "zh-TW": "可愛風格邊框",
      "en": "Cute style frame"
    }
  },
  {
    "id": "frame_005",
    "filename": "IMG_1155.PNG",
    "dimensions": {
      "width": 800,
      "height": 1000
    },
    "category": "cute",
    "tags": ["可爱", "彩色", "活泼"],
    "description": {
      "zh-CN": "彩色气泡边框",
      "zh-TW": "彩色氣泡邊框",
      "en": "Colorful bubble frame"
    }
  },
  {
    "id": "frame_006",
    "filename": "IMG_1201.PNG",
    "dimensions": {
      "width": 800,
      "height": 1000
    },
    "category": "borders",
    "tags": ["时尚", "带状", "流行"],
    "description": {
      "zh-CN": "时尚流线边框",
      "zh-TW": "時尚流線邊框",
      "en": "Fashionable flowing border",
      "ko": "패션너블한 흐르는 테두리",
      "ja": "ファッショナブルな流れるフレーム",
      "fr": "Bordure élégante fluide",
      "de": "Modischer fließender Rahmen"
    }
  },
  {
    "id": "frame_007",
    "filename": "IMG_1202.PNG",
    "dimensions": {
      "width": 800,
      "height": 1000
    },
    "category": "elegant",
    "tags": ["优雅", "金色", "豪华"],
    "description": {
      "zh-CN": "金色经典边框",
      "zh-TW": "金色經典邊框",
      "en": "Golden classic frame",
      "ko": "골든 클래식 프레임",
      "ja": "ゴールデンクラシックフレーム",
      "fr": "Cadre classique doré",
      "de": "Goldener klassischer Rahmen"
    }
  },
  {
    "id": "frame_008",
    "filename": "IMG_1203.PNG",
    "dimensions": {
      "width": 800,
      "height": 1000
    },
    "category": "elegant",
    "tags": ["典雅", "花纹", "艺术"],
    "description": {
      "zh-CN": "典雅花纹边框",
      "zh-TW": "典雅花紋邊框",
      "en": "Elegant floral frame",
      "ko": "우아한 꽃무늬 프레임",
      "ja": "エレガントな花柄フレーム",
      "fr": "Cadre floral élégant",
      "de": "Eleganter Blumenrahmen"
    }
  },
  {
    "id": "frame_009",
    "filename": "IMG_1204.PNG",
    "dimensions": {
      "width": 800,
      "height": 1000
    },
    "category": "borders",
    "tags": ["清新", "简约", "自然"],
    "description": {
      "zh-CN": "简约可爱边框",
      "zh-TW": "簡約可愛邊框",
      "en": "Simple cute border",
      "ko": "심플 귀여운 테두리",
      "ja": "シンプルで可愛いフレーム",
      "fr": "Bordure simple et mignonne",
      "de": "Einfacher niedlicher Rahmen"
    }
  },
  {
    "id": "frame_010",
    "filename": "IMG_1205.PNG",
    "dimensions": {
      "width": 800,
      "height": 1000
    },
    "category": "borders",
    "tags": ["复古", "科技", "未来"],
    "description": {
      "zh-CN": "未来科技边框",
      "zh-TW": "未來科技邊框",
      "en": "Futuristic tech frame",
      "ko": "미래지향적 기술 프레임",
      "ja": "未来的なテクノロジーフレーム",
      "fr": "Cadre technologique futuriste",
      "de": "Futuristischer Tech-Rahmen"
    }
  },
  {
    "id": "frame_011",
    "filename": "IMG_1206.PNG",
    "dimensions": {
      "width": 800,
      "height": 1000
    },
    "category": "borders",
    "tags": ["自然", "模糊", "水彩"],
    "description": {
      "zh-CN": "水彩模糊边框",
      "zh-TW": "水彩模糊邊框",
      "en": "Watercolor blur frame",
      "ko": "수채화 흐림 프레임",
      "ja": "水彩画風フレーム",
      "fr": "Cadre flou à l'aquarelle",
      "de": "Aquarell-Unschärfe-Rahmen"
    }
  },
  {
    "id": "frame_012",
    "filename": "IMG_1208.PNG",
    "dimensions": {
      "width": 800,
      "height": 1000
    },
    "category": "borders",
    "tags": ["绝美", "珍藏", "精致"],
    "description": {
      "zh-CN": "精致珍藏边框",
      "zh-TW": "精緻珍藏邊框",
      "en": "Exquisite collector's frame",
      "ko": "정교한 커렉터 프레임",
      "ja": "精巧なコレクターズフレーム",
      "fr": "Cadre exquis de collectionneur",
      "de": "Exquisiter Sammlerrahmen"
    }
  }
];

// DOM元素
let imageGrid;
let modal;
let searchInput;
let filterButtons;
let languageButtons;

// 在DOM加载后初始化元素引用
function initDOMElements() {
    imageGrid = document.getElementById('image-grid');
    modal = document.getElementById('modal');
    searchInput = document.getElementById('search');
    filterButtons = document.querySelectorAll('.filter-btn');
    languageButtons = document.querySelectorAll('[data-lang]');
    console.log('语言按钮数量:', languageButtons.length);
}

// 初始化函数
async function init() {
    try {
        // 初始化DOM元素引用
        initDOMElements();
        
        // 加载翻译文件
        await loadTranslations();
        
        // 加载图片数据
        await loadImagesData();
        
        // 渲染图片网格
        renderImageGrid();
        
        // 设置事件监听器
        setupEventListeners();
        
        console.log('Framoo 初始化完成');
    } catch (error) {
        console.error('初始化错误:', error);
    }
}

// 加载翻译文件 - 使用内置数据
function loadTranslations() {
    try {
        console.log(`加载语言: ${currentLanguage}`);
        
        // 使用内置翻译数据
        if (translationsData[currentLanguage]) {
            translations = translationsData[currentLanguage];
            console.log('翻译加载成功:', Object.keys(translations).length, '个翻译条目');
            updatePageTexts();
        } else {
            throw new Error(`未找到语言: ${currentLanguage}`);
        }
    } catch (error) {
        console.error('加载翻译失败:', error);
        // 如果当前语言不是中文或英文，尝试回退到英文
        if (currentLanguage !== 'zh-CN' && currentLanguage !== 'en') {
            console.log('尝试回退到英文');
            currentLanguage = 'en';
            loadTranslations();
        }
    }
    
    // 这个函数现在是同步的，但为了兼容返回一个已解决的承诺
    return Promise.resolve();
}

// 加载图片数据 - 使用内置数据
function loadImagesData() {
    try {
        console.log('使用内置图片数据');
        imagesData = inlineImagesData;
        console.log('图片数据加载成功:', imagesData.length, '张图片');
    } catch (error) {
        console.error('加载图片数据失败:', error);
    }
    
    // 这个函数现在是同步的，但为了兼容返回一个已解决的承诺
    return Promise.resolve();
}

// 更新页面文本
function updatePageTexts() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key]) {
            if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
                el.placeholder = translations[key];
            } else {
                el.textContent = translations[key];
            }
        }
    });
    
    // 更新当前语言显示
    const currentLangElement = document.querySelector('.current-language');
    const selectedLang = document.querySelector(`[data-lang="${currentLanguage}"]`);
    if (currentLangElement && selectedLang) {
        currentLangElement.textContent = selectedLang.textContent + ' ▼';
    }
}

// 渲染图片网格
function renderImageGrid(filter = 'all', searchQuery = '') {
    if (!imageGrid) return;
    
    // 清空网格
    imageGrid.innerHTML = '';
    
    // 过滤图片
    let filteredImages = imagesData;
    
    // 按类别过滤
    if (filter !== 'all') {
        filteredImages = filteredImages.filter(img => img.category === filter);
    }
    
    // 按搜索词过滤
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredImages = filteredImages.filter(img => {
            // 检查标题和标签是否包含搜索词
            const titleMatch = img.description[currentLanguage].toLowerCase().includes(query);
            const tagsMatch = img.tags.some(tag => tag.toLowerCase().includes(query));
            return titleMatch || tagsMatch;
        });
    }
    
    // 渲染图片卡片
    filteredImages.forEach(img => {
        const card = document.createElement('div');
        card.className = 'image-card';
        card.dataset.id = img.id;
        
        const localizedDescription = img.description[currentLanguage] || img.description['en'];
        const categoryName = translations[`category_${img.category}`] || img.category;
        
        card.innerHTML = `
            <div class="card-img-container">
                <img src="images/${img.category}/${img.filename}" alt="${localizedDescription}" class="card-img">
            </div>
            <div class="card-info">
                <div class="card-title">${localizedDescription}</div>
                <div class="card-category">${categoryName}</div>
            </div>
        `;
        
        // 添加点击事件
        card.addEventListener('click', () => {
            openImageModal(img);
        });
        
        imageGrid.appendChild(card);
    });
    
    // 如果没有匹配的图片
    if (filteredImages.length === 0) {
        imageGrid.innerHTML = `<div class="no-results">${translations.no_results || '未找到匹配的图片'}</div>`;
    }
}

// 打开图片详情弹窗
function openImageModal(imageData) {
    if (!modal) return;
    
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const dimensions = document.getElementById('dimensions');
    const category = document.getElementById('category');
    const downloadBtn = document.getElementById('download-btn');
    
    // 设置弹窗内容
    modalTitle.textContent = imageData.description[currentLanguage] || imageData.description['en'];
    modalImage.src = `images/${imageData.category}/${imageData.filename}`;
    modalImage.alt = imageData.description[currentLanguage] || imageData.description['en'];
    
    // 设置尺寸信息
    dimensions.textContent = `${imageData.dimensions.width} × ${imageData.dimensions.height} px`;
    
    // 设置分类
    const categoryName = translations[`category_${imageData.category}`] || imageData.category;
    category.textContent = categoryName;
    
    // 设置下载按钮
    downloadBtn.onclick = () => {
        downloadImage(imageData);
    };
    
    // 显示弹窗
    modal.classList.add('active');
}

// 关闭弹窗
function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
}

// 下载图片
function downloadImage(imageData) {
    const link = document.createElement('a');
    link.href = `images/${imageData.category}/${imageData.filename}`;
    link.download = imageData.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// 设置事件监听器
function setupEventListeners() {
    // 搜索功能
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchQuery = e.target.value.trim();
            const activeFilter = document.querySelector('.filter-btn.active').dataset.category;
            renderImageGrid(activeFilter, searchQuery);
        });
    }
    
    // 分类过滤
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // 移除所有激活状态
            filterButtons.forEach(b => b.classList.remove('active'));
            // 添加激活状态
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            const searchQuery = searchInput ? searchInput.value.trim() : '';
            renderImageGrid(category, searchQuery);
        });
    });
    
    // 语言切换 - 直接绑定到文档元素
    document.querySelectorAll('.language-dropdown a').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.preventDefault();
            console.log('点击语言切换:', btn.dataset.lang);
            
            // 更新激活状态
            document.querySelectorAll('.language-dropdown a').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // 设置新语言
            currentLanguage = btn.dataset.lang;
            
            // 更新当前语言显示
            const currentLangElement = document.querySelector('.current-language');
            if (currentLangElement) {
                currentLangElement.textContent = btn.textContent + ' ▼';
            }
            
            // 重新加载翻译
            await loadTranslations();
            
            // 重新渲染图片网格
            const activeFilter = document.querySelector('.filter-btn.active') ? 
                document.querySelector('.filter-btn.active').dataset.category : 'all';
            const searchQuery = searchInput ? searchInput.value.trim() : '';
            renderImageGrid(activeFilter, searchQuery);
        });
    });
    
    // 关闭弹窗
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // 点击弹窗外部关闭
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // ESC键关闭弹窗
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// 当页面加载完成时初始化
document.addEventListener('DOMContentLoaded', init);
