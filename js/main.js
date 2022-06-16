const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const checkStringLength = (string, length) => string.length <= length;

const AMOUNT_OF_CARDS = 25;
const AmountOfComments = {
  MIN: 1,
  MAX: 5,
};

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

const getRandomArrayElement = (arr) => arr[getRandomPositiveInteger(0, arr.length-1)];

const getComment = () => ({
  id: getId('comments'),
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const getRandomComments = () => Array.from({length: getRandomPositiveInteger (AmountOfComments.MIN, AmountOfComments.MAX)}, getComment);

const getPost = () => {
  const idStorage = getId('posts');
  return {
    id: idStorage,
    url: `photos/${idStorage}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomPositiveInteger (15, 200),
    comments: getRandomComments(),
  };
};

const newPosts = Array.from({length: AMOUNT_OF_CARDS}, getPost);

const calmLinter = () => newPosts;

calmLinter();

checkStringLength ();

