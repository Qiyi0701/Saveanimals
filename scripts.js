const searchBar = document.getElementById('search-bar');
const filterType = document.getElementById('filter-type');
const filterAge = document.getElementById('filter-age');
const filterGender = document.getElementById('filter-gender');
const petsGrid = document.querySelector('.pets-grid');
const modal = document.getElementById('pet-modal');
const modalImage = document.getElementById('modal-image');
const modalName = document.getElementById('modal-name');
const modalDescription = document.getElementById('modal-description');
const modalType = document.getElementById('modal-type');
const modalAge = document.getElementById('modal-age');
const modalGender = document.getElementById('modal-gender');
const closeModal = document.querySelector('.close');
const healthRecordsList = document.getElementById('health-records');
const adminHealthForm = document.getElementById('admin-health-form');
const healthForm = document.getElementById('health-form');
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');
const updateDonationButton = document.getElementById('update-donation-btn'); // 新增按钮

// 模拟宠物数据
const petsData = [
    { name: '猫咪 1', type: 'cat', age: 'young', gender: 'female', image: 'images/cat1.jpg', description: '一只活泼友好的猫咪，准备迎接新家。', healthRecords: [{ date: '2023-10-01', description: '接种疫苗' },{ date: '2023-06-15', description: '体检正常' }] },  
    { name: '猫咪 2', type: 'cat', age: 'adult', gender: 'male', image: 'images/cat2.jpg', description: '一只亲切好奇的猫咪，等待温暖的家庭。', healthRecords: [{ date: '2023-10-01', description: '接种疫苗' },{ date: '2022-07-15', description: '体检正常' }] },
    { name: '猫咪 3', type: 'cat', age: 'young', gender: 'female', image: 'images/cat3.jpg', description: '一只温顺可爱的猫咪，寻找永远的家。', healthRecords: [{ date: '2023-10-01', description: '接种疫苗' },{ date: '2024-03-01', description: '体检正常' }] },
    { name: '猫咪 4', type: 'cat', age: 'adult', gender: 'male', image: 'images/cat4.jpg', description: '一只好奇活泼的猫咪，渴望加入您的家庭。', healthRecords: [{ date: '2023-10-01', description: '接种疫苗' },{ date: '2022-07-11', description: '体检正常' }] },
    { name: '猫咪 5', type: 'cat', age: 'senior', gender: 'male', image: 'images/cat5.jpg', description: '一只甜美可爱的猫咪，希望找到爱心家庭。', healthRecords: [{ date: '2023-10-01', description: '接种疫苗' },{ date: '2022-04-15', description: '体检正常' }] },
    { name: '狗狗 1', type: 'dog', age: 'young', gender: 'female', image: 'images/dog1.jpg', description: '一只忠诚友好的狗狗，准备成为您最好的伙伴。', healthRecords: [{ date: '2023-10-01', description: '接种疫苗' },{ date: '2023-09-01', description: '体检正常' }] },
    { name: '狗狗 2', type: 'dog', age: 'adult', gender: 'male', image: 'images/dog2.jpg', description: '一只活泼有趣的狗狗，渴望一个温暖的家。', healthRecords: [{ date: '2023-10-01', description: '接种疫苗' },{ date: '2024-05-15', description: '体检正常' }] },
    { name: '狗狗 3', type: 'dog', age: 'young', gender: 'female', image: 'images/dog3.jpg', description: '一只温顺可爱的狗狗，等待一个幸福的家庭。', healthRecords: [{ date: '2023-10-01', description: '接种疫苗' },{ date: '2024-03-22', description: '体检正常' }] },
    { name: '狗狗 4', type: 'dog', age: 'adult', gender: 'male', image: 'images/dog4.jpg', description: '一只充满活力和亲和力的狗狗，期待加入您的家庭。', healthRecords: [{ date: '2023-10-01', description: '接种疫苗' },{ date: '2024-08-20', description: '体检正常' }] },
    { name: '狗狗 5', type: 'dog', age: 'senior', gender: 'female', image: 'images/dog5.jpg', description: '一只甜美活泼的狗狗，准备迎接新家。', healthRecords: [{ date: '2023-10-01', description: '接种疫苗' },{ date: '2024-01-12', description: '体检正常' }] },
];

// 当前选中的宠物
let currentPet = null;

