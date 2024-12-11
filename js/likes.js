const likesButton = document.querySelector('.social__likes');


const likesCounter = (count) => {
  likesButton.addEventListener('click', () => {
    likesButton.classList.toggle('added');
    if (likesButton.classList.contains('added')) {
      count.textContent++;
    } else {
      count.textContent--;
    }
  })
};
//likesCounter(count);
// const paintLikes = () => {
//   likesButton.addEventListener('click', likesCounter(count));
// };

// const rebootLikes = () => {
//   likesButton.removeEventListener('click', likesCounter(count));
// }

// export {paintLikes, rebootLikes};
export { likesCounter };
