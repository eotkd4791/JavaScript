/*
 * throttling
 */

let throttleTimer;
document.querySelector("#throttling").addEventListener("input", e => {
  if (!throttleTimer) {
    throttleTimer = setTimeout(() => {
      throttleTimer = null;
      console.log("Throttle");
    }, 1000);
  }
});
