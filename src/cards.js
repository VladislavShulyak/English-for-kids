const categories = ['Actions Part 2', 'Actions Part 3', 'Animals Part 2', 'Animals Part 3', 'Clothes', 'Emotion'];
const cards = [
  [
    {
      word: 'cry',
      translation: 'плакать',
      image: './src/img/cry.jpg',
      audioSrc: 'audio/cry.mp3',
    },
    {
      word: 'dance',
      translation: 'танцевать',
      image: './src/img/dance.jpg',
      audioSrc: 'audio/dance.mp3',
    },
    {
      word: 'dive',
      translation: 'нырять',
      image: './src/img/dive.jpg',
      audioSrc: 'audio/dive.mp3',
    },
    {
      word: 'draw',
      translation: 'рисовать',
      image: './src/img/draw.jpg',
      audioSrc: 'audio/draw.mp3',
    },
    {
      word: 'fish',
      translation: 'ловить рыбу',
      image: './src/img/fish.jpg',
      audioSrc: 'audio/fish.mp3',
    },
    {
      word: 'fly',
      translation: 'летать',
      image: './src/img/fly.jpg',
      audioSrc: 'audio/fly.mp3',
    },
    {
      word: 'hug',
      translation: 'обнимать',
      image: './src/img/hug.jpg',
      audioSrc: 'audio/hug.mp3',
    },
    {
      word: 'jump',
      translation: 'прыгать',
      image: './src/img/jump.jpg',
      audioSrc: 'audio/jump.mp3',
    },
  ],
  [
    {
      word: 'open',
      translation: 'открывать',
      image: './src/img/open.jpg',
      audioSrc: 'audio/open.mp3',
    },
    {
      word: 'play',
      translation: 'играть',
      image: './src/img/play.jpg',
      audioSrc: 'audio/play.mp3',
    },
    {
      word: 'point',
      translation: 'указывать',
      image: './src/img/point.jpg',
      audioSrc: 'audio/point.mp3',
    },
    {
      word: 'ride',
      translation: 'ездить',
      image: './src/img/ride.jpg',
      audioSrc: 'audio/ride.mp3',
    },
    {
      word: 'run',
      translation: 'бегать',
      image: './src/img/run.jpg',
      audioSrc: 'audio/run.mp3',
    },
    {
      word: 'sing',
      translation: 'петь',
      image: './src/img/sing.jpg',
      audioSrc: 'audio/sing.mp3',
    },
    {
      word: 'skip',
      translation: 'пропускать, прыгать',
      image: './src/img/skip.jpg',
      audioSrc: 'audio/skip.mp3',
    },
    {
      word: 'swim',
      translation: 'плавать',
      image: './src/img/swim.jpg',
      audioSrc: 'audio/swim.mp3',
    },
  ],
  [
    {
      word: 'cat',
      translation: 'кот',
      image: './src/img/cat.jpg',
      audioSrc: 'audio/cat.mp3',
    },
    {
      word: 'chick',
      translation: 'цыплёнок',
      image: './src/img/chick.jpg',
      audioSrc: 'audio/chick.mp3',
    },
    {
      word: 'chicken',
      translation: 'курица',
      image: './src/img/chicken.jpg',
      audioSrc: 'audio/chicken.mp3',
    },
    {
      word: 'dog',
      translation: 'собака',
      image: './src/img/dog.jpg',
      audioSrc: 'audio/dog.mp3',
    },
    {
      word: 'horse',
      translation: 'лошадь',
      image: './src/img/horse.jpg',
      audioSrc: 'audio/horse.mp3',
    },
    {
      word: 'pig',
      translation: 'свинья',
      image: './src/img/pig.jpg',
      audioSrc: 'audio/pig.mp3',
    },
    {
      word: 'rabbit',
      translation: 'кролик',
      image: './src/img/rabbit.jpg',
      audioSrc: 'audio/rabbit.mp3',
    },
    {
      word: 'sheep',
      translation: 'овца',
      image: './src/img/sheep.jpg',
      audioSrc: 'audio/sheep.mp3',
    },
  ],
  [
    {
      word: 'bird',
      translation: 'птица',
      image: './src/img/bird.jpg',
      audioSrc: 'audio/bird.mp3',
    },
    {
      word: 'fish',
      translation: 'рыба',
      image: './src/img/fish1.jpg',
      audioSrc: 'audio/fish.mp3',
    },
    {
      word: 'frog',
      translation: 'жаба',
      image: './src/img/frog.jpg',
      audioSrc: 'audio/frog.mp3',
    },
    {
      word: 'giraffe',
      translation: 'жирафа',
      image: './src/img/giraffe.jpg',
      audioSrc: 'audio/giraffe.mp3',
    },
    {
      word: 'lion',
      translation: 'лев',
      image: './src/img/lion.jpg',
      audioSrc: 'audio/lion.mp3',
    },
    {
      word: 'mouse',
      translation: 'мышь',
      image: './src/img/mouse.jpg',
      audioSrc: 'audio/mouse.mp3',
    },
    {
      word: 'turtle',
      translation: 'черепаха',
      image: './src/img/turtle.jpg',
      audioSrc: 'audio/turtle.mp3',
    },
    {
      word: 'dolphin',
      translation: 'дельфин',
      image: './src/img/dolphin.jpg',
      audioSrc: 'audio/dolphin.mp3',
    },
  ],
  [
    {
      word: 'skirt',
      translation: 'юбка',
      image: './src/img/skirt.jpg',
      audioSrc: 'audio/skirt.mp3',
    },
    {
      word: 'pants',
      translation: 'брюки',
      image: './src/img/pants.jpg',
      audioSrc: 'audio/pants.mp3',
    },
    {
      word: 'blouse',
      translation: 'блузка',
      image: './src/img/blouse.jpg',
      audioSrc: 'audio/blouse.mp3',
    },
    {
      word: 'dress',
      translation: 'платье',
      image: './src/img/dress.jpg',
      audioSrc: 'audio/dress.mp3',
    },
    {
      word: 'boot',
      translation: 'ботинок',
      image: './src/img/boot.jpg',
      audioSrc: 'audio/boot.mp3',
    },
    {
      word: 'shirt',
      translation: 'рубашка',
      image: './src/img/shirt.jpg',
      audioSrc: 'audio/shirt.mp3',
    },
    {
      word: 'coat',
      translation: 'пальто',
      image: './src/img/coat.jpg',
      audioSrc: 'audio/coat.mp3',
    },
    {
      word: 'shoe',
      translation: 'туфли',
      image: './src/img/shoe.jpg',
      audioSrc: 'audio/shoe.mp3',
    },
  ],
  [
    {
      word: 'sad',
      translation: 'грустный',
      image: './src/img/sad.jpg',
      audioSrc: 'audio/sad.mp3',
    },
    {
      word: 'angry',
      translation: 'сердитый',
      image: './src/img/angry.jpg',
      audioSrc: 'audio/angry.mp3',
    },
    {
      word: 'happy',
      translation: 'счастливый',
      image: './src/img/happy.jpg',
      audioSrc: 'audio/happy.mp3',
    },
    {
      word: 'tired',
      translation: 'уставший',
      image: './src/img/tired.jpg',
      audioSrc: 'audio/tired.mp3',
    },
    {
      word: 'surprised',
      translation: 'удивлённый',
      image: './src/img/surprised.jpg',
      audioSrc: 'audio/surprised.mp3',
    },
    {
      word: 'scared',
      translation: 'испуганный',
      image: './src/img/scared.jpg',
      audioSrc: 'audio/scared.mp3',
    },
    {
      word: 'smile',
      translation: 'улыбка',
      image: './src/img/smile.jpg',
      audioSrc: 'audio/smile.mp3',
    },
    {
      word: 'laugh',
      translation: 'смех',
      image: './src/img/laugh.jpg',
      audioSrc: 'audio/laugh.mp3',
    },
  ],
];


module.exports = { cards };
module.exports = { categories };
