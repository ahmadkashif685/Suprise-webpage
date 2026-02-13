const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const heartsContainer = document.getElementById("hearts");
const music = document.getElementById("music");

let yesScale = 1;
let noClicks = 0;

// Start music on first click (required by browser autoplay rules)
document.body.addEventListener('click', () => {
    music.play();
}, { once: true });
playMusic.addEventListener("click", () => {
    music.play();
    playMusic.style.display = "none"; // hide the button after click
});
// NO button behavior
noButton.addEventListener("mousemove", () => {
    // Makes NO button avoid the cursor
    noButton.style.position = "absolute";
    noButton.style.left = Math.random() * 70 + "%";
    noButton.style.top = Math.random() * 70 + "%";
});

noButton.addEventListener("click", () => {
    // Grow YES button
    yesScale += 0.2;
    yesButton.style.transform = `scale(${yesScale})`;

    createHeart();
});

// YES button behavior
yesButton.addEventListener("click", () => {
    document.body.innerHTML = `
        <div style="text-align:center; margin-top:50px;">
            <h1>YAYAYAY You said YES HEHE</h1>
            <p>Honored to be your valentine baby😝</p>
            <img src="kissi.gif" width="400"/>
        </div>
    `;
});

// Function to create floating hearts
function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "💖";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
}
