// const carousel1 = document.querySelector('.carousel1'); // 获取轮播容器元素
// const images1 = carousel1.querySelectorAll('img1'); // 获取轮播容器内的所有图片元素
// let currentIndex1 = 0; // 记录当前显示图片的索引

// function showImage1(index) {
//     images1.forEach(img1 => img1.classList.remove('active')); // 移除所有图片的active类
//     images1[index].classList.add('active'); // 给指定索引的图片添加active类
// }

// function nextImage1() {
//     currentIndex1 = (currentIndex1 + 1) % images1.length; // 更新当前索引，循环切换图片
//     showImage1(currentIndex1);
// }

// showImage(currentIndex1); // 初始显示第一张图片
// setInterval(nextImage1, 3000); // 每隔4秒（4000毫秒）切换一次图片，实现自动轮播
function setupCarousel(carouselClass, interval = 3000) {
    const carousel = document.querySelector(carouselClass);
    if (!carousel) {
        console.error(`未找到${carouselClass}轮播容器元素`);
        return;
    }
    const images = carousel.querySelectorAll('img');
    if (images.length === 0) {
        console.error(`${carouselClass}轮播容器内未找到图片元素`);
        return;
    }
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    showImage(currentIndex);
    setInterval(nextImage, interval);
}

// 初始化第一个轮播
setupCarousel('.carousel1');
// 初始化第二个轮播
setupCarousel('.carousel2');

setupCarousel('.carousel3');   

setupCarousel('.carousel4'); 