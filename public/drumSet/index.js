window.onload = function () {
  const drums = document.querySelectorAll(".drum");

  drums.forEach(function (drum) {
    drum.addEventListener("click", function () {
      console.log(`${drum.textContent} button was clicked!`);
      playSound(drum);
    });
  });

  document.addEventListener("keydown", function (event) {
    drums.forEach(function (drum) {
      if (event.key.toLowerCase() === drum.textContent.toLowerCase()) {
        console.log(`${drum.textContent} key was pressed!`);
        playSound(drum);
      }
    });
  });

  function playSound(button) {
    const sound = button.getAttribute("data-sound");
    const audio = new Audio(sound);
    audio.play();
    return audio;
  }
};
