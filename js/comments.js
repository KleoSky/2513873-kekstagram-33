//const commentsInput = document.querySelector('.social__footer-text');
const socialComments = document.querySelector('.social__comments');
const sendCommentButton = document.querySelector('.social__footer-btn');

const uploadComment = () => {
  sendCommentButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    const newComment = document.createElement('li');
    socialComments.append(newComment);
  });
};

export { uploadComment };
