const likesButton = document.querySelector('.social__likes');


const likesCounter = (count) => {
    likesButton.classList.toggle('added');
    if (likesButton.classList.contains('added')) {
      count.textContent++;
    } else {
      count.textContent--;
    }
};

const paintLikes = () => {
  likesButton.addEventListener('click', likesCounter(count));
};

const rebootLikes = () => {
  likesButton.removeEventListener('click', likesCounter(count));
}

export {paintLikes, rebootLikes};
