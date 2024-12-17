function showDetails(teaType) {
    alert(`Вы выбрали чай: ${teaType}`);
}

function openModal(imageSrc) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modalImage").src = imageSrc;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

const teaDetails = {
    "Da Hong Pao": {
        image: "images/Da-Hong-Pao.jpg",
        description: "Этот улун считается одним из самых дорогих чаев в мире, благодаря своему уникальному вкусу и редкости. Стоимость некоторых его сортов может достигать тысяч долларов за грамм."
    },
    "Жёлтый Золото": {
        image: "images/Yellow-Gold.jpg",
        description: "Этот редкий китайский жёлтый чай произрастает в очень ограниченном количестве. Известен своими мягкими вкусами и глубоким ароматом."
    },
    "Пуэр": {
        image: "images/Puer-Tea.jpg",
        description: "Пуэр из китайской провинции Юньнань — это ферментированный чай, который со временем приобретает ещё более глубокий вкус и ценность. Некоторые виды пуэра могут стоить десятки тысяч долларов."
    },
    "Дракон Жасмин": {
        image: "images/Jasmine-Dragon.jpg",
        description: "Известен своим уникальным ароматом жасмина, этот чай часто ценится за свою редкость и высокое качество. Дракон Жасмин — один из самых дорогих зелёных чаев в мире."
    }
};

function openModal(imageSrc) {
    const teaType = Object.keys(teaDetails).find(type => teaDetails[type].image === imageSrc);
    
    if (teaType) {
        document.getElementById("modal").style.display = "block";
        document.getElementById("modalImage").src = imageSrc;
        document.getElementById("modalText").textContent = teaDetails[teaType].description;
    }
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
setInterval(changeButtonSize, 2000);
   function parallaxScroll(){
    const header =document.querySelector('header');
    const scrolled=window.pageYOffset;
    header.style.backgroundPositionY=-(scrolled*0.3)+'px'

   }
   window.addEventListener('scroll',parallaxScroll);
   function toggleDarkMode(){
    var body=document.body;
    body.classList.toggle('dark-mode');
     if(body.classList.contains('dark-mode')){
        document.querySelector('.theme-toggle').innerText= 'Светлая тема';
        body.style.backgroundImage= "url('bl.jpg')";
    }else{
        document.querySelector('.theme-toggle').innerText= 'Темная тема';
        body.style.backgroundImage= "url('white.jpg')";

    }}
    const whatsappButton = document.querySelector('.whatsapp-button');

function changeButtonSize() {
    whatsappButton.style.transition = 'all 1s ease-in-out';
    const currentSize = parseFloat(getComputedStyle(whatsappButton).width);
    const newSize = currentSize === 75 ? 50 : 75;
    whatsappButton.style.width = newSize + 'px';
    whatsappButton.style.height = newSize + 'px';
}

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopButton").style.display = "block";
    } else {
        document.getElementById("scrollToTopButton").style.display = "none";
    }
};

