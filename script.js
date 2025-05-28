const carousel = document.getElementById('carousel');
const items = carousel.querySelectorAll('.carousel-item');

carousel.addEventListener('scroll', () => {
  const center = carousel.scrollLeft + carousel.offsetWidth / 2;
  items.forEach(item => {
    const boxCenter = item.offsetLeft + item.offsetWidth / 2;
    const isActive = Math.abs(center - boxCenter) < item.offsetWidth / 2;
    item.classList.toggle('active', isActive);
  });
});
