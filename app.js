const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const media = document.querySelector("#media");
const mediaSource = document.querySelector("#media-source");
const text = document.querySelector("#text");
const bgVideo = document.querySelector("#bg-video");
let noCount = 0;
const yesAudio = new Audio("careless.mp3");
yesAudio.preload = "auto";

const videos = {
  initial: "stitch.mp4",
  yes: "happy.mp4"
};

const setMedia = (src) => {
  if (!media) return;
  const currentSrc = mediaSource ? mediaSource.getAttribute("src") : media.getAttribute("src");
  if (currentSrc === src) {
    const playPromise = media.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }
    return;
  }

  if (mediaSource) {
    mediaSource.setAttribute("src", src);
  } else {
    media.setAttribute("src", src);
  }
  media.load();
  const playPromise = media.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {});
  }
};

const noVideos = ["angry.mp4", "angryyy.mp4", "sad.mp4", "angry.mp4", "sad.mp4"];
const noTexts = ["what", "you CANT do that", "PLEASE", "janu :(", "janu :("];

[...Object.values(videos), ...noVideos].forEach(videoSrc => {
  const vid = document.createElement("video");
  vid.src = videoSrc;
  vid.preload = "auto";
});


setMedia(videos.initial);

no.addEventListener("click", () => {
  const idx = Math.min(noCount, noVideos.length - 1);
  setMedia(noVideos[idx]);
  text.innerHTML = noTexts[idx] || noTexts[noTexts.length - 1];

  if (noCount === 0) {
    yes.style.height = "65%";
    yes.style.width = "60%";
    no.style.width = "30%";
    noCount++;
  } else if (noCount === 1) {
    yes.style.height = "70%";
    yes.style.width = "70%";
    no.style.width = "20%";
    noCount++;
  } else if (noCount === 2) {
    yes.style.height = "80%";
    yes.style.width = "80%";
    no.style.fontSize = "4vh";
    no.style.width = "10%";
    noCount++;
  } else if (noCount === 3) {
    yes.style.height = "90%";
    yes.style.width = "96%";
    noCount++;
  } else if (noCount >= 4) {
    yes.style.height = "90%";
    yes.style.width = "96%";
    no.style.display = "none";
  }
});


yes.addEventListener("click", () => {
  yesAudio.currentTime = 0;
  const audioPlay = yesAudio.play();
  if (audioPlay && typeof audioPlay.catch === "function") {
    audioPlay.catch(() => {});
  }
  if (bgVideo) {
    bgVideo.style.display = "block";
  }
  setMedia(videos.yes);
  text.innerHTML = "hehe i lub you <3";
  yes.innerHTML = '<a href="https://www.instagram.com/yumnazfr">text me ;)</a>';
  yes.style.height = "90%";
  yes.style.width = "96%";
  no.style.display = "none";
  setTimeout(() => {
    if (bgVideo) {
      bgVideo.style.display = "none";
    }
  }, 9000);
});
