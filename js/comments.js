const commentsInput = document.querySelector('.social__footer-text');
const socialComments = document.querySelector('.social__comments');

const uploadComment = () => {
  commentsInput.addEventListener('click', (evt) => {
    evt.preventDefault();
  })
}
