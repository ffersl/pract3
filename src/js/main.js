import '../styles/main.scss';
import 'swiper/css';
import 'swiper/css/navigation';

const burger = document.getElementById("burger");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn"); // Ищем крестик по правильному ID
const backdrop = document.getElementById("modal-backdrop");

burger.addEventListener("click", () => {
    modal.classList.add("isModalOpened");
    backdrop.classList.add("modal-backdrop-open");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("isModalOpened");
    backdrop.classList.remove("modal-backdrop-open");
});

backdrop.addEventListener("click", () => {
    modal.classList.remove("isModalOpened");
    backdrop.classList.remove("modal-backdrop-open");
});
const menuItems = document.querySelectorAll('.sidebar__item');

menuItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    menuItems.forEach(el => el.classList.remove('active'));

    item.classList.add('active');
  });
});

const tabs = document.querySelectorAll('.tabs__item');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('tabs__item--active'));

    tab.classList.add('tabs__item--active');
  });
});
