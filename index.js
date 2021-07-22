Reveal.initialize({
  controls: false,
  touch: false,
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

// Video 1
Reveal.addEventListener("vid1", function (evt) {
  const videos = document.getElementsByTagName("video");
  videos.forEach((video) => {
    if (video.muted) {
      video.muted = false;
    }
  });
});

// Video 2
Reveal.addEventListener("vid2", function (evt) {
  const videos = document.getElementsByTagName("video");
  videos.forEach((video) => {
    if (video.muted) {
      video.muted = false;
    }
  });
});

// Video 3
Reveal.addEventListener("vid3", function (evt) {
  const videos = document.getElementsByTagName("video");
  videos.forEach((video) => {
    if (video.muted) {
      video.muted = false;
    }
  });
});

// Video 4
Reveal.addEventListener("vid4", function (evt) {
  const videos = document.getElementsByTagName("video");
  videos.forEach((video) => {
    if (video.muted) {
      video.muted = false;
    }
  });
});

// Video 5
Reveal.addEventListener("vid5", function (evt) {
  const videos = document.getElementsByTagName("video");
  videos.forEach((video) => {
    if (video.muted) {
      video.muted = false;
    }
  });
});

const handleLeft = (e) => {
  e.preventDefault();
  const indices = Reveal.getIndices()["h"];
  if (indices === 3 || indices === 7 || indices === 6) {
    Reveal.left();
  } else {
    Reveal.slide(indices - 1, 0, 0);
  }
};
const handleRight = (e) => {
  e.preventDefault();
  const indices = Reveal.getIndices()["h"];
  if (indices === 2 || indices === 3 || indices === 5 || indices === 6) {
    Reveal.next();
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
