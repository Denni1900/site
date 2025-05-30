
const carousel = document.getElementById("carousel-track");

// Загружаем изображения
for (let i = 1; i <= 14; i++) {
  const img = document.createElement("img");
  img.src = `img/photo${i}.jpg`;
  img.alt = `Фото ${i}`;
  img.onclick = () => openModal(img.src);
  carousel.appendChild(img);
}

// Прокрутка кнопками
function scrollCarousel(direction) {
  carousel.scrollBy({
    left: direction * 220,
    behavior: "smooth"
  });
}

// Увеличение изображений
function openModal(src) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  modalImg.src = src;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Добавим поддержку свайпа
let startX = 0;

carousel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener("touchmove", (e) => {
  if (!startX) return;
  let currentX = e.touches[0].clientX;
  let diffX = startX - currentX;

  if (Math.abs(diffX) > 30) {
    carousel.scrollLeft += diffX;
    startX = 0;
  }
});
