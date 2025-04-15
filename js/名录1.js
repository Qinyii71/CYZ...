const carousel2 = document.querySelector('.carousel2'); // 获取轮播容器元素
const images = carousel2.querySelectorAll('img'); // 获取轮播容器内的所有图片元素
let currentIndex = 0; // 记录当前显示图片的索引

function showImage(index) {
    images.forEach(img => img.classList.remove('active')); // 移除所有图片的active类
    images[index].classList.add('active'); // 给指定索引的图片添加active类
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; // 更新当前索引，循环切换图片
    showImage(currentIndex);
}

showImage(currentIndex); // 初始显示第一张图片
setInterval(nextImage, 3000); // 每隔4秒（4000毫秒）切换一次图片，实现自动轮播