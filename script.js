// Create disco light effect
const body = document.querySelector("body");

setInterval(() => {
    const color1 = `hsl(${Math.random() * 360}, 100%, 50%)`;
    const color2 = `hsl(${Math.random() * 360}, 100%, 50%)`;
    body.style.background = `linear-gradient(${Math.random() * 360}deg, ${color1}, ${color2})`;
}, 100);
