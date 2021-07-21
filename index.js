Reveal.initialize({
  controls: false,
  touch: false
});

const buttonLeft = document.getElementById("navigate-left");
const buttonRight = document.getElementById("navigate-right");
const buttonUp = document.getElementById("navigate-up");
const buttonDown = document.getElementById("navigate-down");

const rightArrow = document.getElementById("right-arrow");
const leftArrow = document.getElementById("left-arrow");
const upArrow = document.getElementById("up-arrow");
const downArrow = document.getElementById("down-arrow");

Reveal.addEventListener("slidechanged", function (evt) {
  const { up, down, left, right } = Reveal.availableRoutes();

  const currentSlide = Reveal.getCurrentSlide();
  const { h, v, f } = Reveal.getIndices((slide = currentSlide));

  // Down
  if (down) {
    rightArrow.setAttribute(
      "src",
      "https://deboxconsulting.github.io/marketing-portfolio/images/Arrow_Black.png"
    );
    // if (
    //   (h === 7 && v === 0) ||
    //   (h === 8 && v === 0) ||
    //   (h === 11 && v === 0) ||
    //   (h === 12 && v === 0)
    // ) {
    //   downArrow.setAttribute(
    //     "src",
    //     "https://deboxconsulting.github.io/marketing-portfolio/images/White_Arrow.gif"
    //   );
    // } else {
    //   downArrow.setAttribute(
    //     "src",
    //     "https://deboxconsulting.github.io/marketing-portfolio/images/Arrow_Red.gif"
    //   );
    // }
    buttonDown.style.opacity = 1;
  } else {
    buttonDown.style.opacity = 0;
  }

  // Up And Not Down
  if (up && !down) {
    rightArrow.setAttribute(
      "src",
      "https://deboxconsulting.github.io/marketing-portfolio/images/Arrow_Red.gif"
    );
  }

  // Not Up And Not Down
  if (!up && !down) {
    rightArrow.setAttribute(
      "src",
      "https://deboxconsulting.github.io/marketing-portfolio/images/Arrow_Red.gif"
    );
  }

  // Up
  if (up) {
    buttonUp.style.opacity = 1;
  } else {
    buttonUp.style.opacity = 0;
  }

  // Left
  if (left) {
    buttonLeft.style.opacity = 1;
  } else {
    buttonLeft.style.opacity = 0;
  }

  // Right
  if (right) {
    buttonRight.style.opacity = 1;
  } else {
    buttonRight.style.opacity = 0;
  }
});

const handleLeft = (e) => {
  e.preventDefault();
  const indices = Reveal.getIndices()["h"];
  if (indices === 2 || indices === 6 || indices === 5) {
    Reveal.left();
  } else {
    Reveal.slide(indices - 1, 0, 0);
  }
};
const handleRight = (e) => {
  e.preventDefault();
  const indices = Reveal.getIndices()["h"];
  if (
    indices + 1 === 2 ||
    indices + 1 === 3 ||
    indices + 1 === 5 ||
    indices + 1 === 6
  ) {
    Reveal.right();
  } else {
    Reveal.slide(indices + 1, 0, 0);
  }
};
const handleUp = (e) => {
  e.preventDefault();
  Reveal.up();
};
const handleDown = (e) => {
  e.preventDefault();
  Reveal.down();
};

buttonLeft.addEventListener("click", handleLeft);
buttonRight.addEventListener("click", handleRight);
buttonUp.addEventListener("click", handleUp);
buttonDown.addEventListener("click", handleDown);

// Media Query
const smallDevice = window.matchMedia("screen and (max-width: 600px)");

smallDevice.addListener(handleDeviceChange);

function handleDeviceChange(e) {
  const rotateSlide = document.getElementById("s0");

  if (e.matches) {
    // add rotate slide
    rotateSlide.setAttribute("data-visibility", "visible");
  } else {
    // Remove rotate slide
    rotateSlide.setAttribute("data-visibility", "hidden");
  }
}

// Run it initially
handleDeviceChange(smallDevice);
