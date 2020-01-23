document.getElementById('beep').addEventListener('click', function () {
    PlaySound();
});

function PlaySound() {
    let sound = document.getElementById("boing");
    sound.play();
}