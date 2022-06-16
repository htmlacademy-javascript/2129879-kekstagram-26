<<<<<<< HEAD
const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const checkStringLength = (string, length) => string.length <= length;

const AMOUNT_OF_CARDS = 25;

const NAMES = [
  'Вася',
  'Петя',
  'Ира',
  'Дина',
  'Стас',
  'Кекс',
  'Иван Валерьевич',
  'Светка',
  'Дядя Миша',
  'Шарик Михайлович',
  'Бегемот',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTION = [
  'Природа!',
  'Todays mood',
  '<3',
  'Фото дня',
  'Лучшая поездка',
  'На память',
  'Оцените снимок',
  'Жду в комментах!',
  'фото без обработки',
  'сделаю вам такое же фото, дорого, лс',
  '25.03.2002'
];

const startId = {
  comments: 0,
  posts: 0
};

const getId = (key) => {
  startId[key] += 1;
  return startId[key];
};

const getRandomArrayElement = (array) => array[getRandomPositiveInteger(0, array.length-1)];

const getComment = () => ({
  id: getId('comments'),
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const newComment = Array.from({length: AMOUNT_OF_CARDS}, getComment);

const getPost = () => ({
  id: getId('posts'),
  url: `photos/${getId('posts')}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomPositiveInteger (15, 200),
  comments: getRandomArrayElement(newComment),
});

const newPost = Array.from({length: AMOUNT_OF_CARDS}, getPost);

const calmLinter = () => newPost;

calmLinter();

checkStringLength ();
=======
function random (firstNumber, lastNumber) {
  if (firstNumber>lastNumber) {
    const temp = firstNumber;
    firstNumber = lastNumber;
    lastNumber = temp;
  }
  const rand = firstNumber - 0.5 + Math.random() * (lastNumber - firstNumber + 1);
  return Math.round(rand);
}

random (1,10);

function checkString (text, maxLength) {
  if (text.length<=maxLength) {
    return true;
  }
  return false;
}

checkString ('Cтрока на проверку', 140);
>>>>>>> 649e090e9c902b5f350abd19636a0a19495d6d98
