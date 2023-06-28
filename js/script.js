let points = 0;
let intervalId;

function showRandomMole() {
    const boxes = document.querySelectorAll('.box');
    const reset = document.querySelector('#reset');

    const randomBox = Math.floor(Math.random() * boxes.length);
    const selectedBox = boxes[randomBox];

    if (!selectedBox.classList.contains('mole')) {
        selectedBox.classList.add('mole');
        selectedBox.style.animation = 'fadeIn 1s';
        selectedBox.addEventListener('click', moleClicked);
    }

    function moleClicked() {
        if (selectedBox.classList.contains('mole')) {
            points++;
            console.log("points: " + points)
            document.getElementById('points-display').textContent = `Points: ${points}`;
            clearInterval(intervalId);
            intervalId = setInterval(showRandomMole, 2000);
            selectedBox.removeEventListener('click', moleClicked);
        }
    }

    reset.addEventListener('click', () => {
        points = 0;
        console.log("reset points: " + points)
        document.getElementById('points-display').textContent = `Points: ${points}`;
        clearInterval(intervalId);
        intervalId = setInterval(showRandomMole, 2000);
    });


    setTimeout(() => {
        selectedBox.classList.remove('mole');
        selectedBox.style.animation = '';
        selectedBox.removeEventListener('click', moleClicked);
    }, 2000);
}

setInterval(showRandomMole, 2000);