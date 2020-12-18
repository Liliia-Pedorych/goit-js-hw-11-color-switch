const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    body: document.body,
};

let randomColor;


refs.startBtn.addEventListener('click', () => {
    timerId = setInterval(() => {
    randomColor = randomIntegerFromInterval(0, (colors.length - 1));
    refs.body.style.backgroundColor = colors[randomColor];
    }, 1000);
    refs.startBtn.disabled = true;
});

refs.stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    refs.startBtn.disabled = false;
});


const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};








// refs.startBtn.addEventListener('click',() => startChangeColor());
// const startChangeColor = () => { 
// const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const stopChangeColor = () => { 
//     refs.body.style.backgroundColor = '';
// };

// const randomColor = randomIntegerFromInterval(0, (colors.length - 1));
//     refs.body.style.backgroundColor = colors[randomColor];
// };