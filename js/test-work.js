const selectButton = document.querySelector('.select__button');
const selectList = document.querySelector('.select__list');

selectButton.addEventListener('click', () => {
  if (selectList.classList.contains('hidden')) {
    selectList.classList.remove('hidden');
  } else {
    selectList.classList.add('hidden');
  }
});
