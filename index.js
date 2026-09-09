const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {

    const hero = document.querySelector(".hero");

    hero.classList.add("fade-out");

    setTimeout(() => {

        document.querySelector("#inicio").scrollIntoView({
            behavior: "smooth"
        });

    }, 700);

});

const startDate = new Date("2010-11-18T00:00:00");

function updateCounter() {
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();

    const anniversary = new Date(
        now.getFullYear(),
        startDate.getMonth(),
        startDate.getDate()
    );

    if (now < anniversary) {
        years--;
    }

    const lastAnniversary = new Date(
        now.getFullYear() - (now < anniversary ? 1 : 0),
        startDate.getMonth(),
        startDate.getDate()
    );

    const difference = now - lastAnniversary;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );
    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );
    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("years").textContent = years;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateCounter();
setInterval(updateCounter, 1000);

const playButton = document.getElementById("playButton");
const audioPlayer = document.getElementById("audioPlayer");

playButton.addEventListener("click", () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.textContent = "Ⅱ";
    } else {
        audioPlayer.pause();
        playButton.textContent = "▶";
    }
});

// =========================
// BOTÕES "CONTINUE"
// =========================

const continueButtons = document.querySelectorAll(".continue");

continueButtons.forEach((button) => {

    button.style.cursor = "pointer";

    button.addEventListener("click", () => {

        const currentSection = button.closest("section");
        const nextSection = currentSection.nextElementSibling;

        if (nextSection) {
            nextSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});