document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById('js-test').innerText = "This was changed by js"
  }, 3000);
})