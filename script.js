const music = document.getElementById("bgMusic");
let started = false;

document.addEventListener("click", () => {
    if (!started) {
        music.play();
        started = true;
    }
});

function createHearts() {
    const wrapper = document.querySelector(".image2-wrapper");

    for (let i = 0; i < 12; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 80 + "%";
        heart.style.top = "70%";

        wrapper.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}