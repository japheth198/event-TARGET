const mainBox = document.querySelector('.main-box');
const redBox = document.querySelector('.red');
const greenBox = document.querySelector('.green');
const blueBox = document.querySelector('.blue');
const yellowBox = document.querySelector('.yellow');
const mainBoxText = document.querySelector('-main-box_text')


redBox.addEventListener('click', (event) => {
const redBoxcolor = getComputedStyle(event.target).backgroundColor;
console.log(redBoxcolor);
const redBoxText = event.target.innerText
console.log(redBoxText);

mainBox.style.backgroundColor = `${getComputedStyle(event.target).backgroundColor}`;
});

greenBox.addEventListener('click', (event) => {
const greenBoxcolor = getComputedStyle(event.target).backgroundColor;
console.log(greenBoxcolor);
const greenBoxText = event.target.innerText
console.log(greenBoxText);

mainBox.style.backgroundColor = `${getComputedStyle(event.target).backgroundColor}`;
});

blueBox.addEventListener('click', (event) => {
const blueBoxcolor = getComputedStyle(event.target).backgroundColor;
console.log(blueBoxcolor);
const blueBoxText = event.target.innerText
console.log(blueBoxText);

mainBox.style.backgroundColor = `${getComputedStyle(event.target).backgroundColor}`;
});

yellowBox.addEventListener('click', (event) => {
const yellowBoxcolor = getComputedStyle(event.target).backgroundColor;
console.log(yellowBoxcolor);
const yellowBoxText = event.target.innerText
console.log(yellowBoxText);

mainBox.style.backgroundColor = `${getComputedStyle(event.target).backgroundColor}`;
});
