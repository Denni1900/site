const track = document.getElementById('carousel-track');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

for (let i = 1; i <= 14; i++) {
  const img = document.createElement('img');
  img.src = 'img/photo' + i + '.jpg';
  img.alt = 'Фото ' + i;
  img.onclick = () => openModal(img.src);
  track.appendChild(img);
}

function scrollCarousel(direction) {
  track.scrollBy({ left: direction * 220, behavior: 'smooth' });
}

function openModal(src) {
  modal.style.display = 'flex';
  modalImg.src = src;
}

function closeModal() {
  modal.style.display = 'none';
}
