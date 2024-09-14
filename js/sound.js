const beginningAudioElem = document.querySelector("#beginning");
const backsoundAudioElem = document.querySelector("#backsound");
const eatGhostAudioElem = document.querySelector("#eatghostsound");
const loseAudioElem = document.querySelector("#losesound");
const winAudioElem = document.querySelector("#winsound");
const soundBtn = document.querySelector(".sound-btn");

let backsoundAudioPlaying = false;
let backsoundAudioStarted = false;
const VOLUME_MAX = 1.0;
const VOLUME_MIN = 0;
const BACKSOUND_VOLUME_MAX = .4;

backsoundAudioElem.loop = true;
backsoundAudioElem.volume = BACKSOUND_VOLUME_MAX;
loseAudioElem.volume = VOLUME_MAX;
winAudioElem.volume = VOLUME_MAX;
eatGhostAudioElem.volume = VOLUME_MAX;

soundBtn.addEventListener("click", e => {
    if (!backsoundAudioStarted) {
        backsoundAudioElem.play();
        soundBtn.innerHTML = "🔈";
        backsoundAudioStarted = true;

        e.target.blur();
        return;
    }

    if (backsoundAudioPlaying) {
        backsoundAudioElem.volume = VOLUME_MIN;
        soundBtn.innerHTML = "🔊";
    } else {
        backsoundAudioElem.volume = BACKSOUND_VOLUME_MAX;
        soundBtn.innerHTML = "🔈";
    }
    backsoundAudioPlaying = !backsoundAudioPlaying;
    e.target.blur();
});

setTimeout(() => {
    document.querySelector(".option-container").classList.add("show");
}, 2000);

async function toggleBacksoundAudio() {
    if (!backsoundAudioStarted) return;

    return new Promise((_, __) => {
        if (backsoundAudioPlaying) {
            backsoundAudioElem.volume = VOLUME_MIN;
            soundBtn.innerHTML = "🔊";
        } else {
            backsoundAudioElem.volume = BACKSOUND_VOLUME_MAX;
            soundBtn.innerHTML = "🔈";
        }
        backsoundAudioPlaying = !backsoundAudioPlaying;
        _();
    });
}


async function playGameOverSound() {
    return new Promise((_, __) => {
        loseAudioElem.play();
        _();
    });
}

async function playWinSound() {
    return new Promise((_, __) => {
        winAudioElem.play();
        _();
    });
}

async function playEatGhostSound() {
    return new Promise((_, __) => {
        eatGhostAudioElem.play();
        _();
    });
}