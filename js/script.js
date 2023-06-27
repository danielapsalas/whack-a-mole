let points = 0;
function showRandomMole() {
    const boxes = document.querySelectorAll('.box');
    const reset = document.querySelector('#reset');

    const randomBox = Math.floor(Math.random() * boxes.length);

    const selectedBox = boxes[randomBox];

    selectedBox.classList.add('mole');
    selectedBox.style.animation = 'fadeIn 1s';

    selectedBox.addEventListener('click', () => {
        points++; // Increment the score when the user clicks on a mole
        document.getElementById('points-display').textContent = `Points: ${points}`;
    });

    reset.addEventListener('click', () => {
        points = 0;
        document.getElementById('points-display').textContent = `Points: ${points}`;
    });


    setTimeout(() => {
        selectedBox.classList.remove('mole');
        selectedBox.style.animation = '';
    }, 1000);
}

setInterval(showRandomMole, 1000);