// 渲染宠物卡片
function renderPets(pets) {
    petsGrid.innerHTML = ''; // 清空当前显示的宠物
    pets.forEach(pet => {
        const petCard = document.createElement('div');
        petCard.classList.add('pet-card');
        petCard.setAttribute('data-type', pet.type);
        petCard.setAttribute('data-age', pet.age);
        petCard.setAttribute('data-gender', pet.gender);
        petCard.innerHTML = `
            <img src="${pet.image}" alt="${pet.name}">
            <h3>${pet.name}</h3>
            <p>${pet.description}</p>
        `;
        petCard.addEventListener('click', () => openModal(pet));
        petsGrid.appendChild(petCard);
    });
}

// 打开宠物详情弹窗
function openModal(pet) {
    currentPet = pet;
    modalImage.src = pet.image;
    modalName.textContent = pet.name;
    modalDescription.textContent = pet.description;
    modalType.textContent = pet.type === 'cat' ? '猫' : '狗';
    modalAge.textContent = pet.age === 'young' ? '幼年' : pet.age === 'adult' ? '成年' : '老年';
    modalGender.textContent = pet.gender === 'male' ? '雄性' : '雌性';
    renderHealthRecords(pet.healthRecords);
    modal.style.display = 'flex';
}

// 渲染健康记录
function renderHealthRecords(records) {
    healthRecordsList.innerHTML = '';
    records.forEach(record => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${record.date}</strong>: ${record.description}`;
        healthRecordsList.appendChild(li);
    });
}

// 关闭宠物详情弹窗
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// 点击模态框外部关闭弹窗
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// 切换选项卡
tabLinks.forEach(link => {
    link.addEventListener('click', () => {
        const tab = link.getAttribute('data-tab');
        tabLinks.forEach(l => l.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        link.classList.add('active');
        document.getElementById(tab).classList.add('active');
    });
});

// 提交健康记录表单
healthForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const date = document.getElementById('health-date').value;
    const description = document.getElementById('health-description').value;
    if (date && description) {
        currentPet.healthRecords.push({ date, description });
        renderHealthRecords(currentPet.healthRecords);
        healthForm.reset();
    }
});

// 模拟捐赠数据
const donationData = {
    totalGoal: 50000, // 总目标金额
    currentAmount: 25000, // 当前捐赠金额
    fundUsage: [
        { category: '购买食物', amount: 10000 },
        { category: '医疗费用', amount: 8000 },
        { category: '住所维护', amount: 5000 },
        { category: '其他费用', amount: 2000 }
    ]
};

// 更新捐赠进度
function updateDonationProgress() {
    const progressBar = document.querySelector('.progress');
    const progressText = document.querySelector('.progress-text');
    const progressPercentage = (donationData.currentAmount / donationData.totalGoal) * 100;

    progressBar.style.width = `${progressPercentage}%`;
    progressText.textContent = `当前进度：${progressPercentage.toFixed(2)}%`;
}

// 更新资金用途列表
function updateFundUsage() {
    const fundUsageList = document.querySelector('.fund-usage ul');
    fundUsageList.innerHTML = donationData.fundUsage.map(item => `
        <li><strong>${item.category}：</strong>¥${item.amount.toLocaleString()}</li>
    `).join('');
}

// 初始化加载捐赠进度和资金用途
updateDonationProgress();
updateFundUsage();

// 手动更新捐赠金额
updateDonationButton.addEventListener('click', () => {
    donationData.currentAmount += Math.floor(Math.random() * 1000);
    if (donationData.currentAmount > donationData.totalGoal) {
        donationData.currentAmount = donationData.totalGoal;
    }
    updateDonationProgress();
    updateFundUsage();
});

// 初始化加载所有宠物
renderPets(petsData);

// 添加事件监听器
searchBar.addEventListener('input', filterPets);
filterType.addEventListener('change', filterPets);
filterAge.addEventListener('change', filterPets);
filterGender.addEventListener('change', filterPets);

// 模拟管理员登录
const isAdmin = true; // 假设当前用户是管理员
if (isAdmin) {
    adminHealthForm.classList.remove('hidden');
}

// 过滤宠物
function filterPets() {
    const searchTerm = searchBar.value.toLowerCase();
    const type = filterType.value;
    const age = filterAge.value;
    const gender = filterGender.value;

    const filteredPets = petsData.filter(pet => {
        return (pet.name.toLowerCase().includes(searchTerm) || pet.description.toLowerCase().includes(searchTerm)) &&
               (type === 'all' || pet.type === type) &&
               (age === 'all' || pet.age === age) &&
               (gender === 'all' || pet.gender === gender);
    });

    renderPets(filteredPets);
}