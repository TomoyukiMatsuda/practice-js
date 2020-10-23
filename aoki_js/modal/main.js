'use strict';

const modal = document.getElementById('modal');
const showBtn = document.getElementById('modal__show');
const close = document.getElementById('modal__close');
const backGround = document.getElementById('modal__background');

showBtn.addEventListener('click', () => {
  // classを付与
  modal.classList.add('is-show');
  backGround.classList.add('is-show');
});

close.addEventListener('click', () => {
  // 閉じる
  modal.classList.remove('is-show');
  backGround.classList.remove('is-show');
});

backGround.addEventListener('click', () => {
  close.click();
});
