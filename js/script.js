function showRandomMole() {
    const boxes = document.querySelectorAll('.box');
    console.log(boxes);
    const randomBox = Math.floor(Math.random() * boxes.length);

    const selectedBox = boxes[randomBox];

    selectedBox.classList.add('mole');
    selectedBox.style.animation = 'fadeIn 1s';

    setTimeout(() => {
        selectedBox.classList.remove('mole');
        selectedBox.style.animation = '';
    }, 2000);
}

setInterval(showRandomMole, 2000);