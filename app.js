'use strict';

const page = document.querySelector('.page');
const switcher = document.querySelector('.theme-switcher');
const themeName = document.querySelector('.theme-name');

switcher.addEventListener('click', () => {
  page.classList.toggle('page--theme-dark');
  switcher.classList.toggle('theme-switcher--theme-dark');

  if (page.classList.contains('page--theme-dark')) {
    themeName.innerHTML = 'Theme: <strong>Dark</strong>';
  } else {
    themeName.textContent = 'Theme: Light';
  }
});