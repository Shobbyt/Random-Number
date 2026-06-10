const generateBtn = document.getElementById('generateBtn');
generateBtn.addEventListener('click', function() {
    const randomNumber = Math.round(Math.random() * 100);
    document.getElementById('output').textContent = randomNumber;


    if (randomNumber === 100) {
        alert("Congratulations! You won a jackpot");
    }
});