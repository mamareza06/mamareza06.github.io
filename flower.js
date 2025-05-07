const container = document.getElementById('flower-container');

function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = Math.random() * window.innerWidth + 'px';
    flower.style.animationDuration = (5 + Math.random() * 5) + 's';
    container.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 10000);
}

setInterval(createFlower, 500);
