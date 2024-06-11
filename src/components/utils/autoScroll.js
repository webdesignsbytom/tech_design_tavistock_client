let fps = 60; // Increase fps for smoother animation
let speedFactor = 0.002; // Adjust speed factor for smoother scrolling
let minDelta = 0.1; // Lower minDelta for finer adjustments
let autoScrollSpeed = 10;
let autoScrollTimer, restartTimer;
let isScrolling = false;
let prevPos = 0, currentPos = 0;
let currentTime, prevTime, timeDiff;

function setAutoScroll(element, newValue) {
    autoScrollSpeed = newValue ? (speedFactor * newValue) : autoScrollSpeed;
    if (autoScrollTimer) {
        clearInterval(autoScrollTimer);
    }
    autoScrollTimer = setInterval(function () {
        currentTime = Date.now();
        if (prevTime) {
            if (!isScrolling) {
                timeDiff = currentTime - prevTime;
                currentPos += autoScrollSpeed * timeDiff;
                if (Math.abs(currentPos - prevPos) >= minDelta) {
                    isScrolling = true;
                    element.scrollTo({
                        top: currentPos,
                        behavior: 'smooth' // Use smooth scroll behavior
                    });
                    isScrolling = false;
                    prevPos = currentPos;
                    prevTime = currentTime;
                }
            }
        } else {
            prevTime = currentTime;
        }
    }, 1000 / fps);
}

export { setAutoScroll };
