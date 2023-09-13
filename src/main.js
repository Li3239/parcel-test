const img = document.createElement('img');
document.body.append(img);
// img.src = '../media/dogpaw.png';
// img.src = 'https://www.hindustantimes.com/ht-img/img/2023/08/25/1600x900/international_dog_day_1692974397743_1692974414085.jpg';

const imgUrl = new URL('./media/dogpaw.png', import.meta.url);
img.src = imgUrl.href;

console.log(imgUrl.href);