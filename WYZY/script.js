const whiteCircle = document.getElementById('white-circle');
const blackCircle = document.getElementById('black-circle');
const body = document.body;
const textContainer = document.getElementById('text-container');

// 修改为 click 事件
whiteCircle.addEventListener('click', function(event) {
  event.stopPropagation(); // 阻止事件冒泡到 body
  resetStyles();
  body.style.backgroundImage = 'url("背景1.jpg")';
  moveCirclesAndEnlarge(whiteCircle);
 });

// 修改为 click 事件
blackCircle.addEventListener('click', function(event) {
  event.stopPropagation(); // 阻止事件冒泡到 body
  resetStyles();
  body.style.backgroundImage = 'url("背景2.jpg")';
  moveCirclesAndEnlarge(blackCircle);
});

// 添加点击 body 的事件监听器
body.addEventListener('click', function() {
  resetStyles();
});

function moveCirclesAndEnlarge(circle) {
  whiteCircle.style.transform = 'translateY(-80px)';
  blackCircle.style.transform = 'translateY(-80px)';
  if (circle === whiteCircle) {
    whiteCircle.style.width = '240px';
    whiteCircle.style.height = '240px';
  } else if (circle === blackCircle) {
    blackCircle.style.width = '240px';
    blackCircle.style.height = '240px';
  }
  textContainer.style.opacity = 1;
}

function resetStyles() {
  body.style.backgroundImage = 'none';
  whiteCircle.style.transform = 'translateY(0)';
  blackCircle.style.transform = 'translateY(0)';
  whiteCircle.style.width = '160px';
  whiteCircle.style.height = '160px';
  blackCircle.style.width = '160px';
  blackCircle.style.height = '160px';
  textContainer.style.opacity = 0;
  textContainer.innerHTML = "";
}

// 移除原先的 mouseleave 事件监听器
// whiteCircle.removeEventListener('mouseleave', resetStyles);
// blackCircle.removeEventListener('mouseleave', resetStyles);
