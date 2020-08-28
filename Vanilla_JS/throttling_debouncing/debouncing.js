/*
 * Debouncing
 */

let debounceTimer;
document.querySelector("#debouncing").addEventListener("input", e => {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    console.log("Debounce");
  }, 200);
});
