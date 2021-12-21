const video = document.getElementById("v0");

video.defaultPlaybackRate = 0.5;
video.load();
console.log("primero");

window.addEventListener("scroll", () => {
  video.playbackRate = 2;
  console.log("scrolling");
});
