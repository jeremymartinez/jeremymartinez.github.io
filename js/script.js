// Swup Scroll and Preload Plugin Options

const options = {
    plugins: [
        new SwupScrollPlugin({
            doScrollingRightAway: false,
            animateScroll: false,
            scrollFriction: 0.3,
            scrollAcceleration: 0.04,
        }),
        new SwupPreloadPlugin(),
        new SwupProgressPlugin({
            className: 'swup-progress-bar',
            transition: 300,
            delay: 1000
        })
    ],
 };

// Initialize Swup with Options

const swup = new Swup(options);

// Preloader
/*
const preloader = document.querySelector('.preloader');
const fadeEffect = setInterval(() => {
    if (!preloader.style.opacity) {
      preloader.style.opacity = 1;
    }
    if (preloader.style.opacity > 0) {
      preloader.style.opacity -= 0.1;
    } else {
      clearInterval(fadeEffect);
      preloader.style.display="none";
    }
  }, 100);
  window.addEventListener('load', fadeEffect);
  */