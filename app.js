import data from './data.json' assert { type: "json" }

const barHeight = getComputedStyle(document.querySelector('#mon-container')).height;
const multiplier = 1.5 * parseInt(barHeight) / 100;

const monBar = document.querySelector('#mon-bar');
const tueBar = document.querySelector('#tue-bar');
const wedBar = document.querySelector('#wed-bar');
const thuBar = document.querySelector('#thu-bar');
const friBar = document.querySelector('#fri-bar');
const satBar = document.querySelector('#sat-bar');
const sunBar = document.querySelector('#sun-bar');

const bars = [
    monBar,
    tueBar,
    wedBar,
    thuBar,
    friBar,
    satBar,
    sunBar
];

for (let i = 0; i < bars.length; i++) {
    let barHeight = data[i].amount * multiplier;
    bars[i].setAttribute('style', `height:${barHeight}px`);
    let dataPoint = bars[i].parentElement.firstElementChild;
    dataPoint.clicked = false;
    bars[i].addEventListener('mouseover', (e) => {
        let dataPoint = e.target.parentElement.firstElementChild;
        e.target.addEventListener('mouseout', () => {
            if(!dataPoint.clicked) {
                dataPoint.setAttribute('style', 'opacity:0');
            };   
        })
        dataPoint.textContent = `$${data[i].amount}`;
        dataPoint.setAttribute('style', 'opacity:1');
    })
    bars[i].addEventListener('click', (e) => {
        let dataPoint = e.target.parentElement.firstElementChild;
        dataPoint.setAttribute('style', dataPoint.clicked ? 'opacity:0' : 'opacity:1');
        dataPoint.clicked = !dataPoint.clicked;
        
    })
}